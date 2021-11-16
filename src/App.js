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
  const [products, setProducts] = useState('');
    const [productcodes, setProductCode] = useState(0);
    const [productdescriptions, setProductsDescriptions] = useState('');

    const addUsers = (e) => {
        e.preventDefault();
        const newUser = {
            id: Math.random(),
            product: products,
            productcode: productcodes,
            productdescription: productdescriptions
        }
        setUsers([...users, newUser])
        setProducts('');
        setProductsDescriptions('');
        setProductCode('');
    }

  return (
    <>
      <Toolbar />
      <div className="content">
          <Sidebar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/product' element={<Product initial={users}/>} />
            <Route path='/edit' element={<ProductEdit />} />
            <Route path='/add' element={<ProductAdd 
            products={products} 
            productcodes={productcodes} 
            productdescriptions={productdescriptions}
            setProductCode={setProductCode}
            setProducts={setProducts}
            setProductsDescriptions={setProductsDescriptions}
            addUsers={addUsers}/>} />
          </Routes>
      </div>
      <Footer />
    </>
  );
 }

export default App;
