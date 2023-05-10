import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import SladerReducer from "../redux/States/Slader";

const rootReducer = combineReducers({
    sladerState: SladerReducer,
});

export default function generateStore() {
    const store = createStore(
        rootReducer, 
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
}