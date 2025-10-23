function Calculadora({ setNombreMoneda, montoIngresado, setMontoIngresado }) {
  const handleChange = (event) => {
    setNombreMoneda(event.target.value);
  };

  {
    return (
      <div className="flex flex-col h-full justify-center items-center gap-5">
        <label
          htmlFor="monto"
          className="flex justify-center items-center text-xl text-back font-semibold text-center sm:text-3xl"
        >
          INDICA EL MONTO
        </label>

        <div className="flex gap-2 p-3 w">
          <input
            id="monto"
            type="number"
            value={montoIngresado}
            onChange={(e) => setMontoIngresado(e.target.value)}
            placeholder="$0.00"
            className="flex-1 block m placeholder-gray-400/70  rounded-lg border border-green-400 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-red-300 focus:ring-opacity-40 text-xl w-105 h-auto"
          />

          <select
            onChange={handleChange}
            className="mt-2 mb-2 text-xl bg-green-200 p-2 rounded-lg border border-green-400"
          >
            <option value={'DOLAR'}>DOLAR</option>
            <option value={'EURO'}>EURO</option>
            <option value={'BINANCE'}>BINANCE</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Calculadora;
