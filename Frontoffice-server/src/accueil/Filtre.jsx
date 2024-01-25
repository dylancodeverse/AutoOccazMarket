import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import API_BASE_URL from '../Config';
import axios from 'axios';


export default function Filtre(params) {
    const [prixRange, setPrixRange] = useState([0, 1000000]);

    const handleFilterClick = async () => {
      // Gérer l'application du filtre de prix
      // Vous pouvez utiliser les valeurs de prixRange[0] et prixRange[1] pour filtrer les résultats
      console.log('Filtre de prix appliqué', prixRange);
      console.log('Modèles sélectionnés', selectedModeles);
      console.log('CAtegorie: ' ,selectedCategorie)
      console.log('Marque',selectedMarque)
      console.log('carburant',selectedCarburant)

      const filtre = {
        "modeles": selectedModeles,
        "categories": selectedCategorie,
        "marque": selectedMarque,
        "carburant": selectedCarburant,
      }

      const annoncesFiltreesResponse =  await axios.post(`${API_BASE_URL}/annoncesfiltre`, filtre);
      console.log(annoncesFiltreesResponse)
      const annoncesFiltreesData = annoncesFiltreesResponse.data.listAnnonces || [];
      // console.log(annoncesFiltreesData)
      params.setAnnonces(annoncesFiltreesData);



    };

    const [selectedModeles, setSelectedModeles] = useState([]);
    const handleModeleChange = (modeleId) => {
      // Toggle the selected modele
      setSelectedModeles((prevSelectedModeles) => {
        if (prevSelectedModeles.includes(modeleId)) {
          return prevSelectedModeles.filter((id) => id !== modeleId);
        } else {
          return [...prevSelectedModeles, modeleId];
        }
      });
    };

    const [selectedCategorie, setSelectedCategorie] = useState([]);
    const handleCategorieChange = (categorie) => {
      // Toggle the selected modele
      setSelectedCategorie((prevSelectedCategories) => {
        if (prevSelectedCategories.includes(categorie)) {
          return prevSelectedCategories.filter((id) => id !== categorie);
        } else {
          return [...prevSelectedCategories, categorie];
        }
      });
    };
    const [selectedMarque, setSelectedMarque] = useState([]);
    const handleMarqueChange = (marque) => {
      // Toggle the selected modele
      setSelectedMarque((prevSelectedMarques) => {
        if (prevSelectedMarques.includes(marque)) {
          return prevSelectedMarques.filter((id) => id !== marque);
        } else {
          return [...prevSelectedMarques, marque];
        }
      });
    };

    const [selectedCarburant, setSelectedCarburant] = useState([]);
    const handleCarburantChange = (carburant) => {
      // Toggle the selected modele
      setSelectedCarburant((prevSelectedCarburants) => {
        if (prevSelectedCarburants.includes(carburant)) {
          return prevSelectedCarburants.filter((id) => id !== carburant);
        } else {
          return [...prevSelectedCarburants, carburant];
        }
      });
    };
  
  return (
    <div className="col-lg-3 col-md-3 col-sm-12">
      <div className="fetch-categories">
        <h3 className="title-name">Filtre de recherche</h3>
      </div>

      <div className="facet-filter-associates">
        <h3 className="title-name">Modèles</h3>
        {params.modeles.map((modele, index) => (
          <div key={index} className="associate-wrapper">
            <input type="checkbox" className="check-box" id={`modeles-${index}`} 
            checked={selectedModeles.includes(modele.nomModele)}
            onChange={() => handleModeleChange(modele.nomModele)}
            />
            <label htmlFor={`modeles-${index}`}  className="label-text">
              {modele.nomModele}
              <span className="total-fetch-items">(1)</span>
            </label>
          </div>
        ))}
      </div>

      <div className="facet-filter-associates">
        <h3 className="title-name">Catégorie</h3>
        {params.categories.map((categorie, index) => (
          <div key={index} className="associate-wrapper">
            <input type="checkbox" className="check-box" id={`categorie-${index}`} 
              checked={selectedCategorie.includes(categorie.categorie)}
              onChange={() => handleCategorieChange(categorie.categorie)}
                        />
            <label htmlFor={`categorie-${index}`} className="label-text">
              {categorie.categorie}
              <span className="total-fetch-items">(1)</span>
            </label>
          </div>
        ))}
      </div>

      <div className="facet-filter-associates">
        <h3 className="title-name">Marque</h3>
        {params.marques.map((marque, index) => (
          <div key={index} className="associate-wrapper">
            <input type="checkbox" className="check-box" id={`marque-${index}`} 
              checked={selectedMarque.includes(marque.marque)}
              onChange={() => handleMarqueChange(marque.marque)}/>
            <label htmlFor={`marque-${index}`} className="label-text">
              {marque.marque}
              <span className="total-fetch-items">(1)</span>
            </label>
          </div>
        ))}
      </div>
      <div className="facet-filter-associates">
        <h3 className="title-name">Carburants</h3>
        {params.carburants.map((carburant, index) => (
          <div key={index} className="associate-wrapper">
            <input type="checkbox" className="check-box" id={`carburant-${index}`} 
              checked={selectedCarburant.includes(carburant.carburant)}
              onChange={() => handleCarburantChange(carburant.carburant)}/>
            <label htmlFor={`carburant-${index}`} className="label-text">
              {carburant.carburant}
              <span className="total-fetch-items">(1)</span>
            </label>
          </div>
        ))}
      </div>
      <div className="facet-filter-by-price">
        <h3 className="title-name">Prix</h3>
        <div className="facet-form">
          <div className="amount-result clearfix">
          <div className="price-from">AR {prixRange[0]}</div>
            <div className="price-to">AR {prixRange[1]}</div>

          </div>
          <Slider
            value={prixRange}
            onChange={(event, newValue) => setPrixRange(newValue)}
            valueLabelDisplay="auto"
            min={0}
            max={1000000}
          />

          <button type="button" className="button button-primary" onClick={handleFilterClick}>
            Filtrer 
          </button>
        </div>
      </div>
    </div>

  );
}
