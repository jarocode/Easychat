import React from "react";
import styled from "styled-components";
import { Avatar, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { color } from "theme";
import { signOut } from "store/actions/auth";

const ChatHeader = () => {
  const dispatch = useDispatch();
  const { userName } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(signOut(""));
    navigate("/");
  };
  return (
    <Container>
      <NameDiv>
        <Avatar />
        <Typography fontFamily={"Raleway"} fontSize="18px" color={color.white}>
          {userName}
        </Typography>
      </NameDiv>
      <SignOut
        fontFamily={"Raleway"}
        fontSize="18px"
        color={color.white}
        fontWeight="bold"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        SignOut
      </SignOut>
    </Container>
  );
};

export default ChatHeader;

const Container = styled.div`
  width: 94.05%;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  height: 5rem;
  z-index: 1000;
  background: ${color.brand1};
  border-radius: 10px 10px 0 0;
  padding: 2rem 2rem;
`;

const NameDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SignOut = styled(Typography)`
  cursor: pointer;
  transition: all 0.2s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;
