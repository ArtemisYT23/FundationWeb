import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({

});

export default function generateStore() {
    const store = createStore(
        rootReducer, 
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
}