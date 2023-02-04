import { IPingMailchimpRequest, IPingMailchimpResponse, IPingRequest, IPingResponse } from "../ts/index.js";
declare const _default: Readonly<{
    ping: (_httpRequest: IPingRequest) => IPingResponse;
    pingMailchimp: (_httpRequest: IPingMailchimpRequest) => Promise<IPingMailchimpResponse>;
}>;
export default _default;
