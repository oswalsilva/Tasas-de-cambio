function Calculadora({ setNombreMoneda, montoIngresado, setMontoIngresado }) {
  const handleChange = (event) => {
    setNombreMoneda(event.target.value);
  };

  return (
    <div className="flex flex-col h-full justify-center items-center gap-4 px-4">
      <label
        htmlFor="monto"
        className="flex justify-center items-center text-lg md:text-xl font-semibold text-center text-gray-800"
      >
        INDICA EL MONTO
      </label>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <input
          id="monto"
          type="number"
          value={montoIngresado}
          onChange={(e) => setMontoIngresado(e.target.value)}
          placeholder="$0.00"
          className="w-full block placeholder-green-400/70 rounded-lg border border-green-400 bg-white px-4 py-3 text-lg border-2 border-gray-300 rounded-xl shadow-lg bg-white min-h-[60px]"
        />

        <select
          onChange={handleChange}
          className="w-full sm:w-auto text-lg bg-green-200 p-3 rounded-lg border border-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 border-2 border-gray-300 rounded-xl shadow-lg bg-green-50 min-h-[60px]"
        >
          <option value={'DOLAR'}>DOLAR</option>
          <option value={'EURO'}>EURO</option>
          <option value={'BINANCE'}>BINANCE</option>
        </select>
      </div>
    </div>
  );
}

export default Calculadora;
