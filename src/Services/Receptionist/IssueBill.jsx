import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";
import Header from "../../pages/Header";

const IssueBill=()=>{
    return(
        <div>
            <Header />
            <div>
            <h2 className="text-center my-3">Enter the Room No to Issue Bill</h2>
            <Container style={{paddingLeft:"300px"}}>
            <Form className="form" style={{width:"70%"}}>
                <FormGroup>
                    <h5><label  className="my-2" for="roomno">Enter Room No</label></h5>
                    <Input 
                    type="number" 
                    placeholder="Enter here" 
                    name="roomno" 
                    id="roomno" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                
                <Container className="text-center">
                    <Button  color="success" className="bt">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/receptionist/issuebill/result">Generate Bill</Link>
                    </Button>
                </Container>
                </Form>
                </Container>
        </div>
        </div>
    )
}

export default IssueBill;