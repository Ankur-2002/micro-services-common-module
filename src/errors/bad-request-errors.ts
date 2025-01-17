import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
    statusCode = 400;
    constructor(message: string) {
        super(message);
    }
    serializeErrors(): { message: string; field?: string | undefined }[] {
        return [
            {
                message: this.message,
            },
        ];
    }
}
