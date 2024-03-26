import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
//punem acolade pt ca nu vrem default export, ci obiectul cu componenta functie exportata
import { FavoritesContextProvider } from './store/favorites-context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* after wrapping, all components in app can interact with FavoritesContextProvider */}
		  <FavoritesContextProvider>

     <BrowserRouter>
		      <App />
		    </BrowserRouter>
      </FavoritesContextProvider>
  </React.StrictMode>,
)
