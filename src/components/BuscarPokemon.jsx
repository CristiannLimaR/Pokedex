import {useState} from "react"

export const BuscarPokemon = ({handleGetPokemon}) => {
    const [pokemon, setPokemon] = useState("");
    
    return (
      <>
        <div className="container d-flex flex-row justify-content-center align-items-center mt-5">
          <form
            className="d-flex"
            onSubmit={(e) => {
              handleGetPokemon(e, pokemon);
            }}
          >
            <input
              className=" form-control"
              type="text"
              onChange={(e) => {
                setPokemon(e.target.value);
              }}
            />
            <input className=" btn btn-outline-success" type="submit"></input>
          </form>
        </div>
      </>
    );
  };