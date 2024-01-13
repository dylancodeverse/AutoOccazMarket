import Header from "../../../constants/header/Header";
import SideNav from "../../../constants/sidenav/sideNav";
import Carburant from "../../../main-Form/Carburant";
import Categorie from "../../../main-Form/Categorie";
import Marque from "../../../main-Form/Marques";

export default function ManageInformation() {
    return(
        <div class="container-scroller">
            <Header/>            
            <div class="container-fluid page-body-wrapper">
                <SideNav params={'ManageInformation'}/>
                {/* main foana avy eo */}
                <div class="main-panel">        
                   <div class="content-wrapper">
                        <div class="row">
                            <Marque/>
                            <Categorie/>
                         </div>

                        <div className="row">
                            <Carburant/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}

