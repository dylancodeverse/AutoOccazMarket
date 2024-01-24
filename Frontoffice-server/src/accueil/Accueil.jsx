import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filtre from "./Filtre";
import ListeAnnonce from "./ListeAnnonce";
import API_BASE_URL from '../Config';

export default function AccueilBody() {
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
      const response = await axios.get(`${API_BASE_URL}/annoncesAccueil`, { headers });
      const annoncesData = response.data.listAnnonces || [];
      setAnnonces(annoncesData);
    } catch (error) {
      console.error('Failed to fetch data', error);
    //   Gérer les erreurs de requête ici
    }
  };

  return (
    <div className="row">
      <Filtre />
      <ListeAnnonce annonces={annonces} />
    </div>
  );
}
