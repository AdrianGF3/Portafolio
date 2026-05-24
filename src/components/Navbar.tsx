import { useState } from "react";
import { useTranslation } from 'react-i18next';

function Navbar() {
    const [menuOpen, setMenuOpenState] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const { t, i18n } = useTranslation();

    // Función hamburguesa, responsive navbar
    function setMenuOpen(value: boolean): void {
        setMenuOpenState(value);
    }

    //funcion para cambiar vandera
    const getFlagSrc = (lang: string): string => {
        switch (lang) {
            case 'es':
            case 'en':
                return `/${lang}.svg`;
            case 'ca':
            default:
                return `/${lang}.png`;
        }
    };

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
                        <a href="#home"><li className=" bg-black hover:text-purple-500 pt-2" onClick={() => setMenuOpen(false)}>{t("nav.home")}</li></a>
                        <a href="#about"><li className="bg-black hover:text-purple-500 pt-2" onClick={() => setMenuOpen(false)}>{t("nav.about")}</li></a>
                        <a href="#projects"><li className="bg-black hover:text-purple-500 pt-2" onClick={() => setMenuOpen(false)}>{t("nav.works")}</li></a>
                        <a href="#skills"><li className="bg-black hover:text-purple-500 pt-2" onClick={() => setMenuOpen(false)}>{t("nav.skills")}</li></a>
                        <a href="#contact"><li className="bg-black hover:text-purple-500 pt-2 pb-2" onClick={() => setMenuOpen(false)}>{t("nav.contact")}</li></a>
                    </ul>
                )}

                {/* Selector de idioma */}
                    <button
                        onClick={() => setLangMenuOpen(!langMenuOpen)}
                        className=" flex items-center p-2 focus:outline-none"
                    >
                        <img
                            src={getFlagSrc(i18n.language)}
                            alt={i18n.language}
                            className="w-6 h-4 rounded-sm object-cover"
                        />
                        <span className="ml-1">&#9662;</span>
                    </button>

                    {langMenuOpen && (
                            <ul className="py-2 text-center absolute h-full w-full right-0 mt-2 z-50">
                                <li>
                                    <button
                                        onClick={() => {
                                            i18n.changeLanguage('ca');
                                            setLangMenuOpen(false);
                                        }}
                                        className=" w-full bg-black text-white hover:text-purple-500 flex items-center justify-end pr-6 gap-2"
                                    >
                                        <img src="/ca.png" alt="Català" className="w-5 h-3 object-cover" />
                                        <span>Català</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            i18n.changeLanguage('es');
                                            setLangMenuOpen(false);
                                        }}
                                        className="pt-2 w-full bg-black text-white hover:text-purple-500 flex items-center justify-end pr-6 gap-2"
                                    >
                                        <img src="/es.svg" alt="Castellano" className="w-5 h-3 object-cover" />
                                        <span>Castellano</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={() => {
                                            i18n.changeLanguage('en');
                                            setLangMenuOpen(false);
                                        }}
                                        className="pt-2 pb-2 w-full bg-black text-white hover:text-purple-500 flex items-center justify-end pr-6 gap-2"
                                    >
                                        <img src="/en.svg" alt="English" className="w-5 h-3 object-cover" />
                                        <span>English</span>
                                    </button>
                                </li>
                            </ul>
                    )}
            </nav>
        </header>
    );
}

export default Navbar;