import { AdminServer } from "../../config/axios";
import toast from "react-hot-toast";
import axios from "axios";

const initialState = {
    imagenTallerData: [],
    ImagenTallerSelect: null,
    imagenTallerCreate: false,
    imagenTallerUpdate: false,
    imagenTallerDelete: false,
}

const GET_ALL_IMAGENTALLER = "GET_ALL_IMAGENTALLER";
const GET_ALL_IMAGENTALLER_ERRORS = "GET_ALL_IMAGENTALLER_ERRORS";
const GET_FILTER_SELECTED_IMAGENTALLER = "GET_FILTER_SELECTED_IMAGENTALLER";
const OPEN_CREATED_IMAGENTALLER = "OPEN_CREATED_IMAGENTALLER";
const OPEN_UPDATE_IMAGENTALLER = "OPEN_UPDATE_IMAGENTALLER";
const OPEN_DELETE_IMAGENTALLER = "OPEN_DELETE_IMAGENTALLER";

export default function ImagenTallerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_IMAGENTALLER:
        case GET_ALL_IMAGENTALLER_ERRORS:
        case GET_FILTER_SELECTED_IMAGENTALLER:
        case OPEN_CREATED_IMAGENTALLER:
        case OPEN_UPDATE_IMAGENTALLER:
        case OPEN_DELETE_IMAGENTALLER:
            return action.payload;
        default:
            return state;
    }
}

export const getAllImagenTallerData = () => async (dispatch, getState) => {
    const { imgTallerState } = getState();
    try {
        const response = await axios({
            url: `${AdminServer}ImagenTaller`,
            method: "GET",
            headers: {
                accept: "application/json"
            }
        });
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_IMAGENTALLER,
                payload: { ...imgTallerState, imagenTallerData: response.data }
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_IMAGENTALLER_ERRORS,
            payload: { ...imgTallerState, imagenTallerData: [] }
        })
    }
}

//filtrar imagenTaller seleccionado
export const getFilterImagenTallerSelected = (idComentary, modal) => async (dispatch, getState) => {
    const { imgTallerState } = getState();
    const { imagenTallerData } = imgTallerState;

    const ImagenTallerSelect = imagenTallerData.find((x) => x.id == idComentary);

    if (modal == "edit") {
        dispatch({
            type: GET_FILTER_SELECTED_IMAGENTALLER,
            payload: { ...imgTallerState, ImagenTallerSelect, imagenTallerUpdate: true }
        })
    } if (modal == "delete") {
        dispatch({
            type: GET_FILTER_SELECTED_IMAGENTALLER,
            payload: { ...imgTallerState, ImagenTallerSelect, imagenTallerDelete: true }
        })
    }
}

//abrir modal de crear ImagenTaller
export const openModalCreatedImagenTaller = (bool) => async (dispatch, getState) => {
    const { imgTallerState } = getState();
    dispatch({
        type: OPEN_CREATED_IMAGENTALLER,
        payload: { ...imgTallerState, imagenTallerCreate: bool }
    })
}

//abrir modal de actualizar ImagenTaller
export const openModalUpdateImagenTaller = (bool) => async (dispatch, getState) => {
    const { imgTallerState } = getState();
    dispatch({
        type: OPEN_UPDATE_IMAGENTALLER,
        payload: { ...imgTallerState, imagenTallerUpdate: bool }
    })
}

//abrir modal de eliminar ImagenTaller
export const openModalDeleteImagenTaller = (bool) => async (dispatch, getState) => {
    const { imgTallerState } = getState();
    dispatch({
        type: OPEN_DELETE_IMAGENTALLER,
        payload: { ...imgTallerState, imagenTallerDelete: bool }
    })
}


//crear nuevo imagen taller
export const CreateImagenTaller = (newInfo) => async (dispatch) => {
    axios({
        url: `${AdminServer}ImagenTaller/Created`,
        method: "POST",
        data: newInfo,
        headers: {
            'Content-Type': "multipart/form-data",
        },
    })
        .then(function (response) {
            if (response.status == 200) {
                toast.success('Imagen Taller Creado.');
                dispatch(getAllImagenTallerData());
            }
        }).catch(function (error) {
            console.log(error);
            toast.error('Imagen Taller no Creado.');
        })
};

//actualizar imagen taller
export const UpdateImagenTaller = (updatePost, id) => async (dispatch) => {
    axios({
        url: `${AdminServer}ImagenTaller/Update/${id}`,
        method: "PUT",
        data: updatePost,
        headers: {
            'Content-Type': "multipart/form-data",
        },
    })
        .then(function (response) {
            if (response.status == 200) {
                toast.success('Imagen Taller Actualizado.');
                dispatch(getAllImagenTallerData());
            }
        }).catch(function (error) {
            console.log(error);
            toast.error('Imagen Taller no Actualizado.');
        })
};

//eliminar Imagen Taller
export const DeleteImagenTaller = (id) => async (dispatch) => {
    axios({
        url: `${AdminServer}ImagenTaller/Delete/${id}`,
        method: "DELETE",
    })
        .then(function (response) {
            if (response.status == 200) {
                toast.success('Imagen Taller Eliminado.');
                dispatch(getAllImagenTallerData());
            }
        }).catch(function (error) {
            console.log(error);
            toast.error('Imagen Taller no Eliminado.');
        })
};