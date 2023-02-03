import { IUpdateListRequest } from "@mailchimp/mailchimp_marketing";
import { StatusCodes } from "http-status-codes";

import { caseConverter } from "../../helpers/index.js";
import { IBuildUpdateAudience, IUpdateAudienceRequest, IUpdateAudienceResponse, IUpdatedAudience } from "../../ts/index.js";

function buildUpdateAudience({
    mailchimpClient,
}: IBuildUpdateAudience) {
    return async function updateAudience({ body, path }: IUpdateAudienceRequest): Promise<IUpdateAudienceResponse> {
        const mailchimpRequest = caseConverter.toSnakeCase<IUpdateListRequest>(body);

        const _updatedAudience = await mailchimpClient.updateAudience(path.audienceId, mailchimpRequest);

        const updatedAudience = caseConverter.toCamelCase<IUpdatedAudience>(_updatedAudience);

        return {
            statusCode: StatusCodes.OK,
            data: { updatedAudience },
        };
    };
}

export default buildUpdateAudience;
