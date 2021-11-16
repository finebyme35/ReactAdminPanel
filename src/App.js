import { Route, Routes } from "react-router";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Product from "./components/Product";
import ProductEdit from "./components/ProductEdit";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";

function App() {


  return (
    <>
      <Toolbar />
      <div className="content">
          <Sidebar />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/product' element={<Product />} />
            <Route path='/edit' element={<ProductEdit />} />
          </Routes>
      </div>
      <Footer />
    </>
  );
 }

export default App;
