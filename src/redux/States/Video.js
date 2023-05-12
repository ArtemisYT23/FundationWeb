import { AdminServer } from "../../config/axios";
import toast from "react-hot-toast";
import axios from "axios";

const initialState = {
    VideoData: [],
    VideoSelect: null,
    VideoCreate: false,
    VideoUpdate: false,
    VideoDelete: false,
}

const GET_ALL_VIDEO = "GET_ALL_VIDEO";
const GET_ALL_VIDEO_ERRORS = "GET_ALL_VIDEO_ERRORS";
const GET_FILTER_SELECTED_VIDEO = "GET_FILTER_SELECTED_VIDEO";
const OPEN_CREATED_VIDEO = "OPEN_CREATED_VIDEO";
const OPEN_UPDATE_VIDEO = "OPEN_UPDATE_VIDEO";
const OPEN_DELETE_VIDEO = "OPEN_DELETE_VIDEO";

export default function VideoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_VIDEO:
        case GET_ALL_VIDEO_ERRORS:
        case GET_FILTER_SELECTED_VIDEO:
        case OPEN_CREATED_VIDEO:
        case OPEN_UPDATE_VIDEO:
        case OPEN_DELETE_VIDEO:
            return action.payload;
        default:
            return state;
    }
}

export const getAllVideo = () => async(dispatch, getState) => {
    const { videoState } = getState();
    try {
        const response = await axios({
            url: `${AdminServer}Video`,
            method: "GET",
            headers: {
                accept: "application/json"
            }
        });
        if(response.status == 200) {
            dispatch({
                type: GET_ALL_VIDEO,
                payload: { ...videoState, VideoData: response.data }
            });
        }
    } catch (error) {
        console.log(error);
        dispatch({ 
            type: GET_ALL_VIDEO_ERRORS,
            payload: { ...videoState, VideoData: []}
        })
    }
}

//filtrar video seleccionado
export const getFilterVideoSelected = (idComentary, modal) => async (dispatch, getState) => {
    const { videoState } = getState();
    const { VideoData } = videoState;

    const VideoSelect = VideoData.find((x) => x.id == idComentary);

    if (modal == "edit") {
        dispatch({
            type: GET_FILTER_SELECTED_VIDEO,
            payload: { ...videoState, VideoSelect, VideoUpdate: true }
        })
    } if (modal == "delete") {
        dispatch({
            type: GET_FILTER_SELECTED_VIDEO,
            payload: { ...videoState, VideoSelect, VideoDelete: true }
        })
    }
}

//abrir modal de crear video
export const openModalCreatedVideo = (bool) => async (dispatch, getState) => {
    const { videoState } = getState();
    dispatch({
        type: OPEN_CREATED_VIDEO,
        payload: { ...videoState, VideoCreate: bool }
    })
}

//abrir modal de actualizar video
export const openModalUpdateVideo = (bool) => async (dispatch, getState) => {
    const { videoState } = getState();
    dispatch({
        type: OPEN_UPDATE_VIDEO,
        payload: { ...videoState, VideoUpdate: bool }
    })
}

//abrir modal de eliminar video
export const openModalDeleteVideo = (bool) => async (dispatch, getState) => {
    const { videoState } = getState();
    dispatch({
        type: OPEN_DELETE_VIDEO,
        payload: { ...videoState, VideoDelete: bool }
    })
}


//crear nuevo video
export const CreateVideo = (newInfo) => async (dispatch) => {
    axios({
      url: `${AdminServer}Video/created`,
      method: "POST",
      data: newInfo,
      headers: {
        'Content-Type': "Application/json",
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          toast.success('Video Creado.');
          dispatch(getAllVideo());
        }
      }).catch(function (error) {
        console.log(error);
        toast.error('Video no Creado.');
      })
  };

//actualizar video
export const UpdateVideo = (updatePost, id) => async (dispatch) => {
    axios({
      url: `${AdminServer}Video/UpdateVideo/${id}`,
      method: "PUT",
      data: updatePost,
      headers: {
        'Content-Type': "Application/json",
      },
    })
      .then(function (response) {
        if (response.status == 200) {
          toast.success('Video Actualizado.');
          dispatch(getAllVideo());
        }
      }).catch(function (error) {
        console.log(error);
        toast.error('Video no Actualizado.');
      })
  };

//eliminar Taller
export const DeleteVideo = (id) => async (dispatch) => {
    axios({
        url: `${AdminServer}Video/DeleteVideo/${id}`,
        method: "DELETE",
        headers: {
            'Content-Type': "Application/json",
        },
    })
        .then(function (response) {
            if (response.status == 200) {
                toast.success('Video Eliminado.');
                dispatch(getAllVideo());
            }
        }).catch(function (error) {
            console.log(error);
            toast.error('Video no Eliminado.');
        })
};