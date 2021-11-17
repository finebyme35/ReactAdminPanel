import Buttons from "./Buttons";
import Inputs from "./Inputs";



function ProductAdd({addUsers, productcodes
    , products, productdescriptions
    ,setProductCode, setProducts, setProductsDescriptions}){
    
    

    return(
        <div className="product-edit">
            <h1 className="product-edititle">Add Product</h1>
            <hr />
           <form onSubmit={addUsers}>
            <label htmlFor="product-name" className="product-label">Ürün Adı: </label>
                <Inputs 
                type="text" 
                placeholder="Ürün Adı" 
                id="product-name"
                name="product-name"
                value={products}
                onChange={(e) => setProducts(e.target.value)}
                className="product-input"
                 />
                <label htmlFor="product-code" className="product-label">Ürün Kodu: </label>
                <Inputs
                type="number" 
                placeholder="Ürün Kodu" 
                id="product-code"
                name="product-code"
                value={productcodes}
                onChange={(e) => setProductCode(e.target.value)}
                className="product-input"
                 />
                <label htmlFor="product-description" className="product-label">Ürün Özellikleri: </label>
                <Inputs 
                type="text" 
                placeholder="Özellikleri" 
                id="product-description"
                name="product-description"
                value={productdescriptions}
                onChange={(e) => setProductsDescriptions(e.target.value)}
                className="product-input"
                 />
                <Buttons type="submit"/>
           </form>
        </div>
    )
}

export default ProductAdd;