import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, AnimalCard, MHeader, MBottomNavBar } from "../components";
import styled from "styled-components";
import DetailModal from "../components/DetailModal";

const Research = () => {
  // const [list, setList] = useState([]);
  // async function getData() {
  //   try {
  //     const response = await axios.get("ex.url", {
  //       // params:{
  //       //  happenDt: 접수일
  //       //  kindCd: //품종
  //       //  sexCd: 성별
  //       //  neuterYn : 중성화 여부
  //       // }
  //     });
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   // getData();
  // }, []);

  const isMobile = window.innerWidth <= 393;
  const arr = [
    {
      date: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290706721.jpg",
    },
    {
      date: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806405.jpg",
    },
    {
      date: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806349.jpg",
    },
    {
      date: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806405.jpg",
    },
    {
      date: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806405.jpg",
    },
    {
      date: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806405.jpg",
    },
    {
      date: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290706463.jpg",
    },
    {
      date: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806405.jpg",
    },
  ];

  return (
    <>
      {isMobile ? <MHeader /> : <Header />}
      <S.Container>
        <S.HeaderBox>
          지금까지 등록된 <br />
          강아지 목록이에요.
        </S.HeaderBox>
        <S.AnimalContainer>
          {arr.map((res, i) => (
            <AnimalCard
              key={i}
              date={res.date}
              kindCd={res.kindCd}
              sexCd={res.sexCd}
              neuterYn={res.neuterYn}
              imgUrl={res.imgUrl}
            />
          ))}
        </S.AnimalContainer>
      </S.Container>
      {isMobile && <MBottomNavBar />}
    </>
  );
};
const S = {
  Container: styled.div`
    padding-inline: 80px;
    @media screen and (max-width: 393px) {
      padding-inline: 24px;
    }
  `,
  HeaderBox: styled.div`
    font-size: 48px;
    margin-block: 24px;
    font-weight: bold;
    @media screen and (max-width: 393px) {
      margin-block: 16px;
      font-size: 32px;
    }
  `,
  AnimalContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 393px) {
      grid-template-columns: 1fr;
    }
  `,
};

export default Research;
