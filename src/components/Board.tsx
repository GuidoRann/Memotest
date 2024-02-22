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
  const [selected, setSelected] = useState<String[]>([]);
  const [guessed, setGuessed] = useState<String[]>([]);
  const [times, setTimes] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [endGameTime, setEndGameTime] = useState<String>("");

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
  }, []);

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
    <div className="h-screen flex flex-col justify-between items-center bg-[url('/images/fondo/magic.png')] font-poppins bg-cover">
      <Navbar />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      <div className="sm:w-1/5 md:w-2/5 text-white bg-teal-600 rounded-lg p-2">
        <div className="flex flex-row">
          <div className="w-1/3 flex flex-col gap-2 justify-center items-center">
            <button
              className="flex justify-center items-center mb-1 h-[30px] bg-blue-500 text-white p-1 cursor-pointer font-semibold rounded-md hover:bg-blue-400 duration-300"
              onClick={handleResetGame}
            >
              Reiniciar
            </button>
          </div>
          <div className="w-1/3 flex justify-center items-center">
            <p>Dificultad:</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center">
            <p className="p-1">
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
        <ul className="grid grid-cols-4 md:grid-cols-5 gap-1 rounded-md">
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
