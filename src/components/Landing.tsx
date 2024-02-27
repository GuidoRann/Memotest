import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  const screenWidth = window.innerWidth;

  return (
    <div className="flex flex-col items-center h-screen text-center font-bold font-poppins text-transparent bg-[#222] bg-[url('/images/fondo/concrete-dark.png')] ">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-14 h-screen w-screen">
        <h1 className="text-white text-8xl">MemoMagic</h1>
        <Link
          to="/board"
          className="flex justify-center bg-blue-600 text-white gap-1 px-8 py-3 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
        >
          JUGAR
        </Link>
      </div>
      <Footer />
    </div>
  );
}
