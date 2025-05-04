import Boom from "@hapi/boom";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import { config, logger } from "../app/index.js";
import { Client as IClient, TrioContact } from "../ts/index.js";

const { TRIO } = config;

class TrioClient implements IClient<AxiosRequestConfig, AxiosInstance> {
    readonly config: AxiosRequestConfig;
    readonly client: AxiosInstance;

    constructor() {
        this.config = {
            baseURL: TRIO.API.BASE_URL,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json",
                "Cache-Control": "no-cache",
            },
        };
        this.client = axios.create(this.config);
    }

    private logSuccess(response: AxiosResponse, method: string): void {
        logger.info("HTTP_REQUEST_SUCCESS", {
            data: {
                client: this.constructor.name,
                method,
                response: response.data,
                status: {
                    code: response.status,
                    text: response.statusText,
                },
            },
        });
    }

    private logError(error: AxiosError, method: string): void {
        logger.error("HTTP_REQUEST_ERROR", {
            data: {
                client: this.constructor.name,
                method,
                request: error.request,
                error: {
                    message: error.message,
                    code: error.code,
                    cause: error.cause,
                    status: error.status,
                    data: error.response?.data,
                },
            },
        });
    }

    public async getContacts(): Promise<TrioContact[]> {
        try {
            const response = await this.client.get<TrioContact[]>("/contacts");

            this.logSuccess(response, this.getContacts.name);

            return response.data;
        } catch (error: any) {
            const _error = error as AxiosError;

            this.logError(_error, this.getContacts.name);

            throw Boom.badImplementation("Unexpected Trio's Mock API condition prevented it from fulfilling the request", {
                ...error.response.data,
            });
        }
    }
}

const trioClient = new TrioClient();

export default trioClient;
export { TrioClient };
