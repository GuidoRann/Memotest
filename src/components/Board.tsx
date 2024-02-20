import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const IMG = [
  "/src/images/cartas/cristal.png",
  "/src/images/cartas/daga.png",
  "/src/images/cartas/flechas.png",
  "/src/images/cartas/hongo.png",
  "/src/images/cartas/llave.png",
  "/src/images/cartas/mano.png",
  "/src/images/cartas/monedas.png",
  "/src/images/cartas/pocion.png",
  "/src/images/cartas/polilla.png",
  "/src/images/cartas/sol.png",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function Board() {
  const [selected, setSelected] = useState<String[]>([]);
  const [guessed, setGuessed] = useState<String[]>([]);
  const [isActive, setIsActive] = useState<boolean>(false);

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

  // const handleFlip = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <div className="h-screen flex flex-col justify-between items-center bg-[url('/src/images/fondo/magic.png')] bg-cover">
      <Navbar />
      <div className="w-2/5 flex flex-col bg-yellow-100 items-center rounded-xl p-2">
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
                className="[transform-style: preserve-3d] transition-all duration-500"
              >
                {selected.includes(image) || guessed.includes(image) ? (
                  <img className={`max-w-full h-auto`} alt="icon" src={url} />
                ) : (
                  <img
                    className={`max-w-full cursor-pointer h-auto ${selected ? "" : "rotate-[180deg]"}`}
                    alt="icon"
                    src="/src/images/cartas/oculto.png"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
        onClick={() => {
          location.reload();
        }}
      >
        Reiniciar
      </button>
      <Footer />
    </div>
  );
}
