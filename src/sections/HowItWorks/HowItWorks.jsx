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

const stepRefs = useRef([]);

useEffect(() => {

    const observer = new IntersectionObserver(

        (entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    setActiveVideo(Number(entry.target.dataset.index));

                }

            });

        },

        {

            threshold:0.55

        }

    );

    stepRefs.current.forEach(step=>{

        if(step){

            observer.observe(step);

        }

    });

    return ()=>observer.disconnect();

},[]);

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

                <div
                    className="step"
                    data-index="0"
                    ref={(el)=>stepRefs.current[0]=el}
                ></div>

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
                <div
                    className="step"
                    data-index="1"
                    ref={(el)=>stepRefs.current[1]=el}
                ></div>
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
                <div
                    className="step"
                    data-index="2"
                    ref={(el)=>stepRefs.current[2]=el}
                ></div>
            </div>


            <div className="step">

                <div className="circle">
                4
                </div>

                <Radar size={34}/>

                <h3>Intruso detectado</h3>

                <p>
                DOT identifica inmediatamente al conductor no autorizado y confirma el intento de robo.
                </p>
                <div
                    className="step"
                    data-index="3"
                    ref={(el)=>stepRefs.current[3]=el}
                ></div>
            </div>


            <div className="step">

                <div className="circle">
                5
                </div>

                <Siren size={34}/>

                <h3>Respuesta Automática</h3>

                <p>
                Se envían alertas, se notifica a las autoridades y se ejecuta la inmovilización inteligente.
                </p>
                <div
                    className="step"
                    data-index="4"
                    ref={(el)=>stepRefs.current[4]=el}
                ></div>
            </div>

            <div className="step">

                <div className="circle">
                6
                </div>

                <ShieldCheck size={34}/>

                <h3>Robo Frustrado</h3>

                <p>
                La unidad queda inmovilizada, facilitando su recuperación y evitando que continúe el robo.
                </p>

            </div>

        </div>
        <div className="animation">

            {videos.map((video,index)=>(

                <video

                    key={index}

                    className={`demo-video ${activeVideo===index ? "active" : ""}`}

                    src={video}

                    autoPlay

                    muted

                    loop

                    playsInline

                    preload="metadata"

                />

            ))}

        </div>
    </div>
   

</section>

);

}

export default HowItWorks;