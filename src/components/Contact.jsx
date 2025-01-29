import { Suspense, useState } from "react";
import "../styles/Contact.css";
import spinner from '../../public/assets/img/spinner.svg'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setIsLoading(true);
    e.preventDefault();

    // Validar datos antes de enviarlos al backend
    if (
      !formData.name ||
      !formData.phone ||
      !formData.correo ||
      !formData.mensaje
    ) {
      alert("Todos los campos son obligatorios.");
      setIsLoading(false);
      return ;
    }
    if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      alert("Por favor ingresa un nombre válido.");
      setIsLoading(false);
      return;
    }
    if (!/^\d+$/.test(formData.phone)) {
      alert("Por favor ingresa un número de teléfono válido.");
      setIsLoading(false);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      alert("Por favor ingresa un correo válido.");
      setIsLoading(false);
      return;
    }
    if (formData.mensaje.length < 10) {
      alert("El mensaje debe tener al menos 10 caracteres.");
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch(
        "https://backend-portafolio-letr.onrender.com/send",
        {
          origin: "https://matiasealianelli.github.io/portafolio-web/",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("¡Mensaje enviado con éxito!");
        setFormData({
          name: "",
          phone: "",
          correo: "",
          mensaje: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "No se pudo enviar el mensaje."}`);
        setIsLoading(false);
      }
    } finally {
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <section className="sections contacto" id="contacto">
      <h2 className="title titleSections">Contacto</h2>
      <p className="text-sobremi">
        Si quieres contactarme, puedes hacerlo a través de este formulario.
        Tengo las habilidades necesarias para hacer realidad tus proyectos
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <form id="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="form-control inputMail styleInputForm"
              value={formData.name}
              onChange={handleChange}
              placeholder="Escribi tu nombre"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Telefono
            </label>
            <input
              type="text"
              name="phone"
              className="form-control inputMail styleInputForm"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Escribi tu teléfono"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Correo
            </label>
            <input
              type="email"
              name="correo"
              className="form-control inputMail styleInputForm"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Escribi tu correo electronico"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              name="mensaje"
              className="form-control textareaForm styleInputForm" onChange={handleChange}
              value={formData.mensaje} placeholder="Escribi tu mensaje"></textarea>
          </div>
          {isLoading ? (
            <button className="btnForm btnLoader" disabled>  
              Enviando
              <img src={spinner} alt="spinner" className="spinner" />
            
            </button>
          ) : (
            <button
              type="submit"
              target="_blank"
              className="btnForm"
              onSubmit={handleSubmit}>
              Enviar Mensaje
            </button>
          )}
        </form>
      </Suspense>
    </section>
  );
}

export default Contact;