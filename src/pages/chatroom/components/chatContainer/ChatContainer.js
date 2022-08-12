import React from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import Chatbox from "components/chatbox/Chatbox";

const ChatContainer = ({ username, message, time, isUser }) => {
  return (
    <Container>
      <Avatar style={{ order: isUser ? 2 : 1 }} />
      <Chatbox message={message} time={time} isUser={isUser} />
    </Container>
  );
};

export default ChatContainer;
const Container = styled.div`
  display: flex;
  gap: 1rem;
`;
