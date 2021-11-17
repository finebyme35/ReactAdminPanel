

function Inputs({
    placeholder,
    name,
    type,
    id,
    value,
    onChange
}){
    return(
        <div className="inputs">
                <input 
                        type={type}
                        placeholder={placeholder}
                        id={id}
                        name={name}
                        value={value}
                        onChange={onChange}
                        className="product-input"
                        ></input>      
        </div>
    )
}

export default Inputs;