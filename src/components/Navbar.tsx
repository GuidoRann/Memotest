export default function Navbar() {
  return (
    <div className="h-16 w-screen flex bg-gradient-to-b text-white rounded-b-full font-bold bg-slate-900 bg-opacity-50">
      <section className="w-screen flex items-center justify-between p-3 m-5">
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
