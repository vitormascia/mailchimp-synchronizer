import { AxiosInstance, AxiosRequestConfig } from "axios";
import { IClient, ITrioContact } from "../ts/index.js";
declare class TrioClient implements IClient<AxiosRequestConfig, AxiosInstance> {
    readonly config: AxiosRequestConfig;
    readonly client: AxiosInstance;
    constructor();
    private logSuccess;
    private logError;
    getContacts(): Promise<ITrioContact[]>;
}
declare const trioClient: TrioClient;
export default trioClient;
export { TrioClient };
