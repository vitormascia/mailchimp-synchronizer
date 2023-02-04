import "dotenv/config";

import { IConfig } from "../../ts/index.js";

const EMPTY_STRING = "";
const DEFAULT_APP_PORT = "3000";

function setConfig(value?: string, defaultValue: string = EMPTY_STRING): string {
    return value ? value : defaultValue;
}

const config: IConfig = Object.freeze({
    APP: {
        PORT: parseInt(setConfig(process.env.APP_PORT, DEFAULT_APP_PORT)),
        NAME: setConfig(process.env.APP_NAME),
        ENVIRONMENT: setConfig(process.env.NODE_ENV),
    },
    MAILCHIMP: {
        SERVER_PREFIX: setConfig(process.env.MAILCHIMP_SERVER_PREFIX),
        AUDIENCE_ID: setConfig(process.env.MAILCHIMP_AUDIENCE_ID),
        API: {
            KEY: setConfig(process.env.MAILCHIMP_API_KEY),
        },
    },
    TRIO: {
        API: {
            BASE_URL: setConfig(process.env.TRIO_API_BASE_URL),
        },
    },
});

export default config;
