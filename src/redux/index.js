import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import SladerReducer from "../redux/States/Slader";
import UserSesionReducer from "../redux/States/LoginSesion";
import ComentaryReducer from './States/Comentary';
import VideoReducer from './States/Video';
import TallerReducer from './States/Taller';
import ImagenTallerReducer from './States/ImagenTaller';

const rootReducer = combineReducers({
    sladerState: SladerReducer,
    sesion: UserSesionReducer,
    comentaryState: ComentaryReducer,
    videoState: VideoReducer,
    tallerState: TallerReducer,
    imgTallerState: ImagenTallerReducer,
});

export default function generateStore() {
    const store = createStore(
        rootReducer, 
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
}