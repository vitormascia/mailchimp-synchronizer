import { mailchimpClient } from "../../clients/index.js";
import buildUpdateAudience from "./use-cases.audiences.updateAudience.js";
const updateAudience = buildUpdateAudience({
    mailchimpClient,
});
const audiencesService = Object.freeze({
    updateAudience,
});
export default audiencesService;
export { updateAudience };
//# sourceMappingURL=index.js.map