import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <div className="flex flex-col items-center h-screen w-screen font-bold font-poppins text-transparent bg-[#333] bg-[url('/images/fondo/concrete-dark.png')]">
      <Navbar />
      <div className="flex flex-col items-center justify-center gap-14 h-screen container mx-auto">
        <h1 className="text-white text-[45px] md:text-[70px] lg:text-[90px] text-center animate-fade-in animate-delay-300 animate-duration-1000 text-stroke-orange-400 text-stroke-2">
          MemoMagic
        </h1>
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
