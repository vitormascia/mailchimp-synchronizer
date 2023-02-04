import { IBuildUpdateAudience, IUpdateAudienceRequestBody, IUpdateAudienceResponse } from "../../ts/index.js";
declare function buildUpdateAudience({ caseConverter, mailchimpClient, }: IBuildUpdateAudience): (audienceId: string, audience: IUpdateAudienceRequestBody) => Promise<IUpdateAudienceResponse>;
export default buildUpdateAudience;
