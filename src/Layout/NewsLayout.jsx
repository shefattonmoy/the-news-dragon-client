import { Col, Container, Row } from "react-bootstrap";
import Header from "../Pages/Shared/Header/Header";
import RightNavbar from "../Pages/Shared/RightNavbar/RightNavbar";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNavbar></RightNavbar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default NewsLayout;