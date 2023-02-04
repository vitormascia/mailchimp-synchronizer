declare const updateAudience: (audienceId: string, audience: import("../../ts/interfaces.js").IUpdateAudienceRequestBody) => Promise<import("../../ts/interfaces.js").IUpdateAudienceResponse>;
declare const audiencesService: Readonly<{
    updateAudience: (audienceId: string, audience: import("../../ts/interfaces.js").IUpdateAudienceRequestBody) => Promise<import("../../ts/interfaces.js").IUpdateAudienceResponse>;
}>;
export default audiencesService;
export { updateAudience };
