import React from "react";
import Card from "../Components/Card";
import { useOdontologoStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useOdontologoStates();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.map((odontologo) => (
          <Card key={odontologo.id} odontologo={odontologo} />
        ))}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
