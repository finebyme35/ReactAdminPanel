import { useState } from "react";
import { Table, Button} from "react-bootstrap";

const INITIAL_USER = [
    {id: Math.random(), name: 'Hello', email: 'asd@gmail.com', username: 'hello123'},
    {id: Math.random(), name: 'Hello1', email: 'asd1@gmail.com', username: 'hello1234'},
    {id: Math.random(), name: 'Hello2', email: 'asd2@gmail.com', username: 'hello12345'},
    {id: Math.random(), name: 'Hello3', email: 'asd3@gmail.com', username: 'hello123456'},
    {id: Math.random(), name: 'Hello4', email: 'asd4@gmail.com', username: 'hello1234567'},
    {id: Math.random(), name: 'Hello5', email: 'asd5@gmail.com', username: 'hello12345678'},
    {id: Math.random(), name: 'Hello6', email: 'asd6@gmail.com', username: 'hello123456789'},
]

function Product() {
    const [users, setUsers] = useState(INITIAL_USER);

    const onDelete = (id) => {
        const newUsers = users.filter(user =>  user.id !== id);
        setUsers(newUsers);
    }
    return(
        <section className="product">
        <h1 className="product-title">Ürünler</h1>
        <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                                { users ? 
                                users.map(user => 
                                    <tr key={user.id}>
                                        <td>
                                            {user.name}
                                        </td>
                                        <td>
                                            {user.email}
                                        </td>
                                        <td>
                                            {user.username}
                                        </td>
                                        <td>
                                            <Button variant="warning">Edit</Button>{' '}

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