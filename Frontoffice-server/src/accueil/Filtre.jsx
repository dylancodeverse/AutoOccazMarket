import React, { useState } from 'react';
import Slider from '@mui/material/Slider';


export default function Filtre(params) {
    const [prixRange, setPrixRange] = useState([0, 3000]);

    const handleFilterClick = () => {
      // Gérer l'application du filtre de prix
      // Vous pouvez utiliser les valeurs de prixRange[0] et prixRange[1] pour filtrer les résultats
      console.log('Filtre de prix appliqué', prixRange);
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
            <input type="checkbox" className="check-box" id={`modeles-${index}`} />
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
            <input type="checkbox" className="check-box" id={`categorie-${index}`} />
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
            <input type="checkbox" className="check-box" id={`marque-${index}`} />
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
            <input type="checkbox" className="check-box" id={`carburant-${index}`} />
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
