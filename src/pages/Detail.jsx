import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPinDetail } from "../api/detail/detail";
import styled from "styled-components";

export default function Detail() {
  const { id } = useParams();
  const [detailpin, setDetailpin] = useState({});

  //   useEffect(() => {
  //     const response = getPinDetail(id);
  //     setDetailpin(response);
  //   }, [id]);

  //   const { isLoading, isError, data } = useQuery("pindetail", getPinDetail, {});

  //   if (isLoading) return <p>Loading...</p>;
  //   if (isError) return <p>{isError}</p>;

  return (
    <StDiv>
      <StDetailDiv>
        <StImagePin src="https://picsum.photos/340/200"></StImagePin>
        <StPinInfoDiv>asd</StPinInfoDiv>
      </StDetailDiv>
    </StDiv>
  );
}

const StDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StDetailDiv = styled.div`
  display: flex;
  width: 1000px;
  border: 1px solid black;
  margin-top: 50px;
  height: auto;
  border-radius: 40px;
`;

const StImagePin = styled.img`
  width: 500px;
  height: auto;

  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
`;

const StPinInfoDiv = styled.div`
  width: 500px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: tomato;
  min-height: 500px;
`;
