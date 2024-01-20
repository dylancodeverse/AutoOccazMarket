import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash, FaPlus, FaSave, FaTimes } from 'react-icons/fa';
import API_BASE_URL from '../../Config';

export default function FormModelCar() {
  const [modelData, setModelData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isNewRow, setIsNewRow] = useState(false);
  const [editedData, setEditedData] = useState({
    idModele: '',
    nomModele: '',
    idMarque: '',
    idCategorie: '',
    idCarburant: '',
  });
  const [marques, setMarques] = useState([]);
  const [categories, setCategories] = useState([]);
  const [carburants, setCarburants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      // Fetch data for Models
      const responseModels = await axios.get(`${API_BASE_URL}/modeles`, { headers });
      setModelData(responseModels.data.listModeles || []);

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
      console.error('Failed to fetch data', error);
    }
  };

  const handleEditClick = (id, nomModele, idMarque, idCategorie, idCarburant) => {
    console.log(id)
    setIsEditing(true);
    setIsNewRow(false);

    setEditedData({
      idModele: id,
      nomModele: nomModele,
      idMarque: idMarque,
      idCategorie: idCategorie,
      idCarburant: idCarburant,
    });
  };

  const handleInputChange = (e, columnName) => {
    setEditedData({
      ...editedData,
      [columnName]: e.target.value,
    });
  };

  const handleSaveClick = async () => {
    setIsEditing(false);

    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };



      if (isNewRow) {
        // Logic for adding a new row
        await axios.post(
          `${API_BASE_URL}/modeles`,
          {

            modeles: {
              nomModele: editedData.nomModele,
              marque:{ idMarque: editedData.idMarque},
              categorie:{ idcategorie: editedData.idCategorie},
              carburant:{ idCarburant: editedData.idCarburant},
            }
          },
          { headers }
        );
      } else {
        // Logic for updating an existing row
        await axios.put(
          `${API_BASE_URL}/modeles/${editedData.idModele}`,
          {
            modeles: {
              nomModele: editedData.nomModele,
              idMarque: editedData.idMarque,
              idCategorie: editedData.idCategorie,
              idCarburant: editedData.idCarburant,
            },
          },
          { headers }
        );
      }

      fetchData();
    } catch (error) {
      console.error('Failed to update model data', error);
    }

    // Reset editedData and isNewRow state
    setEditedData({
      idModele: '',
      nomModele: '',
      idMarque: '',
      idCategorie: '',
      idCarburant: '',
    });
    setIsNewRow(false);
  };

  const handleDeleteClick = async (id) => {
    console.log(id)
    try {
      
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      await axios.delete(`${API_BASE_URL}/modeles/${id}`, { headers });

      fetchData();
    } catch (error) {
      console.error('Failed to delete model data', error);
    }
  };

  const handleAddRowClick = () => {
    setIsNewRow(true);
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setIsNewRow(false);

    // Reset editedData state
    setEditedData({
      idModele: '',
      nomModele: '',
      idMarque: '',
      idCategorie: '',
      idCarburant: '',
    });
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Les détails du modèle</h4>
          <p className="card-description">
            <code>Modifier, Ajouter, Supprimer</code>
          </p>
          <button className="btn btn-inverse-primary btn-fw" onClick={handleAddRowClick}>
            <FaPlus /> Ajouter
          </button>

          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>IdModele</th>
                  <th>Nom du Modele</th>
                  <th>Marque</th>
                  <th>Categorie</th>
                  <th>Carburant</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {modelData.map((data) => (
                  <tr key={data.idModeles}>
                    <td>{data.idModeles}</td>
                    <td>
                      {isEditing && editedData.idModele === data.idModeles ? (
                        <input
                          className="form-control"
                          type="text"
                          value={editedData.nomModele}
                          onChange={(e) => handleInputChange(e, 'nomModele')}
                        />
                      ) : (
                        data.nomModele
                      )}
                    </td>
                    <td>
                      {isEditing && editedData.idModele === data.idModeles ? (
                        <select
                          className="form-control"
                          value={editedData.idMarque}
                          onChange={(e) => handleInputChange(e, 'idMarque')}
                        >
                          <option value="">Sélectionnez une m arque</option>
                          {marques.map((marque) => (
                            <option key={marque.idMarque} value={marque.idMarque}>
                              {marque.marque}
                            </option>
                          ))}
                        </select>
                      ) : (
                        data.marque.marque
                      )}
                    </td>
                    <td>
                      {isEditing && editedData.idModele === data.idModeles ? (
                        <select
                          className="form-control"
                          value={editedData.idCategorie}
                          onChange={(e) => handleInputChange(e, 'idCategorie')}
                        >
                          <option value="">Sélectionnez une catégorie</option>
                          {categories.map((categorie) => (
                            <option key={categorie.idcategorie} value={categorie.idcategorie}>
                              {categorie.categorie}
                            </option>
                          ))}
                        </select>
                      ) : (
                        data.categorie.categorie
                      )}
                    </td>
                    <td>
                      {isEditing && editedData.idModele === data.idModeles ? (
                        <select
                          className="form-control"
                          value={editedData.idCarburant}
                          onChange={(e) => handleInputChange(e, 'idCarburant')}
                        >
                          <option value="">Sélectionnez un carburant</option>
                          {carburants.map((carburant) => (
                            <option key={carburant.idCarburant} value={carburant.idCarburant}>
                              {carburant.carburant}
                            </option>
                          ))}
                        </select>
                      ) : (
                        data.carburant.carburant
                      )}
                    </td>
                    <td>
                      {isEditing && editedData.idModele === data.idModeles ? (
                        <button className="btn btn-inverse-success btn-fw" onClick={handleSaveClick}>
                          {isNewRow ? <FaSave /> : <FaSave />}
                        </button>
                      ) : (
                        <FaEdit
                          style={{ color: 'green', cursor: 'pointer' }}
                          onClick={() =>
                            handleEditClick(
                              data.idModeles,
                              data.nomModele,
                              data.idMarque,
                              data.idCategorie,
                              data.idCarburant
                            )
                          }
                        />
                      )}
                    </td>
                    <td>
                      {isEditing && editedData.idModele === data.idModeles ? (
                        <button className="btn btn-inverse-danger btn-fw" onClick={handleCancelClick}>
                          <FaTimes />
                        </button>
                      ) : (
                        <FaTrash
                          style={{ color: 'red', cursor: 'pointer' }}
                          onClick={() => handleDeleteClick(data.idModeles)}
                        />
                      )}
                    </td>
                  </tr>
                ))}
                {isEditing && isNewRow && (
                  <tr>
                    <td></td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Nom du Modele"
                        value={editedData.nomModele}
                        onChange={(e) => handleInputChange(e, 'nomModele')}
                      />
                    </td>
                    <td>
                      <select
                        className="form-control"
                        value={editedData.idMarque}
                        onChange={(e) => handleInputChange(e, 'idMarque')}
                      >
                        <option value="">Sélectionnez une marque</option>
                        {marques.map((marque) => (
                          <option key={marque.idMarque} value={marque.idMarque}>
                            {marque.marque}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-control"
                        value={editedData.idCategorie}
                        onChange={(e) => handleInputChange(e, 'idCategorie')}
                      >
                        <option value="">Sélectionnez une catégorie</option>
                        {categories.map((categorie) => (
                          <option key={categorie.idcategorie} value={categorie.idcategorie}>
                            {categorie.categorie}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <select
                        className="form-control"
                        value={editedData.idCarburant}
                        onChange={(e) => handleInputChange(e, 'idCarburant')}
                      >
                        <option value="">Sélectionnez un carburant</option>
                        {carburants.map((carburant) => (
                          <option key={carburant.idCarburant} value={carburant.idCarburant}>
                            {carburant.carburant}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <button className="btn btn-inverse-success btn-fw" onClick={handleSaveClick}>
                        <FaSave />
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-inverse-danger btn-fw" onClick={handleCancelClick}>
                        <FaTimes />
                      </button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
