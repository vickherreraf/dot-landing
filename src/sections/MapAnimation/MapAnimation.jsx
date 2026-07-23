import "./MapAnimation.css";
import mapa from "../../assets/images/Mapa.svg";
import { motion } from "framer-motion";
import logo from "../../assets/logo/DOT.png";

function MapAnimation() {

return(

<div className="map-card">

    <img
    src={mapa}
    className="map-image"
    alt=""  
    />

    <svg
        className="animation-layer"
        viewBox="0 0 1000 1000"
    >
    {/* Estado normal (Azul) */}
    <motion.circle
        cx="380"
        cy="660"
        r="24"
        fill="#1F66F2"
        animate={{
            opacity: [1, 1, 0, 0, 0]
        }}
        transition={{
            duration: 6,
            times: [0, 0.45, 0.48, 0.50, 1],
            repeat: Infinity,
            ease: "linear"
        }}
    />

    {/* Analizando identidad (Negro) */}
    <motion.circle
        cx="380"
        cy="660"
        r="24"
        fill="#111111"
        style={{
            filter: "drop-shadow(0 0 14px rgba(0,0,0,.55))"
        }}
        animate={{
            opacity: [0, 0, 1, 1, 0],
            scale: [1, 1, 1, 1.25, 1]
        }}
        transition={{
            duration: 6,
            times: [0, 0.45, 0.50, 0.55, 1],
            repeat: Infinity,
            ease: "linear"
        }}
    />

    {/* Alerta (Rojo) */}
    <motion.circle
        cx="380"
        cy="660"
        r="24"
        fill="#FF3131"
        style={{
            filter: "drop-shadow(0 0 24px #FF3131)"
        }}
        animate={{
            opacity: [0, 0, 0, 1, 1]
        }}
        transition={{
            duration: 6,
            times: [0, 0.45, 0.55, 0.56, 1],
            repeat: Infinity,
            ease: "linear"
        }}
    />      
    </svg>

    <div className="alert-card">

        <div className="alert-icon">
            ⚠
        </div>

        <div className="alert-content">

            <h3>¡ALERTA!</h3>

            <p>
                Identidad desconocida del conductor
            </p>

            <button className="immobilize-btn">
                Inmovilizar vehículo
            </button>

        </div>

    </div>

    <div className="success-card">

        <div className="success-icon">
            ✓
        </div>

        <div>
            <h3>¡Vehículo protegido!</h3>

            <p>
                Inmovilización ejecutada correctamente.
            </p>
        </div>
    </div>

    <div className="final-screen">

        <img
            src={logo}
            alt="DOT"
            className="final-logo"
        />

        <h2>INMOVILIZACIÓN INTELIGENTE</h2>

        <p>
            Protege tus unidades ante robos.
        </p>

    </div>

</div>
);

}

export default MapAnimation;