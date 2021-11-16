import { useState } from "react";
import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Product from "./components/Product";
import ProductAdd from "./components/ProductAdd";
import ProductEdit from "./components/ProductEdit";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";


const INITIAL_USER = [
  {id: Math.random(), product: 'Dolap', productcode: '1211111111', productdescription: 'açılır kapanır bir eşya'},
  
]

function App() {
  const [users, setUsers] = useState(INITIAL_USER);

  return (
    <>
      <Toolbar />
      <div className="content">
          <Sidebar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/product' element={<Product initial={users}/>} />
            <Route path='/edit' element={<ProductEdit />} />
            <Route path='/add' element={<ProductAdd user={users}/>} />
          </Routes>
      </div>
      <Footer />
    </>
  );
 }

export default App;
