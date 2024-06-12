import React, { useState } from "react";
import {Button, Table,Form,InputGroup} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import {Link,useNavigate} from "react-router-dom"
import items from "../Details/items";
import './index.css'

const Home = () => {
    let navigate = useNavigate();

    /*const handleEdit = (id,name,category,date) => {
        localStorage.setItem("Name",name)
        localStorage.setItem("Category",category)
        localStorage.setItem("Id",id)
        localStorage.setItem("Date",date)
    }*/
    const handleDelete = (id) => {
        var index = items.map(function(e){
            return e.id
        }).indexOf(id);
        items.splice(index,1);
        navigate('/');
    }

    const handleLogout = () => {
        localStorage.removeItem("loggedin");
        navigate('/login')
    }

    const [search,setSearch] = useState("");
    return (
        <>
        <div style={{margin:"10rem"}}>
            <div className="home-container">
            <h1 className="text-center">Home Page</h1>
            <button onClick={handleLogout} type="button" className="btn btn-success">
                Logout
            </button>
            </div>
            <Form>
                <InputGroup className="my-3">
                <Form.Control onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Details">
                </Form.Control>
                </InputGroup>
            </Form>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items && items.length > 0 ? items.filter((item) => {
                            return search.toLowerCase() === "" ? item : item.name.toLowerCase().includes(search);
                        }).map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.category}</td>
                                    <td>{item.date}</td>
                                    <td>
                                        <Button>Edit</Button>
                                        &nbsp;
                                        <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                        : "No data available"
                    } 
                </tbody>
            </Table>
            <br></br>
            <Link to="/create" className="d-grid gap-2">
            <Button size="lg">Create</Button>
            </Link>
        </div>
        </>
    )
}
export default Home
