export default function SideNav({ params }) {
    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className={`nav-item ${params === 'Validation' ? 'active' : ''}`}>
                    <a className="nav-link" href="../../index.html">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Validation</span>
                    </a>
                </li>
                <li className={`nav-item ${params === 'SeeStatistics' ? 'active' : ''}`}>
                    <a className="nav-link" href="../../index.html">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">See statistics</span>
                    </a>
                </li>
                <li className={`nav-item ${params === 'CreateCarModel' ? 'active' : ''}`}>
                    <a className="nav-link" href="../../index.html">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Create car model</span>
                    </a>
                </li>
                <li className={`nav-item ${params === 'ManageInformation' ? 'active' : ''}`}>
                    <a className="nav-link" href="../../index.html">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Manage information</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
