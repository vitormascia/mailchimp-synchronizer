import { NextFunction, Request, Response } from "express";
import winston from "winston";

import { ICreateAudienceRequest, IHttpRequest, IHttpResponse } from "./interfaces.js";

type TWinstonLogger = typeof winston;

type TAnyObject = Record<string, unknown>;
type TEmptyObject = Record<string, never>;
type TModify<T, R> = Omit<T, keyof R> & R;

type TBouncer = (req: Request, _res: Response, next: NextFunction) => Promise<void>;
type TAnyRequest = IHttpRequest & ICreateAudienceRequest;
type TController = (httpRequest: TAnyRequest) => Promise<IHttpResponse>;
type TBuildCallback = (req: Request, res: Response, next: NextFunction) => Promise<void>;

export { TAnyObject, TBouncer, TBuildCallback, TController, TEmptyObject, TModify, TWinstonLogger };
