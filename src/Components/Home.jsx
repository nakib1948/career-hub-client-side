import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import man from "../assets/Images/man.png";
import "./Home.css";
import image1 from "../assets/Icons/accounts 1.png";
import image2 from "../assets/Icons/business 1.png";
import image3 from "../assets/Icons/social-media 1.png";
import image4 from "../assets/Icons/chip 1.png";
import test from "../assets/Images/google-1-1 1.png"
import PlaceIcon from '@mui/icons-material/Place';
import PaidIcon from '@mui/icons-material/Paid';
import { CardGroup, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import FeaturedJobs from "./FeaturedJobs";
const Home = () => {

  const [data,setdata]=useState([])
  const [alldata,setalldata]=useState([])
  const [alljobs,setalljobs]=useState(true)
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>{
        setdata(data.slice(0,4))
        setalldata(data)
    })
   },[])
   let allJobs=()=>{
     setalljobs(false)
   }
   let fourJobs=()=>{
    setalljobs(true)
   }
   
  // console.log(data)
  const cardData = [
    {
      imgSrc: image1,
      title: "Account & Finance",
      text: "300 Jobs Available",
    },
    {
      imgSrc: image2,
      title: "Creative Design",
      text: "100+ Jobs Available",
    },
    {
      imgSrc: image3,
      title: "Marketing & Sales",
      text: "150 Jobs Available",
    },
    {
      imgSrc: image4,
      title: "Engineering Job",
      text: "224 Jobs Available",
    },
  ];

  return (
    <>
      <Navbar collapseOnSelect className="p-3" expand="lg" bg="light">
        <Container>
          <h1>Jobspot</h1>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#features">Statistics</Nav.Link>
              <Nav.Link href="#pricing">Applied Jobs</Nav.Link>
              <Nav.Link href="#pricing">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Button variant="primary">Star Applying</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="second-section mb-5">
        <Row className="align-items-center">
          <Col sm={6}>
            <h1>
              One step <br /> Closer to your{" "}
              <span className="text-primary">Dream job</span>{" "}
            </h1>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <Button variant="primary" className="px-3 py-2 my-2">
              Get Started
            </Button>
          </Col>
          <Col sm={6}>
            <img className="img-fluid" height="500px" src={man} alt="" />
          </Col>
        </Row>
      </Container>

      <h1 className="text-center">Job Category List</h1>
      <p className="text-center">
        <small>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>
      </p>

      <div className="card-group-container my-5">
        {cardData.map((card, index) => (
          <Card key={index} className="card no-border text-center p-3">
            <img
              style={{ marginLeft: "60px" }}
              height="50px"
              width="50px"
              src={card.imgSrc}
            />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <h1 className="text-center">Featured Jobs</h1>
      <p className="text-center">
        <small>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>
      </p>
     

       {
          alljobs ? <FeaturedJobs data={data}/> : <FeaturedJobs data={alldata}/>
       }

        <div className="d-flex justify-content-center mt-3">
            {
                alljobs ?  <Button onClick={allJobs}  variant="primary">See all jobs</Button>:
                <Button onClick={fourJobs}  variant="primary">See less</Button>
            }
        

        </div>
    </>
  );
};

export default Home;
