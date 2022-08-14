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

const SearchRoom=()=>{
    return(
        <div>
            <Header />
            <br></br>
            <div className="div2">
            <h2 className="text-center my-3" style={{Color:"#001547"}}>Search Room</h2>
            <Form className="form">
                <FormGroup>
                    <label  className="my-2" for="roomType">Room Type</label>
                    <Input 
                    type="text" 
                    placeholder="Enter type here" 
                    name="roomType" 
                    id="roomType" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                <FormGroup>
                    <label  className="my-2" for="checkIn">Check in Date</label>
                    <Input 
                    type="date" 
                    placeholder="Enter date here" 
                    name="checkIn" 
                    id="checkIn" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                <FormGroup>
                    <label  className="my-2" for="noOfGuest">No of Guest</label>
                    <Input 
                    type="number" 
                    placeholder="Enter type here" 
                    name="noOfGuest" 
                    id="noOfGuest" 
                    //style={{width: 400}}
                    />

                </FormGroup>

                <Container className="text-center">
                    <Button  color="success" className="bt" style={{margin:8}}>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/receptionist/searchroom/result">Search</Link>
                    </Button>
                </Container>
                </Form>

                
                

                    
                
                
           </div> 

        </div>
    )
}

export default SearchRoom;