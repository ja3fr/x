import { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export const Historique = () => {
  const [studentDemandes, setStudentDemandes] = useState([]);
  const [demandes, setDemandes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");

  // Chargement des demandes soumises
  useEffect(() => {
    const rawStudent = localStorage.getItem("studentDemandes");
    if (rawStudent) {
      setStudentDemandes(JSON.parse(rawStudent));
    }
  }, []);

  // Chargement des décisions
  useEffect(() => {
    const stored = localStorage.getItem("demandes");
    if (stored) {
      setDemandes(JSON.parse(stored));
    }
  }, []);

  // Filtrage
  useEffect(() => {
    if (dateDebut && dateFin) {
      const filteredData = demandes.filter((d) => {
        const date = new Date(d.date);
        return date >= new Date(dateDebut) && date <= new Date(dateFin);
      });
      setFiltered(filteredData);
    } else {
      setFiltered(demandes);
    }
  }, [dateDebut, dateFin, demandes]);

  const total = studentDemandes.length;
  const approuvees = filtered.filter((d) => d.decision === "ACCEPTEE").length;
  const verifiees = filtered.filter((d) => d.decision === "REFUSEE").length;
  const restantes = total-(approuvees+verifiees);

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444'];
  const pieData = [
    { name: 'Total', value: total },
    { name: 'Approuvées', value: approuvees },
    { name: 'Vérifiées', value: verifiees },
    { name: 'Restantes', value: restantes },
  ];

  return (
    <Layout>
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-6xl mx-auto">
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
            <p className="text-4xl font-bold">{total}</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center shadow">
            <h3 className="text-lg font-semibold text-green-800 mb-1">Demandes approuvées</h3>
            <p className="text-4xl font-bold">{approuvees}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center shadow">
            <h3 className="text-lg font-semibold text-yellow-800 mb-1">Demandes refusées</h3>
            <p className="text-4xl font-bold">{verifiees}</p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg text-center shadow">
            <h3 className="text-lg font-semibold text-red-800 mb-1">Demandes restantes</h3>
            <p className="text-4xl font-bold">{restantes}</p>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-center mb-4 text-blue-800">Visualisation graphique</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                label
                outerRadius={100}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-10">
          <h2 className="text-xl font-bold text-center text-blue-800 mb-4">Historique détaillé</h2>
          {filtered.length === 0 ? (
            <p className="text-center text-gray-600">Aucune demande trouvée.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-center border border-gray-300 bg-white rounded-lg shadow">
                <thead className="bg-blue-100 text-blue-800 text-base">
                  <tr>
                    <th className="p-3 border">Nom</th>
                    <th className="p-3 border">Prénom</th>
                    <th className="p-3 border">Date</th>
                    <th className="p-3 border">Catégorie</th>
                    <th className="p-3 border">Décision</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((demande, index) => (
                    <tr key={index} className="border hover:bg-gray-50 transition duration-200">
                      <td className="border p-3 font-medium">{demande.nom}</td>
                      <td className="border p-3">{demande.prenom}</td>
                      <td className="border p-3">{demande.date}</td>
                      <td className="border p-3">{demande.categorie || demande.autreCategorie}</td>
                      <td
                        className={`border p-3 font-semibold ${
                          demande.decision === "ACCEPTEE"
                            ? "text-green-600"
                            : demande.decision === "REFUSEE"
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {demande.decision || "En attente"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};
