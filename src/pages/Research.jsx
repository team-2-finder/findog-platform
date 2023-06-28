import React, { useState, useRef } from "react";
import { DogChar, DogInput } from "../images";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Spinner from "react-activity/dist/Spinner"; // spinner효과를 사용하기 위한 코드
// import "react-activity/dist/Spinner.css"; //spinner효과를 사용하기 위한 코드

const Research = () => {
  // https://github.com/leeminq1/politic_test/blob/master/src/pages/Main.js
  // react에서 google teachable machine 사용 사례 적용 ~ 46라인
  const [selectedImage, setSelectedImage] = useState(null); //이미지 선택 저장
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const inputREF = useRef(); //요소 선택 저장

  const imageChange = (e) => {
    // const files = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setSelectedImage(e.target.files[0]); // 파일 상태 업데이트
    }
  };

  return (
    <S.Container>
      <S.UploadBox
        onClick={() => {
          inputREF.current.click();
        }}
      >
        {/* 이미지 업로드  */}
        <S.InputArea
          ref={inputREF}
          accept="image/*"
          type="file"
          onChange={imageChange}
        />
        {/* 이미지를 저장하는 변수에 값이 저장 되면 해당 이미지 렌더링 , 아닐 경우 이미지를 추가하라는 이미지 렌더링 */}
        {selectedImage ? (
          <S.Row>
            <S.UploadBeforeImg src={DogInput} alt="Dog" />
            <S.UploadAfterImg id="srcImg" src={imgBase64} alt="Thumb" />
          </S.Row>
        ) : (
          <S.Row>
            <S.UploadBeforeImg src={DogInput} alt="Dog" />
          </S.Row>
        )}
      </S.UploadBox>
    </S.Container>
  );
};

export default Research;

const S = {
  //전체화면
  Container: styled.div`
    background-color: #f5f5f5;
  `,
  Row: styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,

  ////////////////

  UploadBox: styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    box-shadow: 0px 0px 10px #bebfbe;
    @media screen and (max-width: 480px) {
      width: 80vw;
      min-height: 120vw;
    }
  `,
  InputArea: styled.input`
    display: none;
  `,
  UploadBeforeImg: styled.img`
    /* align-self: center; */
  `,
  UploadAfterImg: styled.img`
    width: 560px;
    height: 560px;
    resize: cover;
    align-self: center;
  `,
};
