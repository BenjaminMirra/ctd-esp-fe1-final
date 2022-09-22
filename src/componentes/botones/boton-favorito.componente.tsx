import './boton-favorito.css';
import Personaje from '../../types/characters.types';
import { isAddFavorito, isRemoveFavorito } from '../../actions/personajes.actions';
import { useDispatch } from 'react-redux';


interface Props {
    esFavorito: boolean;
    personaje: Personaje | undefined;
    favoritos: Personaje[] 
}
interface OnClick {
    onClick: (esFavorito: boolean) => void;
}

/**
 * 
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({favoritos, esFavorito, onClick, personaje }: Props & OnClick) => {

    const dispatch = useDispatch()

    const handleFavorito = () => {
        if(esFavorito === false){
            dispatch(isAddFavorito(personaje))
            onClick(!esFavorito);            
        }else{
            dispatch(isRemoveFavorito(personaje))
            onClick(!esFavorito);
        }
    }

    const src = esFavorito === true ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div onClick={() => handleFavorito()} className="boton-favorito">
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;