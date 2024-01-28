function fileToBase64(file, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        var base64String = reader.result.split(',')[1];
        callback(base64String);
    };
    reader.onerror = function (error) {
        console.error('Error occurred while converting the file to base64:', error);
    };
}


// Sélectionnez votre fichier à partir de l'élément d'entrée de fichier
var input = document.getElementById('fileInput');
var file = input.files[0];

// Appel de la fonction pour convertir le fichier en Base64
fileToBase64(file, function(base64String) {
    console.log('Base64 representation of the file:', base64String);
    // Faites quelque chose avec la chaîne Base64, comme l'envoyer à un serveur, etc.
});
