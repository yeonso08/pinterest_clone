import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { DivSection, DivDetailBox, DivLeftBox, DivRightBox, DivImageBox, DivInfoBox, DivIconBox, DivButton, DefaultIcon, DivProfileImageBox } from './DetailPinStyle';
import { getPinDetail } from "../../api/detail/detail";
import CommentList from "../detail/CommentList";
import CommentInput from "../detail/CommentInput";
import styled from "styled-components";
import { IoIosMore } from 'react-icons/io' ;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



export default function DetailPin() {
  const { id } = useParams();
  const { isLoading, isError, data } = useQuery("pindetail", () => getPinDetail(id), {});
  const navigate = useNavigate();
  const [detailpin, setDetailpin] = useState({});
  const [index, setIndex] = useState("0")
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>{isError}</p>;

    const onSelect = (e) => {
      setIndex(e.target.value);
    }
   
  

  return (
  <DivSection>
    <StPrev to ={"/"}> ﹤- 추천</StPrev>
    {data.data && data.data.map((item) => {
      if(item.id == id) {
        return ( 
        <DivDetailBox  key={item.id}>
          <DivLeftBox style={{marginLeft: '0'}}>
            <DivImageBox >
              <img src={item.image}/>
            </DivImageBox>
          </DivLeftBox>
          <DivRightBox>
            <DivInfoBox>
              <div className='headerbox'>
                <div>
                  <DivIconBox size='48'>
                      <select value={index} onChange={onSelect}>
                        {/* <IoIosMore /> */}
                        <option value="0">핀수정</option>
                        <option value="1">이미지 다운로드</option>
                        <option value="2">핀 신고 </option>
                        <option value="3">핀 임베드 코드 가져오기 </option>
                      </select>
                      {index === "1" ? setShow(true) : null} 
                  </DivIconBox>
                  <DefaultIcon size='48'>
                    <svg height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
                      <path d="M21 14c1.1 0 2 .9 2 2v6c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2s2 .9 2 2v4h14v-4c0-1.1.9-2 2-2zM8.82 8.84c-.78.78-2.05.79-2.83 0-.78-.78-.79-2.04-.01-2.82L11.99 0l6.02 6.01c.78.78.79 2.05.01 2.83-.78.78-2.05.79-2.83 0l-1.2-1.19v6.18a2 2 0 1 1-4 0V7.66L8.82 8.84z"></path>
                    </svg>
                  </DefaultIcon>
                  <DefaultIcon size='48'>
                    <svg height="20" width="20" viewBox="0 0 24 24" aria-hidden="true" aria-label role="img">
                      <path d="M10.52 3.11a2 2 0 013.59 0l2.06 4.17c.02.06.08.1.15.11l4.6.67a2 2 0 011.1 3.41l-3.32 3.25a.2.2 0 00-.06.17l.78 4.58a2 2 0 01-2.9 2.11l-4.11-2.16a.2.2 0 00-.19 0l-4.11 2.16a2 2 0 01-2.9-2.1l.78-4.59a.2.2 0 00-.06-.17l-3.32-3.25a2 2 0 011.1-3.41l4.6-.67a.2.2 0 00.15-.1zm3.9 5.15l-1.75-3.53a.4.4 0 00-.71 0L10.2 8.26a2 2 0 01-1.5 1.1l-3.9.56a.4.4 0 00-.23.69l2.83 2.75a2 2 0 01.57 1.77L7.31 19a.4.4 0 00.58.42l3.5-1.83a2 2 0 011.86 0l3.48 1.83a.4.4 0 00.59-.42l-.67-3.88a2 2 0 01.57-1.77l2.83-2.75a.4.4 0 00-.22-.69l-3.9-.56a2 2 0 01-1.51-1.1z"></path>
                    </svg>
                  </DefaultIcon>
                </div>
                <div>
                  <DivButton>저장</DivButton>
                </div>
              </div>
    
              <div className='titlebox'>
              {item.title}
              </div>
              <div className='contentbox'>
              {item.content}
              </div>
              <div className='profilebox'>
                <div>
                  <DivProfileImageBox size='48' />
                </div>
                <div>
                  <p className='username'>{item.nickname}</p>
                  <p>팔로워 0명</p>
                </div>
              </div>
            </DivInfoBox>
          </DivRightBox>
        </DivDetailBox>)
      }
    })}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

   
          {/* <StCommentDiv>
        댓글 리스트 컴포넌트
         <CommentList />
        <StCommentChildDiv>
          <CommentInput />
      </StCommentChildDiv>
       </StCommentDiv> */}

  </DivSection>
  );
}

const StPrev = styled(Link)`
  position: fixed;
  left: 20px;
  top: 100px;
  text-decoration: none;

`;
const StCommentDiv = styled.div`
  /* position: relative; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StCommentChildDiv = styled.div`
  width: 100%;
  height: 50px;
  background-color: blue;
  color: white;
  border-bottom-right-radius: 40px;
`;

