const initialState = {
    TockenUser: null,
};

export const GET_USER_VALIDATE_SESION = "GET_USER_VALIDATE_SESION";

export default function UserSesionReducer (state = initialState, action) {
    switch (action.type){
        case GET_USER_VALIDATE_SESION:
            return action.payload;
        default:
            return state;
    }
}

//guardar tocken de usuario
export const getUserTockenSesion = (token) => async(dispatch, getState) => {
    const { sesion } = getState();
    dispatch({
        type: GET_USER_VALIDATE_SESION,
        payload: { ...sesion, TockenUser: token },
    })
}