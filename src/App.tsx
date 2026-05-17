import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      {/* navbar fuera del main para poder fijarlo en la parte superior de la pagina y que no se mueva al hacer scroll */}
      <Navbar />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}