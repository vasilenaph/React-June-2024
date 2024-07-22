import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import NavbarText from 'react-bootstrap/esm/NavbarText';

export default function Header() {
    const {user} = useContext(UserContext);


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">Articles</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/articles/create">Create Article</Nav.Link>
                        <Nav.Link as={Link} to="/fake-login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <NavbarText>{user.username ? user.username : 'Guest'}</NavbarText>
            </Container>
        </Navbar>
    );
}