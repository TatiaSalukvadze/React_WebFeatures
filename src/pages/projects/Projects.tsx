import data from "../../data.json";
import "./projects.css";

function Projects() {
  return (
    <div className="projects">
      <p className="uperp">COMPLETED PROJECTS</p>
      <h1 className="uperh">
        Projects that are sign of our <span>Experience </span>
      </h1>
      <div className="prwrap">
        {data.map((el, ind) => (
          <div className="project" key={ind}>
            <img src={el.image} />
            <h3>{el.title}</h3>
            <p>{el.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
