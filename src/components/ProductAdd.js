import { Button } from "react-bootstrap";


function ProductAdd(){
    return(
        <div className="product-edit">
            <h1 className="product-edititle">Add Product</h1>
            <hr />
            <label htmlFor="product-name" className="product-label">Ürün Adı: </label>
            <input 
            type="text" 
            placeholder="Ürün Adı" 
            id="product-name"
            name="product-name"
            className="product-input"
            ></input>
            <label htmlFor="product-code" className="product-label">Ürün Kodu: </label>
            <input 
            type="number" 
            placeholder="Ürün Kodu" 
            id="product-code"
            name="product-code"
            className="product-input"
            ></input>
            <label htmlFor="product-description" className="product-label">Ürün Özellikleri: </label>
            <input 
            type="text" 
            placeholder="Özellikleri" 
            id="product-description"
            name="product-description"
            className="product-input"
            ></input>
            <Button variant="warning" className="btn-sbmt">Submit</Button>
        </div>
    )
}

export default ProductAdd;