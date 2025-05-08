import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; // needs heroicons installed (optional)

export const SuccessPopup = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white border border-green-400 px-8 py-6 rounded-2xl shadow-2xl animate-fade-in-up w-[360px] text-center">
        
        <div className="flex justify-center mb-3">
          {/* You can use a real image instead */}
          <CheckCircleIcon className="w-14 h-14 text-green-500 animate-pop" />
        </div>

        <h2 className="text-xl font-bold text-green-700 mb-2">Succès !</h2>
        <p className="text-gray-800 text-sm">{message}</p>
      </div>
    </div>
  );
};
