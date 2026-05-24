import { useState } from "react";
import { useTranslation } from 'react-i18next';

function Navbar() {
    const [menuOpen, setMenuOpenState] = useState(false);
    const { t, i18n } = useTranslation();

    // Función hamburguesa, responsive navbar
    function setMenuOpen(value: boolean): void {
        setMenuOpenState(value);
    }

    return (
        <header className="fixed top-0 left-0 w-full z-10 bg-black backdrop-blur-md">
            <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-white font-bold text-xl">
                    Adrian G.
                </div>
                <ul className="hidden md:flex items-center gap-6 text-white">
                    <li><a href="#home">{t("nav.home")}</a></li>
                    <li><a href="#about">{t("nav.about")}</a></li>
                    <li><a href="#projects">{t("nav.works")}</a></li>
                    <li><a href="#skills">{t("nav.skills")}</a></li>
                    <li><a href="#contact">{t("nav.contact")}</a></li>
                </ul>

                <button onClick={() => setMenuOpen(!menuOpen)} 
                    className="md:hidden flex flex-col items-center space-y-1">

                    <span className="block w-5 h-0.5 bg-white"></span>
                    <span className="block w-5 h-0.5 bg-white"></span>
                    <span className="block w-5 h-0.5 bg-white"></span>
                </button>

                {menuOpen && (
                    <ul className="md:hidden right-0 z-50 absolute h-full w-full gap-6 text-white text-center">
                        <a href="#home"><li className=" bg-black pt-2" onClick={() => setMenuOpen(false)}>{t("nav.home")}</li></a>
                        <a href="#about"><li className="bg-black pt-2" onClick={() => setMenuOpen(false)}>{t("nav.about")}</li></a>
                        <a href="#projects"><li className="bg-black pt-2" onClick={() => setMenuOpen(false)}>{t("nav.works")}</li></a>
                        <a href="#skills"><li className="bg-black pt-2" onClick={() => setMenuOpen(false)}>{t("nav.skills")}</li></a>
                        <a href="#contact"><li className="bg-black pt-2 pb-2" onClick={() => setMenuOpen(false)}>{t("nav.contact")}</li></a>
                    </ul>
                )}
            </nav>
        </header>
    );
}

export default Navbar;