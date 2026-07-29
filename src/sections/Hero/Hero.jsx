import "./Hero.css";
import inicioImage from "../../assets/images/img-inicio.png";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-header">
        <div className="hero-badge">
          Tecnología de Inmovilización Inteligente
        </div>

        <h1>
          La mejor forma de recuperar un vehículo es
          evitar que se lo lleven
        </h1>
      </div>

      <div className="hero-content">
        <div className="hero-left">
          <p className="hero-description">
            DOT detecta conductores no autorizados e inmoviliza la unidad de forma segura.
            Recibe alertas y actúa antes de perder tu vehículo y tu carga.
          </p>

          <div className="hero-benefits">
            <span>✓ Detiene la unidad ante un intento de robo</span>
            <span>✓ Protege tu camión, tu carga y tu operación</span>
            <span>✓ Se adapta a flotillas pequeñas y grandes</span>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn">
              Solicitar asesoría
            </button>

            <button className="secondary-btn">
              Cómo funciona
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img
              src={inicioImage}
              alt="Cámara inteligente de seguridad instalada dentro de un vehículo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
