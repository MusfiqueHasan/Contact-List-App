export enum contactTypes {
  CREATE_CONTACT = "create_contact",
}
export interface contactType {
  type: contactTypes.CREATE_CONTACT;
  payload: IContact;
}
