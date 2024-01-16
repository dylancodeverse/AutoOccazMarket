/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";

export default function SideNav({ params }) {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className={`nav-item ${params === 'Validation' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/validation"> 
                        
                            <i className="icon-grid menu-icon"></i>
                            <span className="menu-title">Validation</span>
                        
                    </Link>
                    
                    </li>
                <li className={`nav-item ${params === 'SeeStatistics' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/statistics">
                        
                            <i className="icon-grid menu-icon"></i>
                            <span className="menu-title">Voir les statistiques</span>
                        
                    </Link>


                </li>
                <li className={`nav-item ${params === 'CreateCarModel' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/createModel">
                        
                            <i className="icon-grid menu-icon"></i>
                            <span className="menu-title">Creation de modele</span>
                                                
                    </Link>
                </li>
                <li className={`nav-item ${params === 'ManageInformation' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/elements">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Gerer des informations </span>
                    </Link>

                </li>
                <li className={`nav-item ${params === 'Deconnexion' ? 'active' : ''}`}>
                    <Link className="nav-link" to="/deconnection">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Se deconnecter  </span>
                    </Link>

                </li>
            </ul>
        </nav>
    );
}
