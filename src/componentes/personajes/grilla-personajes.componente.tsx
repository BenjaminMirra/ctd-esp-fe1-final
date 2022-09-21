import { FC } from 'react';
import { useSelector } from '../../store/store';
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
const GrillaPersonajes: FC | any  = () => {

    const { status, personajes } = useSelector(state => state.personajes)

    if (status === "idle") return (
        <div>Haz una búsqueda para ver los personajes...</div>
    )

    if (status === "fetching") return (
        <div>Cargando, por favor espere...</div>
    )

    if (status === "error") return (
        <div>Haz una búsqueda para ver los personajes...</div>
    )

    if (!personajes || personajes.length === 0) return <div>No se encontraron personajes</div>

    return <div className="grilla-personajes">
        {personajes.map((personaje) => {
            return <TarjetaPersonaje id={personaje.id} nombre={personaje.name} image={personaje.image} />
        })}
    </div>

}

export default GrillaPersonajes;