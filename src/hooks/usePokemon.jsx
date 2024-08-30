import { useState } from "react"
import { reqPoke } from "../service/pokemon"

export const usePokemon =()=>{
    const [datosPokemon,setDatosPokemon] = useState({})
    const handleGetPokemon = async(e, pokemon)=>{
        e.preventDefault()
        await reqPoke(pokemon).then((datosPokemon)=>{
            setDatosPokemon(datosPokemon)
            console.log(datosPokemon)
        })
    }

    return{
        handleGetPokemon,
        datosPokemon
    }
}