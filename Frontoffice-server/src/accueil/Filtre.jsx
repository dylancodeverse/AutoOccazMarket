export default function Filtre() {
    return (
        <div class="col-lg-3 col-md-3 col-sm-12">
            <div class="fetch-categories">
                <h3 class="title-name">Filtre de recherche</h3>
            </div>
            <div class="facet-filter-associates">
                <h3 class="title-name">Modeles</h3>
                <form class="facet-form" action="#" method="post">
                    <div class="associate-wrapper">
                        <input type="checkbox" class="check-box" id="cbs-01"/>
                        <label class="label-text" for="cbs-01">Male 2XL
                            <span class="total-fetch-items">(2)</span>
                        </label>
                        <input type="checkbox" class="check-box" id="cbs-01"/>
                        <label class="label-text" for="cbs-01">Male 2XL
                            <span class="total-fetch-items">(2)</span>
                        </label>

                    </div>
                </form>
            </div>
            <div class="facet-filter-associates">
                <h3 class="title-name">Couleur</h3>
                <form class="facet-form" action="#" method="post">
                    <div class="associate-wrapper">
                        <input type="checkbox" class="check-box" id="cbs-16"/>
                        <label class="label-text" for="cbs-16">Heather Grey
                            <span class="total-fetch-items">(1)</span>
                        </label>
                        <input type="checkbox" class="check-box" id="cbs-17"/>
                        <label class="label-text" for="cbs-17">Black
                            <span class="total-fetch-items">(1)</span>
                        </label>
                    </div>
                </form>
            </div>


            <div class="facet-filter-associates">
                <h3 class="title-name">Categorie</h3>
                <form class="facet-form" action="#" method="post">
                    <div class="associate-wrapper">
                        <input type="checkbox" class="check-box" id="cbs-16"/>
                        <label class="label-text" for="cbs-16">Heather Grey
                            <span class="total-fetch-items">(1)</span>
                        </label>
                        <input type="checkbox" class="check-box" id="cbs-17"/>
                        <label class="label-text" for="cbs-17">Black
                            <span class="total-fetch-items">(1)</span>
                        </label>
                    </div>
                </form>
            </div>

            <div class="facet-filter-associates">
                <h3 class="title-name">Marque</h3>
                <form class="facet-form" action="#" method="post">
                    <div class="associate-wrapper">
                        <input type="checkbox" class="check-box" id="cbs-16"/>
                        <label class="label-text" for="cbs-16">Heather Grey
                            <span class="total-fetch-items">(1)</span>
                        </label>
                        <input type="checkbox" class="check-box" id="cbs-17"/>
                        <label class="label-text" for="cbs-17">Black
                            <span class="total-fetch-items">(1)</span>
                        </label>
                    </div>
                </form>
            </div>

            <div class="facet-filter-associates">
                <h3 class="title-name">new filter3</h3>
                <form class="facet-form" action="#" method="post">
                    <div class="associate-wrapper">
                        <input type="checkbox" class="check-box" id="cbs-16"/>
                        <label class="label-text" for="cbs-16">Heather Grey
                            <span class="total-fetch-items">(1)</span>
                        </label>
                        <input type="checkbox" class="check-box" id="cbs-17"/>
                        <label class="label-text" for="cbs-17">Black
                            <span class="total-fetch-items">(1)</span>
                        </label>
                    </div>
                </form>
            </div>

            <div class="facet-filter-by-price">
                <h3 class="title-name">Prix</h3>
                <form class="facet-form" action="#" method="post">
                    <div class="amount-result clearfix">
                        <div class="price-from">AR 0</div>
                        <div class="price-to">AR 3000</div>
                    </div>
                    <div class="price-filter"></div>
                    <div class="price-slider-range" data-min="0" data-max="5000" data-default-low="0" data-default-high="3000" data-currency="AR"></div>
                    <button type="submit" class="button button-primary">Filtrer</button>
                </form>
            </div>
        </div>
    )
}