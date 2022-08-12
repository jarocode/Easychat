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
        <Typography fontFamily={"Raleway"}>Welcome to EasyChats!</Typography>
        <Div>
          <Typography fontFamily={"Raleway"}> Enter your username</Typography>
          <Input
            height="3rem"
            width="80%"
            radius="8px"
            border="none"
            outline="none"
            background={color.brand2}
          />
          <Button />
        </Div>
      </Container>
    </MainLayout>
  );
};

export default index;

const Container = styled.div`
  width: 40%;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 8px 13px rgba(0, 0, 0, 0.12);
`;
