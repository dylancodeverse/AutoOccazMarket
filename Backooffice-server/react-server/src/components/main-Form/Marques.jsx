export default function Marque() {
    return (
        <div class="col-6 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Gestion de marque</h4>
                    <p class="card-description">
                        Marque
                    </p>
                    <form class="forms-sample">
                        <div class="form-group">
                            <label for="exampleInputName1">Definition</label>
                            <input type="text" class="form-control" id="exampleInputName1" placeholder="Definition"/>
                        </div>
                        <button type="submit" class="btn btn-primary mr-2">Submit</button>
                        <button class="btn btn-light">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
    
}