import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const IMG = [
  "/images/cartas/cristal.png",
  "/images/cartas/daga.png",
  "/images/cartas/flechas.png",
  "/images/cartas/hongo.png",
  "/images/cartas/llave.png",
  "/images/cartas/mano.png",
  "/images/cartas/monedas.png",
  "/images/cartas/pocion.png",
  "/images/cartas/polilla.png",
  "/images/cartas/sol.png",
]
  .flatMap((image) => [`a|${image}`, `b|${image}`])
  .sort(() => Math.random() - 0.5);

export default function Board() {
  const [selected, setSelected] = useState<String[]>([]);
  const [guessed, setGuessed] = useState<String[]>([]);
  const [times, setTimes] = useState<number>(0);
  const [clock, setClock] = useState<number>(0);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      setTimeout(() => setSelected([]), 500);
      setTimes(times + 1);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === IMG.length) {
      alert("Ganaste!");
      location.reload();
    }
  }, [guessed]);

  return (
    <div className="h-screen flex flex-col justify-between items-center bg-[url('/images/fondo/magic.png')] bg-cover">
      <Navbar />
      <div className="w-2/5 text-white bg-teal-600 rounded-lg p-2">
        <div className="flex flex-row">
          <div className="w-1/2 flex justify-center items-center">
            <button
              className="flex justify-center w-20 bg-blue-500 text-white p-1 cursor-pointer font-semibold rounded-md hover:bg-blue-400 duration-300"
              onClick={() => {
                location.reload();
              }}
            >
              Reiniciar
            </button>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <p className="p-1">
              Intentos: <span>{times}</span>
            </p>
            <p className="p-1">Tiempo:</p>
          </div>
        </div>
        <ul className="grid grid-cols-5 gap-2 rounded-md">
          {IMG.map((image) => {
            const [, url] = image.split("|");

            return (
              <li
                key={image}
                onClick={() =>
                  selected.length < 2 &&
                  setSelected((selected) => selected.concat(image))
                }
                className="[transform-style: preserve-3d] transition-all duration-500 rounded-xl"
              >
                {selected.includes(image) || guessed.includes(image) ? (
                  <img
                    className="max-w-full h-auto rounded-lg"
                    alt="icon"
                    src={url}
                  />
                ) : (
                  <img
                    className="max-w-full cursor-pointer h-auto rounded-lg"
                    alt="icon"
                    src="/images/cartas/oculto.png"
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
}
