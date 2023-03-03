import React from "react";
import styled from "styled-components";
import Pin from "./Pin";
import { getPinList } from "../api/main/mainapi";
import { useQuery } from "react-query";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const images = [
  "https://picsum.photos/250/300",
  "https://picsum.photos/500/330",
  "https://picsum.photos/400/500",
  "https://picsum.photos/1000/1100",
  "https://picsum.photos/500/1000",
  "https://picsum.photos/2000/1500",
  "https://picsum.photos/400/750",
  "https://picsum.photos/650/500",
  "https://picsum.photos/340/780",
  "https://picsum.photos/500/330",
];

export default function MainLayout() {
  //   const { isLoading, isError, data } = useQuery("pins", getPinList, {});

  //   if (isLoading) return <p>Loading...</p>;
  //   if (isError) return <p>{isError}</p>;
  console.log("여긴가?");
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
          {images.map((image, i) => {
            return <Pin src={image} id={i}></Pin>;
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
