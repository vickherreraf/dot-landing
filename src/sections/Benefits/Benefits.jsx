import "./Benefits.css";
import van from "../../assets/images/van.jpg";

function Benefits() {

  return (
        <section className="benefits" id="beneficios">

        <div className="benefits-container">

        <div className="benefits-left">

        <div className="benefits-image">

            <img
                src={van}
                alt="Unidad"
                className="vehicle-image"
            />

            {/* Recuadro del vehículo */}
            <div className="vehicle-outline"></div>

            {/* Círculo sobre la cabina */}
            <div className="driver-circle"></div>

            {/* Tarjeta flotante */}
            <div className="vehicle-card">

                <h3>VAN #9283</h3>

                <div className="driver-status">
                    ✓ Conductor identificado
                </div>

                <p>Juan Pérez</p>

            </div>

            <div className="vehicle-box"></div>

            <div className="vehicle-card">

                <h3>VAN #9283</h3>

                <div className="driver-status">
                    ✔ Conductor identificado
                </div>

                <p>Juan Pérez</p>

            </div>
        </div>
    </div>

    <div className="benefits-right">

        <h2>Beneficios</h2>

        <div className="benefit-card">
            <h3>Reduce la dependencia del monitoreo humano</h3>
            <p>
            Automatiza la detección de eventos críticos, 
            disminuyendo errores operativos y optimizando 
            los costos de monitoreo.
            </p>
        </div>

        <div className="benefit-card">

            <h3>Protección incluso sin cobertura</h3>

            <p>
            La operación continúa operando aun cuando la unidad pierde señal, 
            manteniendo la capacidad de respuesta.
            </p>

        </div>

        <div className="benefit-card">

            <h3>Resistente a inhibidores de señal (Jammers)</h3>

            <p>
            La protección permanece activa incluso ante intentos 
            de bloqueo de comunicaciones.
            </p>

        </div>

        <div className="benefit-card">

            <h3>Compatible con tu operación</h3>

            <p>
            Integra la solución con plataformas
            de rastreo existentes.
            </p>

        </div>

    </div>

</div>

</section>
 );

}

export default Benefits;