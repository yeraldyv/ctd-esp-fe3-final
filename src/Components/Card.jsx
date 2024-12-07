import React from "react";
import { Link } from "react-router-dom"
import { useOdontologoStates } from "../Context/Context";

const Card = ({ odontologo }) => {

  const { setFavs } = useOdontologoStates();

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    setFavs((favs) => [...favs, odontologo]);
  }

  return (
    <div className="card">
        <Link to={`/Detail/${odontologo.id}`}>
          {/* En cada card deberan mostrar en name - username y el id */}
          <img src="ctd-esp-fe3-final\public\images\doctor.jpg" alt="FotoOdontologo" />
          <h3>{odontologo.name}</h3>
          <h3>{odontologo.username}</h3>
          <h3>{odontologo.id}</h3>
          {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        </Link>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
