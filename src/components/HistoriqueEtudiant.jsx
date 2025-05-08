import { useEffect, useState } from "react";
import { Layout } from "./Layout";

export const HistoriqueEtudiant = () => {
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const response = await fetch("/api/etudiant/demandes-validees");
        if (response.ok) {
          const data = await response.json();
          setDemandes(data);
        } else {
          alert("Erreur lors du chargement des demandes.");
        }
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchDemandes();
  }, []);

  return (
    <div>
    <Layout>
      <div className="bg-white bg-opacity-90 p-8 rounded-xl ml-32 shadow-lg w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Historique de vos demandes traitées
        </h2>

        {demandes.length === 0 ? (
          <p className="text-center text-gray-600">Aucune demande trouvée.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-center border border-gray-300">
              <thead className="bg-blue-100 text-blue-800 text-base">
                <tr>
                  <th className="p-3 border">Titre</th>
                  <th className="p-3 border">Date</th>
                  <th className="p-3 border">Décision</th>
                  <th className="p-3 border">Justification</th>
                </tr>
              </thead>
              <tbody>
                {demandes.map((demande, index) => (
                  <tr key={index} className="border hover:bg-gray-50 transition duration-200">
                    <td className="border p-3 font-medium">{demande.titre}</td>
                    <td className="border p-3">{demande.date}</td>
                    <td
                      className={`border p-3 font-semibold ${
                        demande.decision === "ACCEPTEE"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {demande.decision === "ACCEPTEE"
                        ? "Acceptée"
                        : "Refusée"}
                    </td>
                    <td className="border p-3 text-gray-700">{demande.justification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
    </div>
  );
};
