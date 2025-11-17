import httpStatus from 'http-status';

export class InvalidRequestError extends Error {
  constructor(message = "Invalid request", statusCode = httpStatus.BAD_REQUEST) {
    super(message);
    this.name = 'InvalidRequestError';
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}
  
export class UnExpectedError extends Error {
  constructor(message = null, statusCode = httpStatus.INTERNAL_SERVER_ERROR) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
