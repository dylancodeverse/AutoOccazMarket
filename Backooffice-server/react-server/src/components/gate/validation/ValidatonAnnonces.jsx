import { useNavigate } from "react-router-dom";
import Header from "../../constants/header/Header";
import SideNav from "../../constants/sidenav/sideNav";
import ValidationTableAnnonce from "../../main-Table/validationTable";
import { useEffect } from "react";

export default function ValidationAnnonce() {
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
                <SideNav params={'Validation'}/>
                {/* main foana avy eo */}
                <div class="main-panel">        
                   <div class="content-wrapper">
                        <div class="row">
                            <ValidationTableAnnonce/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
}