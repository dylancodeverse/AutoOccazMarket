/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../Config';
import { useNavigate } from 'react-router-dom';

const ModelesStat = () => {
  const [modelesStats, setModelesStats] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const navigate = useNavigate();

  const handleUnauthorized = () => {
    localStorage.removeItem('accessToken');
    navigate('/');
  };

  useEffect(() => {
    fetchData(); // Call initial URL
  }, [sortColumn, sortDirection]);

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };
      // Call the URL with updated sorting parameters when they are present
      const url = sortColumn && sortDirection ? `${API_BASE_URL}/modelesStats/${sortDirection}/${sortColumn}` : `${API_BASE_URL}/modelesStats`;
      console.log(url)
      const response = await axios.get(url, { headers });
      const modelesStatsData = response.data.listModelesStats || [];
      setModelesStats(modelesStatsData);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        handleUnauthorized();
      }
    }
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      // If the same column is clicked again, toggle the sort direction
      setSortDirection((prevDirection) => (prevDirection === 'asc' ? 'desc' : 'asc'));
    } else {
      // If a new column is clicked, set it as the sort column and default to ascending order
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Statistiques de modèle</h4>
          <p className="card-description">Cliquer sur les colonnes pour <code>Trier</code></p>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th onClick={() => handleSort('nom_Modele')}>
                    Nom du modèle {sortColumn === 'nom_Modele' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
                  </th>
                  <th onClick={() => handleSort('avg_prix')}>
                    Prix de vente moyen {sortColumn === 'avg_prix' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
                  </th>
                  <th onClick={() => handleSort('nb_annonces')}>
                    Nombre total d'annonces {sortColumn === 'nb_annonces' && <span>{sortDirection === 'asc' ? '▲' : '▼'}</span>}
                  </th>
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
};

export default ModelesStat;
