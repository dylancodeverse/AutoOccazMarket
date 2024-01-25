import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filtre from "./Filtre";
import ListeAnnonce from "./ListeAnnonce";
import API_BASE_URL from '../Config';

export default function AccueilBody() {
  const [annonces, setAnnonces] = useState([]);
  const [modeles, setModeles] = useState([]);
  const [marques, setMarques] = useState([]);
  const [categories, setCategories] = useState([]);
  const [carburants, setCarburants] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      // Fetch annonces
      const annoncesResponse = await axios.get(`${API_BASE_URL}/annoncesAccueil`, { headers });
      const annoncesData = annoncesResponse.data.listAnnonces || [];
      setAnnonces(annoncesData);

      // Fetch modeles
      const modelesResponse = await axios.get(`${API_BASE_URL}/modeles`, { headers });
      const modelesData = modelesResponse.data.listModeles || [];
      setModeles(modelesData);

      // Fetch marques
      const marquesResponse = await axios.get(`${API_BASE_URL}/marques`, { headers });
      const marquesData = marquesResponse.data.listMarque || [];
      setMarques(marquesData);

      // Fetch categories
      const categoriesResponse = await axios.get(`${API_BASE_URL}/categories`, { headers });
      const categoriesData = categoriesResponse.data.listCategorie || [];
      setCategories(categoriesData);

      // Fetch carburants
      const carburantsResponse = await axios.get(`${API_BASE_URL}/carburants`, { headers });
      const carburantsData = carburantsResponse.data.listCarburant || [];
      setCarburants(carburantsData);

      setDataLoaded(true);
    } catch (error) {
      console.error('Failed to fetch data', error);
      // Gérer les erreurs de requête ici
    }
  };

  return (
    <div className="row">
      {dataLoaded && (
        <Filtre
          modeles={modeles}
          categories={categories}
          marques={marques}
          carburants={carburants}
          setAnnonces={setAnnonces}
        />
      )}
      <ListeAnnonce annonces={annonces} />
    </div>
  );
}
