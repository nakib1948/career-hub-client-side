import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PaidIcon from "@mui/icons-material/Paid";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PlaceIcon from "@mui/icons-material/Place";
import Button from "react-bootstrap/Button";
import Navbarr from "./Navbarr";
const Appliedjob = () => {
  const [Data, setData] = useState([]);

  const [check, setCheck] = useState(false);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/data.json");
      const data = await res.json();

      const item = await JSON.parse(localStorage.getItem("storedIds"));
      let arr = [];
      if (item && item.length) {
        // check if item exists and has length
        let arr = [];
        for (let i of item) {
          for (let j of data) {
            if (i === j.id) arr.push(j);
          }
        }
        setData(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div>

      <Navbarr/>
      <h1 className="text-center mt-5 mb-5">Applied Jobs</h1>
      {Data.length && (
        <Container>
          <Row xs={1} md={1} className="g-4">
            {Array.from({ length: Data.length }).map((_, idx) => (
              <Col>
                <div className="d-flex justify-content-around p-5 m-3 bg-light align-items-center">
                 
                    <div>
                      <img
                        height="60px"
                        width="120px"
                        src={Data[idx].companyLogo}
                      />
                    </div>
                    <div >
                      
                        <Card.Title>{Data[idx].jobTitle}</Card.Title>
                        <Card.Text>{Data[idx].companyName}</Card.Text>
                        <div className="d-flex mb-3">
                          <Button
                            style={{ marginRight: "15px" }}
                            variant="outline-primary"
                          >
                            {Data[idx].joblocation}
                          </Button>
                          <Button variant="outline-primary">Full time</Button>
                        </div>
                        <p>
                          {" "}
                          <PlaceIcon /> {Data[idx].address} <PaidIcon /> Salary
                          : {Data[idx].salary}
                        </p>
                     
                    </div>

                    <div >
                      <Button variant="primary">View Details</Button>
                    </div>
                 
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Appliedjob;
