interface modalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: modalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <section className="bg-[#333]  h-[200px] w-[300px] rounded">
            <div className="flex justify-end ">
              <button
                className="flex justify-center items-center cursor-pointer text-blue-300 hover:text-blue-500 duration-100 bg-slate-700 hover:bg-slate-600 w-6 h-6 m-1 rounded-sm"
                onClick={onClose}
              >
                x
              </button>
            </div>
            <div className="h-3/4 flex justify-center items-center text-blue-300 font-poppins">
              <h1>¡Felicitaciones GANASTE!</h1>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
