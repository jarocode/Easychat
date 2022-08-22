import React, { useContext } from "react";
import styled from "styled-components";
import { Avatar, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { color } from "theme";
import { AuthContext } from "context/AuthContext";

const ChatHeader = () => {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
  const authenticatedUsers = useSelector((state) => state.auth);

  const currentUser = authenticatedUsers.find(
    (user) => user?.userName === loggedInUser
  ).userName;

  const handleClick = () => {
    setLoggedInUser("");
  };

  return (
    <Container>
      <NameDiv>
        <Avatar>{currentUser.charAt(0).toUpperCase()}</Avatar>
        <Typography fontFamily={"Raleway"} fontSize="18px" color={color.white}>
          {currentUser}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  z-index: 1000;
  background: ${color.brand1};
  border-radius: 10px 10px 0 0;
  padding: 0rem 2rem;
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
