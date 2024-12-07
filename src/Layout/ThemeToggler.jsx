import React, { useContext } from 'react';
import { useOdontologoStates } from '../Context/Context'; 

const ThemeToggler = () => {
  const { theme, toggleTheme } = useOdontologoStates();

  return (
    <button onClick={toggleTheme}>
      Cambiar a {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggler;