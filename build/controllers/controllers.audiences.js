import { audiencesService } from "../use-cases/index.js";
export default Object.freeze({
    updateAudience: (httpRequest) => {
        const { audienceId } = httpRequest.path;
        const audience = httpRequest.body;
        return audiencesService.updateAudience(audienceId, audience);
    },
});
//# sourceMappingURL=controllers.audiences.js.map