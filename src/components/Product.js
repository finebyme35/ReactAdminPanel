import { useState } from "react";
import { Table, Button} from "react-bootstrap";




  

function Product(props) {
    const [users, setUsers] = useState(props.initial);
    
    const onDelete = (id) => {
        const newUsers = users.filter(user =>  user.id !== id);
        setUsers(newUsers);
    }
   
    return(
        <section className="product">
                <h1 className="product-title">Ürünler</h1>
                <Table striped bordered hover variant="dark">
                                <thead >
                                    <tr>
                                    <th>Product Name</th>
                                    <th>Product Code</th>
                                    <th>Product Description</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { users ? 
                                        users.map(user => 
                                            <tr key={user.id}>
                                                <td>
                                                    {user.product}
                                                </td>
                                                <td>
                                                    {user.productcode}
                                                </td>
                                                <td>
                                                    {user.productdescription}
                                                </td>
                                                <td>
                                                    <Button variant="warning" onClick={() => props.onEdit(user.id)} >Edit</Button>{' '}
                                                    <Button variant="danger" onClick={() => onDelete(user.id)}>Delete</Button>
                                                </td>
                                            </tr>
                                            ) : <h1>Loading...</h1>}  
                                            
                                        
                                </tbody>
                                
                        </Table>
                                            
                   </section>
    )
}

export default Product;