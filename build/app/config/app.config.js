import "dotenv/config";
const EMPTY_STRING = "";
const DEFAULT_APP_PORT = "3000";
function setConfig(value, defaultValue = EMPTY_STRING) {
    return value ? value : defaultValue;
}
const config = Object.freeze({
    APP: {
        PORT: parseInt(setConfig(process.env.PORT, DEFAULT_APP_PORT)),
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
//# sourceMappingURL=app.config.js.map