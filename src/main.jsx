import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import {PokedexApp} from './components/PokedexApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PokedexApp/>
  </React.StrictMode>
)
