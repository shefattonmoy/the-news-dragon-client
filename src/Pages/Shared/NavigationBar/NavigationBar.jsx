import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import { useContext } from "react";

const NavigationBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='text-decoration-none' to="/category/0">Home</Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            {user ?
                                <Button variant="secondary">Logout</Button> :
                                <Link to="/login">
                                    <Button variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;