import React from "react";

export const reqPoke = async (pokemon) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/snorlax/`);
    const data = await resp.json();
    const nombre = data.name
    const {stats} = data
    const {abilities} = data
    const {sprites} = data
    const imagen = sprites.other['official-artwork'].front_default

    console.log(stats)
    console.log(abilities)

    const estadisticas = stats.map((stats)=>({
        nombre: stats.stat.name,
        base: stats.base_stat
    }))
 
    const habilidades = abilities.map((abilities)=>({
        habilidad: abilities.ability.name
    }))

    const datosPokemon= [nombre,estadisticas,habilidades,imagen]

    return datosPokemon
  } catch (error) {
    console.log(error);
  }
};
