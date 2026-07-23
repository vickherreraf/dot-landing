import { useState } from "react";
import "./Contacts.css";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

function Contacts() {
    const [nombre, setNombre] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!nombre || !correo || !telefono) {

            alert("Completa los campos obligatorios.");
            return;

        }

        setLoading(true);
        setSuccess(false);

        try {

            // Crear FormData
            const formData = new FormData();

            formData.append("nombre", nombre);
            formData.append("empresa", empresa);
            formData.append("correo", correo);
            formData.append("telefono", telefono);
            formData.append("mensaje", mensaje);

            // Enviar al Apps Script
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbzMi9Qq4NDtpvhjknD1G-ZqRKXxmC9SNp-HfY8gWL3wigODxkP0q1r_NcF0VQI89_44/exec",
                {
                    method: "POST",
                    body: formData,
                    mode:"no-cors",
                }
            );

            setSuccess(true);

            setNombre("");
            setEmpresa("");
            setCorreo("");
            setTelefono("");
            setMensaje("");

        } catch (error) {

            console.error(error);
            alert("Ocurrió un error al enviar la información.");

        } finally {

            setLoading(false);

        }

    };

    console.log(success);
    
    return (

<section className="contact" id="contacto">

<div className="contact-container">

    {/* Lado izquierdo */}

    <div className="contact-info">

        <span className="contact-tag">
            Contacto
        </span>

        <h2>
            Solicita una asesoría personalizada.
        </h2>

        <p>

            Un especialista de DOT diseñará un plan
            adaptado a tu operación y volumen de flota.
            Sin compromiso.

        </p>

        <div className="contact-item">

            <div className="icon-box">
                <Mail size={20}/>
            </div>

            <div>

                <span>CORREO</span>

                <strong>
                    contacto@dot.security
                </strong>

            </div>

        </div>

        <div className="contact-item">

            <div className="icon-box">
                <Phone size={20}/>
            </div>

            <div>

                <span>TELÉFONO</span>

                <strong>
                    +52 (55) 4000 1234
                </strong>

            </div>

        </div>

        <div className="contact-item">

            <div className="icon-box">
                <MapPin size={20}/>
            </div>

            <div>

                <span>OFICINAS</span>

                <strong>
                    Ciudad de México
                </strong>

            </div>

        </div>

    </div>

    {/* Formulario */}

    <div className="contact-form">

        {

        success ?

        (

        <div className="success-card">

            <h3>

                ¡Gracias por contactarnos!

            </h3>

            <p>

                Hemos recibido tu solicitud correctamente.

                <br /><br />

                Un especialista de DOT se pondrá en contacto contigo
                en menos de 24 horas para conocer tu operación y
                ayudarte a proteger tu flota.

            </p>

        </div>

        )

        :

        (

        <form onSubmit={handleSubmit}>

            <label>Nombre</label>

            <input
                type="text"
                value={nombre}
                onChange={(e)=>setNombre(e.target.value)}
            />

            <label>Empresa</label>

            <input
                type="text"
                value={empresa}
                onChange={(e)=>setEmpresa(e.target.value)}
            />

            <div className="row">

                <div>

                    <label>Correo</label>

                    <input
                        type="email"
                        value={correo}
                        onChange={(e)=>setCorreo(e.target.value)}
                    />

                </div>

                <div>

                    <label>Teléfono</label>

                    <input
                        type="text"
                        value={telefono}
                        onChange={(e)=>setTelefono(e.target.value)}
                    />

                </div>

            </div>

            <label>Mensaje</label>

            <textarea

                rows="5"

                placeholder="Cuéntanos sobre tu flota y necesidades."

                value={mensaje}

                onChange={(e)=>setMensaje(e.target.value)}

            />

            <button
                type="submit"
                disabled={loading}
            >

                {

                loading

                ?

                "Enviando..."

                :

                <>

                    Solicitar Asesoría

                    <ArrowRight size={18}/>

                </>

                }

            </button>

        </form>

        )

        }

        </div>
</div>

</section>

);
}

export default Contacts;