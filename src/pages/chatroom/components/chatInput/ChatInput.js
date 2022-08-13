import React, { useState } from "react";
import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

import Input from "components/input/Input";
import Button from "components/button/Button";
import { color } from "theme";
import { addChat } from "store/actions/chat";
import { getTime } from "utils";

const ChatInput = ({ setRenderCount }) => {
  const [message, setMessage] = useState();
  const { userId, userName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClick = () => {
    setMessage("");
    dispatch(addChat({ id: userId, message, userName, time: getTime() }));
    setRenderCount((prev) => prev + 1);
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
        onClick={handleClick}
      />
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  width: 100%;
  position: sticky;
  display: flex;
  gap: 1rem;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  height: 8rem;
  background: ${color.white};
`;
