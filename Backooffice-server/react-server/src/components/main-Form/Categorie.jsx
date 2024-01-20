import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../Config';
import { FaEdit, FaTrash, FaPlus, FaCheck, FaTimes, FaSave } from 'react-icons/fa';

// CategorieCRUD component
export default function CategorieCRUD() {
  const [categorieData, setCategorieData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isNewRow, setIsNewRow] = useState(false);
  const [editedData, setEditedData] = useState({
    IdCategorie: '',
    Categorie: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

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

      if (isNewRow) {
        // Logic for adding a new row
        await axios.post(
          `${API_BASE_URL}/categories`,
          {
            categorie: {
              categorie: editedData.Categorie,
            },
          },
          { headers }
        );
      } else {
        // Logic for updating an existing row
        await axios.put(
          `${API_BASE_URL}/categories/${editedData.IdCategorie}`,
          {
            categorie: {
              categorie: editedData.Categorie,
            },
          },
          { headers }
        );
      }

      fetchData();
    } catch (error) {
      console.error('Failed to update categorie data', error);
    }

    // Reset editedData and isNewRow state
    setEditedData({
      IdCategorie: '',
      Categorie: '',
    });
    setIsNewRow(false);
  };

  const handleDeleteClick = async (id) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      await axios.delete(`${API_BASE_URL}/categories/${id}`, { headers });

      fetchData();
    } catch (error) {
      console.error('Failed to delete categorie data', error);
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
      IdCategorie: '',
      Categorie: '',
    });
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Les détails du categorie</h4>
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
                  <th>IdCategorie</th>
                  <th>Categorie</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {categorieData.map((data) => (
                  <tr key={data.idcategorie}>
                    <td>{data.idcategorie}</td>
                    <td>
                      {isEditing && editedData.IdCategorie === data.idcategorie ? (
                        <input
                          className='form-control'
                          type="text"
                          value={editedData.Categorie}
                          onChange={(e) => handleInputChange(e, 'Categorie')}
                        />
                      ) : (
                        data.categorie
                      )}
                    </td>
                    <td>
                      {isEditing && editedData.IdCategorie === data.idcategorie ? (
                        <button className='btn btn-inverse-success btn-fw' onClick={handleSaveClick}>
                          {isNewRow ? <FaCheck /> : <FaSave />}
                        </button>
                      ) : (
                        <FaEdit
                          style={{ color: 'green', cursor: 'pointer' }}
                          onClick={() => handleEditClick(data.idcategorie, data.categorie)}
                        />
                      )}
                    </td>
                    <td>
                      {isEditing && editedData.IdCategorie === data.idcategorie ? (
                        <button className="btn btn-inverse-danger btn-fw" onClick={handleCancelClick}>
                          <FaTimes />
                        </button>
                      ) : (
                        <FaTrash
                          style={{ color: 'red', cursor: 'pointer' }}
                          onClick={() => handleDeleteClick(data.idcategorie)}
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
                        className='form-control'
                        type="text"
                        placeholder="Nouveau categorie"
                        value={editedData.Categorie}
                        onChange={(e) => handleInputChange(e, 'Categorie')}
                      />
                    </td>
                    <td>
                      <button className='btn btn-inverse-success btn-fw' onClick={handleSaveClick}>
                        <FaCheck />
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
