import "./Hero.css";
import {
  ShieldCheck,
  Truck,
  UserCheck,
  Radio,
  LockKeyhole
} from "lucide-react";

function Hero() {
  return (
    <section className="hero" id="inicio">

      {/* === HEADER ==== */}
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

  {/* Columna derecha */}
  <div className="hero-left">
    <p className="hero-description">
      DOT incorpora una nueva capacidad a las estrategias tradicionales 
      de recuperación mediante inmovilización inteligente, 
      ayudando a reducir el riesgo de pérdida de tus unidades.
    </p>

    <div className="hero-benefits">
      <span>✓ Reduce el riesgo de pérdida</span>
      <span>✓ Mayor probabilidad de recuperación</span>
      <span>✓ Configurable para tu operación</span>
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
  
  {/* Columna derecha */}
  <div className="hero-right">

  <div className="dashboard">

    <div className="dashboard-header">

      <div>
        <h3>Estado de la unidad</h3>
        <span>Actualizado hace 8 segundos</span>
      </div>

      <div className="status-dot"></div>

    </div>

    <div className="dashboard-card">
      <Truck size={22} />
    <div>
    <strong>Unidad MX-214</strong>
    <p>Protección activa</p>
  </div>
  </div>

  <div className="dashboard-list">

    <div className="dashboard-item">
      <ShieldCheck size={20}/>
      <span>Sistema protegido</span>
    </div>

    <div className="dashboard-item">
      <UserCheck size={20}/>
      <span>Conductor identificado</span>
    </div>

    <div className="dashboard-item">
      <LockKeyhole size={20}/>
      <span>Inmovilización disponible</span>
    </div>

    <div className="dashboard-item">
      <Radio size={20}/>
      <span>Comunicación estable</span>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
}

export default Hero;