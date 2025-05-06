import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div style={{ backgroundColor: "#2E86AB" }} className="text-white w-64 min-h-screen p-6 flex flex-col justify-between"
>
      <div className="flex-col items-center gap-4 mb-6">
        <img src="homme.png" alt="Profile" className="h-[60px] w-[60px] ml-[50px] rounded-full bg-yellow-600" />
        <div>
          <h2 className="text-lg font-semibold ml-[40px]">Sariletak</h2>
          <p className="text-sm">3ème année génie informatique</p>
        </div>
      </div>

      <nav className="flex flex-col gap-4">
        <Link to="/admin" className="p-2 rounded-lg">Accueil</Link>
        <Link to="/demande" className="p-2 hover:bg-blue-700 rounded-lg">Nouvelle demande</Link>
        <Link to="/ressources" className="p-2 hover:bg-blue-700 rounded-lg">Ressources et conseils</Link>
        <Link to="/historique" className="p-2 hover:bg-blue-700 rounded-lg">Historique</Link>
      </nav>

      <button className="mt-auto p-2 bg-white font-bold rounded-lg text-black">Se déconnecter</button>
    </div>
  );
};
