import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdPersonOutline } from "react-icons/md";

const Header = () => {
  return (
    <S.container>
      <S.logoBox>
        <div>adsfasdf</div>
        <Link to="/">{/* <img src={chacharentcar} alt="logo" /> */}</Link>
      </S.logoBox>
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    position: sticky;
    top: 0;
    padding-inline: 24px;
    padding-block: 30px;
    flex: 1;
    align-items: center;
    /* background-color: #fff; */
    background-color: pink;
  `,

  logoBox: styled.div`
    justify-content: left;
  `,
};

export default Header;
