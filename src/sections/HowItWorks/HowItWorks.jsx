import "./HowItWorks.css";
import { useEffect, useRef, useState } from "react";

import {
  UserCheck,
  Truck,
  UserX,
  Radar,
  Siren,
  ShieldCheck
} from "lucide-react";

const videos = [
  "/videos/escena-1.mp4",
  "/videos/escena-2.mp4",
  "/videos/escena-3.mp4",
  "/videos/escena-4.mp4",
  "/videos/escena-5.mp4",
];

function HowItWorks(){
const [activeVideo, setActiveVideo] = useState(0);
const videoRefs = useRef([]);

useEffect(() => {
    const activeVideoElement = videoRefs.current[activeVideo];

    if (activeVideoElement) {
        activeVideoElement.currentTime = 0;
        activeVideoElement.play().catch(() => {});
    }
}, [activeVideo]);

const handleVideoEnded = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
};

return(

<section className="how" id="como-funciona">

    <div className="how-container">

        <span className="section-tag">
            {/*CÓMO FUNCIONA*/}
        </span>

        <h2>
            {/*Una nueva capacidad para proteger tus unidades*/}
            Cómo funciona 
        </h2>

        <p className="section-description">
            DOT combina hardware, inteligencia y acción para responder
            antes de que una pérdida se convierta en un problema operativo.
        </p>

        <div className="timeline">

            <div className="step">

                <div className="circle">
                1
                </div>

                <UserCheck size={34}/>

                <h3>Conductor Autorizado</h3>

                <p>
                Solo los operadores autorizados pueden iniciar la operación de la unidad.
                </p>


            </div>


            <div className="step">

                <div className="circle">
                2
                </div>

                <Truck size={34}/>

                <h3>Operación Normal</h3>

                <p>
                El vehículo trabaja con total normalidad mientras el conductor sea reconocido.
                </p>
            </div>


            <div className="step">

                <div className="circle">
                3
                </div>

                <UserX size={34}/>

                <h3>Intento de Robo</h3>

                <p>
                Un tercero intenta tomar el control de la unidad sin autorización.
                </p>
            </div>


            <div className="step">

                <div className="circle">
                4
                </div>

                <Radar size={34}/>

                <h3>Amenaza detectada</h3>

                <p>
                DOT identifica si el conductor no está autorizado o 
                detecta la presencia de un arma. 
                Activa inmediatamente el protocolo de seguridad.
                </p>
            </div>


            <div className="step">

                <div className="circle">
                5
                </div>

                <Siren size={34}/>

                <h3>Respuesta Automática</h3>

                <p>
                Se inmoviliza la unidad de forma segura y se envían alertas 
                inmediatas a las autoridades y al centro de monitoreo.
                </p>
            </div>

            <div className="step">

                <div className="circle">
                6
                </div>

                <ShieldCheck size={34}/>

                <h3>Robo Frustrado</h3>

                <p>
                La unidad queda inmovilizada, facilitando su recuperación y 
                evitando que continúe el robo.
                </p>

            </div>

        </div>
        <div className="animation">

            {videos.map((video,index)=>(

                <video

                    key={index}

                    ref={(el) => {
                        videoRefs.current[index] = el;
                    }}

                    className={`demo-video ${activeVideo===index ? "active" : ""}`}

                    src={video}

                    autoPlay={activeVideo === index}

                    muted

                    playsInline

                    preload="metadata"

                    onEnded={handleVideoEnded}

                />

            ))}

        </div>
    </div>
   

</section>

);

}

export default HowItWorks;