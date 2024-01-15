import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../Config';
import { useNavigate } from 'react-router-dom';

export default function Categorie() {
  const [categorieDefinition, setCategorieDefinition] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get the access token from local storage
    const accessToken = localStorage.getItem('accessToken');

    // Set the authorization header
    const headers = {
      Authorization: `${accessToken}`,
    };

    try {
      // Make a POST request to the /categories endpoint
      const response = await axios.post(
        `${API_BASE_URL}/categories`,
        {
          categorie: {
            categorie: categorieDefinition,
          },
        },
        { headers }
      );

      // Handle the response as needed
      console.log('Categorie added successfully', response.data);
    } catch (error) {
      // Handle errors (e.g., display error message)
      console.error('Failed to add categorie', error);

      // Check if the error is due to unauthorized access (401 or 403)
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        // Remove the access token from local storage
        localStorage.removeItem('accessToken');

        // Navigate to the home page
        navigate('/');
      } else {
        // Display the error message for other types of errors
        setErrorMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="col-6 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Gestion de categorie</h4>
          <p className="card-description">Categorie</p>
          <form className="forms-sample" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Definition</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="Definition"
                value={categorieDefinition}
                onChange={(e) => setCategorieDefinition(e.target.value)}
              />
            </div>
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                {errorMessage}
              </div>
            )}
            <button type="submit" className="btn btn-primary mr-2">
              Submit
            </button>
            <button type="button" className="btn btn-light">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
