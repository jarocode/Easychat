import React from "react";
import styled from "styled-components";

import ChatContainer from "../chatContainer/ChatContainer";

const ChatSection = ({ username, message, time }) => {
  return (
    <Container>
      <ChatContainer username={username} message={message} time={time} />
    </Container>
  );
};

export default ChatSection;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding-bottom: 2rem;
`;
