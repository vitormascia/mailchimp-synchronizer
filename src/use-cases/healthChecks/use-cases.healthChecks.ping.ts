import { StatusCodes } from "http-status-codes";

import { PingResponse } from "../../ts/index.js";

function buildPing() {
    return function ping(): PingResponse {
        return {
            statusCode: StatusCodes.OK,
            data: { ok: true },
        };
    };
}

export default buildPing;
