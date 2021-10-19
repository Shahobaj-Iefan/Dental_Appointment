import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo/logo.png";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'
        sticky='top'
      >
        <Container>
          <Navbar.Brand href='#home'>
            <img style={{ width: "50px" }} src={logo} alt='' /> Dental Care
          </Navbar.Brand>
          <Nav className='ms-auto'>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
              <Nav.Link as={Link} to='/home'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/services'>
                Services
              </Nav.Link>
              <Nav.Link as={Link} to='/bookapointment'>
                Get Apointment
              </Nav.Link>
              <Nav.Link as={Link} to='#pricing'>
                Team
              </Nav.Link>
              {user?.email ? (
                <Button onClick={logOut} variant='light'>
                  LogOut
                </Button>
              ) : (
                <Nav.Link as={Link} to='/login'>
                  Login
                </Nav.Link>
              )}
              <Navbar.Text>
                Signed: <a href='#login'>{user?.displayName}</a>
                <img src={user?.photoUrl} alt='' />
              </Navbar.Text>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
