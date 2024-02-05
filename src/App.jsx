import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [citas, setCitas] = useState([]);
  const [nuevaCita, setNuevaCita] = useState({
    nombreMascota: '',
    nombreDueno: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

    
  const recibirDatos = (e) => {
    const { name, value } = e.target;
    setNuevaCita({ ...nuevaCita, [name]: value });
  };

  
  const agregarCita = () => {
    if (
      nuevaCita.nombreMascota &&
      nuevaCita.nombreDueno &&
      nuevaCita.fecha &&
      nuevaCita.hora &&
      nuevaCita.sintomas
    ) {
      setCitas([...citas, nuevaCita]);
      setNuevaCita({
        nombreMascota: '',
        nombreDueno: '',
        fecha: '',
        hora: '',
        sintomas: '',
      });
    } else {
      alert('Completar todos los datos de la cita');
    }
  };

  
  const borrarCita = (index) => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  };

  return (
    <div className="container">
      <h1 className='text-center py-4 bg-info-subtle'>Administrados de citas para mascotas</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre de mascota</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el nombre de la mascota"
            name="nombreMascota"
            value={nuevaCita.nombreMascota}
            onChange={recibirDatos}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre de dueño</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el nombre del dueño"
            name="nombreDueno"
            value={nuevaCita.nombreDueno}
            onChange={recibirDatos}
          />
        </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Fecha</label>
            <input
              type="date"
              className="form-control"
              name="fecha"
              value={nuevaCita.fecha}
              onChange={recibirDatos}
            />
          </div>
          <div className="col">
            <label className="form-label">Hora</label>
            <input
              type="time"
              className="form-control"
              name="hora"
              value={nuevaCita.hora}
              onChange={recibirDatos}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Síntomas</label>
          <textarea
            className="form-control"
            placeholder="Ingrese los síntomas"
            name="sintomas"
            value={nuevaCita.sintomas}
            onChange={recibirDatos}
          />
        </div>

        <button type="button" className="btn btn-primary" onClick={agregarCita}>
          Agregar nueva cita
        </button>
      </form>

      <div className="mt-4">
        {citas.map((cita, index) => (
          <div key={index} className="card w-25 mb-3">
            <div className="card-body">
              <h5 className="card-title">{cita.nombreMascota}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{cita.nombreDueno}</h6>
              <p className="card-text">
                <strong>Fecha:</strong> {cita.fecha} <br />
                <strong>Hora:</strong> {cita.hora} <br />
                <strong>Síntomas:</strong> {cita.sintomas}
              </p>
              <button className="btn btn-danger" onClick={() => borrarCita(index)}>
                Borrar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
