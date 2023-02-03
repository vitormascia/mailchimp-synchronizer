import { IPingMailchimpRequest, IPingRequest } from "../ts/index.js";
import { healthChecksService } from "../use-cases/index.js";

export default Object.freeze({
    ping: (httpRequest: IPingRequest) => healthChecksService.ping(httpRequest),
    pingMailchimp: (httpRequest: IPingMailchimpRequest) => healthChecksService.pingMailchimp(httpRequest),
});
