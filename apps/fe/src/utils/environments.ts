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
  get(key: string, defaultValue?: unknown): string {
    return import.meta.env[key] ?? defaultValue;
  }
}

export const environment = Environment.getInstance();
