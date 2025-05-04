import { PingMailchimpRequest, PingMailchimpResponse, PingRequest, PingResponse } from "../ts/index.js";
import { healthChecksService } from "../use-cases/index.js";

export default Object.freeze({
    ping: (_httpRequest: PingRequest): PingResponse => healthChecksService.ping(),
    pingMailchimp: (_httpRequest: PingMailchimpRequest): Promise<PingMailchimpResponse> => healthChecksService.pingMailchimp(),
});
