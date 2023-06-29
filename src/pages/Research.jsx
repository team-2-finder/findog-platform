import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header, AnimalCard, MHeader, DropDown } from "../components";

import styled from "styled-components";
import DetailModal from "../components/DetailModal";

const Research = () => {
  const [list, setList] = useState([]);
  async function getData() {
    try {
      const response = await axios.get("https://findog.buttercrab.net/api/", {
        // params:{
        //  happenDt: 접수일
        //  kindCd: //품종
        //  sexCd: 성별
        //  neuterYn : 중성화 여부
        // }
      });
      console.log(response.data);
      await setList(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  //페이지 네이션
  const totalItems = 1027; // 전체 아이템 개수
  const itemsPerPage = 30; // 한 페이지에 보여줄 아이템 개수

  const totalPages = Math.ceil(totalItems / itemsPerPage); // 전체 페이지 개수

  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호

  // 현재 페이지에 해당하는 아이템들을 가져오는 함수
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return list.slice(startIndex, endIndex);
  };

  // 이전 페이지로 이동하는 함수
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    // 페이지 변경 시 스크롤을 페이지 상단으로 이동
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  // 다음 페이지로 이동하는 함수
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  //접수일

  //성별
  const sexCdList = ["전체", "남성", "여성"];
  const [sexSelected, setSexSelected] = useState("");

  const handleSexCd = (e) => {
    setSexSelected(e.target.value);
    console.log(sexSelected);
  };

  //품종
  const kindCdList = ["전체", "말티즈", "믹스견", "골든 리트리버", "진돗개"];
  const [kindSelected, setKindSelected] = useState("");

  const handleKindCd = (e) => {
    setKindSelected(e.target.value);
  };

  //중성화여부
  const neuterYnList = ["전체", "말티즈", "믹스견", "골든 리트리버", "진돗개"];
  const [neuterYnSelected, setNeuterYnSelected] = useState("");

  const handleNeuterYn = (e) => {
    setNeuterYnSelected(e.target.value);
  };
  const isMobile = window.innerWidth <= 393;

  return (
    <>
      {isMobile ? <MHeader /> : <Header />}
      <S.Container>
        <S.HeaderBox>지금까지 등록된</S.HeaderBox>
        <S.HeaderBox>강아지 목록이에요.</S.HeaderBox>
        <div>
          <S.Select
            onChange={handleSexCd}
            defaultValue={sexCdList[0]}
            value={sexSelected}
            // style={{ width: "400px" }}
          >
            {sexCdList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </S.Select>
          <S.Select
            onChange={handleKindCd}
            defaultValue={kindCdList[0]}
            value={kindSelected}
          >
            {sexCdList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </S.Select>
          <S.Select
            onChange={handleNeuterYn}
            defaultValue={neuterYnList[0]}
            value={neuterYnSelected}
          >
            {sexCdList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </S.Select>
          <hr />
        </div>
        <S.AnimalContainer>
          {list !== []
            ? getCurrentPageItems().map((res) => (
                <AnimalCard
                  date={res.happenDt}
                  kindCd={res.kindCd}
                  sexCd={res.sexCd}
                  neuterYn={res.neuterYn}
                  imgUrl={res.filename}
                />
              ))
            : "로딩중"}
        </S.AnimalContainer>
      </S.Container>
      <div>
        <S.PagenationButton
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        >
          이전 페이지
        </S.PagenationButton>
        <span>
          현재 페이지: {currentPage} / {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          다음 페이지
        </button>
      </div>
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
  Pagenation: styled.div`
    display: block;
  `,
  Select: styled.select`
    width: 150px;
    font-size: 20px;

    /* background-color: yellow; */
  `,
  PagenationButton: styled.button`
    width: 80px;
    height: 60px;
  `,
};

export default Research;
