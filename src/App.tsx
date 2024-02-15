import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Board from "./components/Board";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
