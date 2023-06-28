import React, { useState, useEffect } from "react";
import { Logo } from "../images";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.container>
      <S.logoBox>
        <div
          style={{ marginLeft: "120px", cursor: "pointer" }}
          onClick={() => {
            document.location.href = "/";
            document.location.reload();
          }}
        >
          <img src={Logo} alt="logo" />
        </div>
      </S.logoBox>
    </S.container>
  );
};

const S = {
  container: styled.div`
    display: flex;
    position: sticky;
    top: 0;
    /* padding-inline: 32px; */
    padding-block: 13px;
    flex: 1;
    align-items: center;
    z-index: 999;
    background-color: #fff;
    /* background-color: pink; */
  `,

  logoBox: styled.div`
    justify-content: left;
  `,
};

export default Header;
