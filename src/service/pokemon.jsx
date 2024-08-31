import React from "react";

export const reqPoke = async (pokemon) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    const data = await resp.json();
    const nombre = data.name
    const {stats} = data
    const {abilities} = data
    const {sprites} = data
    const {types} = data
    const {id} = data
    const imagen = sprites.other['official-artwork'].front_default


    const estadisticas = stats.map((stats)=>({
        nombre: stats.stat.name,
        base: stats.base_stat
    }))

    const tipos = types.map((types)=>({
        tipo: types.type.name
    }))
 
    const habilidades = abilities.map((abilities)=>({
        habilidad: abilities.ability.name
    }))

    const datosPokemon= {id,nombre,estadisticas,habilidades,imagen,tipos}

    return datosPokemon
  } catch (error) {
    console.log(error);
  }
};
