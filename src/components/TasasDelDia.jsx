const TasasDelDia = ({ dolar, euro, binance }) => {
  return (
    <main className="p-6">
      <h1
        className="text-6xl font-bold text-center  font-sans mb-6 
                 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text 
                 text-transparent"
      >
        TASAS DE CAMBIO
      </h1>
      <div
        className="flex justify-center items-center gap-5 p-4 
                  border-2 border-gray-300 rounded-xl shadow-lg 
                  bg-green-50 max-w-2xl m-auto"
      >
        <div className="flex items-center gap-2 text-2xl">
          <span className="font-semibold text-gray-700">BCV:</span>
          <span id="dolar" className="text-green-600 font-bold">
            {dolar}
          </span>
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <span className="font-semibold text-gray-700">EURO:</span>
          <span id="euro" className="text-green-600 font-bold">
            {euro}
          </span>
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <span className="font-semibold text-gray-700">BINANCE:</span>
          <span id="binance" className="text-green-600 font-bold">
            {binance}
          </span>
        </div>
      </div>
    </main>
  );
};

export default TasasDelDia;
