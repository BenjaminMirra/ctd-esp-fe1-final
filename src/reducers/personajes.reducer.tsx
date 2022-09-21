import {Reducer} from "@reduxjs/toolkit";
import {PersonajesAction} from "../actions/personajes.actions";
import Personaje from "../types/characters.types";
import PageInfo from "../types/pageinfo.types";

export interface PersonajesState{
    busqueda: string;
    status: "idle" | "fetching" | "success" | "error",
    personajes: Personaje[],
    pageInfo: PageInfo;
    error: string | null,
}

const initialState: PersonajesState = {
    busqueda: '',
    status: "idle",
    personajes: [],
    pageInfo: {count: 0, pages: 0, next:"", prev: ""},
    error: null
};

/**
 * Funciones reductora de los personajes
 * 
 * @param {State} state 
 * @param {} action 
 * @returns {State}
 */

const personajesReducer:Reducer<PersonajesState, PersonajesAction> =
    (state = initialState, action): PersonajesState => {
    switch(action.type){
        case "IS_ERROR_PERSONAJES":
            return{
                ...state,
                error: action.payload.error,
                status: "error",
                personajes: []
            }
        case "IS_FETCHING_PERSONAJES":
            return {
                ...state,
                busqueda: action.payload.name,
                status: "fetching",
                error: null
            }
        case "IS_SUCCESS_PERSONAJES":
            return {
                ...state,
                status: "success",
                personajes: action.payload.personajes,
                pageInfo : action.payload.pageInfo,
                error: null
            }
        default:
            return {...state};
    }
}
export default personajesReducer;