import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import Chatbox from "components/chatbox/Chatbox";

const ChatContainer = ({ username, message, time }) => {
  return (
    <Container>
      <Avatar />
      <Chatbox message={message} time={time} />
    </Container>
  );
};

export default ChatContainer;
const Container = styled.div`
  display: flex;
  gap: 1rem;
`;
