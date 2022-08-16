import React from "react";
import styled from "styled-components";

const MainLayout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 3rem;
  display: flex;
  justify-content: center;
`;
