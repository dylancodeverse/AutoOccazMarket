export default function ValidationTableAnnonce() {
    // etat general , nom du modele , localation , prix ,utililsateur , input commission  en %, bouton valider 
    return(
    <div class="col-lg-12 grid-margin stretch-card">
        <div class="card">
        <div class="card-body">
            <h4 class="card-title">Validation des annonces</h4>
            <p class="card-description">
            </p>
            <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>Nom du modele</th>
                    <th>Prix de vente</th>
                    <th>Etat 0-10</th>
                    <th>Utilisateur</th>
                    <th>Localisation</th>
                    <th>Commission %</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Ferrari</td>
                    <td>Tana</td>
                    <td>146.6</td>
                    <td>7</td>
                    <td>Ratianarivo</td>
                    <td><input type="number" class="form-control" id="exampleInputName1" placeholder="Name"/> </td>
                    <td><button type="submit" class="btn btn-primary mr-2">Submit</button></td>
                </tr>
                <tr>
                    <td>Jacob</td>

                    <td>Tana</td>
                    <td>193.6</td>
                    <td>9</td>
                    <td>Bob Abb</td>
                    <td><input type="number" class="form-control" id="exampleInputName1" placeholder="Name"/> </td>
                    <td><button type="submit" class="btn btn-primary mr-2">Submit</button></td>
                </tr>

                </tbody>
            </table>
            </div>
        </div>
        </div>
    </div>
    )
}