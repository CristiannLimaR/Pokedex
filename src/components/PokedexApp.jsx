import React from 'react'
import {reqPoke} from '../service/pokemon'
import {BuscarPokemon} from '..components/BuscarPokemon'
import { usePokemon } from '../hooks/usePokemon'

export const PokedexApp = () => {
   const {handleGetPokemon,datosPokemon} = usePokemon()
  return (
    <BuscarPokemon handleGetPokemon= {handleGetPokemon}/>
    
  )
}
