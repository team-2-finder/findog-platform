import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../components";
import { styled } from "styled-components";


const Research = () => {
  const [list, setList] = useState([]);
  async function getData() {
    try {
      const response = await axios.get("ex.url", {
        // params:{
        //  happenDt: 접수일
        //  kindCd: //품종
        //  sexCd: 성별
        //  neuterYn : 중성화 여부
        // }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    // getData();
  }, []);

  return (
    <>
      <Header />
      <S.Container>Research page</S.Container>

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

export default Research;
