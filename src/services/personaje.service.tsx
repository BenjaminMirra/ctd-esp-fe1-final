import Character from "../types/characters.types";
import PageInfo from "../types/pageinfo.types";

/**
 *  
 * @param {string} nombre
 * @returns {Promise<[Character[], PageInfo] | [any, any]>, } 
 */

export const buscarPersonajesAPI = async (nombre: string): Promise<[Character[], PageInfo] | [any, any]> => {
    return fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
        .then(data => data.json())
        .then(data => [data.results, data.info])
}

/**
 * Función que devuelve los personajes por página
 * @param {string} url 
 * @returns {Promise<[Character[], PageInfo]  | [any, any]}
 */

export const cambiarPaginaApi = async (
    url: string
  ): Promise<[Character[], PageInfo]  | [any, any]> => {
    return fetch(url)
      .then((data) => data.json())
      .then((data) => [data.results, data.info]);
  };