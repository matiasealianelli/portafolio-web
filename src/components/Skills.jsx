import "../styles/Skills.css";

function Skills() {
  return (
    <>
      <section className="sections skills" id="skills">
        <div className="contIconSkills image-container">
          <img
            src="./assets/img/icons8-html.svg"
            className="iconSkill"
            alt="icono html"
          />
          <img
            src="./assets/img/css.svg"
            className="iconSkill iconCss"
            alt="icono css"
          />
          <img
            src="./assets/img/icons8-javascript.svg"
            className="iconSkill"
            alt="icono Js"
          />
          <img
            src="./assets/img/icons8-oreja.svg"
            className="iconSkill"
            alt="icono Bootstrap"
          />
          <img
            src="./assets/img/icons8-react-48.svg"
            className="iconSkill"
            alt="icono React Js"
          />
          <img
            src="./assets/img/DesignResponsive.svg"
            className="iconSkill"
            alt="icono Responsive Design"
          />
        </div>
      </section>
    </>
  );
}

export default Skills;