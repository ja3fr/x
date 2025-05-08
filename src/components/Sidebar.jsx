import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronUp, ChevronDown } from "lucide-react";

export const Sidebar = () => {
  const [showProfile, setShowProfile] = useState(false); // par défaut fermé
  const prenom = localStorage.getItem("prenom") || "Prénom";
  const nom = localStorage.getItem("nom") || "Nom";

  return (
    <div
      style={{ backgroundColor: "#2E86AB" }}
      className="text-white w-64 min-h-screen p-6 flex flex-col justify-between"
    >
      <div>
        {/* Toggle du bloc profil */}
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="bg-white text-blue-800 rounded-full shadow p-1"
          >
            {showProfile ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Bloc profil */}
        {showProfile && (
          <div className="flex-col items-center gap-4 mb-6">
            <img
              src="/homme.png"
              alt="Profile"
              className="h-[60px] w-[60px] ml-[50px] rounded-full bg-yellow-600"
            />
            <div>
              <h2 className="text-lg font-semibold ml-[20px] capitalize">
                {prenom} {nom}
              </h2>
              <p className="text-sm ml-[20px]">2ème année Génie Informatique</p>
            </div>
          </div>
        )}

        {/* Liens toujours visibles */}
        <nav className="flex flex-col gap-4">
          <Link to="/student" className="p-2 rounded-lg">
            Accueil
          </Link>
          <Link to="/demande" className="p-2 hover:bg-blue-700 rounded-lg">
            Nouvelle demande
          </Link>
          <Link to="/ressources" className="p-2 hover:bg-blue-700 rounded-lg">
            Ressources et conseils
          </Link>
          <Link to="/admin/historique" className="p-2 hover:bg-blue-700 rounded-lg">
            Historique
          </Link>
        </nav>
      </div>

      {/* Bouton de déconnexion */}
      <button
        className="mt-auto p-2 bg-white font-bold rounded-lg text-black hover:bg-gray-200"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Se déconnecter
      </button>
    </div>
  );
};
