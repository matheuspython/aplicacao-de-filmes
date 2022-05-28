import React from 'react'
import ReactDOM from 'react-dom/client'

import {BrowserRouter as Router} from 'react-router-dom'
import { Rotas } from './Rotas'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Rotas />
    </Router>
  </React.StrictMode>
)
