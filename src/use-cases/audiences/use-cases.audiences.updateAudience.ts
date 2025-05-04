import { IUpdateListRequest } from "@mailchimp/mailchimp_marketing";
import { StatusCodes } from "http-status-codes";

import { BuildUpdateAudience, UpdateAudienceRequestBody, UpdateAudienceResponse, UpdatedAudience } from "../../ts/index.js";

function buildUpdateAudience({
    caseConverter,
    mailchimpClient,
}: BuildUpdateAudience) {
    return async function updateAudience(audienceId: string, audience: UpdateAudienceRequestBody): Promise<UpdateAudienceResponse> {
        const mailchimpRequest = caseConverter.toSnakeCase<IUpdateListRequest>(audience as Record<string, any>);

        const _updatedAudience = await mailchimpClient.updateAudience(audienceId, mailchimpRequest);

        const updatedAudience = caseConverter.toCamelCase<UpdatedAudience>(_updatedAudience as Record<string, any>);

        return {
            statusCode: StatusCodes.OK,
            data: { updatedAudience },
        };
    };
}

export default buildUpdateAudience;
