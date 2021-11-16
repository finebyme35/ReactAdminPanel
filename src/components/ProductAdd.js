import { useState } from "react";
import { Button } from "react-bootstrap";


function ProductAdd(props){
    const [users, setUsers] = useState(props.user);
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

    return(
        <div className="product-edit">
            <h1 className="product-edititle">Add Product</h1>
            <hr />
           <form onSubmit={addUsers}>
            <label htmlFor="product-name" className="product-label">Ürün Adı: </label>
                <input 
                type="text" 
                placeholder="Ürün Adı" 
                id="product-name"
                name="product-name"
                value={products}
                onChange={(e) => setProducts(e.target.value)}
                className="product-input"
                ></input>
                <label htmlFor="product-code" className="product-label">Ürün Kodu: </label>
                <input 
                type="number" 
                placeholder="Ürün Kodu" 
                id="product-code"
                name="product-code"
                value={productcodes}
                onChange={(e) => setProductCode(e.target.value)}
                className="product-input"
                ></input>
                <label htmlFor="product-description" className="product-label">Ürün Özellikleri: </label>
                <input 
                type="text" 
                placeholder="Özellikleri" 
                id="product-description"
                name="product-description"
                value={productdescriptions}
                onChange={(e) => setProductsDescriptions(e.target.value)}
                className="product-input"
                ></input>
                <Button variant="warning" type="submit" className="btn-sbmt">Submit</Button>
           </form>
        </div>
    )
}

export default ProductAdd;