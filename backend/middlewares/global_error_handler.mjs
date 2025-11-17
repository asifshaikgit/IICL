import httpStatus from 'http-status';
import { InvalidRequestError, UnExpectedError } from '../utils/error_handlers.mjs'

const errorHandler = (error, req, res, next) => {
    if (error instanceof InvalidRequestError) {
        const responseData = {
            message: error.message,
            statusCode: error.statusCode,
        };

        return res.status(error.statusCode).json(responseData);
    }

    if (error instanceof UnExpectedError) {
        const responseData = {
            message: error.message,
            statusCode: error.statusCode,
        };

        return res.status(error.statusCode).json(responseData);
    }

    const responseData = {
        message: httpStatus[httpStatus.INTERNAL_SERVER_ERROR],
        error: error.stack,
        statusCode: error.statusCode,
    };

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(responseData);
};

export default errorHandler;
