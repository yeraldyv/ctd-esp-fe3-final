import React from "react";
import { Link } from "react-router-dom";
import ThemeToggler from "../Layout/ThemeToggler";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to="/">Home</Link>
      <Link to="/Favs">Favoritos</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <ThemeToggler />
      Change theme
    </nav>
  );
};

export default Navbar;
