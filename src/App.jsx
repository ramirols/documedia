/* Componentes */
import FooterProgress from "./components/FooterProgress";
import Hero from "./components/Hero";

/* Vistas */
import Home from "./view/Home";

/* Estilos globales */
import "./App.css";

function App() {
  return (
    <div className="app">
      <Hero />
      <Home />
      <FooterProgress />
    </div>
  );
}

export default App;