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

const IssueBillResult=()=>{
    return(
        <div>
            <Header />
        <h2 className="text-center my-1">Generated Bill </h2>
        
        <div className="carddiv">
                <Card className="text-center card2">
            <CardBody>
                <CardSubtitle className="fw-bold">Total Amount : 14000.00</CardSubtitle>
                <br></br>
                <CardText>Guest Name : Suresh</CardText>
                <CardText>Guest Email : abc@k.com</CardText>
                <CardText>Room No : 402</CardText>
                <CardText>Room Type : Luxury</CardText>
                <CardText>Bill Date : 2021-05-12</CardText>
                <CardText>Total Days : 7</CardText>
                <CardText>Rate : 1000</CardText>
                <CardText>Extension Days : 2</CardText>
                <CardText>Extension Rate : 700</CardText>
                <CardText>Tax : 18%</CardText>
                <CardText>Bill Id : 101 </CardText>
                
                
                <Container className="text-center">
                <Button  className="my-1 col-3 bt" style={{color: "white" , backgroundColor: "#009BCD", marginLeft: "30px"}}>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/receptionist/issuebill/result">Online</Link>
                    </Button>
                    <Button  className="col-3 mx-3 bt" style={{color: "white" , backgroundColor: "#1F6D03"}}>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/receptionist/issuebill/result">Cash</Link>
                    </Button>
                </Container>
            </CardBody>
        </Card>
                </div>
                </div>
    )
}
export default IssueBillResult;