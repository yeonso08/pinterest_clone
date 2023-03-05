import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import styled from "styled-components";
import SearchForm from "../components/SearchForm";

const Header = () => {
  const [signUpModal, setSignUpModal] = useState(false);
  const [LogInModal, setLogInModal] = useState(false);

  return (
    <StHeaderDiv>
      <SignUp show={signUpModal} onHide={() => setSignUpModal(false)} />
      <Login show={LogInModal} onHide={() => setLogInModal(false)} />
      <header>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="ms-5">Pinterest</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <SearchForm />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto w-5">
              <Nav.Link>
                <Button
                  variant="danger"
                  style={{
                    width: "100px",
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
                    width: "100px",
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
    </StHeaderDiv>
  );
};

export default Header;

const StHeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
`;

const StInputBox = styled.input`
  width: 70%;
  padding: 12px 20px;
  font-size: 16px;
  border: none;
  border-radius: 24px;
  background-color: #efefef;
  color: #333;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #999;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
