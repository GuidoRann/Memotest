import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const IMG = [
  "/src/images/cristal.png",
  "/src/images/daga.png",
  "/src/images/flechas.png",
  "/src/images/hongo.png",
  "/src/images/llave.png",
  "/src/images/mano.png",
  "/src/images/monedas.png",
  "/src/images/pocion.png",
  "/src/images/polilla.png",
  "/src/images/sol.png",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.7);

export default function Board() {
  const [selected, setSelected] = useState<String[]>([]);
  const [guessed, setGuessed] = useState<String[]>([]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => setSelected([]), 500);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === IMG.length) {
      alert("Ganaste!");
      location.reload();
    }
  }, [guessed]);

  return (
    <div className="h-screen flex flex-col gap-5 items-center">
      <Navbar />
      <div className="w-2/5 flex flex-col items-center rounded-lg p-2 bg-slate-800">
        <ul className="grid grid-cols-5 gap-2 rounded-md ">
          {IMG.map((image) => {
            const [, url] = image.split("|");

            return (
              <li
                key={image}
                onClick={() =>
                  selected.length < 2 &&
                  setSelected((selected) => selected.concat(image))
                }
              >
                {selected.includes(image) || guessed.includes(image) ? (
                  <img className="max-w-full h-auto" alt="icon" src={url} />
                ) : (
                  <img
                    className="max-w-full h-auto"
                    alt="icon"
                    src="/src/images/oculto.png"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700 my-4"
        onClick={() => {
          setGuessed([]);
        }}
      >
        Reiniciar
      </button>
    </div>
  );
}
