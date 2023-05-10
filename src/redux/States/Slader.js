import { AdminServer } from "../../config/axios";
import axios from "axios";

const initialState = {
    SladersInitial: [],
}

export const GET_ALL_SLADERS_INITIAL = "GET_ALL_SLADERS_INITIAL";
export const GET_ALL_SLADERS_INITIAL_ERRORS = "GET_ALL_SLADERS_INITIAL_ERRORS";

export default function SladerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SLADERS_INITIAL:
        case GET_ALL_SLADERS_INITIAL_ERRORS:
            return action.payload;
        default:
            return state;
    }
}

export const get_sladers_initial_view = () => async(dispatch, getState) => {
    const { sladerState } = getState();
    try {
        const response = await axios({
            url: `${AdminServer}Sladers`,
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        });
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_SLADERS_INITIAL,
                payload: { ...sladerState, SladersInitial: response.data }
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_SLADERS_INITIAL_ERRORS,
            payload: { ...sladerState, SladersInitial: [] },
        });
    }
}