export default function Difficulty() {
  return (
    <div className="h-screen flex flex-col items-center bg-[url('/images/fondo/magic.png')] bg-cover text-white">
      <div className="h-[50%] items-center">
        <h1>
          La dificultad modifica la cantidad de intentos para terminar el juego.
        </h1>
      </div>
      <div className="h-[50%]">
        <h3>Facil</h3>
        <h3>Normal</h3>
        <h3>Dificil</h3>
      </div>
    </div>
  );
}
