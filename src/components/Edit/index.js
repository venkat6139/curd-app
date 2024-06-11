import React, {useState,useEffect} from "react";
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate} from "react-router-dom"
//import {v4 as uuid} from "uuid"
import items from "../Details/items";

const Edit = () => {
    const [username,setName] = useState("");
    const [usercategory,setCategory] = useState("");
    const [userdate,setDate] = useState("");
    const [id,setId] = useState("");

    let navigate = useNavigate();

    var index = items.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        let a = items[index];
        a.name = username;
        a.category = usercategory;
        a.date = userdate;
        navigate("/")
    }

    useEffect(() => {
        setName(localStorage.getItem("Name"))
        setCategory(localStorage.getItem("Category"))
        setDate(localStorage.getItem("Date"))
        setId(localStorage.getItem("Id"))
    },[])

    return (
        <div>
            <Form className="d-grif gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={username} required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategory">
                    <Form.Control type="text" placeholder="Enter Category" value={usercategory} required onChange={(e) => setCategory(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDate">
                    <Form.Control type="text" placeholder="Enter Date" value={userdate} required onChange={(e) => setDate(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )
}
export default Edit