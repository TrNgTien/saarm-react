export enum EMethods {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
  OPTIONS = 'OPTIONS',
}

export interface IUserGoogle {
  userId: string;
  username: string;
  firstName: string;
  lastName: string;
}

