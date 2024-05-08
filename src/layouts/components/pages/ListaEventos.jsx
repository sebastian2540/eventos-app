import React, { useEffect, useState } from "react";
import "./ListaEventos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

let apiEventos = "http://localhost:5174/eventos";

const ListaEventos = () => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const obtenerEventos = async () => {
      const resApi = await axios.get(apiEventos);
      setEventos(resApi.data);
    };
    obtenerEventos();
  }, []);

  let redireccion = useNavigate();

  function registarEvento() {
    setTimeout(() => {
      redireccion("/");
    }, 1000);
  }

  return (
    <div className="container">
      <h2>
        Eventos Registrados <b>|</b> <strong>CESDE</strong>
      </h2>
      {eventos.map((item) => (
        <div key={item.id} className="evento">
          <h3>{item.getNombre}</h3>
          <p>
            <b>Fecha del Evento:</b> {item.getFecha}
          </p>
          <p>
            <b>Ubicacion del Evento:</b> {item.getUbicacion}
          </p>
          <p>
            <b>Descripcion del Evento</b> <br />
            {item.getDescripcion}
          </p>
        </div>
      ))}
      <button
        className="button-show-register"
        type="submit"
        onClick={registarEvento}
      >
        Registrar Evento
      </button>
    </div>
  );
};

export default ListaEventos;
