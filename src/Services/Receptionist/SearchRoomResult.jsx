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

const SearchRoomResult=()=>{
    return(
        <div>
            <Header />
        <h2 className="text-center my-3">Following rooms are available </h2>
        <br></br>
        <div className="carddiv">
                <Card className="text-center card2">
            <CardBody>
                <CardSubtitle className="fw-bold card2">Room No : 402</CardSubtitle>
                <br></br>
                <CardText>Type : Luxury</CardText>
                <CardText>Capacity : 3</CardText>
                <CardText>Status : Available</CardText>
                <CardText>Checkin Time : 12:00:00</CardText>
                <CardText>Checkin Time : 12:00:00</CardText>
                <CardText>First night Rate : 1000</CardText>
                <CardText>extension Rate : 700</CardText>
                <CardText>Booked Till : 2021-12-31</CardText>
                
                
                <Container className="text-center">
                    <Button  color="success" className="bt">
                    <Link className="list-group-item list-group-item-action" tag="a" to="/receptionist/searchroom/result/reservation">Book Room</Link>
                    </Button>
                </Container>
            </CardBody>
        </Card>
                </div>
                </div>
    )
}

export default SearchRoomResult;