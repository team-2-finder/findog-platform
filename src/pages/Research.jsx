import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Header,
  AnimalCard,
  MBottomNavBar,
  MHeader,
  DropDown,
  MainColor,
} from "../components";

import styled from "styled-components";
import DetailModal from "../components/DetailModal";

const Research = () => {
  const [list, setList] = useState([]);
  const [isClick, setIsClick] = useState(false);
  async function getData() {
    try {
      var parmas = {};
      if (kindSelected !== "") {
        parmas.kind_cd = kindSelected;
      } else {
        delete parmas.kind_cd;
      }
      if (neuterYnSelected !== "") {
        parmas.neuter_yn = neuterYnSelected;
      } else {
        delete parmas.neuter_yn;
      }
      if (sexSelected !== "") {
        parmas.sex_cd = sexSelected;
      } else {
        delete parmas.sex_cd;
      }
      const response = await axios.get("https://findog.buttercrab.net/api/", {
        params: parmas,
        // params: {
        // happen_dt: "F",
        // kind_cd: kindSelected,
        // sex_cd: "F",
        // neuter_yn: neuterYnSelected,
        // },
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

  useEffect(() => {
    getData();
  }, [isClick]);
  //페이지 네이션
  const totalItems = list.length; // 전체 아이템 개수
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
    if (currentPage === 1) {
      return;
    }
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
  const happenDtList = ["전체", "1주일", "1개월", "3개월", "1년"];
  const [happenDtSelected, setHappenDtSelected] = useState("");

  const handlehappenDt = (e) => {
    setHappenDtSelected(e.target.value);
    console.log(sexSelected);
  };

  //성별
  const sexCdList = ["전체", "수컷", "암컷"];
  const [sexSelected, setSexSelected] = useState("");

  const handleSexCd = (e) => {
    const selectedValue = e.target.value;
    setSexSelected(
      selectedValue === "전체" ? "" : selectedValue === "수컷" ? "M" : "F"
    );

    console.log(sexSelected);
  };

  //품종
  const kindCdList = ["전체", "말티즈", "믹스견", "골든 리트리버", "진돗개"];
  const [kindSelected, setKindSelected] = useState("");

  const handleKindCd = (e) => {
    const selectedValue = e.target.value;
    setKindSelected(selectedValue === "전체" ? "" : "[개] " + selectedValue);
    console.log(kindSelected);
  };

  //중성화여부
  const neuterYnList = ["전체", "Y", "N"];
  const [neuterYnSelected, setNeuterYnSelected] = useState("");

  const handleNeuterYn = (e) => {
    const selectedValue = e.target.value;
    setNeuterYnSelected(selectedValue === "전체" ? "" : selectedValue);
  };
  const isMobile = window.innerWidth <= 393;

  return (
    <>
      {isMobile ? <MHeader /> : <Header />}
      <S.Container>
        <S.HeaderBox>지금까지 등록된</S.HeaderBox>

        <S.HeaderBox style={{ display: "inline" }}>
          강아지 목록이에요.
        </S.HeaderBox>
        <S.FilterButton
          onClick={() => {
            setIsClick((res) => !res);
          }}
        >
          필터 검색 결과 보기
        </S.FilterButton>
        <S.Filter>
          <S.FilterText>접수일</S.FilterText>
          <S.Select
            onChange={handlehappenDt}
            defaultValue={happenDtList[0]}
            value={happenDtSelected}
            // style={{ width: "400px" }}
          >
            {happenDtList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </S.Select>
          <S.FilterText>성별</S.FilterText>

          <S.Select
            onChange={handleSexCd}
            defaultValue={sexCdList[0]}
            // value={sexSelected} // value 속성 제거
          >
            {sexCdList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </S.Select>
          <S.FilterText>품종</S.FilterText>

          <S.Select
            onChange={handleKindCd}
            defaultValue={kindCdList[0]}
            // value={kindSelected}
          >
            {kindCdList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </S.Select>
          <S.FilterText>중성화여부</S.FilterText>

          <S.Select
            onChange={handleNeuterYn}
            defaultValue={neuterYnList[0]}
            value={neuterYnSelected}
          >
            {neuterYnList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </S.Select>
        </S.Filter>

        <S.AnimalContainer>
          {list !== []
            ? getCurrentPageItems().map((res) => (
                <>
                  <AnimalCard
                    date={res.happenDt}
                    kindCd={res.kindCd}
                    sexCd={res.sexCd}
                    neuterYn={res.neuterYn}
                    imgUrl={res.filename}
                    notice={res.noticeComment}
                    colorCd={res.colorCd}
                    caretel={res.caretel}
                    weight={res.weight}
                  />
                </>
              ))
            : "로딩중"}
        </S.AnimalContainer>
        <S.Pagenation>
          <S.PagenationButton
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            <img
              src="img/arrow-left.png"
              alt="left"
              style={{ width: "40px" }}
            />
          </S.PagenationButton>
          <span style={{ fontSize: "20px" }}>
            {currentPage} / {totalPages}
          </span>
          <S.PagenationButton
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            <img
              src="img/arrow-right.png"
              alt="right"
              style={{ width: "40px" }}
            />
          </S.PagenationButton>
        </S.Pagenation>
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
  Select: styled.select`
    border-radius: 8px;
    display: inline;
    width: 100px;

    padding: 10px;
    font-size: 20px;
  `,
  FilterButton: styled.div`
    display: inline;
    float: right;
    padding: 15px;
    color: white;
    background-color: ${MainColor};
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;

    &:active {
      background-color: rgba(255, 185, 65, 0.8);
    }
  `,
  Filter: styled.div`
    display: inline-block;
    float: right;
  `,
  FilterText: styled.div`
    display: inline;
    font-size: 20px;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 10px;
  `,

  Pagenation: styled.div`
    display: block;
    text-align: center;
  `,
  PagenationButton: styled.div`
    display: inline;
    width: 80px;
    height: 60px;
  `,
};

export default Research;
