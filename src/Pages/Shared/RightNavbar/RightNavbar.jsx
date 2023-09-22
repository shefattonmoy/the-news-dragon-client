import { Button, ListGroup } from "react-bootstrap";
import { FaGithub, FaGoogle, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'

const RightNavbar = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className="mb-2" variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub></FaGithub> Login With Github</Button>
            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebookF></FaFacebookF> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg}/>
            </div>
        </div>
    );
};

export default RightNavbar;