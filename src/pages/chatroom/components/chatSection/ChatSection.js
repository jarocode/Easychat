import React from "react";
import styled from "styled-components";

import ChatContainer from "../chatContainer/ChatContainer";

const ChatSection = ({ username, message, time, isUser }) => {
  return (
    <Container isUser={isUser}>
      <ChatContainer
        username={username}
        message={message}
        time={time}
        isUser={isUser}
      />
    </Container>
  );
};

export default ChatSection;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  padding-bottom: 2rem;
`;
