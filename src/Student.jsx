import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";

export const Student = () => {
  const [demandes, setDemandes] = useState([]);
  const [decisions, setDecisions] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("studentDemandes");
    if (stored) {
      setDemandes(JSON.parse(stored));
    }

    const validated = localStorage.getItem("demandes");
    if (validated) {
      setDecisions(JSON.parse(validated));
    }
  }, []);

  // 🔍 Fonction pour retrouver la décision correspondante
  const getDecision = (demande) => {
    const match = decisions.find(
      (d) =>
        d.nom === demande.nom &&
        d.prenom === demande.prenom &&
        d.date === demande.date &&
        d.titre === demande.titre
    );
    return match?.decision || "En attente de traitement";
  };

  return (
    <Layout>
      <div className="p-8 w-full">
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-6">
          Mes demandes
        </h2>

        {demandes.length === 0 ? (
          <p className="text-center text-gray-600">Aucune demande trouvée.</p>
        ) : (
          <div className="flex justify-center">
            <table className="min-w-[800px] bg-white rounded-lg shadow text-sm text-center">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="px-6 py-3 border-b">Type</th>
                  <th className="px-6 py-3 border-b">Date</th>
                  <th className="px-6 py-3 border-b">Description</th>
                  <th className="px-6 py-3 border-b">Statut</th>
                </tr>
              </thead>
              <tbody>
                {demandes.map((demande, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-3 border-b">
                      {demande.categorie || demande.autreCategorie}
                    </td>
                    <td className="px-6 py-3 border-b">{demande.date}</td>
                    <td className="px-6 py-3 border-b text-left">
                      {demande.description}
                    </td>
                    <td
                      className={`px-6 py-3 border-b font-semibold ${
                        getDecision(demande) === "ACCEPTEE"
                          ? "text-green-600"
                          : getDecision(demande) === "REFUSEE"
                          ? "text-red-600"
                          : "text-blue-800"
                      }`}
                    >
                      {getDecision(demande) === "ACCEPTEE"
                        ? "Acceptée"
                        : getDecision(demande) === "REFUSEE"
                        ? "Refusée"
                        : "En attente de traitement"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};
