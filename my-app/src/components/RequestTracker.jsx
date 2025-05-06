import React from "react";

const RequestTracker = () => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white w-[900px] h-[148px]">
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="text-sm font-semibold">Type de demande:</label>
          <input
            type="text"
            className="border ml-2 px-2 py-1 rounded-md text-sm w-40"
          />
        </div>
        <div>
          <label className="text-sm font-semibold">Date de soumission:</label>
          <input
            type="text"
            className="border ml-2 px-2 py-1 rounded-md text-sm w-40"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">Voir détails</button>
      </div>
      
      <div className="relative flex items-center w-full">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300" />
        <div className="relative z-10 flex w-full justify-between">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 flex items-center justify-center border-2 border-green-600 bg-white rounded-full">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
            </div>
            <span className="text-xs mt-2">Demande Soumise</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 flex items-center justify-center border-2 border-green-600 bg-white rounded-full">
              <span className="w-3 h-3 bg-green-600 rounded-full"></span>
            </div>
            <span className="text-xs mt-2">Demande en Cours de Traitement</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 flex items-center justify-center border-2 border-gray-400 bg-white rounded-full">
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            </div>
            <span className="text-xs mt-2">Résultat en cours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestTracker;
