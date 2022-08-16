import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import MainLayout from "layout/MainLayout";
import { color } from "theme";
import { AuthContext } from "context/AuthContext";
import ChatSection from "./components/chatSection/ChatSection";
import ChatInput from "./components/chatInput/ChatInput";
import NoChat from "./components/chatSection/NoChat";
import ChatHeader from "./components/chatHeader/ChatHeader";

const Index = () => {
  const { chat, auth } = useSelector((state) => state);
  const { loggedInUser } = useContext(AuthContext);
  const viewRef = useRef();

  useEffect(() => {
    viewRef.current.scrollIntoView(false);
  }, [chat]);

  const currentUserId = auth.find(
    (user) => user.userName === loggedInUser
  ).userId;

  return (
    <MainLayout>
      <Container>
        <ChatHeader />
        <Inner>
          <div ref={viewRef}>
            {chat.length !== 0 ? (
              chat?.map((el, index) => (
                <ChatSection
                  username={el.userName}
                  message={el.message}
                  time={el.time}
                  key={index}
                  isUser={el.id === currentUserId}
                />
              ))
            ) : (
              <NoChat />
            )}
          </div>
        </Inner>
        <ChatInput />
      </Container>
    </MainLayout>
  );
};

export default Index;
const Container = styled.div`
  width: 60rem;
  height: 40rem;
  background: ${color.white};
  box-shadow: 0px 8px 13px rgba(0, 0, 0, 0.12);
`;

const Inner = styled.div`
  width: 100%;
  overflow: auto;
  scroll-behavior: smooth;
  height: 25rem;
  padding-top: 2rem;
`;
