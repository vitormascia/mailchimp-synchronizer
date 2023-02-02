import { StatusCodes } from "http-status-codes";

import { ICreateAudienceRequest, IHttpResponse } from "../../ts/index.js";

function buildCreateAudience() {
  // eslint-disable-next-line @typescript-eslint/require-await
  return async function createAudience({ body }: ICreateAudienceRequest): Promise<IHttpResponse> {
    return {
      statusCode: StatusCodes.CREATED,
      data: { body },
    };
  };
}

export default buildCreateAudience;
