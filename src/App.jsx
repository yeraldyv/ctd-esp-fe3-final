import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";


function App() {
  return (
      <div className="App">
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<Home/>} />
              <Route path="/favs" element={<Favs/>} />
              <Route path="/detail/:id" element={<Detail/>} />
              <Route path="/contact" element={<Contact/>} />
            </Route>
          </Routes>
      </div>
  );
}

export default App;
