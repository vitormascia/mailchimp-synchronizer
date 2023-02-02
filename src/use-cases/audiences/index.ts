import buildCreateAudience from "./use-cases.audiences.createAudience.js";

const createAudience = buildCreateAudience();

const audiencesService = Object.freeze({
  createAudience,
});

export default audiencesService;
export { createAudience };
