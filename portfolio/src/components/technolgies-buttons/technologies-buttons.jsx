function TechnologiesButtons({ className, TechnologiesButtons = []}) {
    return (
        <div className={`technologies-buttons ${className}`}>
            {TechnologiesButtons.map((tech, index) => (
                <button key={index} className="btn btn-primary m-1" disabled>
                    {tech}
                    {console.log(tech)}
                </button>
            ))}
        </div>
    );
}

export default TechnologiesButtons;