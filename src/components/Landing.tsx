import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <div className="flex flex-col items-center h-screen w-screen font-bold font-poppins text-transparent bg-[#045860] bg-[url('/images/fondo/concrete-dark.png')]">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen container mx-auto">
        <h1 className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-[60px] md:text-[80px] lg:text-[100px] text-center animate-fade-in animate-delay-300 animate-duration-1000 p-3 mb-8 font-MagicFunk">
          MemoMagic
        </h1>
        <Link
          to="/board"
          className="flex justify-center bg-[#045860] text-white px-14 py-5 cursor-pointer font-semibold rounded-md hover:scale-110 duration-300"
        >
          JUGAR
        </Link>
      </div>
      <Footer />
    </div>
  );
}
