import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {
        dispatch( startLoadingPokemons() )

        //TPDP: Realizar peticion http
        //Data-Pokemons
        //dispatch( setPokemons() );
    }
}