import React from "react";
const name = "pikachu";
export const reqPoke = async (pokemon) => {
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await resp.json();
    const nombre = data.name
    const {stats} = data
    const {abilities} = data
    console.log(data);

    const estadisticas = stats.map((stats)=>{
        name: stats.stat.name
        base: stats.base_stat
    })

    const hablidades = abilities.map((abilities)=>{
        habilidad: abilities.ability.name
    })

    const datosPokemon= [nombre,estadisticas,hablidades]

    return datosPokemon
  } catch (error) {
    console.log(error);
  }
};
