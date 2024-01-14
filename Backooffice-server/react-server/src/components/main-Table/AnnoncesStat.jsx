        // annonces statistiques (nom modele , nombre de voiture vendu ,benefice du site)

export default function AnnoncesStat() {
    return(    <div class="col-lg-12 grid-margin stretch-card">
    <div class="card">
    <div class="card-body">
        <h4 class="card-title">Vente et benefice</h4>

        <div class="table-responsive">
        <table class="table table-hover">
            <thead>
            <tr>
                <th>Nom du modele</th>
                <th>Nombre total de voiture vendue</th>
                <th>Benefice du site</th>
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