import Header from "../../constants/header/Header";
import SideNav from "../../constants/sidenav/sideNav";

export default function Statistics() {
    return(
        <div class="container-scroller">
            <Header/>            
            <div class="container-fluid page-body-wrapper">
                <SideNav params={'SeeStatistics'}/>
                {/* main foana avy eo */}
                
            </div>
        </div>
    )    
}