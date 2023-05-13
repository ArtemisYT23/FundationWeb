import { AdminServer } from "../../config/axios";
import toast from "react-hot-toast";
import axios from "axios";

const initialState = {
    TallerData: [],
    TallerCreate: false,
    TallerUpdate: false,
    TallerDelete: false,
}

const GET_ALL_TALLER = "GET_ALL_TALLER";
const GET_ALL_ERRORS_TALLER = "GET_ALL_ERRORS_TALLER";
const GET_FILTER_SELECTED_TALLER = "GET_FILTER_SELECTED_TALLER";
const OPEN_CREATED_TALLER = "OPEN_CREATED_TALLER";
const OPEN_UPDATE_TALLER = "OPEN_UPDATE_TALLER";
const OPEN_DELETE_TALLER = "OPEN_DELETE_TALLER";

export default function TallerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_TALLER:
        case GET_ALL_ERRORS_TALLER:
        case GET_FILTER_SELECTED_TALLER:
        case OPEN_CREATED_TALLER:
        case OPEN_UPDATE_TALLER:
        case OPEN_DELETE_TALLER:
            return action.payload;
        default:
            return state;
    }
}

export const getAllTaller = () => async (dispatch, getState) => {
    const { tallerState } = getState();
    try {
        const response = await axios({
            url: `${AdminServer}Taller`,
            method: "GET",
            headers: {
                accept: "application/json"
            }
        });
        if (response.status == 200) {
            dispatch({
                type: GET_ALL_TALLER,
                payload: { ...tallerState, TallerData: response.data }
            })
        }
    } catch (error) {
        console.log(error);
        dispatch({
            type: GET_ALL_ERRORS_TALLER,
            payload: { ...tallerState, TallerData: [] },
        });
    }
}

//filtrar taller seleccionado
export const getFilterTallerSelected = (idComentary, modal) => async (dispatch, getState) => {
    const { tallerState } = getState();
    const { TallerData } = tallerState;

    const TallerSelect = TallerData.find((x) => x.id == idComentary);

    if (modal == "edit") {
        dispatch({
            type: GET_FILTER_SELECTED_TALLER,
            payload: { ...tallerState, TallerSelect, TallerUpdate: true }
        })
    } if (modal == "delete") {
        dispatch({
            type: GET_FILTER_SELECTED_TALLER,
            payload: { ...tallerState, TallerSelect, TallerDelete: true }
        }) 
    } else {
        dispatch({
            type: GET_FILTER_SELECTED_TALLER,
            payload: { ...tallerState, TallerSelect }
        })
    }
}

//abrir modal de crear taller
export const openModalCreatedTaller = (bool) => async (dispatch, getState) => {
    const { tallerState } = getState();
    dispatch({
        type: OPEN_CREATED_TALLER,
        payload: { ...tallerState, TallerCreate: bool }
    })
}

//abrir modal de actualizar taller
export const openModalUpdateTaller = (bool) => async (dispatch, getState) => {
    const { tallerState } = getState();
    dispatch({
        type: OPEN_UPDATE_TALLER,
        payload: { ...tallerState, TallerUpdate: bool }
    })
}

//abrir modal de eliminar taller
export const openModalDeleteTaller = (bool) => async (dispatch, getState) => {
    const { tallerState } = getState();
    dispatch({
        type: OPEN_DELETE_TALLER,
        payload: { ...tallerState, TallerDelete: bool }
    })
}

//crear nuevo taller
export const CreateTaller = (newInfo) => async (dispatch) => {
    axios({
      url: `${AdminServer}Taller/Created`,
      method: "POST",
      data: newInfo,
      headers: {
        'Content-Type': "Application/json",
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          toast.success('Taller Creado.');
          dispatch(getAllTaller());
        }
      }).catch(function (error) {
        console.log(error);
        toast.error('Taller no Creado.');
      })
  };

//actualizar taller
export const UpdateTaller = (updatePost, id) => async (dispatch) => {
    axios({
      url: `${AdminServer}Taller/Update/${id}`,
      method: "PUT",
      data: updatePost,
      headers: {
        'Content-Type': "Application/json",
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          toast.success('Taller Actualizado.');
          dispatch(getAllTaller());
        }
      }).catch(function (error) {
        console.log(error);
        toast.error('Taller no Actualizado.');
      })
  };

//eliminar Taller
export const DeleteTaller = (id) => async (dispatch) => {
    axios({
        url: `${AdminServer}Taller/Delete/${id}`,
        method: "DELETE",
    })
        .then(function (response) {
            if (response.status == 200) {
                toast.success('Taller Eliminado.');
                dispatch(getAllTaller());
            }
        }).catch(function (error) {
            console.log(error);
            toast.error('Taller no Eliminado.');
        })
};