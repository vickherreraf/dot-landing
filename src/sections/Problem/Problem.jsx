import "./Problem.css";

import {
  Truck,
  CircleDollarSign,
  Package,
  BadgeDollarSign,
  Clock3
} from "lucide-react";

function Problem(){

return(

<section className="problem">

<div className="problem-container">

<p className="section-tag">

EL PROBLEMA

</p>

<h2>

Un solo robo puede afectar mucho más que una unidad.

</h2>

<p className="problem-text">

Cuando una unidad es robada, las consecuencias no terminan con la pérdida del vehículo.

Cada evento genera una cadena de impactos que afectan la operación y la rentabilidad.

</p>

<div className="problem-flow">

<div className="flow-card">
<Truck size={34} strokeWidth={2}/>
<h3>Unidad</h3>
<p>Inicio del evento de riesgo.</p>
</div>

<div className="flow-line"></div>

<div className="flow-card">
<CircleDollarSign size={34} strokeWidth={2}/>
<h3>Pérdida del activo</h3>
<p>Impacto económico inmediato.</p>
</div>

<div className="flow-line"></div>

<div className="flow-card">
<Package size={34} strokeWidth={2}/>
<h3>Incumplimiento con clientes</h3>
<p>Riesgo para la continuidad operativa.</p>
</div>

<div className="flow-line"></div>

<div className="flow-card">
<BadgeDollarSign size={34} strokeWidth={2}/>
<h3>Costos</h3>
<p>Gastos adicionales e imprevistos.</p>
</div>

<div className="flow-line"></div>

<div className="flow-card">
<Clock3 size={34} strokeWidth={2}/>
<h3>Tiempo muerto</h3>
<p>Menor productividad de la flota.</p>
</div>

</div>

</div>

</section>

)

}

export default Problem;