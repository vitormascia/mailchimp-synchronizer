import { StatusCodes } from "http-status-codes";

import { IPingResponse } from "../../ts/index.js";

function buildPing() {
    return function ping(): IPingResponse {
        return {
            statusCode: StatusCodes.OK,
            data: { ok: true },
        };
    };
}

export default buildPing;
