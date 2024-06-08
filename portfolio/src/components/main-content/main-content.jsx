import React, { useContext, useEffect, useState } from "react";
import LanguageContext from "../../contexts/language.context";
import ExpandableCard from "../expandable-card/expandable-card";
import "./main-content.css";

function MainContent({ className }) {
    const { language } = useContext(LanguageContext);
    const [isespañol, setIsespañol] = useState(language === "español");

    useEffect(() => {
        setIsespañol(language === "español");
    }, [language]);



    return (
        <div className={`div-content d-flex row justify-content-end ${className}`}>
            <div className="main-content mt-5 row  col-sm-12 col-md-6 overflow-hidden  scroll-column">
                <section className="col-md-10" id="about">
                    <h2>{isespañol ? "Sobre mí" : "About Me"}</h2>
                    <p>
                        {isespañol
                            ? "Soy un desarrollador web con experiencia en crear aplicaciones modernas y receptivas. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades. Mi objetivo es contribuir a proyectos innovadores y desafiantes."
                            : "I am a web developer with experience in creating modern and responsive applications. I am passionate about learning new technologies and improving my skills. My goal is to contribute to innovative and challenging projects."}
                    </p>
                </section>
                <section className="col-md-9" id="projects">
                    <h2>{isespañol ? "Proyectos" : "Projects"}</h2>
                    <p>
                        {isespañol
                            ? "He trabajado en una variedad de proyectos, desde sitios web personales hasta aplicaciones empresariales complejas. Algunos de mis proyectos recientes incluyen una plataforma de comercio electrónico, un sistema de gestión de contenido y una aplicación de chat en tiempo real."
                            : "I have worked on a variety of projects, from personal websites to complex enterprise applications. Some of my recent projects include an e-commerce platform, a content management system, and a real-time chat application."}
                    </p>
                    <ExpandableCard />
                </section>
                <section className="mt-2" id="contact">
                    <h2>{isespañol ? "Contacto" : "Contact"}</h2>
                    <p>
                        {isespañol
                            ? "Puedes contactarme a través de mi correo electrónico o redes sociales. Estoy disponible para discutir nuevas oportunidades y colaborar en proyectos interesantes."
                            : "You can contact me via email or social media. I am available to discuss new opportunities and collaborate on interesting projects."}
                    </p>
                </section>
            </div>
        </div>
    );
}

export default MainContent;