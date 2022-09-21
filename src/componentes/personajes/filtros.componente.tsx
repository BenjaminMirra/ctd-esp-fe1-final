import { ChangeEvent, FC } from "react";
import { useDispatch } from "react-redux";
import { searchCharactersThunks } from "../../actions/personajes.actions";

import './filtros.css';

const Filtros : FC = () => {

    const dispatch = useDispatch();
    const buscarPersonajes = async (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(searchCharactersThunks(e.target.value))
    }

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input onChange={(e) => buscarPersonajes(e)} type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
}

export default Filtros;