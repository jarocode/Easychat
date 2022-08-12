import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import MainLayout from "layout/MainLayout";
import Input from "components/input/Input";
import { color } from "theme";
import Button from "components/button/Button";

const index = () => {
  return (
    <MainLayout>
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
            padding="0 1rem"
            background={color.brand2}
          />
          <Button
            height="3rem"
            width="32rem"
            borderRadius="1.5rem"
            bgColor={color.brand1}
            btnText={
              <Typography fontFamily={"Raleway"} fontWeight="bold">
                Enter
              </Typography>
            }
          />
        </Div>
      </Container>
    </MainLayout>
  );
};

export default index;

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
