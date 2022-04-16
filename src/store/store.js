import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReduce from "./reducers/counterReduce";


const rootReducer = combineReducers({
    counter: counterReduce,
})

export const createReduxStore = (initialState = {}) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    })
}