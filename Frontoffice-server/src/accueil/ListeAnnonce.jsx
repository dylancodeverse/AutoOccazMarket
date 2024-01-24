export default function ListeAnnonce() {
    return (
        <div class="col-lg-9 col-md-9 col-sm-12">
        {/* <!-- Page-Bar --> */}
        <div class="page-bar clearfix">
            <div class="shop-settings">
                <a id="list-anchor" class="active">
                    <i class="fas fa-th-list"></i>
                </a>
                <a id="grid-anchor">
                    <i class="fas fa-th"></i>
                </a>
            </div>
            {/* <!-- Toolbar Sorter 1  --> */}
            <div class="toolbar-sorter">
                <div class="select-box-wrapper">
                    <label class="sr-only" for="sort-by">Trier par</label>
                    <select class="select-box" id="sort-by">
                        <option selected="selected" value="">Trier par: le mieux vendu</option>
                        <option value="">l'ajouté recemment</option>
                        <option value="">le plus apprecié</option>
                    </select>
                </div>
            </div>
            {/* <!-- //end Toolbar Sorter 1  --> */}
            {/* <!-- Toolbar Sorter 2  --> */}
            <div class="toolbar-sorter-2">
                <div class="select-box-wrapper">
                    <label class="sr-only" for="show-records">Afficher Par Page</label>
                    <select class="select-box" id="show-records">
                        <option selected="selected" value="">Afficher: 8</option>
                        <option value="">Afficher: 16</option>
                        <option value="">Afficher: 28</option>
                    </select>
                </div>
            </div>
            {/* <!-- //end Toolbar Sorter 2  --> */}
        </div>
        {/* <!-- Page-Bar /- --> */}
        {/* <!-- Row-of-Product-Container --> */}
        <div class="row product-container list-style">
            <div class="product-item col-lg-4 col-md-6 col-sm-6">
                <div class="item">
                    <div class="image-container">
                        <a class="item-img-wrapper-link" href="single-product.html">
                            <img class="img-fluid" src="images/product/product@3x.jpg" alt="Product"/>
                        </a>
                        <div class="item-action-behaviors">
                            <a class="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                            <a class="item-mail" href="javascript:void(0)">Mail</a>
                            <a class="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                            <a class="item-addCart" href="javascript:void(0)">Add to Cart</a>
                        </div>
                    </div>
                    <div class="item-content">
                        <div class="what-product-is">
                           
                            <h6 class="item-title">
                                <a href="single-product.html">Mischka Plain Men T-Shirt</a>
                            </h6>
                            <div class="item-description">
                                <p>T-shirts with bold slogans were popular in the UK in the 1980s. T-shirts were originally worn as undershirts, but are now worn frequently as the only piece of clothing on the top half of the body, other than possibly a brassiere or, rarely, a waistcoat (vest). T-shirts have also become a medium for self-expression and advertising, with any imaginable combination of words, art and photographs on display.</p>
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
                                $55.00
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-item col-lg-4 col-md-6 col-sm-6">
                <div class="item">
                    <div class="image-container">
                        <a class="item-img-wrapper-link" href="single-product.html">
                            <img class="img-fluid" src="images/product/product@3x.jpg" alt="Product"/>
                        </a>
                        <div class="item-action-behaviors">
                            <a class="item-quick-look" data-toggle="modal" href="#quick-view">Quick Look</a>
                            <a class="item-mail" href="javascript:void(0)">Mail</a>
                            <a class="item-addwishlist" href="javascript:void(0)">Add to Wishlist</a>
                            <a class="item-addCart" href="javascript:void(0)">Add to Cart</a>
                        </div>
                    </div>
                    <div class="item-content">
                        <div class="what-product-is">
                            
                            <h6 class="item-title">
                                <a href="single-product.html">Black Bean Plain Men T-Shirt</a>
                            </h6>
                            <div class="item-description">
                                <p>T-shirts with bold slogans were popular in the UK in the 1980s. T-shirts were originally worn as undershirts, but are now worn frequently as the only piece of clothing on the top half of the body, other than possibly a brassiere or, rarely, a waistcoat (vest). T-shirts have also become a medium for self-expression and advertising, with any imaginable combination of words, art and photographs on display.</p>
                            </div>
                            <div class="item-stars">
                                <div class='star' title="4.5 out of 5 - based on 23 Reviews">
                                {/* style='width:67px' */}
                                    <span></span>
                                </div>
                                <span>(23)</span>
                            </div>
                        </div>
                        <div class="price-template">
                            <div class="item-new-price">
                                $55.00
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Row-of-Product-Container /- --> */}
    </div>
    )
    
}