enum ErrorType {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  NO_TOKEN = 'NO_TOKEN',
  WRONG_PASSWORD = 'WRONG_PASSWORD',
  NO_USER = 'NO_USER',
  CONFIRM_FAILED = 'CONFIRM_FAILED', //CONFIRM ORDER
  DELIVER_FAILED = 'DELIVER_FAILED', //DELIVER ORDER
  KURIR_UPDATE_FAILED = 'KURIR_UPDATE_FAILED',
  ORDER_FAILED = 'ORDER_FAILED',
  SERVER_ERROR = 'SERVER_ERROR',
  CANCEL_ORDER_FAILED = 'CANCEL_ORDER_FAILED',
  NOT_AUTHORIZED = 'NOT_AUTHORIZED',
  NOT_CONFIRMED = 'NOT_CONFIRMED',
  POSITION_EXIST = 'POSITION_EXIST',
  POSITION_NOT_FOUND = 'POSITION_NOT_FOUND',
  ADDRESS_NOT_FOUND = 'ADDRESS_NOT_FOUND'
}
export default ErrorType