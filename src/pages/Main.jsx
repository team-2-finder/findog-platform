import React from "react";
import styled from "styled-components";
import { InputImage, Header } from "../components";

const Main = () => {
  return (
    <>
      <Header />
      <S.Container>
        <InputImage />
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.div`
    padding-inline: 120px;
    @media screen and (max-width: 393px) {
      padding: 0;
    }
  `,
};

export default Main;
