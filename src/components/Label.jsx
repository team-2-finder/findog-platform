import React from "react";
import styled from "styled-components";
import { MainColor } from "../components";

const Label = ({ text, data }) => {
  return (
    <S.Row>
      <S.Container>{text}</S.Container>
      <S.TextArea>{data}</S.TextArea>
    </S.Row>
  );
};

const S = {
  Row: styled.div`
    display: flex;
    margin-bottom: 20px;
  `,
  Container: styled.div`
    color: ${() => MainColor};
    border: 1px solid ${() => MainColor};
    border-radius: 4px;
    text-align: center;
    padding: 4px 8px;
  `,
  TextArea: styled.div`
    margin-left: 8px;
    text-align: center;
  `,
};

export default Label;
