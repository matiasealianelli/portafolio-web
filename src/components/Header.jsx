import "../styles/Header.css";

function Header() {
    return <>
    <header>
        <a href="https://matiasealianelli.vercel.app/" className="enlace">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-code-slash codeHeader"
            viewBox="0 0 16 16">
            <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
          </svg>
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
      className="bi bi-list menu-hamburguesa" viewBox="0 0 16 16" onClick={() => {
        const menuHamburguesa = document.querySelector(".menu-hamburguesa");
        const menuExit = document.querySelector(".menu-exit");
        const nav = document.querySelector("nav");
        if (window.matchMedia("(max-width: 767px)").matches) {
          menuHamburguesa.addEventListener("click", () => {
            nav.classList.add("active");
            menuHamburguesa.style.display = "none";
            menuExit.style.display = "block";
          });
        
          menuExit.addEventListener("click", () => {
            nav.classList.remove("active");
            menuExit.style.display = "none";
            menuHamburguesa.style.display = "block";
          });
        
          document.querySelectorAll("nav a").forEach((link) => {
            link.addEventListener("click", () => {
              nav.classList.remove("active");
              menuExit.style.display = "none";
              menuHamburguesa.style.display = "block";
            });
          });
          }
        }}>
      <path fillRule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x-lg menu-exit"
      viewBox="0 0 16 16">
      <path
        d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
    </svg>
        <nav>
          <a href="https://matiasealianelli.vercel.app/#proyectos" className="enlace">
            Proyectos
          </a>
          <a href="https://matiasealianelli.vercel.app/#skills" className="enlace">
            Habilidades
          </a>
          <a href="https://matiasealianelli.vercel.app/#sobreMi" className="enlace">
            Sobre mi
          </a>
          <a href="https://matiasealianelli.vercel.app/#contacto" className="enlace">
            Contacto
          </a>
        </nav>
      </header>

    </>;
}

export default Header;