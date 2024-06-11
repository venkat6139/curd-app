import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate} from "react-router-dom"
import {v4 as uuid} from "uuid"
//import items from "../items";
import items from "../Details/items";
const Add = () => {
    const [username,setName] = useState("");
    const [usercategory,setCategory] = useState("");
    const [userdate,setDate] = useState("");

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = uuid();
        let uniqueId = ids.slice(0,8);
        let a = username,b=usercategory,c=userdate;
        items.push({id:uniqueId,name:a,category:b,date:c})
        navigate("/")
    }


    return (
        <div>
            <Form className="d-grif gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategory">
                    <Form.Control type="text" placeholder="Enter Category" required onChange={(e) => setCategory(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formDate">
                    <Form.Control type="text" placeholder="Enter Date" required onChange={(e) => setDate(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Add</Button>
            </Form>
        </div>
    )
}
export default Add