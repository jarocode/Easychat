import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import MainLayout from "layout/MainLayout";
import { color } from "theme";
import { AuthContext } from "context/AuthContext";
import ChatSection from "./components/chatSection/ChatSection";
import ChatInput from "./components/chatInput/ChatInput";
import NoChat from "./components/chatSection/NoChat";
import ChatHeader from "./components/chatHeader/ChatHeader";
import { saveState } from "utils";

const Index = () => {
  const { chat, auth } = useSelector((state) => state);
  const { loggedInUser } = useContext(AuthContext);
  const [renderCount, setRenderCount] = React.useState(0);
  const initial = useRef(false);

  const currentUserId = auth.find(
    (user) => user.userName === loggedInUser
  ).userId;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setRenderCount((prev) => prev + 1);
    }, 1100);
    return () => {
      clearInterval(timer);
    };
  }, []);

  React.useEffect(() => {
    if (initial) {
      saveState({ auth, chat });
    } else {
      initial.current = true;
    }
  }, [renderCount]);

  return (
    <MainLayout>
      <Container>
        <ChatHeader />
        <Inner>
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
        </Inner>
        <ChatInput />
      </Container>
    </MainLayout>
  );
};

export default Index;
const Container = styled.div`
  width: 60%;
  height: 45rem;
  overflow: auto;
  position: relative;
  background: ${color.white};

  padding-bottom: 0;
  box-shadow: 0px 8px 13px rgba(0, 0, 0, 0.12);
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 2rem;
`;
