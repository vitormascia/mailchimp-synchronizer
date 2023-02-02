import { NextFunction, Request, Response } from "express";

import { TBuildCallback, TController } from "../ts/index.js";

function buildCallback(controller: TController): TBuildCallback {
  return async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const httpRequest = {
        body: req.body,
        path: req.params,
        query: req.query,
        method: req.method,
        endpoint: req.path,
        url: req.url,
        source: {
          ip: req.ip,
          userAgent: req.get("User-Agent"),
        },
        headers: req.headers,
      };

      const httpResponse = await controller(httpRequest);
      res.status(httpResponse.statusCode).json(httpResponse.data);
    } catch (error: any) {
      next(error);
    }
  };
}

export default buildCallback;
