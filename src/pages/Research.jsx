import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, AnimalCard } from "../components";
import styled from "styled-components";

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
  const arr = [
    {
      data: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290706721.jpg",
    },
    {
      data: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806405.jpg",
    },
    {
      data: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806349.jpg",
    },
    {
      data: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806405.jpg",
    },
    {
      data: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806405.jpg",
    },
    {
      data: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806405.jpg",
    },
    {
      data: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290706463.jpg",
    },
    {
      data: "2023/06/23",
      kindCd: "골든 리트리버",
      sexCd: "M",
      neuterYn: "Y",
      imgUrl:
        "http://www.animal.go.kr/files/shelter/2023/05/202306290806405.jpg",
    },
  ];
  return (
    <>
      <Header />
      <S.Container>
        <S.HeaderBox>지금까지 등록된</S.HeaderBox>
        <S.HeaderBox>강아지 목록이에요.</S.HeaderBox>
        <S.AnimalContainer>
          {arr.map((res) => (
            <AnimalCard
              date={res.data}
              kindCd={res.kindCd}
              sexCd={res.sexCd}
              neuterYn={res.neuterYn}
              imgUrl={res.imgUrl}
            />
          ))}
        </S.AnimalContainer>
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
  HeaderBox: styled.div`
    font-size: 48px;
    font-weight: bold;
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
