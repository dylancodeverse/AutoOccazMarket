import React, { useState } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../Config';
import { useNavigate } from 'react-router-dom';

export default function Marque() {
  const [marqueDefinition, setMarqueDefinition] = useState('');
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
      // Make a POST request to the /marques endpoint
      const response = await axios.post(
        `${API_BASE_URL}/marques`,
        {
          marque: {
            marque: marqueDefinition,
          },
        },
        { headers }
      );

      // Handle the response as needed
      console.log('Marque added successfully', response.data);
    } catch (error) {
      // Handle errors (e.g., display error message)
      console.error('Failed to add marque', error);

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
          <h4 className="card-title">Gestion de marque</h4>
          <p className="card-description">Marque</p>
          <form className="forms-sample" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputName1">Definition</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                placeholder="Definition"
                value={marqueDefinition}
                onChange={(e) => setMarqueDefinition(e.target.value)}
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
