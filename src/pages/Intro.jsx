import React from "react";
import styled from "styled-components";
import { Logo, Title, goImg, goResearch } from "../images";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <S.Container>
      <S.Titleimg src={Title} alt="title" />
      <Link to="/inputImage" style={{ marginBottom: "16px" }}>
        <S.LinkText src={goImg} alt="img" />
      </Link>
      <Link to="/research">
        <S.LinkText src={goResearch} alt="research" />
      </Link>
      <S.ImgArea>
        <S.LogoImg src={Logo} alt="logo" />
      </S.ImgArea>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    padding-inline: 120px;
    padding-block: 5%;
  `,
  Titleimg: styled.img`
    margin-bottom: 60px;
  `,

  LinkText: styled.img`
    margin-bottom: 16px;
    cursor: pointer;
  `,
  ImgArea: styled.div`
    width: 100%;
    background-color: pink;
  `,
  LogoImg: styled.img`
    margin-top: 16px;
    float: right;
    width: 60%;
  `,
};

export default Intro;
