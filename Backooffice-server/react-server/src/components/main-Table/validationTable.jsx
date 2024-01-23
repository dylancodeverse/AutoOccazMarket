import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes } from "react-icons/fa";
import axios from 'axios';
import API_BASE_URL from '../../Config';

export default function ValidationTableAnnonce() {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };
      const response = await axios.get(`${API_BASE_URL}/annoncesNonPostees`, { headers });
      const annoncesData = response.data.listAnnonces || [];
      setAnnonces(annoncesData);
    } catch (error) {
      console.error('Failed to fetch data', error);
      // Gérer les erreurs de requête ici
    }
  };

  const handleCheckClick = async (idAnnonce, pourcentage) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      const validateurId = 1;
      
      const response = await axios.post(
        `${API_BASE_URL}/commissions`,
        {
          commission: {
            annonces: {
              idAnnonce: idAnnonce,
            },
            pourcentages: pourcentage,
            validateur: {
              idutilisateur: validateurId,
            },
          },
        },
        { headers }
      );
      // Gérer la réponse de la requête si nécessaire

      fetchData()

    } catch (error) {
      console.error('Failed to create commission', error);
      // Gérer les erreurs de requête ici
    }
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
                </tr>
              </thead>
              <tbody>
                {annonces.map((annonce) => (
                  <tr key={annonce.idAnnonce}>
                    <td>{annonce.modeles.nomModele}</td>
                    <td>{annonce.prix}</td>
                    <td>{annonce.etatGeneral}</td>
                    <td>{annonce.utilisateur.prenom + " " + annonce.utilisateur.nom}</td>
                    <td>{annonce.localisation}</td>
                    <td>
                      <input type="number" className="form-control" id={`commissionInput_${annonce.idAnnonce}`} placeholder="%"/>
                    </td>
                    <td>
                      <button className="btn btn-inverse-success btn-fw" onClick={() => handleCheckClick(annonce.idAnnonce, document.getElementById(`commissionInput_${annonce.idAnnonce}`).value)}>
                        <FaCheck />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-inverse-danger btn-fw">
                        <FaTimes />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
