import { Link } from "react-router-dom";


function Toolbar() {
    return(
        <section >
            <nav className="navbar">
                <h3 className="nav-title">
                            <Link to='/' className="nav-itemtitle">Admin Panel</Link>
                        </h3>
                <ul className="nav-list">
                   
                    <li className="nav-items">
                        <Link to='/account' className="nav-item">Accounts</Link>
                    </li>
                    <li className="nav-items">
                        <Link to='/settings' className="nav-item">Settings</Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Toolbar;