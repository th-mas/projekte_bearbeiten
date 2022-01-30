export enum AccessLevel {
  ADMIN ='ADMIN',
  EMPLOYEE = 'EMPLOYEE',
  BANNED = 'NIPPI'
}

export interface IdentifyObject {
  id: string;
  token: string;
  firstName: string;
  lastName: string;
  access: AccessLevel
}
