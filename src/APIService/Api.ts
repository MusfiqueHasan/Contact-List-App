import axios from "axios";

export const createContact = async (data: IContact) => {

    try {
        let response = await axios({
            method: "POST",
            url: `http://localhost:5000/users`,
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(data)
        });
        return [true, response.data.result];
    } catch (error) {
        return [false, error];
    }
}

export const getAllContact = async () => {
    try {
        let response = await axios({
            method: "GET",
            url: `http://localhost:5000/users`,
            headers: {
                "Content-Type": "application/json",
            }
        });
        return [true, response.data];
    } catch (error) {
        return [false, error];
    }
}
export const getSingleContact = async (id: string) => {
    try {
        let response = await axios({
            method: "GET",
            url: `http://localhost:5000/users/${id}`,
            headers: {
                "Content-Type": "application/json",
            }
        });
        return [true, response.data];
    } catch (error) {
        return [false, error];
    }
}
export const deleteSingleContact = async (id: string) => {
    try {
        let response = await axios({
            method: "DELETE",
            url: `http://localhost:5000/users/${id}`,
            headers: {
                "Content-Type": "application/json",
            }
        });
        return [true, response.data];
    } catch (error) {
        return [false, error];
    }
}
export const updateSingleContact = async (user: IContact, id: string) => {
    try {
        let response = await axios({
            method: "PUT",
            url: `http://localhost:5000/users/${id}`,
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify(user)
        });
        return [true, response.data];
    } catch (error) {
        return [false, error];
    }
}