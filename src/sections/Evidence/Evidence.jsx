import "./Evidence.css";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Evidence() {
const testimonials = [

{
company:"Transportes Rivera Norte",
name:"Carlos Rivera • Director de Operaciones",
text:"Con DOT logramos detectar inmediatamente cuando un conductor no autorizado intentó mover una unidad fuera del patio. La inmovilización evitó una pérdida importante."
},

{
company:"Logística del Bajío",
name:"Martha Salinas • Gerente de Seguridad",
text:"La configuración fue muy sencilla y ahora sabemos quién conduce cada unidad en todo momento."
},

{
company:"Grupo Carga Express",
name:"Luis Mendoza • Director General",
text:"La posibilidad de inmovilizar una unidad antes de perderla cambió completamente nuestra estrategia de seguridad."
},

{
company:"Transportes Monterrey",
name:"Jorge Hernández • Coordinador de Flota",
text:"Integrarlo con nuestro sistema GPS fue rápido y hoy contamos con una capa adicional de protección."
},

{
company:"Operadora del Pacífico",
name:"Ana López • Operaciones",
text:"DOT redujo nuestros tiempos de reacción y aumentó la confianza de nuestros clientes."
}

];

const [current, setCurrent] = useState(0);
const [direction, setDirection] = useState(1);

useEffect(()=>{

const interval = setInterval(()=>{

    setDirection(1);

    setCurrent(prev=>
        (prev+1)%testimonials.length
    );

},6000);

return ()=>clearInterval(interval);

},[]);

const nextTestimonial = () => {

    setDirection(1);

    setCurrent((prev)=>
        (prev+1)%testimonials.length
    );

}

const prevTestimonial = () => {

    setDirection(-1);

    setCurrent((prev)=>
        (prev-1+testimonials.length)%testimonials.length
    );

}

  return (

    <section className="evi" id="evidencia">

      {/* ===== Estadísticas ===== */}

      <div className="stats">

        <div className="stat">
          <h2>142</h2>
          <span>Vehículos protegidos</span>
        </div>

        <div className="stat">
          <h2>99.8%</h2>
          <span>Disponibilidad del sistema</span>
        </div>

        <div className="stat">
          <h2>21</h2>
          <span>Empresas clientes</span>
        </div>

        <div className="stat">
          <h2>3.8 M</h2>
          <span>Kilómetros monitoreados</span>
        </div>

      </div>

      {/* ===== Testimonios ===== */}

      <div className="testimonials">

        <h2>Lo que dicen nuestros clientes</h2>

        <div className="testimonial-card">

          <button
            className="arrow"
            onClick={prevTestimonial}
            >

            ◀

            </button>

          <AnimatePresence mode="wait">

            <motion.div

            key={current}

            className="testimonial-content"

            initial={{
                x: direction > 0 ? "100%" : "-100%",
                opacity: 0
            }}

            animate={{
                x: 0,
                opacity: 1
            }}

            exit={{
                x: direction > 0 ? "-100%" : "100%",
                opacity: 0
            }}

            transition={{
                duration:.45,
                ease:"easeInOut"
            }}

            >

            <p>

            "{testimonials[current].text}"

            </p>

            <h4>

            {testimonials[current].company}

            </h4>

            <span>

            {testimonials[current].name}

            </span>

            </motion.div>

            </AnimatePresence>
          
          <button
            className="arrow"
            onClick={nextTestimonial}
            >

            ▶

            </button>

        </div>

      </div>

    </section>

  );

};

export default Evidence;