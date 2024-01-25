/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListeAnnonce(params) {
    const annonces = params.annonces
    return (
        <div class="col-lg-9 col-md-9 col-sm-12" >
        {/* <!-- Page-Bar --> */}
        <div class="page-bar clearfix">
            <div class="shop-settings">
                <a id="list-anchor" class="active">
                    <i class="fas fa-th-list"></i>
                </a>
            </div>
            {/* <!-- Toolbar Sorter 1  --> */}
            {/* <div class="toolbar-sorter">
                <div class="select-box-wrapper">
                    <label class="sr-only" for="sort-by">Trier par</label>
                    <select class="select-box" id="sort-by">
                        <option selected="selected" value="">Trier par: le mieux vendu</option>
                        <option value="">l'ajouté recemment</option>
                        <option value="">le plus apprecié</option>
                    </select>
                </div>
            </div> */}
            {/* <!-- //end Toolbar Sorter 1  --> */}
            {/* <!-- Toolbar Sorter 2  --> */}
            {/* <div class="toolbar-sorter-2">
                <div class="select-box-wrapper">
                    <label class="sr-only" for="show-records">Afficher Par Page</label>
                    <select class="select-box" id="show-records">
                        <option selected="selected" value="">Afficher: 8</option>
                        <option value="">Afficher: 16</option>
                        <option value="">Afficher: 28</option>
                    </select>
                </div>
            </div> */}
            {/* <!-- //end Toolbar Sorter 2  --> */}
        </div>
        {/* <!-- Page-Bar /- --> */}
        {/* <!-- Row-of-Product-Container --> */}
        <div class="row product-container list-style" id="annonces">
        {annonces.length > 0 ? (
            annonces.map((annonce) => (
                <div key={annonce.idAnnonce} class="product-item col-lg-4 col-md-6 col-sm-6">
                    <div class="item" id="annonces">
                    <div class="image-container">
                        <a class="item-img-wrapper-link" href="single-product.html">
                        <img class="img-fluid" src={"images/product/product@3x.jpg"} alt="Products" />
                        </a>
                        <div class="item-action-behaviors">
                            <button class="item-mail">Mail</button>
                            <button class="item-addwishlist">Add to Wishlist</button>
                        </div>
                    </div>
                    <div class="item-content">
                        <div class="what-product-is">
                           
                            <h6 class="item-title">
                             {annonce.utilisateur.nom +" " +annonce.utilisateur.prenom +" a poste le modele: "+   annonce.modeles.nomModele}

                            </h6>
                            <div class="item-description">
                            <p>{annonce.description}</p>

                            </div>
                            <div class="item-description">
                            <h6 class="item-title">
                                Details:
                            </h6>
                            <p>Marque :{annonce.modeles.marque.marque} </p>
                            <p> Categorie : {annonce.modeles.categorie.categorie} avec un type de carburant : {annonce.modeles.carburant.carburant}</p>
                            <p>Note: {annonce.etatGeneral}/10 situe a {annonce.localisation}</p>
                            <p></p>

                            </div>
                            <div class="item-stars">
                                <div class='star' title="4.5 out of 5 - based on 23 Reviews">
                                {/* style='width:67px' */}
                                    <span ></span>
                                </div>
                                <span>(23)</span>
                            </div>
                        </div>
                        <div class="price-template">
                            <div class="item-new-price">
                            Ar {annonce.prix}

                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
                    ))
                
            ):(

                <div class="product-item col-lg-4 col-md-6 col-sm-6" id="annonces">
                    <div class="item" id="annonces">
                        <div class="image-container">
                        </div>
                        <div class="item-content">
                            <div class="what-product-is">
                               
                                <h6 class="item-title">
                                    <a href="single-product.html">Pas d'annonce disponible pour le filtre demande</a>
                                </h6>
                                <div class="item-description">
                                    <p>La liste affichee depend de votre requete, les annonces doivent avoir au moins un de votre filtre.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              
            )}


        </div>
        {/* <!-- Row-of-Product-Container /- --> */}
    </div>
    )
    
}