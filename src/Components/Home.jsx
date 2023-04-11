import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import man from "../assets/Images/man.png";
import "./Home.css";
import image1 from "../assets/Icons/accounts 1.png"
import { CardGroup, Card } from "react-bootstrap";
const Home = () => {
  const cardData = [
    {
      imgSrc: image1,
      title: "Account & Finance",
      text: "300 Jobs Available",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      title: "Creative Design",
      text: "100+ Jobs Available",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      title: "Marketing & Sales",
      text: "150 Jobs Available",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
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
            <h1 >
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
        {" "}
        <small>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>{" "}
      </p>

      <div className="card-group-container">
      {cardData.map((card, index) => (
        <Card key={index} className="card no-border text-center p-3">
          <img style={{marginLeft:'60px'}} height='50px' width='50px'  src={card.imgSrc} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.text}</Card.Text>
         
          </Card.Body>
        </Card>
      ))}
    </div>
     
    </>
  );
};

export default Home;
