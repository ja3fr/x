import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const VerificationPopup = ({ expectedCode, onClose, onSuccess }) => {
  const [enteredCode, setEnteredCode] = useState("");
const navigate=useNavigate()
  const handleVerify = () => {
   navigate("/login")
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl text-center w-[350px]">
        <h2 className="text-lg font-bold mb-2 text-blue-600">Vérification par code</h2>
        <p className="text-gray-600 text-sm mb-4">Entrez le code que vous avez reçu :</p>
        <input
          type="text"
          value={enteredCode}
          onChange={(e) => setEnteredCode(e.target.value)}
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <div className="flex justify-center gap-4">
          <button onClick={handleVerify} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Valider
          </button>
          <button onClick={onClose} className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};
