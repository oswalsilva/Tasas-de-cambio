import Calculadora from './components/Calculadora';
import TasasDelDia from './components/Tasasdeldia';
import Resultado from './components/Resultado';
import { useEffect, useState } from 'react';

function App() {
  const [tasaBinance, setTasaBinance] = useState(null);
  const [tasaEuro, setTasaEuro] = useState(null);
  const [tasaDolar, setTasaDolar] = useState(null);

  const [nombreMoneda, setNombreMoneda] = useState('DOLAR');
  const [montoIngresado, setMontoIngresado] = useState(0);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    fetch('https://bolivarrate.elbernv.com/tasas', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dolar = data.find((method) => {
          return method.nombre === 'DOLAR';
        });

        setTasaDolar(dolar.valor);

        const euro = data.find((method) => {
          return method.nombre === 'EURO';
        });

        setTasaEuro(euro.valor);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch('https://bolivarrate.elbernv.com/binance-promedio', { method: 'GET' })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dolarbinance = data.find((method) => {
          return method.nombre === 'BINANCE_USDT';
        });

        setTasaBinance(dolarbinance.promedio);
      });
  }, []);

  useEffect(() => {
    if (nombreMoneda === 'DOLAR') {
      const resultadoDolar = montoIngresado * Number(tasaDolar);
      setResultado(resultadoDolar.toFixed(2));
    } else if (nombreMoneda === 'EURO') {
      const resultadoEuro = montoIngresado * Number(tasaEuro);
      setResultado(resultadoEuro.toFixed(2));
    } else if (nombreMoneda === 'BINANCE') {
      const resultadoBinance = montoIngresado * Number(tasaBinance);
      setResultado(resultadoBinance.toFixed(2));
    }
  }, [nombreMoneda, montoIngresado]);

  return (
    <div className="">
      <TasasDelDia dolar={tasaDolar} euro={tasaEuro} binance={tasaBinance} />
      <Calculadora
        setNombreMoneda={setNombreMoneda}
        montoIngresado={montoIngresado}
        setMontoIngresado={setMontoIngresado}
      />
      <Resultado resultado={resultado} />
    </div>
  );
}

export default App;
