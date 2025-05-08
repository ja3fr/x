import React, { useEffect, useState } from "react";

export const AdminRequest = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("studentDemandes");
    if (stored) {
      setRequests(JSON.parse(stored));
    }
  }, []);

  const handleDecision = (index, decision) => {
    const updatedRequests = [...requests];
    updatedRequests[index].decision = decision;
    setRequests(updatedRequests);

    const demandeAvecDecision = { ...updatedRequests[index] };

    const demandesFinales = JSON.parse(localStorage.getItem("demandes")) || [];
    demandesFinales.push(demandeAvecDecision);
    localStorage.setItem("demandes", JSON.stringify(demandesFinales));

    alert(`Décision "${decision}" enregistrée pour ${demandeAvecDecision.nom}`);
  };

  const handleVoirDetails = (demande) => {
    alert(`📝 Détails de la demande :
Nom : ${demande.nom}
Prénom : ${demande.prenom}
Date : ${demande.date}
Catégorie : ${demande.categorie || demande.autreCategorie}
Description : ${demande.description}
Justificatifs : ${demande.justificatifs?.join(", ") || "Aucun"}
`);
  };

  const handleVoirJustificatifs = (justificatifs) => {
    if (!justificatifs || justificatifs.length === 0) {
      alert("Aucun justificatif fourni.");
    } else {
      alert(`📎 Fichiers fournis :\n${justificatifs.join("\n")}`);
    }
  };

  return (
    <div className="overflow-x-auto mt-6 px-4">
      <div className="max-w-5xl w-full mx-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
              <th className="px-6 py-3 border-b">Demande ID</th>
              <th className="px-6 py-3 border-b">Date</th>
              <th className="px-6 py-3 border-b">Étudiant</th>
              <th className="px-6 py-3 border-b">Catégorie</th>
              <th className="px-6 py-3 border-b">Décision</th>
              <th className="px-6 py-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Aucune demande trouvée.
                </td>
              </tr>
            ) : (
              requests.map((req, index) => (
                <tr key={index} className="hover:bg-gray-50 text-sm">
                  <td className="px-6 py-3 border-b">{index + 1}</td>
                  <td className="px-6 py-3 border-b">{req.date}</td>
                  <td className="px-6 py-3 border-b">{`${req.nom} ${req.prenom}`}</td>
                  <td className="px-6 py-3 border-b">
                    {req.categorie || req.autreCategorie}
                  </td>
                  <td className="px-6 py-3 border-b font-semibold">
                    {req.decision === "ACCEPTEE" ? (
                      <span className="text-green-600">Acceptée</span>
                    ) : req.decision === "REFUSEE" ? (
                      <span className="text-red-600">Refusée</span>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                          onClick={() => handleDecision(index, "ACCEPTEE")}
                        >
                          Accepter
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                          onClick={() => handleDecision(index, "REFUSEE")}
                        >
                          Refuser
                        </button>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-3 border-b">
                    <div className="flex flex-col gap-1">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        onClick={() => handleVoirDetails(req)}
                      >
                        Voir détails
                      </button>
                      <button
                        className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                        onClick={() => handleVoirJustificatifs(req.justificatifs)}
                      >
                        Justificatifs
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
