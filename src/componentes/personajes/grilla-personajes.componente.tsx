import { FC, useEffect } from 'react';
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector as useReduxSelector,
  } from "react-redux";
import { searchCharactersThunks } from '../../actions/personajes.actions';
import { IRootState, useSelector } from '../../store/store';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un TSX element 
 */
const GrillaPersonajes: FC  = () => {

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const { status, personajes } = useSelector((state) => state.personajes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchCharactersThunks(""));
      }, [dispatch]);

    if (status === "idle") return (
        <div>Haz una búsqueda para ver los personajes...</div>
    )

    if (status === "fetching") return (
        <div>Cargando, por favor espere...</div>
    )

    if (status === "error") return (
        <div></div>
    )

    if (!personajes || personajes.length === 0) return <div>No se encontraron personajes</div>

    return <div className="grilla-personajes">
        {personajes.map((personaje) => {
            return <div id={`${personaje.id}`}>
                <TarjetaPersonaje nombre={personaje.name} image={personaje.image} />
                </div>
        })}
    </div>

}

export default GrillaPersonajes;