function Resultado({ resultado }) {
  return (
    <div
      className="flex justify-center items-center p-4 mt-4
                border-2 border-gray-300 rounded-xl shadow-lg 
                bg-green-50 w-full max-w-md mx-auto
                min-h-[80px] px-4"
    >
      <span className="font-semibold text-gray-700 text-center w-full">
        <h2 className="text-lg md:text-xl">
          Resultado:{' '}
          <span className="text-green-600 font-bold">{resultado}</span>
        </h2>
      </span>
    </div>
  );
}

export default Resultado;
