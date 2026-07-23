import "./Footer.css";
import logo from "../../assets/logo/DOT.png";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* Logo */}

                <div className="footer-brand">

                    <img
                        src={logo}
                        alt="DOT"
                    />

                    <p>
                        Seguridad Inteligente para flotas de transporte.
                    </p>

                </div>

                <div className="footer-divider"></div>

                {/* Links */}

                <nav className="footer-links">

                    <a href="#solucion">Solución</a>

                    <a href="#como-funciona">Cómo funciona</a>

                    <a href="#beneficios">Beneficios</a>

                    <a href="#contacto">Contacto</a>

                    <a href="#">Privacidad</a>

                    <a href="#">Términos</a>

                </nav>

                {/* Copyright */}

                <div className="footer-copy">

                    © 2026 DOT. Todos los derechos reservados.

                </div>

            </div>

        </footer>

    );

}

export default Footer;