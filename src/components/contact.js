import React, { useState, useEffect } from "react";
import "../static/contact.css";
import "../static/loading.css"; // Import your CSS file
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can replace this with actual data fetching)
    const fakeApiCall = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulating a 2-second delay
    };

    fakeApiCall();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      {loading ? (
        // Render a loading spinner or any other loading indicator
        <div className="loading-container">
          <div className="loading-spinner" />
        </div>
      ) : (
        <section className="hero-section">
          <Container className="mt-5 contact-container" lg={2}>
            <InputGroup size="lg" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">
                First name
              </InputGroup.Text>
              <Form.Control aria-label="First name" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Last name
              </InputGroup.Text>
              <Form.Control aria-label="First name" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-lg">+91</InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
            </InputGroup>

            <InputGroup>
              <InputGroup.Text>With textarea</InputGroup.Text>
              <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup>

            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                Block level button
              </Button>
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default Contact;
