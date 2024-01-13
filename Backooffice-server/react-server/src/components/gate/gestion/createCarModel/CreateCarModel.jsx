import Header from "../../../constants/header/Header";
import SideNav from "../../../constants/sidenav/sideNav";
import FormModelCar from "../../../main-Form/FormModelCar";

export default function CreateCarModel() {
    return(
        <div class="container-scroller">
            <Header/>            
            <div class="container-fluid page-body-wrapper">
                <SideNav params={'CreateCarModel'}/>
                {/* main foana avy eo */}
                <div class="main-panel">        
                   <div class="content-wrapper">
                        <div class="row">
                            <FormModelCar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}

