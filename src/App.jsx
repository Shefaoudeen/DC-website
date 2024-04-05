import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prime from "./Components/Units/Prime";
import Video from "./Components/Units/Video";
import Development from "./Components/Units/Development";
import Layout from "./Pages/Layout";
import ScrollToTop from "./Components/ScrollToTop";
import Homepage from "./Pages/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/prime" element={<Prime />} />
          <Route path="video" element={<Video />} />
          <Route path="development" element={<Development />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
