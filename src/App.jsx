import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./Components/Work";
import Prime from "./Components/Prime";
import Video from "./Components/Video";
import Development from "./Components/Development";
import Arrow from "./Components/Arrow";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/prime" element={<Prime />} />
        <Route path="/video" element={<Video />} />
        <Route path="/development" element={<Development />} />
      </Routes>
    </BrowserRouter>
  );
}
