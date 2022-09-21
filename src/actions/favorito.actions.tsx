import { Action, ActionCreator } from "@reduxjs/toolkit";
import Character from "../types/characters.types";

interface FavoritoAction extends Action{
    type: "BOTON_FAVORITO",
    personaje: Character;
}

export const botonFavorito:ActionCreator<FavoritoAction> =(
    personaje: Character
) => ({
    type: "BOTON_FAVORITO",
    personaje,
})

export type FavoritoActions =
  | ReturnType<typeof botonFavorito>
