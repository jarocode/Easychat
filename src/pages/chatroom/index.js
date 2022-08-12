import React from "react";
import styled from "styled-components";

import MainLayout from "layout/MainLayout";
import { color } from "theme";
import ChatSection from "./components/chatSection/ChatSection";
import ChatInput from "./components/chatInput/ChatInput";

const chatData = [
  { id: 1, username: "You", chat: "how are you", time: "9:00pm" },
  {
    id: 2,
    username: "Alfred",
    chat: "Tempor est officia proident dolore velit. Eu ipsum Lorem tempor deserunt ullamco Lorem sit consectetur incididunt ex. Consectetur id id quis Lorem duis ipsum Lorem sint esse in sit magna aliquip. Cupidatat anim fugiat voluptate duis anim ipsum veniam. Velit minim Lorem nisi proident Lorem tempor fugiat dolore aute magna nostrud aliquip aliqua. Sit labore irure ea velit ad nostrud id laboris. Consequat laborum amet fugiat mollit deserunt commodo nostrud nulla do officia ad magna nostrud laborum.",
    time: "9:00pm",
  },
  {
    id: 1,
    username: "You",
    chat: "Eu ipsum Lorem tempor deserunt ullamco Lorem sit consectetur incididunt ",
    time: "9:00pm",
  },
  { id: 4, username: "Gundogan", chat: "Alright, thanks", time: "9:00pm" },
];

const index = () => {
  return (
    <MainLayout>
      <Container>
        {chatData?.map((el, index) => (
          <ChatSection
            username={el.username}
            message={el.chat}
            time={el.time}
            key={index}
            isUser={el.id === 1}
          />
        ))}
        <ChatInput />
      </Container>
    </MainLayout>
  );
};

export default index;
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
