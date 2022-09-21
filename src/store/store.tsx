import {applyMiddleware, combineReducers, createStore} from "@reduxjs/toolkit";
import personajesReducer from "../reducers/personajes.reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";

import thunk from "redux-thunk";
import favoritosReducer from "../reducers/favoritos.reducer";

const rootReducer = combineReducers({
    personajes: personajesReducer,
    favorites: favoritosReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
)