import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <>
      <section className="sections sobreMi" id="sobreMi">
        <h2 className="title titleSections">Sobre mi</h2>
        <div className="contSobreMi">
          <p className="text-sobremi">
            Soy Matías👋 Oriundo de Buenos Aires, Argentina, mejor conocida como
            &apos; la ciudad de la furia &apos;🤪. Soy Desarrollador Web Full
            Stack y Diseñador UX/UI en constante aprendizaje; con conocimientos
            en el stack MERN (MongoDB, Express.js, React, Node.js) para
            desarrollo.
          </p>
          <p className="text-sobremi">
            Actualmente emprendo un negocio en el cual brindo soluciones
            digitales de diferentes índoles a personas particulares,
            emprendedores o negocios; garantizando resultados innovadores y de
            calidad. Enfocado en optimizar la experiencia digital y resolver
            incidencias técnicas en entornos virtuales.
          </p>
        </div>
        <div>
          <a
            target="_blank" className="linkCertificado" title="Ver certificado validado con blockchain"
            href="https://validator.centrodeelearning.com/validator/R6bmnrrwhu">
            <i className="bi bi-box-arrow-in-right"></i> Ver certificado
            Desarrollador Web Full Stack
          </a>
        </div>
      </section>
    </>
  );
}

export default AboutMe;