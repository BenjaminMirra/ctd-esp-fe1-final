import Character from "../types/characters.types";
import Personaje from "../types/characters.types";
import PageInfo from "../types/pageinfo.types";


/**
 *  
 * @param {string} nombre
 * @returns {Promise<Personaje[]>} 
 */

export const buscarPersonajesAPI = async (nombre?: string): Promise<[Personaje[], PageInfo]> => {
    let params = "?"
    if (nombre!== "" && nombre!==undefined){
        params += `name=${nombre}`
    }
    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
        .then(data => data.json())
        .then(data => [data.results, data.info])
}

/**
 * Función que devuelve los personajes por página
 * @param {string} url 
 * @returns {Promise<[Character[], PageInfo]}
 */

export const cambiarPaginaApi = async (
    url: string
  ): Promise<[Character[], PageInfo]> => {
    return fetch(url)
      .then((data) => data.json())
      .then((data) => [data.results, data.info]);
  };