/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { FaCheck, FaInfoCircle, FaTimes } from "react-icons/fa";
import axios from 'axios';
import API_BASE_URL from '../../Config';
import {jwtDecode} from 'jwt-decode'
import {  useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

import Slider from 'react-slick';

// Import slick carousel styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function ValidationTableAnnonce() {
  const [annonces, setAnnonces] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    // Check if the token is already present in local storage
    const storedToken = localStorage.getItem('accessToken');
    if (!storedToken) {
        
      // Redirect to ValidationAnnonce if the token is present
      navigate('/');
    }else {
      fetchData();
    }
  }, []);

  const handleUnauthorized = () => {
    // Détruisez le token et redirigez vers la page de connexion
    localStorage.removeItem('accessToken');
    navigate('/');
  };

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
      if (error.response && error.response.status === 401) {
        handleUnauthorized();
      }
    }
  };

  const handleDeclineClick = async (idAnnonce) =>{
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      const validateurId = jwtDecode(accessToken).idUser;

       await axios.post(
        `${API_BASE_URL}/validationAnnoncesHistoriques`,
        {
          validationAnnoncesHistorique: {
            annonces: {
              idAnnonce: idAnnonce
            },
            description: "Refuser l'annonce",
            validateur: {
              idutilisateur: validateurId
            },
            etatValidation: -30
          }
        },
        { headers }
      );
      
      fetchData()


    } catch (error) {
      if (error.response && error.response.status === 401) {
        handleUnauthorized();
      }
    }
  }

  const handleCheckClick = async (idAnnonce, pourcentage) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      const validateurId = jwtDecode(accessToken).idUser;
      
       await axios.post(
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

      fetchData()

    } catch (error) {
      if (error.response && error.response.status === 401) {
        handleUnauthorized();
      }
    }
  };

  //manomboka eto ilay modal

  const handleInfoClick = (annonce) => {
    setSelectedAnnonce(annonce);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
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
                      <button className="btn btn-inverse-danger btn-fw" onClick={()=>handleDeclineClick(annonce.idAnnonce)}>
                        <FaTimes />
                      </button>
                    </td>
                    {/* modal */}
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


         <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="modal-content"
            overlayClassName="modal-overlay"
          >
            <div>
              <h2 className="modal-title">Information sur l'annonce</h2>
              {selectedAnnonce && (
                <div>
                  <Slider {...settings}>
                    {/* Assuming you have an array of image URLs in selectedAnnonce.images */}
                    {selectedAnnonce.photoAnnonces.map((image, index) => (
                      <div key={index}>
                        <img src={`data:image/png;base64,${image.base64}`} alt={`Annonce ${index + 1}`} className="modal-image" />
                      </div>
                    ))}
                  </Slider>
                  <p className="modal-description">Description: {selectedAnnonce.description}</p>
                  {/* Add other information about the ad if necessary */}
                </div>
              )}
              <button className="modal-button" onClick={closeModal}>
                Fermer
              </button>
            </div>
          </Modal>
    </div>
  );
}
