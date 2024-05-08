import React, { useState } from "react";
import "./EventoForm.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

let apiEventos = "http://localhost:5174/eventos";

const EventoForm = () => {
  const [getNombre, setNombre] = useState("");
  const [getFecha, setFecha] = useState("");
  const [getUbicacion, setUbicacion] = useState("");
  const [getDescripcion, setDescripcion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resApi = await axios.post(apiEventos, {
        getNombre,
        getFecha,
        getUbicacion,
        getDescripcion,
      });
      console.log("Evento Registrado")
      console.log(resApi.data);
      setNombre("");
      setFecha("");
      setUbicacion("");
      setDescripcion("");
    } catch (error) {
      console.log("Error Evento", error);
    }
  };

  let redireccion = useNavigate();

  function mostarEventos() {
    setTimeout(() => {
      redireccion("/listaeventos");
    }, 1000);
  }

  return (
    <div>
      <h1>
        Registro de Eventos <b>|</b> <strong>CESDE</strong>
      </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <img src="./src/layouts/assets/nombre-evento.png" alt="" />
          Nombre del Evento <b>*</b>
        </label>
        <input
          type="text"
          placeholder="Nombre del evento"
          value={getNombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          required
        />

        <label htmlFor="">
          <img src="./src/layouts/assets/event.png" alt="" />
          Fecha del Evento <b>*</b>
        </label>
        <input
          type="datetime-local"
          name=""
          id=""
          value={getFecha}
          onChange={(e) => {
            setFecha(e.target.value);
          }}
          required
        />

        <label htmlFor="">
          <img src="./src/layouts/assets/ubicacion-evento.png" alt="" />
          Ubicación del Evento <b>*</b>
        </label>
        <input
          type="text"
          placeholder="Digitar la ubicación del evento"
          value={getUbicacion}
          onChange={(e) => {
            setUbicacion(e.target.value);
          }}
          required
        />

        <label htmlFor="">
          <img src="./src/layouts/assets/descripcion-evento.png" alt="" />
          Descripciones del Evento <b>(Opcional)</b>
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Digitar las descripciones del evento"
          value={getDescripcion}
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
        ></textarea>

        <button className="button-register" type="submit">
          Registrar Evento
        </button>
        <button className="button-show" onClick={mostarEventos}>
          Mostrar Eventos
        </button>
      </form>
    </div>
  );
};

export default EventoForm;
