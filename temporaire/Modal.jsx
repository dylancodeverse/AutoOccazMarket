import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

export default function ValidationTableAnnonce() {
  const [annonces, setAnnonces] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Votre logique pour récupérer les annonces depuis l'API
  };

  // Votre logique pour gérer l'authentification et les erreurs

  const handleInfoClick = (annonce) => {
    setSelectedAnnonce(annonce);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Validation des annonces</h4>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nom du modèle</th>
                  <th>Prix de vente</th>
                  <th>État 0-10</th>
                  <th>Utilisateur</th>
                  <th>Localisation</th>
                  <th>Commission %</th>
                  <th></th>
                  <th></th>
                  <th></th> {/* Nouvelle colonne pour l'icône d'information */}
                </tr>
              </thead>
              <tbody>
                {annonces.map((annonce) => (
                  <tr key={annonce.idAnnonce}>
                    <td>{annonce.modeles.nomModele}</td>
                    <td>{annonce.prix}</td>
                    <td>{annonce.etatGeneral}</td>
                    <td>{annonce.utilisateur.prenom + ' ' + annonce.utilisateur.nom}</td>
                    <td>{annonce.localisation}</td>
                    <td>
                      <input type="number" className="form-control" id={`commissionInput_${annonce.idAnnonce}`} placeholder="%" />
                    </td>
                    <td>
                      <button className="btn btn-inverse-success btn-fw" onClick={() => handleCheckClick(annonce.idAnnonce, document.getElementById(`commissionInput_${annonce.idAnnonce}`).value)}>
                        <FaCheck />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-inverse-danger btn-fw" onClick={() => handleDeclineClick(annonce.idAnnonce)}>
                        <FaTimes />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-info btn-fw" onClick={() => handleInfoClick(annonce)}>
                        <FaInfoCircle />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal pour afficher l'information sur l'annonce */}
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <div>
          <h2>Information sur l'annonce</h2>
          {selectedAnnonce && (
            <div>
              <p>Nom du modèle: {selectedAnnonce.modeles.nomModele}</p>
              <p>Prix de vente: {selectedAnnonce.prix}</p>
              <p>État 0-10: {selectedAnnonce.etatGeneral}</p>
              <p>Utilisateur: {selectedAnnonce.utilisateur.prenom + ' ' + selectedAnnonce.utilisateur.nom}</p>
              <p>Localisation: {selectedAnnonce.localisation}</p>
              {/* Ajoutez d'autres informations sur l'annonce si nécessaire */}
            </div>
          )}
          <button onClick={closeModal}>Fermer</button>
        </div>
      </Modal>
    </div>
  );
}
