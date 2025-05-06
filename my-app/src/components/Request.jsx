import React, { useState } from 'react';

export const Request = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showAutreCategorie, setShowAutreCategorie] = useState(false);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setSelectedCategory(value);
    setShowAutreCategorie(value === 'AUTRE');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/demandes', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Demande envoyée avec succès !');
        form.reset();
        setShowAutreCategorie(false);
      } else {
        alert('Erreur lors de l\'envoi');
      }
    } catch (err) {
      console.error('Erreur réseau', err);
    }
  };

  return (
    <div className="w-[700px]   mt-4 p-8 bg-white shadow-md rounded-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Nouvelle Demande</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">

        {/* Nom */}
        <div >
          <label htmlFor="nom" className="block text-sm font-medium text-gray-700">Nom</label>
          <input type="text" id="nom" name="nom" required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Prénom */}
        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">Prénom</label>
          <input type="text" id="prenom" name="prenom" required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
          <input type="date" id="date" name="date" required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Titre */}
        <div>
          <label htmlFor="titre" className="block text-sm font-medium text-gray-700">Titre de la demande</label>
          <input type="text" id="titre" name="titre" required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" name="description" required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>

        {/* Catégorie */}
        <div>
          <label htmlFor="categorie" className="block text-sm font-medium text-gray-700">Catégorie</label>
          <select id="categorie" name="categorie" required
            onChange={handleCategoryChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">-- Choisir une catégorie --</option>
            <option value="TUTORAT">TUTORAT</option>
            <option value="AMENAGEMENT_EXAMEN">AMÉNAGEMENT EXAMEN</option>
            <option value="AIDE_PSYCHOLOGIQUE">AIDE PSYCHOLOGIQUE</option>
            <option value="AUTRE">AUTRE</option>
          </select>
        </div>

        {/* Autre catégorie si AUTRE */}
        {showAutreCategorie && (
          <div>
            <label htmlFor="autreCategorie" className="block text-sm font-medium text-gray-700">Précisez la catégorie</label>
            <input type="text" id="autreCategorie" name="autreCategorie"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Ex: Demande spécifique pour projet..."
            />
          </div>
        )}

        {/* Justificatifs */}
        <div>
          <label htmlFor="justificatifs" className="block text-sm font-medium text-gray-700">Ajouter des justificatifs</label>
          <input type="file" id="justificatifs" name="justificatifs" multiple
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
          />
        </div>

        {/* Bouton soumettre */}
        <div className="text-center">
          <button type="submit"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Soumettre la demande
          </button>
        </div>
      </form>
    </div>
  );
};
