interface modalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: modalProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <section className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5">
            <button className="cursor-pointer" onClick={onClose}>X</button>
            <h1>¡GANASTE!</h1>
          </section>
        </div>
      )}
    </>
  );
}
