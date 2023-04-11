import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PaidIcon from '@mui/icons-material/Paid';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceIcon from '@mui/icons-material/Place';
import Button from "react-bootstrap/Button";
const Jobdetails = () => {
  const [alldata, setalldata] = useState([]);
  const [singledata, setSingledata] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data.json");
      const data = await res.json();
      setalldata(data);
      const finddata = data.find((data) => data.id === parseInt(id));
      if (finddata) {
        setSingledata(finddata);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">Job details</h1>

      <Container className="mt-5">
        <Row>
          <Col sm={8}>
            <p>
              <b>Job Description: </b>
              {singledata.jobDescription}{" "}
            </p>
            <p>
              <b>Job Responsibility: </b>
              {singledata.jobResponsibilities}{" "}
            </p>
            <p>
              <b>Educational Requirements: </b>
            </p>
            <p>{singledata.educationalRequirements}</p>
            <p>
              <b>Experiences: </b>
            </p>
            <p>{singledata.experience}</p>
          </Col>
          <Col sm={4}>
            <Card style={{backgroundColor:'rgb(220, 249, 249)'}}>
              <Card.Body>
                <Card.Title>Job Details</Card.Title>
                <hr />
                <Card.Text>
                  <p><PaidIcon/> Salary: 100K - 150K (Per Month)</p>
                  <p><WorkOutlineIcon/> Job Title : Product Designer</p>
                  <p>Contact Information</p>
                  <hr />
                  <p><LocalPhoneIcon/> Phone: 01750-00 00 00</p>
                  <p><MailOutlineIcon/> Email: info@gmail.com</p>
                  <p><PlaceIcon/> Address: Dhanmondi 32, Sukrabad Dhaka, Bangladesh</p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Button className='mt-3 w-100' variant="primary">Apply Now</Button>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobdetails;
