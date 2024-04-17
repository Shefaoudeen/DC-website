import { BrowserRouter, Route, Routes } from "react-router-dom";
import Prime from "./Components/Units/Prime";
import Video from "./Components/Units/Video";
import Development from "./Components/Units/Development";
import Layout from "./Pages/Layout";
import ScrollToTop from "./Components/ScrollToTop";
import Homepage from "./Pages/Homepage";
import Units from "./Components/Units";
import { useState } from "react";
import { Logo } from "./assets";

export default function App() {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2500);
  return (
    <BrowserRouter>
      <ScrollToTop />
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen w-full bg-white">
          <img src={Logo} className="w-[500px] h-[500px]" />
          <h1 className="font-bold text-5xl pt-5 text-[#298892]">
            DESIGN CLUB
          </h1>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="/units" element={<Units />} />
            <Route path="/prime" element={<Prime />} />
            <Route path="/video" element={<Video />} />
            <Route path="/development" element={<Development />} />
          </Route>
        </Routes>
      )}
    </BrowserRouter>
  );
}
