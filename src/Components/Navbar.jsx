import { useState } from "react";
import Login from "./Login";

function Navbar({ user, setUser, setUserRole }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

          {/* LOGO */}
          <h1 className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-sky-500 to-orange-400 bg-clip-text text-transparent">
            ReiseIQ
          </h1>

          {/* NAV LINKS (optional but improves travel feel) */}
          <div className="hidden md:flex items-center gap-8 text-gray-600 text-sm">
            <a className="hover:text-sky-500 transition">Explore</a>
            <a className="hover:text-sky-500 transition">Destinations</a>
            <a className="hover:text-sky-500 transition">Vibes</a>
            <a className="hover:text-sky-500 transition">Community</a>
          </div>

          {/* LOGIN / PROFILE */}
          {!user ? (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-gradient-to-r from-sky-400 to-orange-400 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition"
            >
              Login
            </button>
          ) : (
            <div className="flex items-center gap-3 bg-white px-3 py-1.5 rounded-full shadow-sm border border-gray-200">
              
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-400 to-orange-400 flex items-center justify-center text-white font-bold">
                {user.email[0].toUpperCase()}
              </div>

              <span className="text-sm text-gray-700 hidden sm:block">
                {user.email}
              </span>

            </div>
          )}

        </div>
      </nav>

      {/* MODAL */}
      {showLogin && (
        <Login
          setUser={setUser}
          setUserRole={setUserRole}
          onClose={() => setShowLogin(false)}
        />
      )}
    </>
  );
}

export default Navbar;