import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Board from "./components/Board";
import Difficulty from "./components/Difficulty";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/board" element={<Board />} />
          <Route path="/difficulty" element={<Difficulty />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
