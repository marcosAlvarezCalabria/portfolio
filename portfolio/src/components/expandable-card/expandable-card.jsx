import React, { useState } from 'react';
import { motion } from 'framer-motion';
import projectsDataEnglish from "../../assets/data/englishProjects.json";
import projectDataespañol from "../../assets/data/españolProjects.json";

export default function ExpandableCard() {
    const [isCardExpanded, setIsCardExpanded] = useState(false);
    const [expandedProjectId, setExpandedProjectId] = useState(null);
    const { projects } = projectDataespañol;

    const handleProjectShow = (projectId) => {
        setIsCardExpanded(expandedProjectId !== projectId);
        setExpandedProjectId(projectId === expandedProjectId ? null : projectId);
    };

    return (
        <div className="container">
            <div className="row">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`MagicCard col-12 ${expandedProjectId === index ? "col-md-12" : "col-md-8"} mb-3 mt-5`}
                        initial={{ scale: 1 }}
                        animate={{ scale: expandedProjectId === index ? 1.1 : 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        style={{
                            position: 'relative',
                            background: expandedProjectId === index ? '#333' : '#fff',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            marginBottom: expandedProjectId === index ? '40px' : "20px",
                            marginTop: expandedProjectId === index ? '40px' : "20px",
                            color: expandedProjectId === index ? "white" : "black",
                            transition: 'color 0.3s ease',
                        }}
                    >
                        <div
                            style={{
                                width: expandedProjectId === index ? "100%" : "100%",
                                gap: "1rem",
                                display: "flex",
                                flexDirection: "column",
                                padding: "1rem ",
                            }}
                        >
                            <div
                                style={{
                                    position: "relative",
                                  
                                }}
                            >
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h3
                                        style={{
                                            fontWeight: 600,
                                            fontSize: "1.4em",
                                           
                                        }}
                                    >
                                        {project.name}
                                        <i 
                                            className={`fa fa-angle-${expandedProjectId === index ? "down" : "up"} fa-lg ml-2`} 
                                            onClick={() => handleProjectShow(index)} 
                                            aria-hidden="true"
                                            style={{
                                                cursor: "pointer",
                                                color: expandedProjectId === index ? "white" : "black",
                                                
                                            }}
                                        ></i>
                                    </h3>
                                    <div>
                                        <a href={`${project.git}`} target="_blank" rel="noopener noreferrer">
                                            <i
                                                style={{ color: "black", backgroundColor: "yellow", marginRight: "10px" }}
                                                className="fa fa-github fa-lg"
                                                aria-hidden="true">
                                            </i>
                                        </a>
                                        <a href={`${project.link}`} target="_blank" rel="noopener noreferrer">
                                            <i
                                                style={{ color: "black", backgroundColor: "yellow" }}
                                                className="fa fa-link fa-lg"
                                                aria-hidden="true">
                                            </i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='row' style={{ overflowY: "auto", padding: "" }}>
                                <img
                                    className={`${expandedProjectId === index ? "col-md-8" : "col-md-12"}`}
                                    style={{
                                        transition: 'width 0.5s ease',
                                    }}
                                    alt="Project"
                                    src={project.image}
                                />
                                {expandedProjectId === index && (
                                    <section
                                        className='col-md-12'
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1rem",
                                            marginTop: '10px',
                                        }}
                                    >
                                        <p>
                                            {project.resume}
                                        </p>
                                    </section>
                                )}
                                <div className='d-flex row align-items-center'>
                                    {expandedProjectId === index && project.technologies.map((tech, index) => (
                                        <div key={index} className='ms-2 mt-2 badge text-bg-primary text-wrap rounded-pill border border-1 text-small' style={{ width: "auto" }}>
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
