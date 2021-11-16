import { Link } from "react-router-dom";


function Sidebar() {
    return(
       
           <aside className="side-content">
                <h1 className="side-title">Sidebar!</h1>
                <ul className="side-list">
                    <li className="side-item">
                        <Link to='/product' class="side-link">Ürünler</Link>
                    </li>
                    <li className="side-item">
                        <Link to='/add' class="side-link">Ürün Ekle</Link>
                    </li>
                    <li className="side-item">
                        <Link to='/edit' class="side-link">Ürün Düzenle</Link>
                    </li>
                </ul>
           </aside>
    )
}
export default Sidebar;