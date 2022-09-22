import { ChangeEvent, FC } from "react";
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector as useReduxSelector
} from "react-redux"
import { searchCharactersThunks } from "../../actions/personajes.actions";
import { IRootState } from "../../store/store";

import './filtros.css';

const Filtros: FC = () => {

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const busqueda = useSelector((estado) => estado.personajes.busqueda)
    const dispatch = useDispatch();
    const buscarPersonajes = async (e: ChangeEvent<HTMLInputElement>) => {
        let busqueda = e.target.value;
        dispatch(searchCharactersThunks(busqueda))
    }

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input onChange={(e) => buscarPersonajes(e)} type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={busqueda} />
    </div>
}

export default Filtros;