import React from 'react';
import { CardGroup, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PlaceIcon from '@mui/icons-material/Place';
import PaidIcon from '@mui/icons-material/Paid';
const FeaturedJobs = (props) => {
   
    let data=props.data

    return (

    <>
     <Container>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: data.length }).map((_, idx) => (
            <Col>
              <Card className="p-3">
              <img
           
              height="60px"
              width="120px"
              src={data[idx].companyLogo}
             />
                <Card.Body>
                  <Card.Title>{data[idx].jobTitle}</Card.Title>
                  <Card.Text>
                   {data[idx].companyName}
                  </Card.Text>
                  <div className="d-flex mb-3">
                  <Button style={{marginRight:'15px'}} variant="outline-primary">{data[idx].joblocation}</Button>
                  <Button variant="outline-primary">Full time</Button>
                 
                  </div>
                  <p> <PlaceIcon/> {data[idx].address} <PaidIcon/> Salary : {data[idx].salary}</p>
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>   
        </>
    );
};

export default FeaturedJobs;