import React from 'react'

export const ContenedorPokemon = ({datosPokemon}) => {
  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
        <div className="card w-25">
          <img src={datosPokemon.imagen} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{datosPokemon.nombre}</h5>
            <h5 className='fs-6'>#{datosPokemon.id}</h5>
          </div>
          <h2 className='fs-3'>Stats</h2>
          <ul className="list-group list-group-flush">
            {datosPokemon.estadisticas &&
              datosPokemon.estadisticas.map((stat, index) => (
                <li key={index} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <span>{stat.nombre}</span>
                    <span>{stat.base}</span>
                  </div>
                  <div className="progress mt-2">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${stat.base}%` }}
                      aria-valuenow={stat.base}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {stat.base}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
          <h2 className='fs-3'>Abilities</h2>
          <ul className="list-group list-group-flush">
            {datosPokemon.habilidades &&
              datosPokemon.habilidades.map((habilidad, index) => (
                <li key={index} className="list-group-item">
                  {habilidad.habilidad}
                </li>
              ))}
          </ul>
          <h2 className='fs-3'>Types:</h2>
          <ul className="list-group list-group-flush">
            {datosPokemon.tipos &&
              datosPokemon.tipos.map((tipo, index) => (
                <li key={index} className="list-group-item">
                  {tipo.tipo}
                </li>
              ))}
          </ul>
        </div>
      </div>
  )
}
