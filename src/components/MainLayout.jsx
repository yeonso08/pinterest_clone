import React from "react";
import styled from "styled-components";
import Pin from "./Pin";

export default function MainLayout() {
  return (
    <PinContainer>
      <Pin size="small" />
      <Pin size="medium" />
      <Pin size="large" />
      <Pin size="large" />
      <Pin size="large" />
      <Pin size="medium" />
      <Pin size="medium" />
      <Pin size="small" />
      <Pin size="large" />
    </PinContainer>
  );
}

const PinContainer = styled.div`
  margin-top: 50px;
  padding: 0;
  width: 80%;
  min-width: 510px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(auto-fill, 250px);
  grid-auto-rows: 10px;
`;
