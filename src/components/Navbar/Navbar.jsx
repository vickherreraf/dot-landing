import "./Navbar.css";
import logo from "../../assets/logo/DOT-black.png";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="DOT - Colaboración Inteligente" />
      </div>

      {/* Menú */}
      <ul className="nav-links">
        <li>
          <a href="#inicio">
          Inicio
          </a>
        </li>
        
        <li>
          <a href="#solucion">
          Solución
          </a>
        </li>

        <li>
          <a href="#como-funciona">
          Cómo funciona
          </a>
        </li>

        <li>
          <a href="#beneficios">
          Beneficios
          </a>
        </li>

        <li>
          <a href="#evidencia">
          Evidencia
          </a>
        </li>

        <li>
          <a href="#contacto">
          Contacto
          </a>
        </li>

      </ul>

      {/* Botón */}
      <a href="#contacto" className="cta-button">
        Solicitar Asesoría
      </a>

    </nav>
  );
}

export default Navbar;