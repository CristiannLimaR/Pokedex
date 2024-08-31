import React from "react";
import { BuscarPokemon } from "../components/BuscarPokemon";
import { usePokemon } from "../hooks/usePokemon";
import { ContenedorPokemon } from "./ContenedorPokemon";

export const PokedexApp = () => {
  const { handleGetPokemon, datosPokemon } = usePokemon();

  return (
    <>
      <BuscarPokemon handleGetPokemon={handleGetPokemon} />
      <ContenedorPokemon datosPokemon={datosPokemon}/>
    </>
  );
};
