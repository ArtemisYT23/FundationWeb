const initialState = {
    TockenUser: null,
};

export const GET_USER_VALIDATE_SESION = "GET_USER_VALIDATE_SESION";
export const EXIT_SESION_CLEAR_TOKEN = "EXIT_SESION_CLEAR_TOKEN";

export default function UserSesionReducer (state = initialState, action) {
    switch (action.type){
        case GET_USER_VALIDATE_SESION:
        case EXIT_SESION_CLEAR_TOKEN:
            return action.payload;
        default:
            return state;
    }
}

//guardar token de usuario
export const getUserTockenSesion = (token) => async(dispatch, getState) => {
    const { sesion } = getState();
    dispatch({
        type: GET_USER_VALIDATE_SESION,
        payload: { ...sesion, TockenUser: token },
    })
}

//Eliminar token de usuario
export const clearSesionUserToken = () => async(dispatch, getState) => {
    const { sesion } = getState();
    dispatch({
        type: EXIT_SESION_CLEAR_TOKEN,
        payload: { ...sesion, TockenUser: null },
    })
}