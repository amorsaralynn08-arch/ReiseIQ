import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const Login = ({ setUser, setUserRole, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");
  const [isNewUser, setIsNewUser] = useState(false);
  const [loading, setLoading] = useState(false);

  // EMAIL AUTH
  const handleEmailAuth = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let userCredential;

      if (isNewUser) {
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      setUser(userCredential.user);
      setUserRole(role);

      onClose(); 
    } catch (error) {
      console.error("Auth error:", error.message);
      alert(error.message);
    }

    setLoading(false);
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);

      setUser(result.user);
      setUserRole("employee");

      onClose(); 
    } catch (error) {
      console.error("Google sign-in error:", error.message);
      alert(error.message);
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50">

      {/* MODAL BOX */}
      <div className="relative w-full max-w-md p-8 rounded-xl border border-white/10 bg-white/10 text-white backdrop-blur-xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-300 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">
          {isNewUser ? "Create Account" : "Welcome Back"}
        </h2>

        {/* EMAIL FORM */}
        <form onSubmit={handleEmailAuth} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-black/40 border border-white/10"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded bg-black/40 border border-white/10"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {isNewUser && (
            <select
              className="w-full p-3 rounded bg-black/40 border border-white/10"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="employee">Employee</option>
              <option value="employer">Employer</option>
            </select>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-white text-black p-3 rounded font-medium hover:scale-[1.02] transition"
          >
            {loading ? "Loading..." : isNewUser ? "Sign Up" : "Login"}
          </button>
        </form>

        {/* GOOGLE LOGIN */}
        <div className="mt-4 space-y-3">

          <button
            onClick={handleGoogleLogin}
            className="w-full border border-white/20 p-3 rounded hover:bg-white/10 transition"
          >
            Continue with Google
          </button>

          <p className="text-sm text-center text-gray-300">
            {isNewUser ? "Already have an account?" : "New here?"}{" "}
            <button
              className="text-white underline"
              onClick={() => setIsNewUser(!isNewUser)}
            >
              {isNewUser ? "Login" : "Sign up"}
            </button>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Login;