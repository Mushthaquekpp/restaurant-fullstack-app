import React, { useState } from "react";
import Layout from "../../components/layout/Layout.jsx";
import "../about/about.css";
import "./contact.css";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { Container, Row, Col, Form, Button, Toast } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let invalid = false;
    let err = "";
    if (!email) {
      invalid = true;
      err = "Email is required\n";
    }
    if (!name) {
      invalid = true;
      err += "Name is required\n";
    }
    if (!message) {
      invalid = true;
      err += "Message is required\n";
    }

    if (invalid) {
      alert(err);
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/contact", {
        name,
        email,
        message,
      });
      setEmail("");
      setName("");
      setmessage("");
      alert("Succesfully message sent");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Contact Us"}>
      <div>
        {/* Hero Section */}
        <div className="hero-contact">
          <Container>
            <div className="hero-content text-center">
              <h1 className="page-title">Contact Us</h1>
            </div>
          </Container>
        </div>

        {/* Contact Description */}
        <div className="description py-4">
          <Container>
            <Row>
              <Col xs={12}>
                <h3 className="color_sec">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Aliquid modi
                </h3>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Contact Details and Form */}
        <Container>
          <Row className="mb-5">
            {/* Contact Details */}
            <Col xs={12} md={5} className="mb-4 mb-md-0">
              <address className="contact-info">
                <strong>
                  <IoMailOutline /> : developer@123.com
                </strong>
                <br />
                <strong>
                  <IoCallOutline /> : +91 xxxx xxxx
                </strong>
                <br />
                <strong>
                  <CiLocationOn /> : abcd,abcdefghijk
                </strong>
              </address>
            </Col>

            {/* Contact Form */}
            <Col xs={12} md={7}>
              <Form className="contact-form" onSubmit={handleSubmit}>
                <Row className="mb-1">
                  <Col xs={12} md={6}>
                    <Form.Control
                      className="input"
                      type="text"
                      value={name}
                      name="name"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Control
                      className="input"
                      type="email"
                      value={email}
                      name="email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                </Row>
                <Form.Control
                  as="textarea"
                  name="message"
                  value={message}
                  placeholder="Message"
                  rows="5"
                  onChange={(e) => setmessage(e.target.value)}
                  className="mb-3"
                />
                <Button
                  variant="warning"
                  className="home-btn home-btn-secondary btn-small"
                  type="submit"
                >
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;
