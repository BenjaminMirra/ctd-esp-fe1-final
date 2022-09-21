import { Reducer } from "@reduxjs/toolkit";
import Character from "../types/characters.types";
import { FavoritoActions } from "../actions/favorito.actions";


interface FavoritosEstado {
    favoritesMapa: Map<number, Character>;
}

const initialState: FavoritosEstado = {
    favoritesMapa: new Map()
}

const favoritosReducer: Reducer<FavoritosEstado, FavoritoActions> = (
    state = initialState,
    action
): FavoritosEstado => {
    switch (action.type) {
        case "BOTON_FAVORITO":
            const map = new Map<number, Character>();
            state.favoritesMapa.forEach((personaje) => {
                map.set(personaje.id, personaje);
            })
            state.favoritesMapa.has(action.personaje.id)
                ? map.delete(action.personaje.id)
                : map.set(action.personaje.id, action.personaje);
            return {
                ...state,
                favoritesMapa: map,
            }
            default:
                return {
                    ...state
                }
    }
}

export default favoritosReducer;