        // modeles statistiques (nom ,prix de vente moyennev, nombre d'annonces)

export default function ModelesStat() {
return(    
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">Statistiques de modele</h4>
            <p class="card-description">
            Plutot lie au client <code>Client</code>
            </p>
            <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>Nom du modele</th>
                    <th>Prix de vente moyenne</th>
                    <th>Nombre total d'annonces</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Ferrari</td>
                    <td>146.6</td>
                    <td>123</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>193.6</td>
                    <td>153</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>123.6</td>
                    <td>13</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    )
}