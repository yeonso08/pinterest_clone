import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";

const Header = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [LogInModal, setLogInModal] = useState(false);
  return (
    <div>
      <SignUp show={signUpModal} onHide={() => setSignUpModal(false)} />
      <LogIn show={LogInModal} onHide={() => setLogInModal(false)} />
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Pinterest</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link>
                <Button
                  variant="danger"
                  style={{
                    backgroundColor: "#ef1717",
                    borderColor: "#ef1717",
                    fontWeight: "bold",
                  }}
                  onClick={() => setLogInModal(true)}
                >
                  로그인
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button
                  variant="secondary"
                  style={{
                    backgroundColor: "#ececec",
                    borderColor: "#ececec",
                    color: "#000000",
                    fontWeight: "bold",
                  }}
                  onClick={() => setSignUpModal(true)}
                >
                  가입하기
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
