
export function requestErrorHandler(err: Error) {
  return Promise.reject(err);
}

export function responseErrorHandler(err: Error) {
  return Promise.reject(err);
}
