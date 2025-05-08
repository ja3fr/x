import { Signup } from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Student } from "./Student";
import { Admin } from "./Admin";
import { NouvelleDemande } from "./NouvelleDemande";
import { SignUpForm } from "./components/SignUpFormEtudiant";
import { Historique } from "./components/Historique";
import { HistoriqueEtudiant } from "./components/HistoriqueEtudiant"; // tout en haut
import AuthForm from "./components/AuthFormEtudiant";
import { RessourcesEtudiant } from "./Ressources";
import AuthFormAdmin from "./components/AuthFormAdmin";

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/ressources" element={<RessourcesEtudiant/>} />
    <Route path="/adminAuthForm" element={<AuthFormAdmin/>} />

    <Route path="/login" element={<AuthForm/>} />
      <Route path="/" element={<Signup />} />
      <Route path="/student" element={<Student />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/demande" element={<NouvelleDemande />} />
      <Route path="/creer-compte" element={<SignUpForm />} />
      <Route path="/admin/historique" element={<Historique />} />
      <Route path="/etudiant/historique" element={<HistoriqueEtudiant />} />
    </Routes>
  </Router>
  )
}

export default App;
