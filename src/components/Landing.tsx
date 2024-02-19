import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Landing() {
  return (
    <div className="flex flex-col items-center h-screen text-center text-white bg-[url('/src/images/fondo/magic.png')] bg-cover">
      <Navbar />
      <div className="flex flex-col items-center gap-5 justify-evenly h-screen w-screen">
        <button
          className="flex justify-center bg-blue-600 text-white gap-1 px-8 py-3 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
          onClick={() => {
            window.location.href = "/board";
          }}
        >
          JUGAR
        </button>
      </div>
      <Footer />
    </div>
  );
}
