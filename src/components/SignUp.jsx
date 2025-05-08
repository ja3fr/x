import { useState } from "react";
import AuthForm from "./AuthFormEtudiant";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [selectedRole, setSelectedRole] = useState(null); // "ADMIN" or "ETUDIANT"
  const navigate = useNavigate();

  const gotoAdminAuthForm = () => {
    navigate("/adminAuthForm");
  }
  const gotoEtudiantAuthForm = () => {
    navigate("/login");
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <img
        src="enicar.webp"
        alt="Enicar background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10">
        {!selectedRole ? (
          <div className="bg-white rounded-xl shadow-lg p-10 text-center w-[400px]">
            <img src="logoEnicar.jpg" alt="Logo" className="mx-auto w-40 mb-4" />
            <h1 className="text-xl font-semibold mb-2">Enicarthage Aide</h1>
            <p className="text-sm text-gray-600 mb-6">
              Choisissez votre rôle pour continuer :
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={gotoAdminAuthForm}
                className="bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              >
                Administrateur
              </button>
              <button
                onClick={gotoEtudiantAuthForm}
                className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                Étudiant
              </button>
            </div>
          </div>
        ) : (
          <AuthForm role={selectedRole} />
        )}
      </div>
    </div>
  );
};
