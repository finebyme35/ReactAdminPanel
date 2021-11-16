




function ProductEdit() {
    return(
        <div className="product-edit">
                <h1 className="product-edititle">Edit Product</h1>
                <hr />
                <label htmlFor="product-name" className="product-label">Edit Name: </label>
                <input 
                type="text" 
                placeholder="Name" 
                id="product-name"
                name="product-name"
                className="product-input"
                ></input>
        </div>
    )
}

export default ProductEdit;