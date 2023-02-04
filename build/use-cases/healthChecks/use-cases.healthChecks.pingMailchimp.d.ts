import { IBuildPingMailchimp, IPingMailchimpResponse } from "../../ts/index.js";
declare function buildPingMailchimp({ mailchimpClient, }: IBuildPingMailchimp): () => Promise<IPingMailchimpResponse>;
export default buildPingMailchimp;
