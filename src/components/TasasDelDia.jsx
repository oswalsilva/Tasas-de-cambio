const TasasDelDia = () => {
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
          <span className="text-green-600 font-bold">1$</span>
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <span className="font-semibold text-gray-700">EURO:</span>
          <span className="text-green-600 font-bold">1$</span>
        </div>
        <div className="flex items-center gap-2 text-2xl">
          <span className="font-semibold text-gray-700">BINANCE:</span>
          <span className="text-green-600 font-bold">1$</span>
        </div>
      </div>
    </main>
  );
};

export default TasasDelDia;
