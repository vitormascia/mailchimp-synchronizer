import { IUpdateAudienceRequest } from "../ts/index.js";
import { audiencesService } from "../use-cases/index.js";

export default Object.freeze({
    updateAudience: (httpRequest: IUpdateAudienceRequest) => audiencesService.updateAudience(httpRequest),
});
