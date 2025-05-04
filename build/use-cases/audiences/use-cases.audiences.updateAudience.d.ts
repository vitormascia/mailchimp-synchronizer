import { BuildUpdateAudience, UpdateAudienceRequestBody, UpdateAudienceResponse } from "../../ts/index.js";
declare function buildUpdateAudience({ caseConverter, mailchimpClient, }: BuildUpdateAudience): (audienceId: string, audience: UpdateAudienceRequestBody) => Promise<UpdateAudienceResponse>;
export default buildUpdateAudience;
