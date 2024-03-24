import { DatabaseConfig } from './database';

export type AppConfig = {
  nodeEnv: string;
  name: string;
  workingDirectory: string;
  frontendDomain?: string;
  backendDomain: string;
  port: number;
  apiPrefix: string;
  fallbackLanguage: string;
  headerLanguage: string;
};

export type AllConfigType = {
  app: AppConfig;
  database: DatabaseConfig;
};
