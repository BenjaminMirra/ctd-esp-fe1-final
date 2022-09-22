import './boton-favorito.css';
import { botonFav } from '../../types/characters.types'; 
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito, onClick} : botonFav) => {

    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div onClick={()=> esFavorito ? esFavorito === true : esFavorito === false} className="boton-favorito">
        <img src={src} alt={"favorito"} /> 
    </div>
}

export default BotonFavorito;