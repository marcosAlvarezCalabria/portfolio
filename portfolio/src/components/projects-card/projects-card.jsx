import projectsDataEnglish from "../../assets/data/englishProjects.json";
import projectDataSpanish from "../../assets/data/spanishProjects.json";
import TechnologiesButtons from "../technolgies-buttons/technologies-buttons";
import "./projects-card.css"

function ProjectsCard({className}) {
    const { projects } = projectDataSpanish;
    //console.log(projects?.technologies[0])
    return (
        <>
            {projects.map((project, index) => (
                <div className={`card project-card mb-3 col-md-9 ${className}`} key={index}>
                    <img src={project?.image} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{project.name}</h5>
                        <p class="card-text">{project.resume}</p>
                        <TechnologiesButtons className={className} TechnologiesButtons={project.technologies}/>
                       
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProjectsCard;
