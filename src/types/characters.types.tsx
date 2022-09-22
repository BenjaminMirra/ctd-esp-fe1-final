interface Personaje {
    id: number,
    name: string,
    status: string,
    image: string,
}

export default Personaje;

export interface botonFav{
    onClick: Function,
    esFavorito: boolean
}