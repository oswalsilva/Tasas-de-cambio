const TasasDelDia = ({ dolar, euro, binance }) => {
  return (
    <main className="p-4 sm:p-6 flex flex-col justify-center items-center w-full">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center font-sans mb-4 sm:mb-6
                 bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text 
                 text-transparent"
      >
        TASAS DE CAMBIO
      </h1>
      <div
        className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5 
                  p-3 sm:p-4 border-2 border-gray-300 rounded-xl shadow-lg 
                  bg-green-50 w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto "
      >
        <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl w-full justify-between sm:justify-center ">
          <span className="font-semibold text-gray-700">BCV:</span>
          <span id="dolar" className="text-green-600 font-bold">
            {dolar}
          </span>
        </div>

        <div className="hidden sm:block h-6 w-px bg-gray-300"></div>

        <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl w-full justify-between sm:justify-center">
          <span className="font-semibold text-gray-700">EURO:</span>
          <span id="euro" className="text-green-600 font-bold">
            {euro}
          </span>
        </div>

        <div className="hidden sm:block h-6 w-px bg-gray-300"></div>

        <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl w-full justify-between sm:justify-center">
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
