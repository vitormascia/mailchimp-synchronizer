import { AxiosInstance, AxiosRequestConfig } from "axios";
import { Client as IClient, TrioContact } from "../ts/index.js";
declare class TrioClient implements IClient<AxiosRequestConfig, AxiosInstance> {
    readonly config: AxiosRequestConfig;
    readonly client: AxiosInstance;
    constructor();
    private logSuccess;
    private logError;
    getContacts(): Promise<TrioContact[]>;
}
declare const trioClient: TrioClient;
export default trioClient;
export { TrioClient };
