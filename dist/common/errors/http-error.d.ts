export default class HttpError extends Error {
    httpStatusCode: number;
    detail?: string;
    constructor(httpStatusCode: number, message: string, detail?: string);
}
