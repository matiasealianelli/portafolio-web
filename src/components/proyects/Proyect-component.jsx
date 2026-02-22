import { useState } from "react";
import "../../styles/proyects-styles/Proyect-component.css";
import "../../index.css";
import proyects from "./Proyects.json";

const ProyectComponent = () => {
  const [showAll, setShowAll] = useState(false);

  const handle = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <section className="sections proyectos" id="proyectos">
        <div>
            <h2 className="title titleSections">Proyectos</h2>
        </div>
        <div className="contProyectos">
          {proyects.slice(0, showAll ? proyects.length : 4).map((proyect) => (
            <div key={proyect.id} className="card mb-3 cardProyect" >
              <div className="row g-0 contCols">
                <div className="col-md-4 colImgCard">
                  <img
                    src={proyect.image}
                    className="img-fluid rounded-start imgCard"
                    alt={proyect.title}
                  />
                </div>
                <div className="col-md-8 colInfoCard">
                  <div className="card-body contInfoProject">
                    <h5 className="card-title">{proyect.title}</h5>
                    <a href="" className="card-text">
                      {proyect.description}
                    </a>
                    <div className="contUseSkills">
                      {Array.isArray(proyect.skills) &&
                        proyect.skills.map((skill) => (
                          <span key={skill} className="skillUse">
                            {skill}
                          </span>
                        ))}
                    </div>
                    <a
                      href={proyect.link}
                      target="_blank"
                      className="linkProyecto"
                      rel="noopener noreferrer">
                      Visitar Sitio Web
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
        </div>
        <button onClick={handle} className="verMasCards">
            {showAll ? "Ver menos proyectos" : "Ver mas proyectos"}
          </button>
      </section>
    </>
  );
};

export default ProyectComponent;