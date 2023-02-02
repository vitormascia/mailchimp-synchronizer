import { StatusCodes } from "http-status-codes";

import { IHttpRequest, IHttpResponse } from "../../ts/index.js";

function buildSyncContacts() {
  // eslint-disable-next-line @typescript-eslint/require-await
  return async function syncContacts(request: IHttpRequest): Promise<IHttpResponse> {
    return {
      statusCode: StatusCodes.CREATED,
      data: { request },
    };
  };
}

export default buildSyncContacts;
