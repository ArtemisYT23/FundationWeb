import { AdminServer } from "../../config/axios";
import toast from "react-hot-toast";
import axios from "axios";

const initialState = {
    SladersInitial: [],
    SladerSelect: null,
    sladerCreate: false,
    sladerUpdate: false,
    sladerDelete: false,
}

const GET_ALL_SLADERS_INITIAL = "GET_ALL_SLADERS_INITIAL";
const GET_ALL_SLADERS_INITIAL_ERRORS = "GET_ALL_SLADERS_INITIAL_ERRORS";
const GET_FILTER_SELECTED_SLADER = "GET_FILTER_SELECTED_SLADER";
const OPEN_CREATED_SLADERS = "OPEN_CREATED_SLADERS";
const OPEN_UPDATE_SLADERS = "OPEN_UPDATE_SLADERS";
const OPEN_DELETE_SLADERS = "OPEN_DELETE_SLADERS";

export default function SladerReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_SLADERS_INITIAL:
        case GET_ALL_SLADERS_INITIAL_ERRORS:
        case GET_FILTER_SELECTED_SLADER:
        case OPEN_CREATED_SLADERS:
        case OPEN_UPDATE_SLADERS:
        case OPEN_DELETE_SLADERS:
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

//filtrar slader seleccionado
export const getFilterSladerSelected = (idComentary, modal) => async (dispatch, getState) => {
    const { sladerState } = getState();
    const { SladersInitial } = sladerState;

    const SladerSelect = SladersInitial.find((x) => x.id == idComentary);

    if (modal == "edit") {
        dispatch({
            type: GET_FILTER_SELECTED_SLADER,
            payload: { ...sladerState, SladerSelect, sladerUpdate: true }
        })
    } if (modal == "delete") {
        dispatch({
            type: GET_FILTER_SELECTED_SLADER,
            payload: { ...sladerState, SladerSelect, sladerDelete: true }
        })
    }
}


//abrir modal de crear sladers
export const openModalCreatedSlader = (bool) => async (dispatch, getState) => {
    const { sladerState } = getState();
    dispatch({
        type: OPEN_CREATED_SLADERS,
        payload: { ...sladerState, sladerCreate: bool }
    })
}

//abrir modal de actualizar sladers
export const openModalUpdateSlader = (bool) => async (dispatch, getState) => {
    const { sladerState } = getState();
    dispatch({
        type: OPEN_UPDATE_SLADERS,
        payload: { ...sladerState, sladerUpdate: bool }
    })
}

//abrir modal de eliminar sladers
export const openModalDeleteSlader = (bool) => async (dispatch, getState) => {
    const { sladerState } = getState();
    dispatch({
        type: OPEN_DELETE_SLADERS,
        payload: { ...sladerState, sladerDelete: bool }
    })
}


//crear nuevo slader
export const CreateSlader = (newInfo) => async (dispatch) => {
    axios({
      url: `${AdminServer}Sladers/Created`,
      method: "POST",
      data: newInfo,
      headers: {
        'Content-Type': "multipart/form-data",
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          toast.success('Slader Creado.');
          dispatch(get_sladers_initial_view());
        }
      }).catch(function (error) {
        console.log(error);
        toast.error('Slader no Creado.');
      })
  };

//actualizar nuevo slader
export const UpdateSlader = (updatePost, id) => async (dispatch) => {
    axios({
      url: `${AdminServer}Sladers/Update/${id}`,
      method: "PUT",
      data: updatePost,
      headers: {
        'Content-Type': "multipart/form-data"
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          toast.success('Slader Actualizado.');
          dispatch(get_sladers_initial_view());
        }
      }).catch(function (error) {
        console.log(error);
        toast.error('Slader no Actualizado.');
      })
  };


//eliminar Sladers
export const DeleteSlader = (id) => async (dispatch) => {
    axios({
        url: `${AdminServer}Sladers/Delete/${id}`,
        method: "DELETE",
    })
        .then(function (response) {
            if (response.status == 200) {
                toast.success('Slader Eliminado.');
                dispatch(get_sladers_initial_view());
            }
        }).catch(function (error) {
            console.log(error);
            toast.error('Slader no Eliminado.');
        })
};