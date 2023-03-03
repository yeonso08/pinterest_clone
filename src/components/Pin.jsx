import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CiSaveDown2 } from "react-icons/ci";

export default function Pin({ src, id }) {
  const navigate = useNavigate();
  const title = "타이틀입니다.";
  return (
    <StDiv>
      <StImage src={src} onClick={() => navigate(`pin/${id}`)} />

      <Btn
        onClick={() => {
          alert("저장");
        }}
      >
        저장
      </Btn>
      <StLabel>{title}</StLabel>
      <StSaveDiv onClick={() => alert("다운")}>
        <StIcon size={23} />
      </StSaveDiv>
    </StDiv>
  );
}

const Btn = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const StImage = styled.img`
  width: 100%;
  border-radius: 15px;
  cursor: zoom-in;
`;

const StDiv = styled.div`
  position: relative;
  width: 100%;
`;
const StLabel = styled.label`
  position: absolute;
  top: 5px;
  left: 5px;
`;
const StSaveDiv = styled.div`
  width: 36px;
  height: 36px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #e2e2e2;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #f6f6f6;
    opacity: 0.8;
  }
`;
const StIcon = styled(CiSaveDown2)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
