import { StatusCodes } from "http-status-codes";

import { IPingRequest, IPingResponse } from "../../ts/index.js";

function buildPing() {
    return function ping(_request: IPingRequest): IPingResponse {
        return {
            statusCode: StatusCodes.OK,
            data: { ok: true },
        };
    };
}

export default buildPing;
