import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"
import './global.css'
import { ContextProvider } from "./Contexts"

export function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ContextProvider>
  )
}