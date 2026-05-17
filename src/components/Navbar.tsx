import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpenState] = useState(false);

    // Función hamburguesa, responsive navbar
    function setMenuOpen(value: boolean): void {
        setMenuOpenState(value);
    }

    return (
        <header className="fixed top-0 left-0 w-full z-100">
            <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-white font-bold text-xl">
                    Adrian G.
                </div>
                <ul className="hidden md:flex items-center">
                    <li><a>Inicio</a></li>
                    <li><a>Sobre mí</a></li>
                    <li><a>Trabajos destacados</a></li>
                    <li><a>Habilidades</a></li>
                    <li><a>Contacto</a></li>
                </ul>

                <button onClick={() => setMenuOpen(!menuOpen)} 
                    className="md:hidden flex flex-col items-center space-y-1">

                    <span className="block w-5 h-0.5 bg-black"></span>
                    <span className="block w-5 h-0.5 bg-black"></span>
                    <span className="block w-5 h-0.5 bg-black"></span>
                </button>

                {menuOpen && (
                    <div className="md:hidden items-center absolute">
                        <a onClick={() => setMenuOpen(false)}>Inicio</a>
                        <a onClick={() => setMenuOpen(false)}>Sobre mí</a>
                        <a onClick={() => setMenuOpen(false)}>Trabajos destacados</a>
                        <a onClick={() => setMenuOpen(false)}>Habilidades</a>
                        <a onClick={() => setMenuOpen(false)}>Contacto</a>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;