import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const OdontologoStates = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const Context = ({ children }) => {
    const [favs, setFavs] = useState([lsFavs]);
    const [odontologos, setOdontologos] = useState([]);
    const [theme, setTheme] = useState('light');
    const url="https://jsonplaceholder.typicode.com/users";
  
    useEffect(() => {
      axios(url).then((res) => {
        console.log(res);
        setOdontologos(res.data);
      });
    }, []);

    useEffect(() => {
      localStorage.setItem("favs", JSON.stringify(favs));
    }, [favs]);

    useEffect(() => {
      localStorage.setItem("theme", theme);
      document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
      setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return(
        <OdontologoStates.Provider value={{ odontologos, favs, setFavs, theme, toggleTheme}}>
            {children}
        </OdontologoStates.Provider>
    );
};
export default Context;

export const useOdontologoStates = () => useContext(OdontologoStates);