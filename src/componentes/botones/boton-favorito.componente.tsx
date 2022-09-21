import { FC } from 'react';
import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector as useReduxSelector, } from 'react-redux';
import { botonFavorito } from '../../actions/favorito.actions';
import { IRootState } from '../../store/store';
import Character from '../../types/characters.types';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito: FC<({ personaje: Character })> = ({ personaje }) => {

    const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
    const favoriteMap = useSelector((state) => state.favorites.favoritesMapa);
    const dispatch = useDispatch();

    const src = 
   true
    ? "../../imagenes/star-filled.png" : "../../imagenes/star.png";


    const ponerFavoritos = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        dispatch(botonFavorito(personaje))
    }

    return <div onClick={ponerFavoritos}className="boton-favorito">
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;