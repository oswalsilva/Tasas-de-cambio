function Calculadora() {
  {
    return (
      <div className="ml-113 mr-120 flex flex-col gap-4">
        <label
          htmlFor="monto"
          className="flex justify-center items-center text-xltext-gray-500 dark:text-gray-300 text-xl "
        >
          INDICA EL MONTO
        </label>

        <div className="flex gap-2 p-3 w">
          <input
            id="monto"
            type="number"
            placeholder="$0.00"
            className="flex-1 block m placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-green-400 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-red-300 focus:ring-opacity-40 dark:border-blue-400 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300 text-xl"
          />

          <select className="mt-2 mb-2 text-xl bg-green-200 p-2 rounded-lg border border-green-400">
            <option>DOLAR</option>
            <option>EURO</option>
            <option>BINANCE</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Calculadora;
