import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} />
                <p className='text-secondary'><small>Journalism Without Fear or Favor</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">
                                <Link className='text-decoration-none' to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets">
                                <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            </Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {user ?
                                    <Button variant="secondary">Logout</Button> :
                                    <Link to="/login">
                                        <Button variant="secondary">Login</Button>
                                    </Link>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;