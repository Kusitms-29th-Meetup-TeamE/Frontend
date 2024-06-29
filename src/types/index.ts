export const METHOD_TYPE = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
  PUT: 'PUT',
} as const;
export type API_METHOD_TYPE = (typeof METHOD_TYPE)[keyof typeof METHOD_TYPE];
