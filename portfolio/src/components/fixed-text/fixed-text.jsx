import React from 'react';
import "./fixed-text.css";
import { useContext, useState, useEffect } from 'react';
import LanguageContext from '../../contexts/language.context';


function FixedText({ className }) {
    const {language} = useContext(LanguageContext)
    const [isSpanish, setIsSpanish] = useState(language === "spanish");
    //change color text when scrolling

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >=120){
          setColor(true)  
        }else{
            setColor(false)
        }
    }
    window.addEventListener("scroll", changeColor)
    console.log("hola", color)

    useEffect(() => {
        setIsSpanish(language === "spanish");
    }, [language]);

    
    return (
        <>
        
        <div className={`${className}  col-md-5 p-5 fixed-column  align-content-center vh-100`}>
        <div className=' mb-2'></div>
            <div className= "text">
            <h1 className= 'name-text'>Marcos Alvarez</h1>
            <h5 className=''>Web developer</h5>
            <nav className='nav d-none d-md-block'>
                <ul className='list-decoration-none'>
                    <li className='text-decoration-none'><a className='text-decoration-none' href="#about">{isSpanish ? "Sobre mí": "About me"}</a></li>
                    <li><a className='text-decoration-none' href="#projects">{isSpanish ? "Proyectos": "Projects"}</a></li>
                    <li><a className='text-decoration-none' href="#skills">Skills</a></li>
                    <li><a className='text-decoration-none' href="#contact">{isSpanish ? "Contacto": "Contact"}</a></li>
                    <span className='indicator' id='indicator'></span>
                </ul>
            </nav>

            </div>
           
        </div>
        </>
        
    );
}
export default FixedText;