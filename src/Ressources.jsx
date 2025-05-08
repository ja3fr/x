import { useEffect, useState } from "react";
import { Layout } from "./components/Layout";

export const RessourcesEtudiant = () => {
  /* const [hasPsychRequest, setHasPsychRequest] = useState(false);

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const response = await fetch("/api/etudiant/demandes-validees");
        if (response.ok) {
          const data = await response.json();
          // Vérifie si au moins une demande est de type "aide psychologique"
          const found = data.some((demande) => demande.categorie === "aide psychologique");
          setHasPsychRequest(found);
        } else {
          alert("Erreur lors du chargement des demandes.");
        }
      } catch (error) {
        console.error("Erreur :", error);
      }
    };

    fetchDemandes();
  }, []);
 */
  return (
    <Layout>
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
          Ressources d’accompagnement psychologique
        </h2>

        {!1>0 ? (
          <p className="text-center text-gray-600">
            Vous n'avez pas encore fait de demande d'aide psychologique.
          </p>
        ) : (
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              ✨ **Merci pour votre confiance.** Voici quelques ressources utiles pour vous accompagner :
            </p>
            <ul className="list-disc list-inside">
              <li>
                📞 <strong>Ligne d’écoute universitaire</strong> : 80 10 20 30 (gratuite et confidentielle)
              </li>
              <li>
                📚 <strong>Guide de gestion du stress</strong> : <a className="text-blue-600 underline" href="https://example.com/guide-stress.pdf" target="_blank" rel="noreferrer">Télécharger le PDF</a>
              </li>
              <li>
                🌿 <strong>Conseils bien-être</strong> : pratiquer une activité physique, méditer 10 min/jour, garder une bonne routine de sommeil.
              </li>
              <li>
                🧠 <strong>Plateforme d’aide psychologique en ligne</strong> : <a className="text-blue-600 underline" href="https://www.therapify.tn" target="_blank" rel="noreferrer">www.therapify.tn</a>
              </li>
            </ul>
            <p>
              N'hésitez pas à reprendre contact si vous avez besoin d’un suivi supplémentaire 💙.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};
