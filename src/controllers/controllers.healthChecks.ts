import { IPingMailchimpRequest, IPingMailchimpResponse, IPingRequest, IPingResponse } from "../ts/index.js";
import { healthChecksService } from "../use-cases/index.js";

export default Object.freeze({
    ping: (_httpRequest: IPingRequest): IPingResponse => healthChecksService.ping(),
    pingMailchimp: (_httpRequest: IPingMailchimpRequest): Promise<IPingMailchimpResponse> => healthChecksService.pingMailchimp(),
});
