/* Componentes */
import FooterProgress from "./components/FooterProgress";
import Hero from "./components/Hero";
import ChatMenu from "./components/ChatMenu";

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
      <ChatMenu />
    </div>
  );
}

export default App;