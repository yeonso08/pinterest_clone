import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import styled from "styled-components";
import { Modal, Button, Form, Container } from "react-bootstrap";

const SignUp = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Pinterest에 오신 것을 환영합니다
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>이메일</Form.Label>
              <Form.Control type="email" placeholder="이메일" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>닉네임</Form.Label>
              <Form.Control placeholder="닉네임" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                type="password"
                placeholder="비밀번호를 입력하세요"
              />
            </Form.Group>
            <Button
              block
              variant="danger"
              type="button"
              className="my-3"
              style={{
                backgroundColor: "#ef1717",
                borderColor: "#ef1717",
                width: "100%",
              }}
            >
              계속하기
            </Button>
            <StOr>또는</StOr>
            <Button
              variant="info"
              type="button"
              style={{
                backgroundColor: "#176BEF",
                borderColor: "#176BEF",
                width: "100%",
                margin: "5px",
              }}
            >
              Facebook으로 계속하기
            </Button>
            <Button
              variant="light"
              style={{ borderColor: "#ebebeb", width: "100%" }}
            >
              Google로 계속하기
            </Button>
            {/* <Text>계속 진행하면 Pinterest 서비스 약관에 동의하고 개인정보 보호정책을 읽었음을 인정하는 것으로 간주됩니다. </Text> */}
          </Form>
        </Modal.Body>
      </Container>
    </Modal>
  );
};

export default SignUp;

const StOr = styled.div`
  width: 100%;
  text-align: center;
  font-weight: bold;
  margin: 10px 0 5px;
`;
