export default class HttpError extends Error {
    constructor(httpStatusCode, message, detail) {
        super(message);
        this.httpStatusCode = httpStatusCode;
        this.message = message;
        this.detail = detail;
    }
}
//# sourceMappingURL=http-error.js.map