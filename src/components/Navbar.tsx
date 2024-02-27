// import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="h-16 w-screen flex items-center justify-center bg-slate-800 bg-opacity-50 text-white rounded-b-3xl font-bold font-poppins">
      <section className="w-screen lg:w-[900px] flex items-center justify-between p-3 m-5">
        <a>Logo</a>
        <a className="hover:text-sky-300 transition-colors delay-50" href="/">
          Inicio
        </a>
      </section>
    </div>
  );
}
