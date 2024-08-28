import React from "react";
import ImageContentLayout from "../../components/imageContentLayout/imageContentLayout.jsx";
import Layout from "../../components/layout/Layout.jsx";
import Container from "react-bootstrap/Container"; // Importing Container for responsive layout
import Row from "react-bootstrap/Row"; // Importing Row for responsive grid layout
import Col from "react-bootstrap/Col"; // Importing Col for responsive column layout
import Button from "react-bootstrap/Button"; // Importing Button for consistent button styles
import food1 from "../../assets/food1.jpg";
import food2 from "../../assets/food2.jpg";
import food3 from "../../assets/food3.jpg";
import "./home.css"; // Importing custom CSS

const Home = () => {
  return (
    <div>
      <Layout title={"Home"}>
        <div className="home">
          <Container fluid className="home-container">
            {/* Using Container for responsive layout */}
            <Row className="hero-content-home">
              {/* Using Row to organize layout in a grid */}
              <Col xs={12} md={6} className="home-content">
                {/* Using Col for responsive columns */}
                <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>
                <p>
                  Proin malesuada est at ex tincidunt, eget tincidunt ligula
                  ullamcorper.
                </p>
                <Button variant="light" className="home-btn">
                  {/* Using Button with variant for style */}
                  Learn more
                </Button>
                <Button
                  variant="warning"
                  className="home-btn home-btn-secondary"
                >
                  Register
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <Row>
            <Col xs={12}>
              {/* Adjusting layout for different screen sizes */}
              <ImageContentLayout
                imageSrc={food1}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo eu dui tincidunt, eu pellentesque justo laoreet. Curabitur vitae bibendum nisl. Proin malesuada est at ex tincidunt, eget tincidunt ligula ullamcorper. Suspendisse potenti. Duis eu metus vel augue malesuada accumsan. Phasellus rhoncus odio ac metus fermentum, ac venenatis libero bibendum."
              />
            </Col>
            <Col xs={12}>
              {/* Reversing layout on larger screens */}
              <ImageContentLayout
                imageSrc={food2}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo eu dui tincidunt, eu pellentesque justo laoreet. Curabitur vitae bibendum nisl. Proin malesuada est at ex tincidunt, eget tincidunt ligula ullamcorper. Suspendisse potenti. Duis eu metus vel augue malesuada accumsan. Phasellus rhoncus odio ac metus fermentum, ac venenatis libero bibendum."
                reverse
              />
            </Col>
            <Col xs={12}>
              <ImageContentLayout
                imageSrc={food3}
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo eu dui tincidunt, eu pellentesque justo laoreet. Curabitur vitae bibendum nisl. Proin malesuada est at ex tincidunt, eget tincidunt ligula ullamcorper. Suspendisse potenti. Duis eu metus vel augue malesuada accumsan. Phasellus rhoncus odio ac metus fermentum, ac venenatis libero bibendum."
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Home;
