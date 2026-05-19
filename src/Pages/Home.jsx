import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">

      <Navbar />

      {/* HERO SECTION */}
      <div className="pt-28 px-8 max-w-7xl mx-auto text-center">

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          Discover the real side of every country
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Go beyond highlights. Learn about safety, culture, cost, slang, weather,
          and the everyday reality before you travel.
        </p>

        {/* SEARCH BAR */}
        <div className="mt-10 flex justify-center">
          <div className="flex items-center w-full max-w-xl bg-white shadow-md border border-gray-200 rounded-full px-5 py-3">

            <input
              type="text"
              placeholder="Search a country... (e.g Japan, Kenya, France)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-gray-700"
            />

            <button className="bg-gradient-to-r from-sky-400 to-orange-400 text-white px-5 py-2 rounded-full hover:scale-105 transition">
              Explore
            </button>

          </div>
        </div>

        {/* TAGS */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-gray-500">
          <span className="bg-white px-4 py-1 rounded-full shadow-sm">Safety</span>
          <span className="bg-white px-4 py-1 rounded-full shadow-sm">Visa Info</span>
          <span className="bg-white px-4 py-1 rounded-full shadow-sm">Cost of Living</span>
          <span className="bg-white px-4 py-1 rounded-full shadow-sm">Culture</span>
          <span className="bg-white px-4 py-1 rounded-full shadow-sm">Weather</span>
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Home;

