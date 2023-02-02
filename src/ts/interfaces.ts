import { ParamsDictionary, Query } from "express-serve-static-core";
import { IncomingHttpHeaders } from "http";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";

import { ISO3166CountryCode, Language } from "./enums.js";
import { TAnyObject, TEmptyObject, TModify } from "./types.js";

interface IMailchimp {
    API_KEY: string;
    SERVER_PREFIX: string;
    AUDIENCE_NAME: string;
}

interface IApp {
    PORT: number;
    NAME: string;
    ENVIRONMENT: string;
}

interface IConfig {
    APP: IApp;
    MAILCHIMP: IMailchimp;
}

interface ILogger<TLogger, TCreateReturn> {
    logger: TLogger;

    create(): TCreateReturn;
}

interface IJoiBaseSchema {
    body: Joi.ObjectSchema;
    path: Joi.ObjectSchema;
    query: Joi.ObjectSchema;
}

interface IValidatedRequest {
    body: any;
    path: ParamsDictionary;
    query: Query;
}

interface IHttpRequestSource {
    ip: string;
    userAgent?: string;
}

interface IHttpRequest {
    body: TAnyObject;
    path: ParamsDictionary;
    query: Query;
    method: string;
    endpoint: string;
    url: string;
    source: IHttpRequestSource;
    headers: IncomingHttpHeaders;
}

interface IHttpResponse {
    statusCode: StatusCodes;
    data: TAnyObject | TEmptyObject;
}

interface ICreateAudienceRequestBody {
    name: string;
    contact: {
        address1: string;
        address2?: string;
        country: ISO3166CountryCode;
        zip?: string;
        state?: string;
        city: string;
        phone?: string;
        company: string;
    };
    permissionReminder: string;
    campaignDefaults: {
        fromName: string;
        fromEmail: string;
        subject: string;
        language: Language;
    };
    emailTypeOption: boolean;
    useArchiveBar?: boolean;
    notifyOnSubscribe?: string;
    notifyOnUnsubscribe?: string;
    doubleOptin?: boolean;
    marketingPermissions?: boolean;
}

interface ICreateAudienceRequest extends TModify<IHttpRequest, {
    body: ICreateAudienceRequestBody;
}> { }

export { IConfig, ICreateAudienceRequest, IHttpRequest, IHttpResponse, IJoiBaseSchema, ILogger, IValidatedRequest };
