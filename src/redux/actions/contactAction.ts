import { Dispatch } from "react";
import { createContact, deleteSingleContact, getAllContact, getSingleContact, updateSingleContact } from "../../APIService/Api";
import { contactType, contactTypes } from "../types";



export const getContact: any = () => {
    return (dispatch: Dispatch<contactType>) => {
        getAllContact()
            .then((res) => {
                if (res[0]) {
                    dispatch({
                        type: contactTypes.GET_CONTACT,
                        payload: res[1],
                    })
                } else {

                }
            })
    }
};
export const addContact: any = (payload: IContact) => {
    return (dispatch: Dispatch<contactType>) => {
        createContact(payload)
            .then((res) => {
                if (res[0]) {
                    dispatch({
                        type: contactTypes.CREATE_CONTACT,
                        payload: res[1],
                    })
                } else {

                }
            })
    }
};
export const singleContact: any = (id: string) => {
    return (dispatch: Dispatch<contactType>) => {
        getSingleContact(id)
            .then((res) => {
                if (res[0]) {
                    
                    dispatch({ type: contactTypes.GET_SINGLE_CONTACT, payload: res[1] })

                } else {

                }
            })
    }
};
export const deleteContact: any = (id: string) => {
    return (dispatch: Dispatch<contactType>) => {
        deleteSingleContact(id)
            .then((res) => {
                if (res[0]) {
                    dispatch({ type: contactTypes.DELETE_CONTACT })
                    dispatch(getContact())
                } else {

                }
            })
    }
};
export const updateContact: any = (user: IContact, id: string) => {
    return (dispatch: Dispatch<contactType>) => {
        updateSingleContact(user, id)
            .then((res) => {
                if (res[0]) {
                    console.log(res[1])
                    dispatch({ type: contactTypes.UPDATE_CONTACT, payload: res[1] })
                    dispatch(getContact())
                } else {

                }
            })
    }
};

