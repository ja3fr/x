import React, { useEffect, useState } from "react";

export const AdminRequest = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this with your actual backend endpoint
    fetch("/api/requests")  
      .then((res) => res.json())
      .then((data) => {
        setRequests(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Chargement...</p>;
  }

  return (
    <div className="overflow-x-auto mt-6 px-4">
        <div className="flex justify-center ">
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <th className="px-6 py-3 border-b">Demande ID</th>
            <th className="px-6 py-3 border-b">Date de soumission</th>
            <th className="px-6 py-3 border-b">Étudiant</th>
            <th className="px-6 py-3 border-b">Catégorie</th>
            <th className="px-6 py-3 border-b">Message de décision</th>
          </tr>
        </thead>
        <tbody>
          {requests.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4">
                Aucune demande trouvée.
              </td>
            </tr>
          ) : (
            requests.map((req) => (
              <tr key={req.id} className="hover:bg-gray-50 text-sm">
                <td className="px-6 py-3 border-b">{req.id}</td>
                <td className="px-6 py-3 border-b">{req.dateSoumission}</td>
                <td className="px-6 py-3 border-b">{req.etudiant}</td>
                <td className="px-6 py-3 border-b">{req.categorie}</td>
                <td className="px-6 py-3 border-b">{req.messageDecision}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};
