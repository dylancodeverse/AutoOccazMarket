export default function FormModelCar() {
    return (
        <div class="col-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                <h4 class="card-title">Creation de modele d'une voiture</h4>
                <p class="card-description">
                    Creation de modele d'une voiture
                </p>
                <form class="forms-sample">
                    <div class="form-group">
                        <label for="exampleInputName1">Nom du modele</label>
                        <input type="text" class="form-control" id="exampleInputName1" placeholder="Name"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleSelectGender">Marque de la voiture</label>
                        <select class="form-control" id="exampleSelectGender">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleSelectGender">Categorie de la voiture</label>
                        <select class="form-control" id="exampleSelectGender">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleSelectGender">Type de carburant de la voiture</label>
                        <select class="form-control" id="exampleSelectGender">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                </form>
                </div>
            </div>
        </div>
    )   
}