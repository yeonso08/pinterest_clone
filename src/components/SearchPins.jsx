import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pin from "./Pin";
import { getPinList } from "../api/main/mainapi";
import { useQuery, useQueryClient } from "react-query";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function SearchPins() {
  const { isLoading, isError, data: searchResults } = useQuery("searchResults");

  console.log("ss", searchResults);
  // console.log("여긴가?");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{isError}</p>;
  return (
    <StDiv>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          250: 1,
          500: 2,
          750: 3,
          1000: 4,
          1250: 5,
          1500: 6,
          1750: 7,
          2000: 8,
        }}
      >
        <Masonry gutter="10px">
          {searchResults?.map((item) => {
            return <Pin item={item}></Pin>;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </StDiv>
  );
}

const StDiv = styled.div`
  /* display: flex; */
  margin: 100px auto;
  width: 80%;
  /* justify-content: center; */
  /* align-items: center; */
`;
