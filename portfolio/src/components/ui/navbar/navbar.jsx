import React, { useContext, useEffect, useState } from 'react';
import LanguageContext from '../../../contexts/language.context';
import ModeContext from '../../../contexts/mode.context';
import './navbar.css';
import SwitchLabels from '../../switch/switch';

function NavbarComponent() {
    const { mode, toggleMode } = useContext(ModeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [navbarColor, setNavbarColor] = useState("black")
    const [sunColor, setSunColor] = useState("white")

    useEffect(() => {
        const handleScroll = ()=> {
            const scrollPosition = window.scrollY
            if( navbarColor=== "transparent" ){
                setSunColor("white")
            }else {
                setSunColor("white")
            }
        
        if (scrollPosition <=  90) {
            setNavbarColor("black")
                
        }else{
            setNavbarColor("transparent")
           
        };}
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[mode,navbarColor])
    

    const handleMode = () => {
        toggleMode();
    };

    const handleLanguage = () => {
        toggleLanguage();
    };

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <nav style={{ backgroundColor: navbarColor }} className="navbar container-fluid navbar-expand-lg sticky-top fixed-top">
        <div className="container-fluid">
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    <i
                        style={{backgroundColor: sunColor, width: "24px", borderRadius: "50%" ,cursor: 'pointer' }}
                        className={`p-1 fa fa-${mode === "dark" ? "sun-o" : "moon-o"}`}
                        aria-hidden="true"
                    ></i>
                </label>
            </div>
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={handleLanguage} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    <i
                        style={{backgroundColor: sunColor, width: "24px", borderRadius: "50%" ,cursor: 'pointer' }}
                        className={`fa fa-language" aria-hidden="true`}
                        aria-hidden="true"
                    ></i>
                </label>
            </div>

                
            </div>
    </nav>
    );
}

export default NavbarComponent;
