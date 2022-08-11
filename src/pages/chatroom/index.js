import React from "react";
import styled from "styled-components";

import MainLayout from "layout/MainLayout";

const index = () => {
  return (
    <MainLayout>
      <Container></Container>
    </MainLayout>
  );
};

export default index;
const Container = styled.div`
  width: 60%;
  height: 40rem;
  background: #fff;
  box-shadow: 0px 8px 13px rgba(0, 0, 0, 0.12);
`;
