import Boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";
declare function errorHandler(error: Error | Boom.Boom, _req: Request, res: Response, next: NextFunction): Response;
export default errorHandler;
