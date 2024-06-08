import React from 'react';
import "./fixed-text.css";
import { useContext, useState, useEffect } from 'react';
import LanguageContext from '../../contexts/language.context';
import ModeContext from '../../contexts/mode.context';


function FixedText({ className }) {
    const { language } = useContext(LanguageContext);
    const { mode } = useContext(ModeContext)
    const [isespañol, setIsespañol] = useState(language === "español");
    const [decoration, setDecoration] = useState("about");


    const [modeIsDark, setModeIsDark] = useState(mode === "dark")

    const changeDecoration = () => {
        if (window.scrollY === 0) {
            setDecoration("about")
        } else if (window.scrollY > 20 && window.scrollY < 100) {
            setDecoration("projects")
        } else if (window.scrollY > 100 && window.scrollY < 300) {
            setDecoration("skills")
        } else if (window.scrollY > 300 && window.scrollY < 300) {
            setDecoration("contact")
        }
    }
    window.addEventListener("scroll", changeDecoration)


    useEffect(() => {
        setIsespañol(language === "español");
        setModeIsDark(mode==="dark")
        console.log(window.scrollY)
    }, [language, window.scrollY, mode]);

    console.log(modeIsDark)
    return (
        <>

            <div className={`${className}  col-md-5 p-5 fixed-column  align-content-center vh-100`}>
                <div className=' mb-2'></div>
                <div className="text">
                    <h1 className='name-text'>Marcos Alvarez</h1>
                    <h5 className=''>Web developer</h5>
                    <nav className='nav d-none  d-md-block'>
                        <ul style={{listStyle: "none"}}  className='list-unstyled"'>

                            <div className='d-flex list'> {decoration === "about" && (<div className={`line line-${modeIsDark ? "light" : "dark"}`}></div>)}<li><a className={`text-decoration-none ${decoration === "about" && `list-${modeIsDark ? "light" : "dark"}`}`} href="#about">{isespañol ? "Sobre mí" : "About me"}</a></li></div>
                            <div className='d-flex list '> {decoration === "projects" && (<div className={`line line-${modeIsDark ? "light" : "dark"}`}></div>)}<li><a className={`text-decoration-none ${decoration === "projects" && `list-${modeIsDark ? "light" : "dark"}`}`} href="#projects">{isespañol ? "Proyectos" : "Projects"}</a></li> </div>
                            <div className='d-flex list'> {decoration === "skills" && (<div className={`line line-${modeIsDark ? "light" : "dark"}`}></div>)}<li><a className={`text-decoration-none ${decoration === "skills" && `list-${modeIsDark ? "light" : "dark"}`}`} href="#skills">Skills</a></li></div>
                            <div className='d-flex list '> {decoration === "contact" && (<div className={`line line-${modeIsDark ? "light" : "dark"}`}></div>)}<li><a className={`text-decoration-none  ${decoration === "contact" && `list-${modeIsDark ? "light" : "dark"}`}`} href="#contact">{isespañol ? "Contacto" : "Contact"}</a></li></div>
                            <span className='indicator' id='indicator'></span>
                        </ul>
                    </nav>

                </div>

            </div>
        </>

    );
}
export default FixedText;
