import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Request = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAutre, setShowAutre] = useState(false);
  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    setShowAutre(value === "AUTRE");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    
    formData.forEach((val, key) => {
      if (key === "justificatifs") {
        data.justificatifs = Array.from(formData.getAll("justificatifs")).map((f) =>
          typeof f === "object" ? f.name : f
        );
      } else {
        data[key] = val;
      }
    });

    data.status = "soumise";

    const demandes = JSON.parse(localStorage.getItem("studentDemandes")) || [];
    demandes.push(data);
    localStorage.setItem("studentDemandes", JSON.stringify(demandes));

    navigate("/student");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow max-w-xl mx-auto mt-10">
      <h2 className="text-xl font-bold">Nouvelle Demande</h2>
      
      <input type="text" name="nom" placeholder="Nom" required className="w-full p-2 border rounded" />
      <input type="text" name="prenom" placeholder="Prénom" required className="w-full p-2 border rounded" />
      <input type="date" name="date" required className="w-full p-2 border rounded" />
      <input type="text" name="titre" placeholder="Titre" required className="w-full p-2 border rounded" />
      <textarea name="description" placeholder="Description" required className="w-full p-2 border rounded"></textarea>
      
      <select name="categorie" required onChange={handleCategoryChange} className="w-full p-2 border rounded">
        <option value="">-- Catégorie --</option>
        <option value="TUTORAT">TUTORAT</option>
        <option value="AIDE_PSYCHOLOGIQUE">AIDE PSYCHOLOGIQUE</option>
        <option value="AMENAGEMENT_EXAMEN">AMENAGEMENT EXAMEN</option>
        <option value="AUTRE">AUTRE</option>
      </select>

      {showAutre && (
        <input type="text" name="autreCategorie" placeholder="Préciser la catégorie" className="w-full p-2 border rounded" />
      )}

      {/* ✅ Champ pour fichiers */}
      <div>
        <label className="block text-sm font-medium mb-1">Ajouter des justificatifs</label>
        <input
          type="file"
          name="justificatifs"
          multiple
          className="block w-full text-sm text-gray-500 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Soumettre</button>
    </form>
  );
};
