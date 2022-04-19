import { contactType, contactTypes } from "../types";

interface IContactState {
    data: IContact[];
}

const initState: IContactState = {
    data: [],
};

function contactReducer(state: IContactState = initState, action: contactType) {
    switch (action.type) {
        case contactTypes.CREATE_CONTACT:
            return { ...state, data: [...state.data, action.payload] };
        default:
            return state;
    }
}
export default contactReducer;