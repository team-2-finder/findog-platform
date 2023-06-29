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
import { bg2 } from "../images";

import styled from "styled-components";
import DetailModal from "../components/DetailModal";

const Research = () => {
  const [list, setList] = useState([]);
  const [isClick, setIsClick] = useState(false);
  async function getData() {
    try {
      var params = {};
      if (kindSelected !== "") {
        params.kind_cd = kindSelected;
      } else {
        delete params.kind_cd;
      }
      if (neuterYnSelected !== "") {
        params.neuter_yn = neuterYnSelected;
      } else {
        delete params.neuter_yn;
      }
      if (sexSelected !== "") {
        params.sex_cd = sexSelected;
      } else {
        delete params.sex_cd;
      }
      if (happenDtSelected !== "" && happenDtSelected.days !== 0) {
        params.happen_dt = getPreviousDate(happenDtSelected);
      } else {
        delete params.happen_dt;
      }

      const response = await axios.get("https://findog.buttercrab.net/api/", {
        params: params,
      });
      console.log(response.data);
      if ("happen_dt" in params) {
        response.data.reverse();
      }
      setList(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
    setCurrentPage(1);
  }, [isClick]);

  const totalItems = list.length;
  const itemsPerPage = 30;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return list.slice(startIndex, endIndex);
  };

  const goToPreviousPage = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const getPreviousDate = (days) => {
    const currentDate = new Date();
    const previousDate = new Date(
      currentDate.getTime() - days * 24 * 60 * 60 * 1000
    );
    const year = previousDate.getFullYear();
    const month = String(previousDate.getMonth() + 1).padStart(2, "0");
    const date = String(previousDate.getDate()).padStart(2, "0");
    console.log(`${year}${month}${date}`);
    return `${year}${month}${date}`;
  };

  const happenDtList = [
    { label: "전체", days: 0 },
    { label: "1주일", days: 7 },
    { label: "1개월", days: 30 },
    { label: "3개월", days: 90 },
    { label: "1년", days: 365 },
  ];
  const [happenDtSelected, setHappenDtSelected] = useState("");

  const handleHappenDt = (e) => {
    setHappenDtSelected(e.target.value);
  };

  const sexCdList = ["전체", "수컷", "암컷"];
  const [sexSelected, setSexSelected] = useState("");

  const handleSexCd = (e) => {
    const selectedValue = e.target.value;
    setSexSelected(
      selectedValue === "전체" ? "" : selectedValue === "수컷" ? "M" : "F"
    );
  };

  const kindCdList = ["전체", "말티즈", "믹스견", "골든 리트리버", "진돗개"];
  const [kindSelected, setKindSelected] = useState("");

  const handleKindCd = (e) => {
    const selectedValue = e.target.value;
    setKindSelected(selectedValue === "전체" ? "" : selectedValue);
  };

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
        <div style={{ height: "10px" }}></div>
        <S.Filter>
          <S.FilterText>접수일</S.FilterText>
          <S.Select
            onChange={handleHappenDt}
            defaultValue={happenDtList[0].label}
            // value={happenDtSelected}
          >
            {happenDtList.map((item) => (
              <option value={item.days} key={item.label}>
                {item.label}
              </option>
            ))}
          </S.Select>
          <S.FilterText>성별</S.FilterText>
          <S.Select
            onChange={handleSexCd}
            defaultValue={sexCdList[0]}
            // value={sexSelected}
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
            // value={neuterYnSelected}
          >
            {neuterYnList.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </S.Select>
        </S.Filter>
        <div style={{ height: "50px" }}></div>

        <S.AnimalContainer>
          {list.length > 0
            ? getCurrentPageItems().map((res) => (
                <AnimalCard
                  key={res.id}
                  date={res.happenDt}
                  kindCd={res.kindCd}
                  sexCd={res.sexCd}
                  neuterYn={res.neuterYn}
                  imgUrl={res.filename}
                  notice={res.noticeComment}
                  colorCd={res.colorCd}
                  caretel={res.careTel}
                  weight={res.weight}
                  careNm={res.careNm}
                />
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
          <div style={{ fontSize: "20px" }}>
            {currentPage} / {totalPages}
          </div>
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
    background-image: url(${bg2});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    /* width: 100%; */
  `,
  HeaderBox: styled.div`
    font-size: 48px;
    padding-top: 12px;
    margin-bottom: 12px;
    font-weight: bold;
    @media screen and (max-width: 393px) {
      margin-block: 16px;
      font-size: 32px;
    }
  `,
  AnimalContainer: styled.div`
    display: grid;
    place-items: center;
    margin: 0 auto;
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
    display: inline-block;
    float: right;
    margin-right: 10px;
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
    display: block;
    margin-right: 10px;
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
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  PagenationButton: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 60px;
    cursor: pointer;
  `,
};

export default Research;
