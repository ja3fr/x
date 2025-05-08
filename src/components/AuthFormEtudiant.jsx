import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { SuccessPopup } from "./SuccessPopup";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simule une authentification
    if (2 > 1) {
      const nomPrenom = email.split("@")[0]; // ex: "touka.lamouchi"
      const [prenom, nom] = nomPrenom.split(".");

      // Stocker dans le localStorage
      localStorage.setItem("prenom", prenom);
      localStorage.setItem("nom", nom);

      setSuccessMessage(`Connexion réussie en tant qu'étudiant`);
      setTimeout(() => {
        navigate("/student");
      }, 2000);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/enicar.webp')" }}
    >
      {successMessage && (
        <SuccessPopup message={successMessage} onClose={() => setSuccessMessage("")} />
      )}

      <div className="bg-white p-8 rounded-xl shadow-lg w-[650px] h-[658px]">
        <div className="text-center mb-4">
          <img src="logoEnicar.jpg" className="mx-auto w-[224px] h-[102px] mt-8" alt="Logo" />
          <h2 className="text-xl font-semibold">Enicarthage Aide</h2>
          <p className="text-gray-600 mb-2">Bienvenue sur Enicarthage Aide</p>
          <p className="text-gray-600 mb-4">
            Votre plateforme de soutien et d'aménagement
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              className="w-full px-3 py-2 border mb-4 h-[54px] rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email *"
              required
            />
          </div>
          <div className="mb-12 relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full h-[54px] px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300 pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe *"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
            </button>
          </div>

          <button
          
            type="submit"
            className="w-full bg-blue-600 h-[50px] text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Se connecter
          </button>
        </form>

        <p className="text-center text-sm text-blue-500 mt-4 cursor-pointer hover:underline">
          Mot de passe oublié ?
        </p>
        <p className="text-center text-sm text-blue-500 mt-4 hover:underline">
          <Link to="/creer-compte">Pas de compte ? Créez-en un</Link>
        </p>
      </div>
    </div>
  );
}
