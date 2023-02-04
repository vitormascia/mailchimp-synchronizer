import { ParamsDictionary, Query } from "express-serve-static-core";
import { IncomingHttpHeaders } from "http";
import { StatusCodes } from "http-status-codes";
import Joi from "joi";

import { MailchimpClient, TrioClient } from "../clients/index.js";
import { HttpMethod, ISO3166CountryCode, Language, Visibility } from "./enums.js";
import { TAnyObject, TContact, TEmptyObject, TModify } from "./types.js";

interface IConfig {
    APP: {
        PORT: number;
        NAME: string;
        ENVIRONMENT: string;
    }
    MAILCHIMP: {
        SERVER_PREFIX: string;
        AUDIENCE_ID: string;
        API: {
            KEY: string;
        }
    }
    TRIO: {
        API: {
            BASE_URL: string;
        }
    }
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

interface IRequestParams {
    body: any;
    path: ParamsDictionary;
    query: Query;
}

interface IHttpRequest extends IRequestParams {
    method: string;
    url: {
        protocol: string;
        host: string;
        endpoint: string;
    };
    source: {
        ip: string;
        userAgent: string;
    };
    headers: IncomingHttpHeaders;
}

interface IHttpResponse {
    statusCode: StatusCodes;
    data: TAnyObject | TEmptyObject;
}

interface IPingRequest extends TModify<IHttpRequest, {
    body: TEmptyObject;
}> { }

interface IPingResponse extends TModify<IHttpResponse, {
    data: { ok: true },
}> { }

interface IPingMailchimpRequest extends TModify<IHttpRequest, {
    body: TEmptyObject;
}> { }

interface IMailchimpHealthCheck {
    healthStatus: string;
}

interface IPingMailchimpResponse extends TModify<IHttpResponse, {
    data: {
        mailchimpHealthCheck: IMailchimpHealthCheck
    },
}> { }

interface ISyncContactsRequest extends TModify<IHttpRequest, {
    body: TEmptyObject;
}> { }

interface ISyncContactsResponse extends TModify<IHttpResponse, {
    data: {
        syncedContacts: number;
        contacts: TContact[];
    },
}> { }

interface IUpdateAudienceRequestPath {
    [audienceId: string]: string;
}

interface IUpdateAudienceRequestBody {
    name: string;
    contact: {
        address1: string;
        address2?: string;
        country: ISO3166CountryCode;
        zip: string;
        state: string;
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

interface IUpdateAudienceRequest extends TModify<IHttpRequest, {
    body: IUpdateAudienceRequestBody;
    path: IUpdateAudienceRequestPath;
}> { }

interface IUpdatedAudience {
    id: string;
    webId: number;
    name: string;
    contact: {
        company: string;
        address1: string;
        address2: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        phone: string;
    },
    permissionReminder: string;
    useArchiveBar: false,
    campaignDefaults: {
        fromName: string;
        fromEmail: string;
        subject: string;
        language: string;
    },
    notifyOnSubscribe: false,
    notifyOnUnsubscribe: false,
    dateCreated: string;
    listRating: number;
    emailTypeOption: true,
    subscribeUrlShort: string;
    subscribeUrlLong: string;
    beamerAddress: string;
    visibility: Visibility;
    doubleOptin: false,
    hasWelcome: false,
    marketingPermissions: false,
    modules: string[];
    stats: {
        memberCount: number;
        totalContacts: number;
        unsubscribeCount: number;
        cleanedCount: number;
        memberCountSinceSend: number;
        unsubscribeCountSinceSend: number;
        cleanedCountSinceSend: number;
        campaignCount: number;
        campaignLastSent: string;
        mergeFieldCount: number;
        avgSubRate: number;
        avgUnsubRate: number;
        targetSubRate: number;
        openRate: number;
        clickRate: number;
        lastSubDate: string;
        lastUnsubDate: string;
    },
    _links: {
        rel: string;
        href: string;
        method: HttpMethod;
        targetSchema?: string;
        schema?: string;
    }[],
}

interface IUpdateAudienceResponse extends TModify<IHttpResponse, {
    data: {
        updatedAudience: IUpdatedAudience
    }
}> { }

interface IClient<TConfig, TClient> {
    config: TConfig;
    client: TClient;
}

interface ITrioContact {
    createdAt: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    id: string;
}

interface IBuildPingMailchimp {
    mailchimpClient: MailchimpClient;
}

interface IBuildSyncContacts {
    trioClient: TrioClient;
    mailchimpClient: MailchimpClient;
}

interface IBuildUpdateAudience {
    mailchimpClient: MailchimpClient;
}

export {
    IBuildPingMailchimp,
    IBuildSyncContacts,
    IBuildUpdateAudience,
    IClient,
    IConfig,
    IHttpRequest,
    IHttpResponse,
    IJoiBaseSchema,
    ILogger,
    IMailchimpHealthCheck,
    IPingMailchimpRequest,
    IPingMailchimpResponse,
    IPingRequest,
    IPingResponse,
    IRequestParams,
    ISyncContactsRequest,
    ISyncContactsResponse,
    ITrioContact,
    IUpdateAudienceRequest,
    IUpdateAudienceRequestBody,
    IUpdateAudienceRequestPath,
    IUpdateAudienceResponse,
    IUpdatedAudience,
};
