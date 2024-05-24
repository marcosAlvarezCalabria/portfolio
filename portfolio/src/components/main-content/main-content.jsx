import ProjectsCard from "../projects-card/projects-card";
import "./main-content.css"


function MainContent({ className }) {
    return (
        <div className={`d-flex row justify-content-end ${className}`}> 
             <div className="main-content mt-5 row p-4 col-md-6 overflow-hidden scroll-column ">
            <section className="col-md-10" id="about">
                <h2>Sobre mí</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, recusandae laborum cupiditate a, quos nihil vel illum possimus culpa quae mollitia cumque ratione natus corporis excepturi. Porro eius enim dignissimos? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vitae quam quidem nesciunt perferendis. Corporis magni laborum delectus molestiae ratione! Cumque cum dignissimos sapiente perspiciatis fuga voluptatibus! Culpa, tempora inventore!</p>
            </section>
            <section id="projects">
                <h2>Proyectos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt est veniam assumenda unde dicta explicabo accusamus dignissimos quidem saepe, reiciendis placeat, eligendi dolor velit distinctio provident quas exercitationem eaque ipsum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit porro rem quod qui ducimus quisquam mollitia eum, dicta nam, veniam vitae rerum unde officia aliquid nihil. Esse totam laborum similique?</p>
                <ProjectsCard className={"light"}/>
            </section>
            <section id="contact">
                <h2>Contacto</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam enim est numquam placeat natus blanditiis explicabo neque nulla sed harum amet quam, doloremque quod, rerum ratione fugiat, optio qui voluptas! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, nobis obcaecati soluta quo omnis non, atque rerum harum neque, illum optio labore tempore itaque fugit aut qui natus quis autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laudantium sit temporibus exercitationem accusantium, fugiat repellat, tempore, cum soluta voluptatum excepturi voluptates quasi nemo quis quaerat nulla distinctio rerum qui.</p>
            </section>
        </div>

        </div>
       
    );
}

export default MainContent;
