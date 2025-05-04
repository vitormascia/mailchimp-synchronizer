import { BuildPingMailchimp, PingMailchimpResponse } from "../../ts/index.js";
declare function buildPingMailchimp({ mailchimpClient, }: BuildPingMailchimp): () => Promise<PingMailchimpResponse>;
export default buildPingMailchimp;
