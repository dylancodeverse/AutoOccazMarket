export default function Header() {
    
    return(
        <header>
        {/* <!-- Top-Header --> */}
        <div class="full-layer-outer-header">
            <div class="container clearfix">
                <nav>
                    <ul class="secondary-nav g-nav">
                        <li>
                            <a>Mon compte
                                <i class="fas fa-chevron-down u-s-m-l-9"></i>
                            </a>
                            {/* style="width:200px" */}
                            <ul class="g-dropdown" >
                                <li>
                                    <a href="wishlist.html">
                                        <i class="far fa-heart u-s-m-r-9"></i>
                                        Mes Favoris</a>
                                </li>
                                <li>
                                    <a href="checkout.html">
                                        <i class="far fa-check-circle u-s-m-r-9"></i>
                                        Mes Historiques</a>
                                </li>
                                <li>
                                    <a href="account.html">
                                        <i class="fas fa-sign-in-alt u-s-m-r-9"></i>
                                        Se connecter / S'inscrire</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        {/* <!-- Top-Header /- --> */}
        {/* <!-- Mid-Header --> */}
        <div class="full-layer-mid-header">
            <div class="container">
                <div class="row clearfix align-items-center">
                    <div class="col-lg-3 col-md-9 col-sm-6">
                        <div class="brand-logo text-lg-center">
                            <a href="home.html">
                                <img src="images/main-logo/groover-branding-1.png" alt="Groover Brand Logo" class="app-brand-logo"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 u-d-none-lg">
                        <form class="form-searchbox">
                            <label class="sr-only" for="search-landscape">Rechercher</label>
                            <input id="search-landscape" type="text" class="text-field" placeholder="Mots cles"/>
                            <button id="btn-search" type="submit" class="button button-primary fas fa-search"></button>
                        </form>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6">
                        <nav>
                            <ul class="mid-nav g-nav">
                                <li class="u-d-none-lg">
                                    <a href="home.html">
                                        <i class="ion ion-md-home"></i>
                                    </a>
                                </li>
                                <li class="u-d-none-lg">
                                    <a href="wishlist.html">
                                        <i class="far fa-heart"></i>
                                    </a>
                                </li>
                                <li>
                                    <a id="mini-cart-trigger">
                                        <i class="ion ion-md-basket"></i>
                                        <span class="item-counter">4</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Mid-Header /- --> */}
        {/* <!-- Responsive-Buttons --> */}
        <div class="fixed-responsive-container">
            <div class="fixed-responsive-wrapper">
                <button type="button" class="button fas fa-search" id="responsive-search"></button>
            </div>
            <div class="fixed-responsive-wrapper">
                <a href="wishlist.html">
                    <i class="far fa-heart"></i>
                    <span class="fixed-item-counter">4</span>
                </a>
            </div>
        </div>
        {/* <!-- Responsive-Buttons /- --> */}
        {/* <!-- Mini Cart --> */}

        {/* <!-- Mini Cart /- --> */}
        {/* <!-- Bottom-Header --> */}
        <div class="full-layer-bottom-header">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3">
                    </div>
                    <div class="col-lg-9">
                        <ul class="bottom-nav g-nav u-d-none-lg">
                            <li>
                                <a href="#">Accueil
                                    <span class="superscript-label-new">NEW</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">Historique de mes annonces
                                    {/* <!-- <span class="superscript-label-hot">HOT</span> --> */}
                                </a>
                            </li>
                            <li>
                                <a href="#">Mes favoris
                                    {/* <!-- <span class="superscript-label-hot">HOT</span> --> */}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Bottom-Header /- --> */}
    </header>
    )
}


export function HeaderBottom (){
    return (
        <div class="page-style-c">
        <div class="container">
            <div class="page-intro">
                <h2>Annonces</h2>
                <ul class="bread-crumb">
                    <li class="has-separator">
                        <i class="ion ion-md-home"></i>
                        <a href="home.html">Accueil</a>
                    </li>
                    <li class="is-marked">
                        <a href="shop-v3-sub-sub-category.html">Annonces</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    )
}