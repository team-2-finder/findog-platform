import React from "react";
import styled from "styled-components";
import { Logo, Title, goImg, goResearch } from "../images";
import { Link } from "react-router-dom";
const Intro = () => {
  return (
    <S.Container>
      <S.Titleimg src={Title} alt="title" />
      <br />
      <Link to="/inputImage" style={{ marginBottom: "16px" }}>
        <S.LinkText src={goImg} alt="img" />
      </Link>
      <br />
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
    height: 100%;
    padding-inline: 120px;
    padding-top: 5%;
    background-color: white;
  `,
  Titleimg: styled.img`
    margin-bottom: 60px;
  `,

  tempArea: styled.div`
    min-height: 10vh;
  `,
  LinkText: styled.img`
    margin-bottom: 16px;
    cursor: pointer;
  `,
  ImgArea: styled.div`
    width: 100%;
    height: min-content;
  `,
  LogoImg: styled.img`
    margin-top: 16px;
    float: right;
    width: 60%;
  `,
};

export default Intro;
