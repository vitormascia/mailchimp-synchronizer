import _mailchimpClient from "@mailchimp/mailchimp_marketing";
import { NextFunction, Request, Response } from "express";
import winston from "winston";

import { HttpRequest, HttpResponse, TrioContact } from "./interfaces.js";

type WinstonLogger = typeof winston;
type MailchimpClient = typeof _mailchimpClient;

type AnyObject = object;
type EmptyObject = Record<string, never>;
type Modify<T, R> = Omit<T, keyof R> & R;

type Bouncer = (req: Request, _res: Response, next: NextFunction) => Promise<void>;
type Controller = (httpRequest: HttpRequest) => Promise<HttpResponse> | HttpResponse;
type BuildCallback = (req: Request, res: Response, next: NextFunction) => Promise<void>;

type Contact = Omit<TrioContact, "createdAt" | "avatar" | "id">;

export {
    AnyObject,
    Bouncer,
    BuildCallback,
    Contact,
    Controller,
    EmptyObject,
    MailchimpClient,
    Modify,
    WinstonLogger,
};
