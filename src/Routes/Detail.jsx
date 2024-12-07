import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [odontologo, setOdontologo] = useState({});
  const params = useParams();
  const url='https://jsonplaceholder.typicode.com/users/' + params.id;
  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      setOdontologo(res.data);
    });
  }, []);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico


  return (
    <>
      <img src="ctd-esp-fe3-final\public\images\doctor.jpg" alt="FotoOdontologo" />
      <h1>Detail Dentist id </h1>
      <h2>Nombre: {odontologo.name}</h2>
      <h3>Correo: {odontologo.email}</h3>
      <h4>Celular: {odontologo.phone}</h4>
      <h4>Sitio web: {odontologo.website}</h4>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  );
};

export default Detail;