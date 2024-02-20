export default function Difficulty() {
  return (
    <div className="h-screen flex flex-col items-center bg-[url('/images/fondo/magic.png')] bg-cover text-white">
      <div className="h-[50%]">
        <p className="h-full w-screen flex justify-center items-center">
          La dificultad modifica la cantidad de intentos para terminar el juego.
        </p>
      </div>
      <div className="h-[50%] w-screen flex flex-col justify-start items-center">
        <p>Facil</p>
        <p>Normal</p>
        <p>Dificil</p>
      </div>
    </div>
  );
}
