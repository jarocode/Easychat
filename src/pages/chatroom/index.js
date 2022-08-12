import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import MainLayout from "layout/MainLayout";
import { color } from "theme";
import ChatSection from "./components/chatSection/ChatSection";
import ChatInput from "./components/chatInput/ChatInput";
import NoChat from "./components/chatSection/NoChat";

const Index = () => {
  const { chat, auth } = useSelector((state) => state);
  return (
    <MainLayout>
      <Container>
        <Inner>
          {chat.length !== 0 ? (
            chat?.map((el, index) => (
              <ChatSection
                username={el.userName}
                message={el.message}
                time={el.time}
                key={index}
                isUser={el.id === auth.userId}
              />
            ))
          ) : (
            <NoChat />
          )}
        </Inner>
        <ChatInput />
      </Container>
    </MainLayout>
  );
};

export default Index;
const Container = styled.div`
  width: 60%;
  height: 35rem;
  overflow: auto;
  position: relative;
  background: ${color.white};
  padding: 3rem;
  padding-bottom: 0;
  box-shadow: 0px 8px 13px rgba(0, 0, 0, 0.12);
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
`;
