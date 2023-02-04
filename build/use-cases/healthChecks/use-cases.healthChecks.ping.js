import { StatusCodes } from "http-status-codes";
function buildPing() {
    return function ping() {
        return {
            statusCode: StatusCodes.OK,
            data: { ok: true },
        };
    };
}
export default buildPing;
//# sourceMappingURL=use-cases.healthChecks.ping.js.map