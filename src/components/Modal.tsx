import confetti from "canvas-confetti";
import { useEffect } from "react";

interface modalProps {
  isOpen: boolean;
  onClose: () => void;
}

const defaults = {
  spread: 360,
  ticks: 50,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
  colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
};

function shoot() {
  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ["star"],
  });

  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 0.75,
    shapes: ["circle"],
  });
}


export default function Modal({ isOpen, onClose }: modalProps) {

  console.log(isOpen);

  useEffect(()=> {
    if(isOpen){
      setTimeout(shoot, 0);
      setTimeout(shoot, 50);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
    }
  }, [isOpen])
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
