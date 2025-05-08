import { Signup } from "./components/SignUp";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Student } from "./Student";
import { Admin } from "./Admin";
import { NouvelleDemande } from "./NouvelleDemande";
import { SignUpForm } from "./components/SignUpForm";
import { HistoriqueEtudiant } from "./components/HistoriqueEtudiant"; // tout en haut

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/student" element={<Student />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/demande" element={<NouvelleDemande />} />
      <Route path="/creer-compte" element={<SignUpForm />} />
      <Route path="/etudiant/historique" element={<HistoriqueEtudiant />} />
    </Routes>
  </Router>
  )
}

export default App;
