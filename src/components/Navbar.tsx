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
        <header className="fixed top-0 left-0 w-full z-100">
            <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
                <div className="text-white font-bold text-xl">
                    Adrian G.
                </div>
                <ul className="hidden md:flex items-center">
                    <li><a>{t("nav.home")}</a></li>
                    <li><a>{t("nav.about")}</a></li>
                    <li><a>{t("nav.works")}</a></li>
                    <li><a>{t("nav.skills")}</a></li>
                    <li><a>{t("nav.contact")}</a></li>
                </ul>

                <button onClick={() => setMenuOpen(!menuOpen)} 
                    className="md:hidden flex flex-col items-center space-y-1">

                    <span className="block w-5 h-0.5 bg-black"></span>
                    <span className="block w-5 h-0.5 bg-black"></span>
                    <span className="block w-5 h-0.5 bg-black"></span>
                </button>

                {menuOpen && (
                    <div className="md:hidden items-center absolute">
                        <a onClick={() => setMenuOpen(false)}>{t("nav.home")}</a>
                        <a onClick={() => setMenuOpen(false)}>{t("nav.about")}</a>
                        <a onClick={() => setMenuOpen(false)}>{t("nav.works")}</a>
                        <a onClick={() => setMenuOpen(false)}>{t("nav.skills")}</a>
                        <a onClick={() => setMenuOpen(false)}>{t("nav.contact")}</a>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;