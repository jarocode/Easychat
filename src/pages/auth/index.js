import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

import MainLayout from "layout/MainLayout";
import Input from "components/input/Input";

const index = () => {
  return (
    <MainLayout>
      <Container>
        <Typography>Welcome to EasyChats!</Typography>
        <Typography> Enter your username</Typography>
        <Input height="2rem" width="100%" radius />
      </Container>
    </MainLayout>
  );
};

export default index;

const Container = styled.container`
  width: 40%;
  height: 50%;
`;
