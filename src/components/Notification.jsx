// src/components/Notification.jsx
import { useEffect } from "react";

export const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // auto-close after 3s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 right-6 z-50 bg-green-100 border border-green-500 text-green-700 px-6 py-3 rounded-lg shadow-md animate-fade-in-up">
      <p className="text-sm font-medium">🔔 {message}</p>
    </div>
  );
};
