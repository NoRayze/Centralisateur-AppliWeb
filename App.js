import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Assurez-vous que le chemin est correct
import PrivateRoute from './routes/PrivateRoute';      // Importez PrivateRoute
import AdminRoute from './routes/AdminRoute';          // Importez AdminRoute si nécessaire
import './App.css';
import Home from './pages/Home';
import TablePage from './pages/TablePage';
import KBIS from './pages/KBIS';
import ClientInfoPage from './pages/ClientInfoPage';
import SmallTablePage from './pages/SmallTablePage';
import MismatchSiretPage from './pages/MismatchSiretPage';
import TVATablePage from './pages/TVATablePage';
import ComptaTablePage from './pages/ComptaTablePage';
import ISTablePage from './pages/ISTablePage';
import SageDataPage from './pages/SageDataPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <AuthProvider>  {/* Enveloppez votre Router avec AuthProvider */}
      <Router>
        <div className="App">
          <header className="App-header">
            <div>
              <Link to="/" className="button">Accueil</Link>
              <Link to="/table" className="button">Tableau</Link>
              <Link to="/kbis" className="button">KBIS</Link>
              <Link to="/petitetable" className="button">Petite Table</Link>
              <Link to="/client-info" className="button">Infos Client</Link>
              <Link to="/tva" className="button">TVA</Link>
              <Link to="/compta" className="button">Compta</Link>
              <Link to="/is" className="button">IS</Link>
              <Link to="/login" className="button">Login</Link>
              <Link to="/sage" className="button">Sage</Link>
            </div>
          </header>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<PrivateRoute />}>  {/* Englobez les routes protégées par PrivateRoute */}
              <Route path="/" element={<Home />} />
              <Route path="/kbis" element={<KBIS />} />
              <Route path="/petitetable" element={<SmallTablePage />} />
              <Route path="/client-info" element={<ClientInfoPage />} />
              <Route path="/tva" element={<TVATablePage />} />
              <Route path="/compta" element={<ComptaTablePage/>}/>
              <Route path="/is" element={<ISTablePage/>}/>
              {/* AdminRoute pour protéger les routes pour admins */}
              <Route element={<AdminRoute />}>
                <Route path="/table" element={<TablePage />} />
                <Route path="/table/mismatch-siret" element={<MismatchSiretPage />} />
                <Route path="/sage" element={<SageDataPage />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
