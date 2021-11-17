import Buttons from "./Buttons";
import Inputs from "./Inputs";





function ProductEdit({onEdit, productcodes
    , products, productdescriptions
    ,setProductCode, setProducts, setProductsDescriptions}) {
    return(
        <div className="product-edit">
                <h1 className="product-edititle">Edit Product</h1>
                <hr />
                <form onSubmit={onEdit}>
                    
                    <label htmlFor="product-names" className="product-label">Edit Product Name: </label>

                    <Inputs id="product-names"
                     name="product-names"
                     placeholder="Ürün İsmi"
                    value={products}
                        onChange={(e) => setProducts(e.target.value)}/>
                    
                    <label htmlFor="product-codes" className="product-label">Edit Product Code: </label>
                    <Inputs 
                        type="number" 
                        placeholder="Ürün Kodu" 
                        id="product-codes"
                        name="product-codes"
                    value={productcodes}
                    onChange={(e) => setProductCode(e.target.value)}
                    />
                    <label htmlFor="product-descriptions" className="product-label">Edit Product Description: </label>
                    <Inputs 
                    type="text" 
                    placeholder="Ürün Özellikleri" 
                    id="product-descriptions"
                    name="product-descriptions"
                    value={productdescriptions}
                    onChange={(e) => setProductsDescriptions(e.target.value)}
                    className="product-input"
                    />
                    <Buttons type="submit"/>
                </form>
        </div>
    )
}

export default ProductEdit;