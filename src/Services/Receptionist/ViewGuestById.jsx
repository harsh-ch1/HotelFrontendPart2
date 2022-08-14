import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input,Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    
    } from "reactstrap";
import Header from "../../pages/Header";

const ViewGuestById=()=>{
    return(
        <div>
            <Header />
            <div >
            <h2 className="text-center my-3">View Guest By Id</h2>
            <Container style={{paddingLeft:"300px"}}>
            <Form className="form" style={{width:"70%"}} >
                <FormGroup>
                    <label  className="my-2" for="guestId">Enter guest Id</label>
                    <Input 
                    type="number" 
                    placeholder="Enter Id here" 
                    name="deguest" 
                    id="deguest" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                <Container className="text-center my-4">
                    <Button  color="success bt" className="bt">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/receptionist/viewguestbyid/result">Search</Link>
                    </Button>
                </Container>
                </Form>
                
                </Container>

                
                
                

                    
                
                </div>
            

        </div>
    )
}

export default ViewGuestById;