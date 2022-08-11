import React from "react";
import styled from "styled-components";

const MainLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;
