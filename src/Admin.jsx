import { useState, useEffect } from "react";
import { AdminRequest } from "./components/AdminRequest";
import { Layout } from "./components/Layout";
import { Notification } from "./components/Notification";

export const Admin = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    // 🔁 On récupère depuis studentDemandes (comme chez l'étudiant)
    const stored = localStorage.getItem("studentDemandes");
    if (stored) {
      const demandes = JSON.parse(stored);
      const last = demandes[demandes.length - 1];
      if (last) {
        setStudentName(`${last.nom} ${last.prenom}`);
        setShowNotification(true);
      }
    }
  }, []);

  return (
    <Layout>
      {showNotification && studentName && (
        <Notification
          message={`${studentName} a ajouté une demande`}
          onClose={() => setShowNotification(false)}
        />
      )}
      <div className="flex-col flex gap-8 ml-20">
        <AdminRequest />
      </div>
    </Layout>
  );
};
