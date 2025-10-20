import { Result } from "postcss";
import Calculadora from "./components/Calculadora";
import TasasDelDia from "./components/Tasasdeldia";
import Resultado from "./components/Resultado";

function App() {
  return (
    <div className="">
      <TasasDelDia />
      <Calculadora />
      <Resultado />
    </div>
  );
}

export default App;
