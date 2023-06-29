import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, SimilarityCard, MHeader } from "../components";
import styled from "styled-components";
import DetailModal from "../components/DetailModal";

const Similarity = () => {
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
          사진과 유사한
          <br />
          강아지들을 찾아봤어요.
        </S.HeaderBox>
        <S.AnimalContainer>
          {arr.map((res) => (
            <SimilarityCard
              date={res.date}
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

export default Similarity;
