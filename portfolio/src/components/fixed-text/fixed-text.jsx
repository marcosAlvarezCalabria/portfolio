import React from 'react';
import "./fixed-text.css";

function FixedText({ className }) {
    return (
        <div className={`${className} col-md-6 p-5 fixed-column align-content-center  p-3 vh-100`}>
            <h1 className='name-text'>Marcos Alvarez</h1>
            <h5>Web developer</h5>
            <nav className='nav mt-5'>
                <ul className='list-decoration-none'>
                    <li className='text-decoration-none'><a className='text-decoration-none' href="#about">Sobre mí</a></li>
                    <li><a className='text-decoration-none' href="#projects">Proyectos</a></li>
                    <li><a className='text-decoration-none' href="#skills">Skills</a></li>
                    <li><a className='text-decoration-none' href="#contact">Contacto</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default FixedText;
