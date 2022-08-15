import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MainLayout from "layout/MainLayout";
import Input from "components/input/Input";
import { AuthContext } from "context/AuthContext";
import { color } from "theme";
import Button from "components/button/Button";
import { signIn } from "store/actions/auth";

const Index = () => {
  const [loading, setLoading] = useState();
  const [user, setUser] = useState();
  const { setLoggedInUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authenticatedUsers = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setUser(e.target.value);
  };

  const handleClick = () => {
    if (!user) return toast("please enter username");
    setLoading(true);
    setLoggedInUser(user);

    const existingUser = authenticatedUsers.find(
      (user) => user.userName === user
    );

    if (!existingUser)
      dispatch(
        signIn({ userName: user, userId: uuidv4(), client_token: uuidv4() })
      );

    setTimeout(() => {
      setLoading(false);
      toast("Logged in Successfully!");
    }, 2000);
    setTimeout(() => {
      navigate("./chatroom");
    }, 4000);
  };
  return (
    <MainLayout>
      <ToastContainer limit={3} />
      <Container>
        <Typography
          fontFamily={"Raleway"}
          fontWeight="bold"
          fontSize={"24px"}
          color={color.brand1}
          marginBottom={"2rem"}
        >
          Welcome to EasyChats!
        </Typography>
        <Div>
          <Typography fontFamily={"Raleway"} color={color.grey}>
            {" "}
            Enter your username
          </Typography>
          <Input
            height="3rem"
            width="30rem"
            radius="1.5rem"
            border="none"
            placeholder="John doe"
            onChange={handleChange}
            padding="0 1rem"
            background={color.brand2}
          />
          <Button
            height="3rem"
            width="32rem"
            borderRadius="1.5rem"
            bgColor={color.brand1}
            loading={loading}
            btnText={
              <Typography fontFamily={"Raleway"} fontWeight="bold">
                Enter
              </Typography>
            }
            onClick={handleClick}
          />
        </Div>
      </Container>
    </MainLayout>
  );
};

export default Index;

const Container = styled.div`
  width: 40%;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  box-shadow: 0px 8px 13px rgba(0, 0, 0, 0.12);
`;
