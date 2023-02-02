import { ICreateAudienceRequest } from "../ts/index.js";
import { audiencesService } from "../use-cases/index.js";

export default Object.freeze({
  createAudience: (httpRequest: ICreateAudienceRequest) => audiencesService.createAudience(httpRequest),
});
