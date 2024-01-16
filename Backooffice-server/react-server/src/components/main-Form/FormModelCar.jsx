/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../Config';
import { useNavigate } from 'react-router-dom';

export default function FormModelCar() {
  const [modelName, setModelName] = useState('');
  const [selectedMarque, setSelectedMarque] = useState('');
  const [selectedCategorie, setSelectedCategorie] = useState('');
  const [selectedCarburant, setSelectedCarburant] = useState('');
  const [marques, setMarques] = useState([]);
  const [categories, setCategories] = useState([]);
  const [carburants, setCarburants] = useState([]);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        const headers = {
          Authorization: `${accessToken}`,
        };

        // Fetch data for Marques
        const responseMarques = await axios.get(`${API_BASE_URL}/marques`, { headers });
        setMarques(responseMarques.data.listMarque || []);

        // Fetch data for Categories
        const responseCategories = await axios.get(`${API_BASE_URL}/categories`, { headers });
        setCategories(responseCategories.data.listCategorie || []);

        // Fetch data for Carburants
        const responseCarburants = await axios.get(`${API_BASE_URL}/carburants`, { headers });
        setCarburants(responseCarburants.data.listCarburant || []);
      } catch (error) {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            // Remove the access token from local storage
            localStorage.removeItem('accessToken');
    
            // Navigate to the home page
            navigate("/")
        }
        else{
            setError(error.message || 'An error occurred while creating the model.');
        }
      }
    };

    fetchData();
  }, []); 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
    console.log(        {
        modeles: {
          nomModele: modelName,
          carburant: { idCarburant: selectedCarburant },
          categorie: { idcategorie: selectedCategorie },
          marque: { idMarque: selectedMarque },
        },
      })
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      // Make a POST request to create the model
      const response = await axios.post(
        `${API_BASE_URL}/modeles`,
        {
          modeles: {
            nomModele: modelName,
            carburant: { idCarburant: selectedCarburant },
            categorie: { idcategorie: selectedCategorie },
            marque: { idMarque: selectedMarque },
          },
        },
        { headers }
      );
      setError(response.data.errors);
      if(response.data.errors ==null){
        // affiche success
        
      }
      // Handle the response as needed
      console.log('Model created successfully', response.data);
    } catch (error) {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            // Remove the access token from local storage
            localStorage.removeItem('accessToken');
    
            // Navigate to the home page
            navigate("/")
        }
        else{
            setError(error.message || 'An error occurred while creating the model.');

        }
    }
  };

  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Creation de modele d'une voiture</h4>
          <p className="card-description">Creation de modele d'une voiture</p>
          <form className="forms-sample" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Nom du modele</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="Name"
                value={modelName}
                onChange={(e) => setModelName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleSelectMarque">Marque de la voiture</label>
              <select
                className="form-control"
                id="exampleSelectMarque"
                value={selectedMarque}
                onChange={(e) => setSelectedMarque(e.target.value)}
              >
                <option value=""> Choisir</option>
                {marques.map((marque) => (
                  <option key={marque.idMarque} value={marque.idMarque}>
                    {marque.marque}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleSelectCategorie">Categorie de la voiture</label>
              <select
                className="form-control"
                id="exampleSelectCategorie"
                value={selectedCategorie}
                onChange={(e) => setSelectedCategorie(e.target.value)}
              >
                <option value=""> Choisir</option>
                {categories.map((categorie) => (
                  <option key={categorie.idcategorie} value={categorie.idcategorie}>
                    {categorie.categorie}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleSelectCarburant">Type de carburant de la voiture</label>
              <select
                className="form-control"
                id="exampleSelectCarburant"
                value={selectedCarburant}
                onChange={(e) => setSelectedCarburant(e.target.value)}
              >
                <option value="">Choisir</option>
                {carburants.map((carburant) => (
                  <option key={carburant.idCarburant} value={carburant.idCarburant}>
                    {carburant.carburant}
                  </option>
                ))}
              </select>
            </div>
            {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
              )}
            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
