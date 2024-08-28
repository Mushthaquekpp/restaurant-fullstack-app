import React from "react";
import Container from "react-bootstrap/Container"; // Importing Container for responsive layout
import Row from "react-bootstrap/Row"; // Importing Row for responsive grid system
import Col from "react-bootstrap/Col"; // Importing Col for responsive columns
import "./About.css";
import Layout from "../../components/layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      {/* Hero section with responsive container */}
      <div className="hero">
        <Container>
          <Row>
            <Col>
              <div className="hero-content">
                <h1 className="page-title">About Us</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main content section */}
      <div className="content">
        <Container>
          <Row>
            <Col>
              <div className="content-detail">
                Sed eu mi eget ligula sollicitudin interdum. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Fusce id dolor vel ligula tincidunt
                sollicitudin. Nulla facilisi. Etiam eu accumsan ex, in rhoncus
                elit. Quisque id lacus quis dolor dignissim congue eu eu nunc.
                Ut auctor cursus orci nec pellentesque. Vestibulum finibus urna
                euismod tortor volutpat dapibus. Nam ac metus vel eros aliquet
                fermentum ac eu massa. Sed et ex et odio accumsan luctus. Nulla
                facilisi. Vestibulum bibendum fringilla libero, id iaculis purus
                varius non. Integer eget eleifend orci, vel luctus dui. Praesent
                luctus, felis vel gravida lacinia, velit augue fermentum sem,
                vel iaculis dolor ante eget nisl. Vivamus in justo ut purus
                dictum egestas id a mauris. Nulla eu quam vel felis tempus
                luctus. <br />
                Aenean in mauris vel nisi euismod aliquet. Pellentesque suscipit
                nec erat sit amet volutpat. Aliquam vel risus id enim cursus
                auctor nec at odio. Sed ac urna risus. Integer auctor urna nec
                augue efficitur, non rhoncus velit volutpat. Fusce et nunc non
                velit consequat lacinia eu ac sapien. Proin ut tristique ligula.
                Curabitur aliquet felis et orci volutpat, sit amet sollicitudin
                lacus ultrices. Vivamus nec dui nec nunc feugiat suscipit.
                Integer ac ullamcorper mauris. Vestibulum eu justo in nisl
                dapibus blandit. Maecenas eu augue id felis tristique tristique.{" "}
                <br /> Suspendisse potenti. Phasellus fermentum augue nec purus
                sodales, ut efficitur orci commodo. Integer vel sem vel ligula
                dapibus laoreet. Maecenas nec risus bibendum, dapibus augue ut,
                tristique velit. Cras aliquet, mauris eu dictum sollicitudin,
                justo eros euismod velit, nec gravida elit orci eu odio. Nulla
                facilisi. Curabitur quis tortor auctor, rhoncus justo ut, luctus
                lacus. Sed feugiat consectetur ipsum, nec efficitur turpis
                tincidunt non. Phasellus vel ex id neque imperdiet tincidunt. In
                hac habitasse platea dictumst. Nam eu purus eu metus eleifend
                cursus. Curabitur non malesuada nulla, at rhoncus nulla. Aenean
                eget justo in orci vehicula congue id at libero. Integer finibus
                elit id feugiat luctus. Phasellus ut malesuada mi, eu
                consectetur mi. Aliquam tempus justo a justo tincidunt, ut
                congue sem bibendum. Vestibulum varius, felis id rhoncus
                sagittis, elit ligula aliquet velit, id varius elit metus a
                metus. Fusce at pulvinar purus. Sed lacinia hendrerit mi a
                venenatis. In hac habitasse platea dictumst. Morbi eu sem ac
                tortor blandit vehicula a vel leo. Quisque ullamcorper mauris
                non metus tempus, a ullamcorper elit iaculis. Aenean ut dolor
                sem. <br /> Vestibulum scelerisque vel orci ut suscipit. Etiam
                auctor, elit at cursus tincidunt, velit sem dignissim arcu, a
                hendrerit leo urna id libero. Nunc ut sem eu nulla scelerisque
                congue ut vitae quam. Duis nec hendrerit lectus. Vivamus
                ullamcorper vestibulum justo, eu fringilla elit. Integer varius
                mi at lacus ultrices, et varius felis accumsan. Sed eu mi eget
                ligula sollicitudin interdum. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas. Fusce id dolor vel ligula tincidunt sollicitudin. Nulla
                facilisi. Etiam eu accumsan ex, in rhoncus elit. Quisque id
                lacus quis dolor dignissim congue eu eu nunc. Ut auctor cursus
                orci nec pellentesque. Vestibulum finibus urna euismod tortor
                volutpat dapibus. Nam ac metus vel eros aliquet fermentum ac eu
                massa. Sed et ex et odio accumsan luctus. Nulla facilisi.
                Vestibulum bibendum fringilla libero, id iaculis purus varius
                non. Integer eget eleifend orci, vel luctus dui. Praesent
                luctus, felis vel gravida lacinia, velit augue fermentum sem,
                vel iaculis dolor ante eget nisl. Vivamus in justo ut purus
                dictum egestas id a mauris. Nulla eu quam vel felis tempus
                luctus. <br />
                Sed eu mi eget ligula sollicitudin interdum. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Fusce id dolor vel ligula tincidunt
                sollicitudin. Nulla facilisi. Etiam eu accumsan ex, in rhoncus
                elit. Quisque id lacus quis dolor dignissim congue eu eu nunc.
                Ut auctor cursus orci nec pellentesque. Vestibulum finibus urna
                euismod tortor volutpat dapibus. Nam ac metus vel eros aliquet
                fermentum ac eu massa. Sed et ex et odio accumsan luctus. Nulla
                facilisi. Vestibulum bibendum fringilla libero, id iaculis purus
                varius non. Integer eget eleifend orci, vel luctus dui. Praesent
                luctus, felis vel gravida lacinia, velit augue fermentum sem,
                vel iaculis dolor ante eget nisl. Vivamus in justo ut purus
                dictum egestas id a mauris. Nulla eu quam vel felis tempus
                luctus. <br />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default About;
