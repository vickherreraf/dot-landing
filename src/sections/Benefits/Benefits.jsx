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
            <h3>Protege tu patrimonio</h3>
            <p>
            Reduce el riesgo de pérdida de activos
            mediante inmovilización inteligente.
            </p>
        </div>

        <div className="benefit-card">

            <h3>Mayor probabilidad de recuperación</h3>

            <p>
            Actúa antes de que el vehículo abandone
            la zona segura.
            </p>

        </div>

        <div className="benefit-card">

            <h3>Configuración flexible</h3>

            <p>
            Adapta reglas, usuarios y condiciones
            según tu operación.
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