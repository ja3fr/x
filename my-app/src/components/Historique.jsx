import { useState, useEffect } from "react";
import { Layout } from "./Layout";

export const Historique = () => {
  const [stats, setStats] = useState({
    total: 0,
    approuvees: 0,
    verifiees: 0,
    restantes: 0,
  });

  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");

  const fetchStats = async () => {
    try {
      const response = await fetch(`/api/demandes/stats?debut=${dateDebut}&fin=${dateFin}`);
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      } else {
        alert("Erreur lors de la récupération des statistiques.");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des statistiques :", error);
    }
  };

  useEffect(() => {
    if (dateDebut && dateFin) {
      fetchStats();
    }
  }, [dateDebut, dateFin]);

  return (
    <Layout>
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-4xl ml-2 mx-auto">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">Statistiques des Demandes</h2>

        <div className="flex justify-between gap-4 mb-6">
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium mb-1">Date de début :</label>
            <input
              type="date"
              value={dateDebut}
              onChange={(e) => setDateDebut(e.target.value)}
              className="border px-3 py-2 rounded focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label className="text-sm font-medium mb-1">Date de fin :</label>
            <input
              type="date"
              value={dateFin}
              onChange={(e) => setDateFin(e.target.value)}
              className="border px-3 py-2 rounded focus:ring focus:ring-blue-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg text-center shadow">
            <h3 className="text-lg font-semibold text-blue-800 mb-1">Total des demandes</h3>
            <p className="text-4xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center shadow">
            <h3 className="text-lg font-semibold text-green-800 mb-1">Demandes approuvées</h3>
            <p className="text-4xl font-bold">{stats.approuvees}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center shadow">
            <h3 className="text-lg font-semibold text-yellow-800 mb-1">Demandes vérifiées</h3>
            <p className="text-4xl font-bold">{stats.verifiees}</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg text-center shadow">
            <h3 className="text-lg font-semibold text-red-800 mb-1">Demandes restantes</h3>
            <p className="text-4xl font-bold">{stats.restantes}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
