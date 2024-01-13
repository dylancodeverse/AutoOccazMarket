import Header from "../../constants/header/Header";
import SideNav from "../../constants/sidenav/sideNav";

export default function ValidationAnnonce() {
    return(
        <div class="container-scroller">
            <Header/>            
            <div class="container-fluid page-body-wrapper">
                <SideNav params={'Validation'}/>
                {/* main foana avy eo */}
                <div class="main-panel">        
                   <div class="content-wrapper">
                        <div class="row">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}