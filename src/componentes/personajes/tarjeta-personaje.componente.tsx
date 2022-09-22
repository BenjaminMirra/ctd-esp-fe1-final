import { useState } from 'react';
import Personaje from '../../types/characters.types';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';


interface ITarjeta {
    image: string,
    nombre: string,
    personaje: Personaje
    favoritos: Personaje[]
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un TSX element 
 */
const TarjetaPersonaje = ({favoritos, image, nombre, personaje} : ITarjeta) => {

    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    return <div className="tarjeta-personaje">
        <img src={image} alt={nombre}/>
        <div className="tarjeta-personaje-body">
            <span>{nombre}</span>
            <BotonFavorito favoritos={favoritos} personaje={personaje} esFavorito={isFavorite} onClick={setIsFavorite}/>
        </div>
    </div>
}

export default TarjetaPersonaje;