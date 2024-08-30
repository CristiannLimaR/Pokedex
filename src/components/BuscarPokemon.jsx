export const BuscarGif = ({handleGetPokemon}) => {
    const [pokemon, setPokemon] = useState("");
    
    return (
      <>
        <div className="conteiner d-flex flex-row justify-content-center align-items-center m-5">
          <form
            className="d-flex"
            onSubmit={(e) => {
              handleGetPokemon(pokemon, e);
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