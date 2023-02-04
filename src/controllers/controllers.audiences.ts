import { IUpdateAudienceRequest, IUpdateAudienceResponse } from "../ts/index.js";
import { audiencesService } from "../use-cases/index.js";

export default Object.freeze({
    updateAudience: (httpRequest: IUpdateAudienceRequest): Promise<IUpdateAudienceResponse> => {
        const { audienceId } = httpRequest.path;
        const audience = httpRequest.body;

        return audiencesService.updateAudience(audienceId, audience);
    },
});
