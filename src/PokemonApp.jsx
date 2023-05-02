import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />

      <span>Loading: {isLoading ? "True" : "False"}</span>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>
            <span>Nombre: {pokemon.name}</span>
            <span>Url: {pokemon.url}</span>
          </li>
        ))}
      </ul>
      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        NEXT
      </button>
    </>
  );
};
