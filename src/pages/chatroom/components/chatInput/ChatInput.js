import React, { useState, useContext } from "react";
import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import Input from "components/input/Input";
import { AuthContext } from "context/AuthContext";
import Button from "components/button/Button";
import { color } from "theme";
import { addChat } from "store/actions/chat";
import { getTime, saveState } from "utils";

const ChatInput = () => {
  const [message, setMessage] = useState();
  const { loggedInUser } = useContext(AuthContext);
  const authenticatedUsers = useSelector((state) => state.auth);
  const currentChat = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  const currentUser = authenticatedUsers.find(
    (user) => user.userName === loggedInUser
  );

  const handleClick = () => {
    setMessage("");
    const newChat = {
      id: currentUser.userId,
      userName: currentUser.userName,
      message,
      time: getTime(),
    };
    dispatch(addChat(newChat));
    saveState({ chat: [...currentChat, newChat] });
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Container>
      <Input
        height="4rem"
        width="80%"
        radius="2rem"
        border="none"
        placeholder="Type a message"
        padding="0 1rem"
        background={color.brand2}
        value={message}
        onChange={handleChange}
      />
      <Button
        bgColor={color.brand3}
        btnText={<RiSendPlaneFill color={color.white} size={"1.5rem"} />}
        height="4rem"
        width="4rem"
        borderRadius={"50%"}
        onKeyPress={(e) => (e.key === "Enter" ? handleClick() : null)}
        onClick={handleClick}
      />
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  bottom: 0;
  left: 0;
  padding: 1rem 0;
  align-items: center;
  justify-content: center;
  background: ${color.white};
`;
