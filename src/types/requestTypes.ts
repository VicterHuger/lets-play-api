import { Request } from "express"

export interface ICustomRequestBody<T> extends Request {
    body: T
};