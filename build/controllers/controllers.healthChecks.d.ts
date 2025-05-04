import { PingMailchimpRequest, PingMailchimpResponse, PingRequest, PingResponse } from "../ts/index.js";
declare const _default: Readonly<{
    ping: (_httpRequest: PingRequest) => PingResponse;
    pingMailchimp: (_httpRequest: PingMailchimpRequest) => Promise<PingMailchimpResponse>;
}>;
export default _default;
