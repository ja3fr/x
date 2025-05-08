import React from "react";

export const RequestTracker = ({ demande }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white w-[900px]">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold">Type: {demande.categorie || demande.autreCategorie}</span>
        <span className="text-sm">Date: {demande.date}</span>
        <span className="text-sm font-medium text-blue-600">{demande.status}</span>
      </div>
      <div className="text-sm">{demande.description}</div>
    </div>
  );
}
