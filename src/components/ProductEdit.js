const { Button } = require("react-bootstrap");





function ProductEdit() {
    return(
        <div className="product-edit">
                <h1 className="product-edititle">Edit Product</h1>
                <hr />
                <label htmlFor="product-names" className="product-label">Edit Product Name: </label>
                <input 
                type="text" 
                placeholder="Name" 
                id="product-names"
                name="product-names"
                className="product-input"
                ></input>
                <label htmlFor="product-codes" className="product-label">Edit Product Code: </label>
                <input 
                type="number" 
                placeholder="Product Code" 
                id="product-codes"
                name="product-codes"
                className="product-input"
                ></input>
                <label htmlFor="product-descriptions" className="product-label">Edit Product Description: </label>
                <input 
                type="text" 
                placeholder="Ürün Özellikleri" 
                id="product-descriptions"
                name="product-descriptions"
                className="product-input"
                ></input>
                <Button variant="warning" className="btn-sbmt">Submit</Button>
        </div>
    )
}

export default ProductEdit;