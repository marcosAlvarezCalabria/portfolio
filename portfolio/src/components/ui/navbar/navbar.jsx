import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../../contexts/language.context';
import ModeContext from '../../../contexts/mode.context';
import './navbar.css';

function NavbarComponent() {
    const { mode, toggleMode } = useContext(ModeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [navbarColor, setNavbarColor] = useState("black");
    const [sunColor, setSunColor] = useState("white");
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (navbarColor === "transparent") {
                setSunColor("white");
            } else {
                setSunColor("white");
            }

            if (scrollPosition <= 90 || screenWidth < 480) {
                setNavbarColor("black");
            } else {
                setNavbarColor("transparent");
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [mode, navbarColor, screenWidth]);

    const handleMode = () => {
        toggleMode();
    };

    const handleLanguage = () => {
        toggleLanguage();
    };
    const languageSelected = language.slice(0, 2).toUpperCase();
    console.log(screenWidth)

    return (
        <nav style={{ backgroundColor: navbarColor, maxHeight:"65px" }} className="navbar container-fluid sticky-top fixed-top">
        
            <div className="d-flex flex-column justify-content-start">
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={handleMode} type="checkbox" role="switch" id="flexSwitchCheckMode" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckMode">
                        <i 
                            style={{
                                backgroundColor: sunColor,
                                width: "24px",
                                borderRadius: "50%",
                                border: mode === "light" ? "solid 1px #000" : "none",
                                cursor: 'pointer',
                            
                            }}
                            className={`p-1 fa fa-${mode === "dark" ? "sun-o" : "moon-o"} mode-icon`}
                            aria-hidden="true"
                        ></i>
                    </label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={handleLanguage} type="checkbox" role="switch" id="flexSwitchCheckLanguage" />
                    <label className="" htmlFor="flexSwitchCheckLanguage">
                        <p className=' text-center language-icon'

                            style={{
                                backgroundColor: sunColor,
                                width: "24px",
                                height: "26px",
                                borderRadius: "24%",
                                cursor: 'pointer',
                                border: mode === "light" ? "solid 1px #000" : "none" // Aplicación condicional del borde
                            }}>{languageSelected}</p>
                    </label>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;
