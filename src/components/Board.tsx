/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Modal from "./Modal";

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
  .flatMap((image) => [`a|${image}`, `b|${image}`]) //Crea una copia de la imagen y le agrega una letra a la URL para diferenciarlas
  .sort(() => Math.random() - 0.5); // Mezcla las tarjetas

// Precarga de imágenes al inicio de la aplicación
IMG.forEach((imageUrl) => {
  const img = new Image();
  img.src = imageUrl.split("|")[1];
});

export default function Board() {
  const [selected, setSelected] = useState<string[]>([]);
  const [guessed, setGuessed] = useState<string[]>([]);
  const [times, setTimes] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [endGameTime, setEndGameTime] = useState<string>("");

  const handleSortCards = () => {
    IMG.flatMap((image) => [`a|${image}`, `b|${image}`]); //Crea una copia de la imagen y le agrega una letra a la URL para diferenciarlas
    IMG.sort(() => Math.random() - 0.5); // Mezcla las tarjetas
  };

  // Reinicia el juego a default
  const handleResetGame = () => {
    handleSortCards();
    setSelected([]);
    setGuessed([]);
    setMinutes(0);
    setSeconds(0);
    setTimes(0);
    setIsFinished(false);
    clearTimeout(timer);
    setTimer(0);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const tick = () => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 59) {
          setMinutes((prevMinutes) => prevMinutes + 1);
          return 0;
        } else {
          return prevSeconds + 1;
        }
      });
      // Llamar nuevamente a setTimeout después de 1 segundo
      timer = setTimeout(tick, 1000);
    };

    // Iniciar el temporizador
    let timer = setTimeout(tick, 1000);

    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, [!isFinished]);

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }

      if (selected[0].split("|")[1] != selected[1].split("|")[1]) {
        setTimes(times + 1);
      }
      setTimeout(() => setSelected([]), 700);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === IMG.length) {
      setIsModalOpen(true);
      setEndGameTime(
        `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
      );
      setIsFinished(true);

      clearTimeout(timer);
    }
  }, [guessed]);

  return (
    <div className="h-screen flex flex-col justify-between items-center font-poppins bg-[#045860] bg-[url('/images/fondo/concrete-dark.png')] bg-center">
      <Navbar />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="w-[90%] xl:w-2/5 text-white bg-gradient-to-b from-teal-800 to-teal-700 rounded-lg p-3 md:text-2xl">
        <div className="flex flex-row">
          <div className="w-1/3 flex flex-col gap-[1px] justify-center items-center ">
            <button
              className="flex justify-center bg-teal-600 text-white px-2 py-2 md:px-7 md:py-3 cursor-pointer font-semibold rounded-md hover:scale-110 duration-300"
              onClick={handleResetGame}
            >
              Reiniciar
            </button>
          </div>
          <div className="w-2/3 flex flex-col justify-center items-end pr-1">
            <p className="p-2">
              Intentos: <span>{times}</span>
            </p>
            <p className="pb-2">
              {!isFinished
                ? `
              Tiempo: ${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
                : `Tiempo: ${endGameTime}`}
            </p>
          </div>
        </div>
        <ul className="grid grid-cols-4 md:grid-cols-5 gap-2 rounded-md">
          {IMG.map((image) => {
            const [, url] = image.split("|");

            return (
              <li
                key={image}
                onClick={() =>
                  selected.length < 2 &&
                  setSelected((selected) => selected.concat(image))
                }
                className="rounded-xl"
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
