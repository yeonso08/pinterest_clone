import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPinDetailComment } from "../../api/detail/detail";
import styled from "styled-components";
import Comments from "./Comments";

export default function CommentList() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   const response = getPinDetailComment(id);
  //   setComments(response);
  // }, [id]);
  return (
    <CommentDiv>
      <div>
        댓글 n개? <button>댓글 접기/펴기</button>
      </div>
      <div>
        댓글List map으로 돌려서 들어갈곳
        <Comments />
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </div>
    </CommentDiv>
  );
}

const CommentDiv = styled.div`
  width: 80%;
  height: 100%;
`;
