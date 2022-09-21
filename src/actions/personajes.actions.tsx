import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import { buscarPersonajesAPI, cambiarPaginaApi } from "../services/personaje.service";
import { IRootState } from "../store/store";
import Personaje from "../types/characters.types";
import PageInfo from "../types/pageinfo.types";

export interface IsFetchingPersonajes extends Action {
    type: "IS_FETCHING_PERSONAJES",
    payload: { name: string }
}

export interface IsSuccessPersonajes extends Action {
    type: "IS_SUCCESS_PERSONAJES",
    payload: {
        personajes: Personaje[],
        pageInfo: PageInfo
    }
}

export interface IsErrorPersonajes extends Action {
    type: "IS_ERROR_PERSONAJES",
    payload: { error: string }
}

export const isFetchingPersonajes: ActionCreator<IsFetchingPersonajes> = (name: string) => {
    return {
        type: "IS_FETCHING_PERSONAJES",
        payload: { name: name }
    }
}

export const isSuccessPersonajes: ActionCreator<IsSuccessPersonajes> = (personajes: Personaje[], pageInfo: PageInfo) => {
    return {
        type: "IS_SUCCESS_PERSONAJES",
        payload: {
            personajes: personajes,
            pageInfo: pageInfo
        }
    }
}

export const isErrorPersonajes: ActionCreator<IsErrorPersonajes> = (error: string) => {
    return {
        type: "IS_ERROR_PERSONAJES",
        payload: { error: error }
    }
}

export interface SearchCharactersThunks extends ThunkAction<void, IRootState, unknown, PersonajesAction> {
}

export const searchCharactersThunks = (name: string): SearchCharactersThunks => {
    return async (dispatch, getState) => {
        try {
            dispatch(isFetchingPersonajes(name))
            const response = await buscarPersonajesAPI(name);

            const [personajes, pageInfo] = response
            dispatch(isSuccessPersonajes(personajes, pageInfo))
        } catch (error) {
            dispatch(isErrorPersonajes(error))
        }

    }

}

export const changePageThunk = (url: string): SearchCharactersThunks => {
    return async (dispatch, getState) => {
        try {
            const [personajes, info] = await cambiarPaginaApi(url);
            dispatch(isSuccessPersonajes(personajes, info));
        } catch (e) {
            dispatch(isErrorPersonajes(e))
        }
    }
}

export type PersonajesAction =
    | ReturnType<typeof isErrorPersonajes>
    | ReturnType<typeof isFetchingPersonajes>
    | ReturnType<typeof isSuccessPersonajes>;
