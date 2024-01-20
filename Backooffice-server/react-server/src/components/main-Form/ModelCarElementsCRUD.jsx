import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import API_BASE_URL from '../../Config';

export function CarburantCRUD() {
  const [carburantData, setCarburantData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    IdMarque: '',
    Marque: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      try {
        const response = await axios.get(`${API_BASE_URL}/carburants`, { headers });
        setCarburantData(response.data.listCarburant);
      } catch (error) {
        console.error('Failed to fetch carburant data', error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (id, marque) => {
    setIsEditing(true);
    setEditedData({
      IdMarque: id,
      Marque: marque,
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

      await axios.put(
        `${API_BASE_URL}/carburants/${editedData.IdMarque}`,
        {
          carburant: {
            carburant: editedData.Marque,
          },
        },
        { headers }
      );

      const response = await axios.get(`${API_BASE_URL}/carburants`, { headers });
      setCarburantData(response.data.listCarburant);
    } catch (error) {
      console.error('Failed to update carburant data', error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      await axios.delete(`${API_BASE_URL}/carburants/${id}`, { headers });

      const response = await axios.get(`${API_BASE_URL}/carburants`, { headers });
      setCarburantData(response.data.listCarburant);
    } catch (error) {
      console.error('Failed to delete carburant data', error);
    }
  };

  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Les details du carburant</h4>
          <p className="card-description">
            <code>Modifier, Ajouter, Supprimer</code>
          </p>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>IdMarque</th>
                  <th>Marque</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {carburantData.map((data) => (
                  <tr key={data.idCarburant}>
                    <td>{data.idCarburant}</td>
                    <td>
                      {isEditing && editedData.IdMarque === data.idCarburant ? (
                        <input
                          type="text"
                          value={editedData.Marque}
                          onChange={(e) => handleInputChange(e, 'Marque')}
                        />
                      ) : (
                        data.carburant
                      )}
                    </td>
                    <td>
                      {isEditing && editedData.IdMarque === data.idCarburant ? (
                        <button className='btn btn-inverse-success btn-fw' onClick={handleSaveClick}>Save</button>
                      ) : (
                        <FaEdit
                          style={{ color: 'green', cursor: 'pointer' }}
                          onClick={() => handleEditClick(data.idCarburant, data.carburant)}
                        />
                      )}
                    </td>
                    <td>
                      <FaTrash
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => handleDeleteClick(data.idCarburant)}
                      />
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

// CategorieCRUD component
export function CategorieCRUD() {
  const [categorieData, setCategorieData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    IdCategorie: '',
    Categorie: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      try {
        const response = await axios.get(`${API_BASE_URL}/categories`, { headers });
        setCategorieData(response.data.listCategorie);
      } catch (error) {
        console.error('Failed to fetch categorie data', error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (id, categorie) => {
    setIsEditing(true);
    setEditedData({
      IdCategorie: id,
      Categorie: categorie,
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

      await axios.put(
        `${API_BASE_URL}/categories/${editedData.IdCategorie}`,
        {
          categorie: {
            categorie: editedData.Categorie,
          },
        },
        { headers }
      );

      const response = await axios.get(`${API_BASE_URL}/categories`, { headers });
      setCategorieData(response.data.listCategorie);
    } catch (error) {
      console.error('Failed to update categorie data', error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      await axios.delete(`${API_BASE_URL}/categories/${id}`, { headers });

      const response = await axios.get(`${API_BASE_URL}/categories`, { headers });
      setCategorieData(response.data.listCategorie);
    } catch (error) {
      console.error('Failed to delete categorie data', error);
    }
  };

  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Les details du categorie</h4>
          <p className="card-description">
            <code>Modifier, Ajouter, Supprimer</code>
          </p>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>IdCategorie</th>
                  <th>Categorie</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {categorieData.map((data) => (
                  <tr key={data.idCategorie}>
                    <td>{data.idCategorie}</td>
                    <td>
                      {isEditing && editedData.IdCategorie === data.idCategorie ? (
                        <input
                          type="text"
                          value={editedData.Categorie}
                          onChange={(e) => handleInputChange(e, 'Categorie')}
                        />
                      ) : (
                        data.categorie
                      )}
                    </td>
                    <td>
                      {isEditing && editedData.IdCategorie === data.idCategorie ? (
                        <button className='btn btn-inverse-success btn-fw' onClick={handleSaveClick}>Save</button>
                      ) : (
                        <FaEdit
                          style={{ color: 'green', cursor: 'pointer' }}
                          onClick={() => handleEditClick(data.idCategorie, data.categorie)}
                        />
                      )}
                    </td>
                    <td>
                      <FaTrash
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => handleDeleteClick(data.idCategorie)}
                      />
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

// MarqueCRUD component
export function MarqueCRUD() {
  const [marqueData, setMarqueData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    IdMarque: '',
    Marque: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      try {
        const response = await axios.get(`${API_BASE_URL}/marques`, { headers });
        setMarqueData(response.data.listMarque);
      } catch (error) {
        console.error('Failed to fetch marque data', error);
      }
    };

    fetchData();
  }, []);

  const handleEditClick = (id, marque) => {
    setIsEditing(true);
    setEditedData({
      IdMarque: id,
      Marque: marque,
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

      await axios.put(
        `${API_BASE_URL}/marques/${editedData.IdMarque}`,
        {
          marque: {
            marque: editedData.Marque,
          },
        },
        { headers }
      );

      const response = await axios.get(`${API_BASE_URL}/marques`, { headers });
      setMarqueData(response.data.listMarque);
    } catch (error) {
      console.error('Failed to update marque data', error);
    }
  };

  const handleDeleteClick = async (id) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      await axios.delete(`${API_BASE_URL}/marques/${id}`, { headers });

      const response = await axios.get(`${API_BASE_URL}/marques`, { headers });
      setMarqueData(response.data.listMarque);
    } catch (error) {
      console.error('Failed to delete marque data', error);
    }
  };

  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Les details du marque</h4>
          <p className="card-description">
            <code>Modifier, Ajouter, Supprimer</code>
          </p>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>IdMarque</th>
                  <th>Marque</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {marqueData.map((data) => (
                  <tr key={data.idMarque}>
                    <td>{data.idMarque}</td>
                    <td>
                      {isEditing && editedData.IdMarque === data.idMarque ? (
                        <input
                          type="text"
                          value={editedData.Marque}
                          onChange={(e) => handleInputChange(e, 'Marque')}
                        />
                      ) : (
                        data.marque
                      )}
                    </td>
                    <td>
                      {isEditing && editedData.IdMarque === data.idMarque ? (
                        <button className='btn btn-inverse-success btn-fw' onClick={handleSaveClick}>Save</button>
                      ) : (
                        <FaEdit
                          style={{ color: 'green', cursor: 'pointer' }}
                          onClick={() => handleEditClick(data.idMarque, data.marque)}
                        />
                      )}
                    </td>
                    <td>
                      <FaTrash
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => handleDeleteClick(data.idMarque)}
                      />
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
