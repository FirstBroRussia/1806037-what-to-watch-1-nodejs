import convict from "convict";
export declare type ConfigSchema = {
    PORT: number;
    SALT: string;
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_PORT: number;
    DB_NAME: string;
};
export declare const configSchema: convict.Config<ConfigSchema>;
