class Environment {
  private static instance: Environment;

  //-------------------------------------------------------------------------
  static getInstance(): Environment {
    if (!this.instance) {
      this.instance = new Environment();
    }
    return this.instance;
  }

  //-------------------------------------------------------------------------
  get(key: string, defaultValue?: unknown) {
    return import.meta.env[key] ?? defaultValue;
  }
}

export const environment = Environment.getInstance();

export const BASE_URL = environment.get('VITE_BASE_URL');
