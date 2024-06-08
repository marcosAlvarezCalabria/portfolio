import React from 'react';
import "./fixed-text.css";
import { useContext, useState, useEffect } from 'react';
import LanguageContext from '../../contexts/language.context';


function FixedText({ className }) {
    const {language} = useContext(LanguageContext);
    const [isSpanish, setIsSpanish] = useState(language === "spanish");
    const [decoration, setDecoration] = useState("about");

    const changeDecoration = () => {
        if(window.scrollY === 0){
          setDecoration("about")  
        }else if (window.scrollY > 20 && window.scrollY < 100){
            setDecoration("projects")
        }else if (window.scrollY > 100 && window.scrollY < 300){
            setDecoration("skills")
        }else if (window.scrollY > 300 && window.scrollY < 300){
            setDecoration("contact")
        }
    }
    window.addEventListener("scroll", changeDecoration)
   

    useEffect(() => {
        setIsSpanish(language === "spanish");
        console.log(window.scrollY)
    }, [language,window.scrollY]);

    console.log(decoration)
    return (
        <>
        
        <div className={`${className}  col-md-5 p-5 fixed-column  align-content-center vh-100`}>
        <div className=' mb-2'></div>
            <div className= "text">
            <h1 className= 'name-text'>Marcos Alvarez</h1>
            <h5 className=''>Web developer</h5>
            <nav className='nav d-none d-md-block'>
                <ul className=''>
                    <li><a className={`text-decoration-${decoration === "about" ? "none": "" }`} href="#about">{isSpanish ? "Sobre mí": "About me"}</a></li>
                    <li><a className={`text-decoration-${decoration === "projects" ? "none": ""}`} href="#projects">{isSpanish ? "Proyectos": "Projects"}</a></li>
                    <li><a className={`text-decoration-${decoration === "skills" ? "none": ""}`} href="#skills">Skills</a></li>
                    <li><a className={`text-decoration-${decoration === "contact" ? "none": ""}`} href="#contact">{isSpanish ? "Contacto": "Contact"}</a></li>
                    <span className='indicator' id='indicator'></span>
                </ul>
            </nav>

            </div>
           
        </div>
        </>
        
    );
}
export default FixedText;