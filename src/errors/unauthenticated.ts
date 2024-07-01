// interfaces
import CustomErrorInterface from "../interfaces/custom-error";

// http status codes
import http from "../utils/http-status-codes";



class UnauthenticatedError extends Error implements CustomErrorInterface {

  statusCode: number;

  constructor(message: string) {
    super(message);
    this.statusCode = http.UNAUTHENTICATED;
  };
};

export default UnauthenticatedError;
