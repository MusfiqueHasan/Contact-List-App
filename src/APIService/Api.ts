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