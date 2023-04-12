import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PaidIcon from "@mui/icons-material/Paid";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import PlaceIcon from "@mui/icons-material/Place";
import Button from "react-bootstrap/Button";
import Navbarr from "./Navbarr";
import "./Appliedjob.css";
const Appliedjob = () => {
    const [Data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [check, setCheck] = useState(false);
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch("/data.json");
        const data = await res.json();
  
        const item = await JSON.parse(localStorage.getItem("storedIds"));
        if (item && item.length) {
          let arr = [];
          for (let i of item) {
            for (let j of data) {
              if (i === j.id) arr.push(j);
            }
          }
          setData(data);
          setFilteredData(arr);
        } else {
          setData(data);
          setFilteredData(data);
        }
      }
      fetchData();
    }, []);

    const onsite = () => {
        if (Data.length) {
          const allonsite = Data.filter((data) => data.joblocation === "onsite");
          setFilteredData(allonsite);
        }
      };
      const remote = () => {
        if (Data.length) {
          const allremote = Data.filter((data) => data.joblocation === "remote");
          setFilteredData(allremote);
        }
      };
      const All=()=>{
        if (Data.length) {
            setFilteredData(Data);
          }
      }

  return (
    <div>
      <Navbarr />
      <h1 className="text-center mt-5 mb-5">Applied Jobs</h1>
      <Container className="text-end">
        <DropdownButton id="dropdown-item-button" variant="secondary" title="Filter by">
          <Dropdown.Item onClick={onsite} as="button">Onsite</Dropdown.Item>
          <Dropdown.Item onClick={remote} as="button">Remote</Dropdown.Item>
          <Dropdown.Item onClick={All} as="button">All</Dropdown.Item>
          
        </DropdownButton>
      </Container>
      {filteredData.length  && (
        <Container>
          <Row xs={1} md={1} className="g-4">
            {filteredData.map((job) => (
              <Col>
                <div className="d-flex appliedjob justify-content-around p-5 m-3 bg-light align-items-center">
                  <div className="appliedjob1">
                    <img
                      height="60px"
                      width="120px"
                      src={job.companyLogo}
                    />
                  </div>
                  <div className="appliedjob1">
                    <Card.Title>{job.jobTitle}</Card.Title>
                    <Card.Text>{job.companyName}</Card.Text>
                    <div className="d-flex mb-3">
                      <Button
                        style={{ marginRight: "15px" }}
                        variant="outline-primary"
                      >
                        {job.joblocation}
                      </Button>
                      <Button variant="outline-primary">Full time</Button>
                    </div>
                    <p>
                      {" "}
                      <PlaceIcon /> {job.address} <PaidIcon /> Salary :{" "}
                      {job.salary}
                    </p>
                  </div>

                  <div className="appliedjob1">
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
