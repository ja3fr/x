import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VerificationPopup } from "./VerificationPopup"; // Crée ce fichier juste après

export const SignUpFormAdmin = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [generatedCode] = useState("123456"); // simule un code généré
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.endsWith("@enicar.ucar.tn")) {
      alert("L'adresse email doit se terminer par @enicar.ucar.tn");
      return;
    }

    if (password !== confirmPassword) {
      alert("Les mots de passe ne correspondent pas.");
      return;
    }

    // simuler envoi du code
    setShowPopup(true);
  };

  const handleCodeValidated = () => {
    alert("Compte créé avec succès !");
    setShowPopup(false);
    navigate("/"); // redirige vers accueil
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: "url('enicar.webp')" }}>
      {showPopup && (
        <VerificationPopup
          expectedCode={generatedCode}
          onClose={() => setShowPopup(false)}
          onSuccess={handleCodeValidated}
        />
      )}

      <div className="bg-white p-8 rounded-xl shadow-lg w-[600px] h-auto">
        <div className="text-center mb-4">
          <img src="logoEnicar.jpg" className="mx-auto w-[224px] h-[102px] mt-4" alt="logo" />
          <h2 className="text-xl font-semibold">Enicare</h2>
          <p className="text-gray-600 mb-4">Créer un compte utilisateur</p>
        </div>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} className="w-full px-3 py-2 border mb-4 rounded-lg" required />
          <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} className="w-full px-3 py-2 border mb-4 rounded-lg" required />
          <input type="email" placeholder="Adresse mail @enicar.ucar.tn" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border mb-4 rounded-lg" required />
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border mb-4 rounded-lg" required />
          <input type="password" placeholder="Confirmer mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full px-3 py-2 border mb-4 rounded-lg" required />

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Créer un compte
          </button>
        </form>
      </div>
    </div>
  );
};
