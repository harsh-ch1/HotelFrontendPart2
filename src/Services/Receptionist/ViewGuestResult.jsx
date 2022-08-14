import React from "react";
import { Button, Container, Form, FormGroup, Input,Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    
    } from "reactstrap";
import Header from "../../pages/Header";

const ViewGuestResult=()=>{
    return(
        <div>
            <Header />
        <h2 className="text-center my-3">Guest Result</h2>
        
        <div className="carddiv">
                <Card className="text-center card2">
            <CardBody>
                <CardSubtitle className="fw-bold card2" style={{backgroundColor:"#99E2EB"}}>Kishan</CardSubtitle>
                <br></br>
                <CardText>Last Name : singh</CardText>
                <CardText>Phone No. : 9990661578</CardText>
                <CardText>Company : Capgemini</CardText>
                <CardText>Email : jahd@hmd.com</CardText>
                <CardText>Gnder : Male</CardText>
                <CardText>Address Id : 101</CardText>
                <CardText>StreetName : Shahdara</CardText>
                <CardText>City : Bhutan</CardText>
                <CardText>State : U.P</CardText>
                <CardText>Pincode :110032</CardText>
                
                <Container className="text-center">
                    <Button  style={{color: "white" , backgroundColor: "#003333"}}>Update</Button>
                    <Button className="mx-2" style={{color: "white" , backgroundColor: "#999900"}}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
                </div>
                </div>
    )
}

export default ViewGuestResult;