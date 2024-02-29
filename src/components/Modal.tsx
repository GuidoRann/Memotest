interface modalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: modalProps) {
  return (
    <>
      {isOpen && (
        <div className="animate-fade-in animate-duration-300 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <section className="bg-[#045860] h-[200px] w-[300px] flex flex-col justify-center items-center rounded-2xl">
            <div className="w-full flex justify-center items-center h-1/2 text-white font-poppins text-xl font-bold">
              <h1>¡Felicitaciones GANASTE!</h1>
            </div>
            <button
              className="flex justify-center bg-teal-600 text-white px-2 py-2 md:px-7 md:py-3 cursor-pointer font-semibold rounded-md hover:scale-110 duration-300"
              onClick={onClose}
            >
              Volver a jugar
            </button>
          </section>
        </div>
      )}
    </>
  );
}
