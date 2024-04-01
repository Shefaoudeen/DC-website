import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./Components/Work";
import Prime from "./Components/Prime";
import Video from "./Components/Video";
import Development from "./Components/Development";
import Layout from "./Pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Work />} />
          <Route path="prime" element={<Prime />} />
          <Route path="video" element={<Video />} />
          <Route path="development" element={<Development />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
