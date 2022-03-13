import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className='mb-5'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/my-personal-website/home">My Website</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/my-personal-website/home" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/my-personal-website/blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="/my-personal-website/user">User</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;
