import React from "react";
import "./EventoForm.css";

const EventoForm = () => {
  return (
    <div>
      <h1>Registro de Eventos <b>|</b> <strong>CESDE</strong></h1>
      <form action="">
        <label htmlFor=""><img src="./src/layouts/assets/nombre-evento.png" alt="" />Nombre del Evento</label>
        <input type="text" placeholder="Nombre del evento" />

        <label htmlFor=""><img src="./src/layouts/assets/event.png" alt=""/>Fecha del Evento</label>
        <input type="date" name="" id="" />

        <label htmlFor=""><img src="./src/layouts/assets/ubicacion-evento.png" alt="" />Ubicación del Evento</label>
        <input type="text" placeholder="Digitar la ubicación del evento" />

        <label htmlFor=""><img src="./src/layouts/assets/descripcion-evento.png" alt="" />Descripciones del Evento</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Digitar las descripciones del evento"
        ></textarea>

        <button>Registrar Evento</button>
        <button>Mostrar Eventos</button>
      </form>
    </div>
  );
};

export default EventoForm;
