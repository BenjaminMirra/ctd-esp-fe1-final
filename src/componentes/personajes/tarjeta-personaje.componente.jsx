import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({id,image, nombre}) => {

    return <div id={id} className="tarjeta-personaje">
        <img src={image} alt={nombre}/>
        <div className="tarjeta-personaje-body">
            <span>{nombre}</span>
            <BotonFavorito esFavorito={false} />
        </div>
    </div>
}

export default TarjetaPersonaje;