import { pokemonApi } from "../../../api/pokemonApi";
import { startLoadingPokemons, setPokemons } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    // Realizar petición HTTP con fetch
    // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    // const data = await response.json();

    // Realizar petición HTTP con axios
    const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
