import { AdminServer } from "../../config/axios";
import toast from "react-hot-toast";
import axios from "axios";

const initialState = {
    ComentaryData: [],
    ComentarySelect: null,
    ComentaryCreate: false,
    ComentaryUpdate: false,
    ComentaryDelete: false,
}

const GET_ALL_COMENTARY = "GET_ALL_COMENTARY";
const GET_ALL_ERRORS_COMENTARY = "GET_ALL_ERRORS_COMENTARY";
const GET_FILTER_SELECTED_COMENTARY = "GET_FILTER_SELECTED_COMENTARY";
const OPEN_CREATED_COMENTARY = "OPEN_CREATED_COMENTARY";
const OPEN_UPDATE_COMENTARY = "OPEN_UPDATE_COMENTARY";
const OPEN_DELETE_COMENTARY = "OPEN_DELETE_COMENTARY";

export default function ComentaryReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_COMENTARY:
        case GET_ALL_ERRORS_COMENTARY:
        case GET_FILTER_SELECTED_COMENTARY:
        case OPEN_CREATED_COMENTARY:
        case OPEN_UPDATE_COMENTARY:
        case OPEN_DELETE_COMENTARY:
            return action.payload;
        default:
            return state;
    }
}

export const getAllComentary = () => async (dispatch, getState) => {
    const { comentaryState } = getState();
    try {
        const response = await axios({
            url: `${AdminServer}Comentary`,
            method: "GET",
            headers: {
                accept: "application/json"
            }
        });
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_COMENTARY,
                payload: { ...comentaryState, ComentaryData: response.data }
            })
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_ERRORS_COMENTARY,
            payload: { ...comentaryState, ComentaryData: [] },
        });
    }
}


//filtrar comentario seleccionado
export const getFilterComentarySelected = (idComentary, modal) => async (dispatch, getState) => {
    const { comentaryState } = getState();
    const { ComentaryData } = comentaryState;

    const ComentarySelect = ComentaryData.find((x) => x.id == idComentary);

    if (modal == "edit") {
        dispatch({
            type: GET_FILTER_SELECTED_COMENTARY,
            payload: { ...comentaryState, ComentarySelect, ComentaryUpdate: true }
        })
    } if (modal == "delete") {
        dispatch({
            type: GET_FILTER_SELECTED_COMENTARY,
            payload: { ...comentaryState, ComentarySelect, ComentaryDelete: true }
        })
    }
}

//abrir modal de crear comentario
export const openModalCreatedComentary = (bool) => async (dispatch, getState) => {
    const { comentaryState } = getState();
    dispatch({
        type: OPEN_CREATED_COMENTARY,
        payload: { ...comentaryState, ComentaryCreate: bool }
    })
}

//abrir modal de actualizar comentario
export const openModalUpdateComentary = (bool) => async (dispatch, getState) => {
    const { comentaryState } = getState();
    dispatch({
        type: OPEN_UPDATE_COMENTARY,
        payload: { ...comentaryState, ComentaryUpdate: bool }
    })
}

//abrir modal de eliminar comentario
export const openModalDeleteComentary = (bool) => async (dispatch, getState) => {
    const { comentaryState } = getState();
    dispatch({
        type: OPEN_DELETE_COMENTARY,
        payload: { ...comentaryState, ComentaryDelete: bool }
    })
}

//crear nuevo comentario
export const CreateComentary = (newInfo) => async (dispatch) => {
    axios({
      url: `${AdminServer}Comentary/Created`,
      method: "POST",
      data: newInfo,
      headers: {
        'Content-Type': "multipart/form-data",
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          toast.success('Comentario Creado.');
          dispatch(getAllComentary());
        }
      }).catch(function (error) {
        console.log(error);
        toast.error('Comentario no Creado.');
      })
  };

//actualizar comentario
export const UpdateComentary = (updatePost, id) => async (dispatch) => {
    axios({
      url: `${AdminServer}Comentary/Update/${id}`,
      method: "PUT",
      data: updatePost,
      headers: {
        'Content-Type': "multipart/form-data",
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          toast.success('Comentario Actualizado.');
          dispatch(getAllComentary());
        }
      }).catch(function (error) {
        console.log(error);
        toast.error('Comentario no Actualizado.');
      })
  };

//eliminar Comentario
export const DeleteComentary = (id) => async (dispatch) => {
    axios({
        url: `${AdminServer}Comentary/Delete/${id}`,
        method: "DELETE",
    })
        .then(function (response) {
            if (response.status == 200) {
                toast.success('Comentario Eliminado.');
                dispatch(getAllComentary());
            }
        }).catch(function (error) {
            console.log(error);
            toast.error('Comentario no Eliminado.');
        })
};