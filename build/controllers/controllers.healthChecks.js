import { healthChecksService } from "../use-cases/index.js";
export default Object.freeze({
    ping: (_httpRequest) => healthChecksService.ping(),
    pingMailchimp: (_httpRequest) => healthChecksService.pingMailchimp(),
});
//# sourceMappingURL=controllers.healthChecks.js.map