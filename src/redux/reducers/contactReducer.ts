import { contactType, contactTypes, IContactState } from "../types";

const initState: IContactState = {
    users: [],
    user: {} as IContact,
    loading: true,
};

function contactReducer(state: IContactState = initState, action: contactType) {
    switch (action.type) {
        case contactTypes.GET_CONTACT:
            return { ...state, users: action.payload, loading: false };
        case contactTypes.GET_SINGLE_CONTACT:
            return { ...state, user: action.payload, loading: false };
        case contactTypes.CREATE_CONTACT:
        case contactTypes.DELETE_CONTACT:
        case contactTypes.UPDATE_CONTACT:
            return { ...state, loading: false };
        default:
            return state;
    }
}
export default contactReducer;