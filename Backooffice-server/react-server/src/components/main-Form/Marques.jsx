import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../Config';
import { FaEdit, FaTrash, FaPlus, FaCheck, FaTimes, FaSave } from 'react-icons/fa';

// MarqueCRUD component
export function MarqueCRUD() {
  const [marqueData, setMarqueData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isNewRow, setIsNewRow] = useState(false);
  const [editedData, setEditedData] = useState({
    IdMarque: '',
    Marque: '',
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
      const response = await axios.get(`${API_BASE_URL}/marques`, { headers });
      setMarqueData(response.data.listMarque);
    } catch (error) {
      console.error('Failed to fetch marque data', error);
    }
  };

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

      if (isNewRow) {
        // Logic for adding a new row
        await axios.post(
          `${API_BASE_URL}/marques`,
          {
            marque: {
              marque: editedData.Marque,
            },
          },
          { headers }
        );
      } else {
        // Logic for updating an existing row
        await axios.put(
          `${API_BASE_URL}/marques/${editedData.IdMarque}`,
          {
            marque: {
              marque: editedData.Marque,
            },
          },
          { headers }
        );
      }

      fetchData();
    } catch (error) {
      console.error('Failed to update marque data', error);
    }

    // Reset editedData and isNewRow state
    setEditedData({
      IdMarque: '',
      Marque: '',
    });
    setIsNewRow(false);
  };

  const handleDeleteClick = async (id) => {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const headers = {
        Authorization: `${accessToken}`,
      };

      await axios.delete(`${API_BASE_URL}/marques/${id}`, { headers });

      fetchData();
    } catch (error) {
      console.error('Failed to delete marque data', error);
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
      IdMarque: '',
      Marque: '',
    });
  };

  return (
    <div className="col-lg-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Les détails du marque</h4>
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
                          className='form-control'
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
                        <button className='btn btn-inverse-success btn-fw' onClick={handleSaveClick}>
                          {isNewRow ? <FaCheck /> : <FaSave />}
                        </button>
                      ) : (
                        <FaEdit
                          style={{ color: 'green', cursor: 'pointer' }}
                          onClick={() => handleEditClick(data.idMarque, data.marque)}
                        />
                      )}
                    </td>
                    <td>
                      {isEditing && editedData.IdMarque === data.idMarque ? (
                        <button className="btn btn-inverse-danger btn-fw" onClick={handleCancelClick}>
                          <FaTimes />
                        </button>
                      ) : (
                        <FaTrash
                          style={{ color: 'red', cursor: 'pointer' }}
                          onClick={() => handleDeleteClick(data.idMarque)}
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
                        placeholder="Nouveau marque"
                        value={editedData.Marque}
                        onChange={(e) => handleInputChange(e, 'Marque')}
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
