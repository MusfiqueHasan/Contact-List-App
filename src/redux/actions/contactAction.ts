import { Dispatch } from "react";
import { createContact } from "../../APIService/Api";
import { contactType, contactTypes } from "../types";



export const contact: any = (payload: IContact) => {
    return (dispatch: Dispatch<contactType>) => {
        // console.log(payload)
        // createContact(payload)
        //     .then((res) => {
        //         if (res[0]) {
        //         } else {

        //         }
        //     })
        dispatch({
            type: contactTypes.CREATE_CONTACT,
            payload: payload,
        })
    }
};

