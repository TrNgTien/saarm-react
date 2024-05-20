import { EMethods, EnvironmentVariables } from '@/common';
import { environment } from '@/utils';

interface IRequestOptions {
  baseUrl?: string;
  path: string;
  method: keyof typeof EMethods;
  body?: unknown;
  headers?: Record<string, string>;
  configs?: Record<string, unknown>;
}

export class NetworkService {
  private static instance: NetworkService;

  static getInstance(): NetworkService {
    if (!this.instance) {
      this.instance = new NetworkService();
    }

    return this.instance;
  }

  getRequestUrl(opts: { baseUrl?: string; path?: string }) {
    const urlPath = opts?.path ?? '';

    const BASE_URL = environment.get(EnvironmentVariables.APP_BASE_URL);

    return [opts?.baseUrl ?? BASE_URL, urlPath].join('/');
  }

  async send(opts: IRequestOptions) {
    const token = localStorage.getItem('token');
    try {
      const t = performance.now();

      const {
        baseUrl,
        path,
        method,
        // params = {},
        body: data,
        headers = {
          Authorization: token ? `Bearer ${token}` : '',
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        configs,
      } = opts;
      const requestUrl = this.getRequestUrl({ baseUrl, path });
      const props: RequestInit = {
        method,
        body: JSON.stringify(data),
        headers,
        // paramsSerializer: { serialize: (p) => stringify(p) },
        ...configs,
      };

      const response = await fetch(requestUrl, props);
      const result = await response.json();

      const milliSecs = performance.now() - t;
      console.log(`[send] Response | Took: ${milliSecs / 1_000}(s)`);

      return result;
    } catch (e) {
      throw Error(`${e}`);
    }
  }
  async get(opts: IRequestOptions) {
    try {
      const { configs, ...rest } = opts;
      return await this.send({
        ...rest,
        method: EMethods.GET,
        configs,
      });
    } catch (e) {
      console.error('[NetworkService][get] | %s', e);
    }
  }

  async post(opts: IRequestOptions) {
    try {
      const { configs, ...rest } = opts;
      return await this.send({
        ...rest,
        method: EMethods.POST,
        configs,
      });
    } catch (e) {
      console.error('[NetworkService][post] | %s', e);
    }
  }

  async put(opts: IRequestOptions) {
    try {
      const { configs, ...rest } = opts;
      return await this.send({
        ...rest,
        method: EMethods.PUT,
        configs,
      });
    } catch (e) {
      console.error('[NetworkService][put] | %s', e);
    }
  }

  async patch(opts: IRequestOptions) {
    try {
      const { configs, ...rest } = opts;
      return await this.send({
        ...rest,
        method: EMethods.PATCH,
        configs,
      });
    } catch (e) {
      console.error('[NetworkService][patch] | %s', e);
    }
  }

  async delete(opts: IRequestOptions) {
    const { configs, ...rest } = opts;
    return await this.send({
      ...rest,
      method: EMethods.DELETE,
      configs,
    });
  }
}
export const networkInstance = NetworkService.getInstance();
