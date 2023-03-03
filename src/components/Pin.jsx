import React from "react";
import styled from "styled-components";

export default function Pin({ size }) {
  return <StPin size={size}></StPin>;
}

const styles = {
  pin: {
    margin: "15px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "red",
  },
  small: {
    gridRowEnd: "span 26",
  },
  medium: {
    gridRowEnd: "span 33",
  },
  large: {
    gridRowEnd: "span 45",
  },
};

const StPin = styled.div`
  margin: 15px;
  padding: 0;
  border-radius: 16px;
  background-color: red;

  ${({ size }) => {
    switch (size) {
      case "small":
        return "grid-row-end: span 26;";
      case "medium":
        return "grid-row-end: span 33;";
      case "large":
        return "grid-row-end: span 45;";
      default:
        return "";
    }
  }}
`;
