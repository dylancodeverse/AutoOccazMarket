import React, { useState } from 'react';

function ImageToBase64Converter({ imageUrl }) {
  const [base64String, setBase64String] = useState(null);

  const fileToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      callback(base64String);
    };
    reader.onerror = (error) => {
      console.error('Error occurred while converting the file to base64:', error);
    };
  };

  const loadImageAndConvertToBase64 = () => {
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        fileToBase64(blob, (result) => {
          setBase64String(result);
        });
      })
      .catch((error) => {
        console.error('Error loading image and converting to base64:', error);
      });
  };
  console.log("ty")
  console.log(base64String)

  return (
    <div>
      <button onClick={loadImageAndConvertToBase64}>Load Image and Convert to Base64</button>
      {base64String && (
        <div>
          <p>Base64 string:</p>
          <img src={`data:image/png;base64,${base64String}`} alt="Converted to Base64" />
        </div>
      )}
    </div>
  );
}

// Example usage
const YourComponent = () => {
  const imageUrl = '../public/images/logo.png'; // Replace with your image URL
  return <ImageToBase64Converter imageUrl={imageUrl} />;
};

export default YourComponent;
