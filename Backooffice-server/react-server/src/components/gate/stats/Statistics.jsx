import { useNavigate } from "react-router-dom";
import Header from "../../constants/header/Header";
import SideNav from "../../constants/sidenav/sideNav";
import AnnoncesStat from "../../main-Table/AnnoncesStat";
import ModelesStat from "../../main-Table/ModelesStat";
import { useEffect } from "react";

export default function Statistics() {
    const navigate = useNavigate();
    useEffect(() => {
        // Check if the token is already present in local storage
        const storedToken = localStorage.getItem('accessToken');
        if (!storedToken) {
          // Redirect to ValidationAnnonce if the token is present
          navigate('/');
        }
      }, [navigate]);
    return(
        <div class="container-scroller">
            <Header/>            
            <div class="container-fluid page-body-wrapper">
                <SideNav params={'SeeStatistics'}/>
                {/* main foana avy eo */}
                <div class="main-panel">        
                   <div class="content-wrapper">
                        <div class="row">
                            <AnnoncesStat/>                
                        </div>
                        <div class="row">
                            <ModelesStat/>                
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )    
}