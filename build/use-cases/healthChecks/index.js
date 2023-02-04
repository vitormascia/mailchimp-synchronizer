import { mailchimpClient } from "../../clients/index.js";
import buildPing from "./use-cases.healthChecks.ping.js";
import buildPingMailchimp from "./use-cases.healthChecks.pingMailchimp.js";
const ping = buildPing();
const pingMailchimp = buildPingMailchimp({
    mailchimpClient,
});
const healthChecksService = Object.freeze({
    ping,
    pingMailchimp,
});
export default healthChecksService;
export { ping, pingMailchimp };
//# sourceMappingURL=index.js.map