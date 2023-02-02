import "dotenv/config";

import { IConfig } from "../../ts/index.js";

const EMPTY_STRING = "";
const DEFAULT_APP_PORT = "3000";

function setConfig(value?: string, defaultValue: string = EMPTY_STRING): string {
  return value ? value : defaultValue;
}

const config: IConfig = {
  APP: {
    PORT: parseInt(setConfig(process.env.APP_PORT, DEFAULT_APP_PORT)),
    NAME: setConfig(process.env.APP_NAME),
    ENVIRONMENT: setConfig(process.env.NODE_ENV),
  },
  MAILCHIMP: {
    API_KEY: setConfig(process.env.MAILCHIMP_API_KEY),
    SERVER_PREFIX: setConfig(process.env.MAILCHIMP_SERVER_PREFIX),
    AUDIENCE_NAME: setConfig(process.env.MAILCHIMP_AUDIENCE_NAME),
  },
};

export default config;
