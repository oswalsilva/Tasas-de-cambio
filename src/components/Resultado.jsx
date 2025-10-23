function Resultado({ resultado }) {
  {
    return (
      <div
        className="flex justify-center items-center gap-5 p-4 mt-5
                  border-2 border-gray-300 rounded-xl shadow-lg 
                  bg-green-50 max-w-2xl m-auto"
      >
        <span className="font-semibold text-gray-700  text-2xl">
          <h2 className="">Resultado: {resultado}</h2>
        </span>
      </div>
    );
  }
}

export default Resultado;
