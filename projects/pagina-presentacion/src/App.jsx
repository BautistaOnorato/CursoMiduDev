import { Navbar } from "./components/Navbar/Navbar"
import { Contacto } from "./components/Rutas/Contacto"
import { Experiencias } from "./components/Rutas/Experiencias"
import { Herramientas } from "./components/Rutas/Herramientas"
import { Inicio } from "./components/Rutas/Inicio"
import { Proyectos } from "./components/Rutas/Proyectos"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Inicio />
        <Proyectos />
        <Herramientas />
        <Experiencias />
        <Contacto />
      </main>
    </>
  )
}

export default App
