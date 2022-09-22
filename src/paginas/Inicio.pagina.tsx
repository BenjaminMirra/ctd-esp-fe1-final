import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { searchCharactersThunks } from "../actions/personajes.actions";
import { useDispatch } from "react-redux";
import { FC } from "react";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio: FC = () => {

    const dispatch = useDispatch()

    const eliminarFiltro = () => {
        dispatch(searchCharactersThunks(""))
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button onClick={eliminarFiltro}className="danger">Limpiar filtro </button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio