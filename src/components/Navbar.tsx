export default function Navbar() {
  return (
    <div className="h-12 w-screen bg-gradient-to-b from-blue-800 to-blue-400 text-white rounded-b-xl font-bold">
      <section className="w-screen flex items-center justify-between p-3">
        <a>Logo</a>
        <a className="hover:text-sky-300 transition-colors delay-50" href="/">
          Inicio
        </a>
        <a className="hover:text-sky-300 transition-colors delay-50" href="">
          Dificultad
        </a>
      </section>
    </div>
  );
}
