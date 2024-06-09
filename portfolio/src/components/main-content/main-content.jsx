import React, { useContext, useEffect, useState } from "react";
import LanguageContext from "../../contexts/language.context";
import ExpandableCard from "../expandable-card/expandable-card";
import "./main-content.css";
import IconsSkills from "../icons-skills/icons-skills";
import ModeContext from "../../contexts/mode.context";

function MainContent({ className }) {
    const { language } = useContext(LanguageContext);
    const [isEspanol, setIsEspanol] = useState(language === "español");
    const [focus, setFocus] = useState("");
    const { mode } = useContext(ModeContext);

    const changeFocus = () => {
        const scrollY = window.scrollY;

        if (scrollY >= 0 && scrollY < 100) {
            setFocus("about");
        } else if (scrollY >= 100 && scrollY < 200) {
            setFocus("projects");
        } else if (scrollY >= 200 && scrollY < 300) {
            setFocus("skills");
        } else if (scrollY >= 300 && scrollY < 400) {
            setFocus("contact");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeFocus);
        return () => {
            window.removeEventListener("scroll", changeFocus);
        };
    }, []);

    useEffect(() => {
        setIsEspanol(language === "español");
    }, [language]);

    return (
        <div className={` row justify-content-end  ${className}`}>
            <div className="main-content row col-sm-10 col-md-7  justify-content-center scroll-column">
                <section className={`section col-md-10 ${focus === "about" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""}`} id="about">
                    <h2>{isEspanol ? "Sobre mí" : "About Me"}</h2>
                    <p>
                        {isEspanol
                            ? "Soy un desarrollador web con experiencia en crear aplicaciones modernas y receptivas. Me apasiona aprender nuevas tecnologías y mejorar mis habilidades. Mi objetivo es contribuir a proyectos innovadores y desafiantes."
                            : "I am a web developer with experience in creating modern and responsive applications. I am passionate about learning new technologies and improving my skills. My goal is to contribute to innovative and challenging projects."}
                    </p>
                </section>
                <section className={`section mt-5  col-md-10 ${focus === "projects" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""}`} id="projects">
                    <h2>{isEspanol ? "Proyectos" : "Projects"}</h2>
                    <p>
                        {isEspanol
                            ? "He trabajado en una variedad de proyectos, desde sitios web personales hasta aplicaciones empresariales complejas. Algunos de mis proyectos recientes incluyen una plataforma de comercio electrónico, un sistema de gestión de contenido y una aplicación de chat en tiempo real."
                            : "I have worked on a variety of projects, from personal websites to complex enterprise applications. Some of my recent projects include an e-commerce platform, a content management system, and a real-time chat application."}
                    </p>
                    <ExpandableCard />
                </section>
                <section className={`section col-md-10 ${focus === "skills" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""}`} id="skills">
                    <h2 className="mb-4">{isEspanol ? "Habilidades" : "Skills"}</h2>
                    <h6>
                        {isEspanol ? "- Lenguajes de programación." : "Programming Languages"}
                    </h6>
                    <IconsSkills skills="languages" />
                    <h6>
                        {isEspanol ? "- Librerías y frameworks." : "- Libraries & Frameworks"}
                    </h6>
                    <IconsSkills skills="libraries" />
                    <h6>
                        {isEspanol ? "- Herramientas y plataformas." : "- Tools & Platforms"}
                    </h6>
                    <IconsSkills skills="tools" />
                </section>
                <section className={`section col-md-10 ${focus === "contact" ? (mode === "dark" ? "focus-dark" : "focus-light") : ""}`} id="contact">
                    <h2>{isEspanol ? "Contacto" : "Contact"}</h2>
                    <p>
                        {isEspanol
                            ? "Puedes contactarme a través de mi correo electrónico o redes sociales. Estoy disponible para discutir nuevas oportunidades y colaborar en proyectos interesantes."
                            : "You can contact me via email or social media. I am available to discuss new opportunities and collaborate on interesting projects."}
                    </p>
                </section>
            </div>
        </div>
    );
}

export default MainContent;
