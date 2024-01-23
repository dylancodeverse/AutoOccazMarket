import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../Config';

export default function ModelesStat() {
  const [modelesStats, setModelesStats] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };
      const response = await axios.get(`${API_BASE_URL}/modelesStats`, { headers });
      const modelesStatsData = response.data.listModelesStats || [];
      setModelesStats(modelesStatsData);
    } catch (error) {
      console.error('Failed to fetch data', error);
      // Gérer les erreurs de requête ici
    }
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Statistiques de modèle</h4>
          <p className="card-description">Plutôt lié au client <code>Client</code></p>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nom du modèle</th>
                  <th>Prix de vente moyen</th>
                  <th>Nombre total d'annonces</th>
                </tr>
              </thead>
              <tbody>
                {modelesStats.map((modeleStat) => (
                  <tr key={modeleStat.nomModeles}>
                    <td>{modeleStat.nomModeles}</td>
                    <td>{modeleStat.prixVenteMoyenne}</td>
                    <td>{modeleStat.nbAnnonces}</td>
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
