export enum contactTypes {
  CREATE_CONTACT = "create_contact",
  GET_CONTACT = "get_contact",
  DELETE_CONTACT = "delete_contact",
  GET_SINGLE_CONTACT = "get_single_contact",
  UPDATE_CONTACT = "update_contact",
}
export interface createContactType {
  type: contactTypes.CREATE_CONTACT;
  payload: IContact;
}
export interface getContactType {
  type: contactTypes.GET_CONTACT;
  payload: IContact[];
}
export interface getSingleContactType {
  type: contactTypes.GET_SINGLE_CONTACT;
  payload: IContact;
}
export interface deleteContactType {
  type: contactTypes.DELETE_CONTACT;
}
export interface updateSingleContactType {
  type: contactTypes.UPDATE_CONTACT;
  payload: IContact[];
}

export interface IContactState {
  users: IContact[];
  user: IContact ;
  loading: boolean
}

export type contactType =
  | createContactType
  | getContactType
  | deleteContactType
  | getSingleContactType
  | updateSingleContactType


