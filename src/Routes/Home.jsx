import Card from "../Components/Card";
import { useOdontologoStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { odontologos } = useOdontologoStates();
  
  return (
      <div>
        {odontologos.map( (odontologo) => (
          <Card key={odontologo.id} odontologo={odontologo} />
        ))}
      </div>
  );
};

export default Home;