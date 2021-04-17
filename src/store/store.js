import { createStore } from 'redux';
import { libraryReducer } from "../reducers/libraryReducer";



export const store = createStore(libraryReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());