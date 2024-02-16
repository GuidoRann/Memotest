import Navbar from "./Navbar";

export default function Landing() {
  return (
    <div className="flex flex-col items-center h-screen text-center text-white">
      <Navbar />
      <div className="flex flex-col items-center gap-5 justify-evenly h-screen w-screen">
        <h1 className="text-6xl text-yellow-100 py-20 font-bold">Memo Magic</h1>
        <button
          className="flex justify-center bg-blue-600 text-white gap-1 px-8 py-3 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
          onClick={() => {
            window.location.href = "/board";
          }}
        >
          JUGAR
        </button>
        <button
          className="group w-12 hover:w-44 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
          onClick={() => {
            window.open("https://www.linkedin.com/in/guido-rann-722458292/");
          }}
        >
          <svg
            y="0"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            width="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            height="100"
            className="w-8 h-8 shrink-0 fill-neutral-50"
          >
            <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
          </svg>
          <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
            Guido López
          </span>
        </button>
      </div>
    </div>
  );
}
