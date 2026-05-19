import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-sky-50 text-gray-700 mt-20 border-t border-gray-200">

      <div className="max-w-7xl mx-auto px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">
            ReiseIQ
          </h2>

          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            Discover the real side of countries — beyond highlights and travel ads.  
            Honest insights for smarter travel decisions 🌍
          </p>
        </div>

        {/* EXPLORE */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-5">
            Explore
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li className="hover:text-sky-500 transition cursor-pointer">Destinations</li>
            <li className="hover:text-sky-500 transition cursor-pointer">Vibe Matcher</li>
            <li className="hover:text-sky-500 transition cursor-pointer">Travel Planner</li>
            <li className="hover:text-sky-500 transition cursor-pointer">AI Recommendations</li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-5">
            Connect
          </h3>

          <div className="flex gap-5 text-sm text-gray-600">
            <span className="hover:text-sky-500 transition cursor-pointer">Instagram</span>
            <span className="hover:text-sky-500 transition cursor-pointer">TikTok</span>
            <span className="hover:text-sky-500 transition cursor-pointer">Twitter</span>
          </div>

          <p className="text-gray-400 text-xs mt-8">
            © {new Date().getFullYear()} ReiseIQ — Explore reality before you travel.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;