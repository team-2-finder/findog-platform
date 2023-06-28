import React, { useState, useRef } from "react";
import { DisableMain, MainColor, Loading } from "./";
import { DogInput, MobileDogInput } from "../images";
import { Link } from "react-router-dom";
import styled from "styled-components";

const InputImage = () => {
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

  const isMobile = window.innerWidth <= 393;
  const [isLoading, setLoading] = useState(false);

  //임시 타이머
  const handleLodingAndNavigate = () => {
    setLoading(true);
    setTimeout(() => {
      document.location.href = "/research";
    }, 5000);
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
            {isMobile ? (
              <S.UploadBeforeImg src={MobileDogInput} alt="Dog" />
            ) : (
              <S.UploadBeforeImg src={DogInput} alt="Dog" />
            )}
            <S.UploadAfterImg id="srcImg" src={imgBase64} alt="Thumb" />
          </S.Row>
        ) : (
          <S.Row>
            {isMobile ? (
              <S.UploadBeforeImg src={MobileDogInput} alt="Dog" />
            ) : (
              <S.UploadBeforeImg src={DogInput} alt="Dog" />
            )}
          </S.Row>
        )}
      </S.UploadBox>

      {isMobile ? (
        <>
          {selectedImage ? (
            <S.MNextpageBtn onClick={() => handleLodingAndNavigate()}>
              강아지 찾기
            </S.MNextpageBtn>
          ) : (
            <S.MNextpageBtnNon>강아지 찾기</S.MNextpageBtnNon>
          )}
        </>
      ) : (
        <>
          {selectedImage ? (
            <S.NextpageBtn onClick={() => handleLodingAndNavigate()}>
              강아지 찾기
            </S.NextpageBtn>
          ) : (
            <S.NextpageBtnNon>강아지 찾기</S.NextpageBtnNon>
          )}
        </>
      )}

      {isLoading && <Loading />}
    </S.Container>
  );
};

export default InputImage;

const S = {
  //전체화면
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-block: 16px;
  `,
  Row: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  `,

  UploadBox: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-self: center;
    justify-content: center;
  `,
  InputArea: styled.input`
    display: none;
  `,
  UploadBeforeImg: styled.img`
    width: 100%;
    @media screen and (max-width: 393px) {
      width: 90%;
    }
  `,

  UploadAfterImg: styled.img`
    width: 50%;
    height: 90%;
    border-radius: 40px;
    resize: cover;
    align-self: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    @media screen and (max-width: 393px) {
      width: 86%;
      height: 96%;
      resize: cover;
      border-radius: 20px;
      top: 5px;
    }
  `,
  ///
  NextpageBtn: styled.div`
    background: ${() => MainColor};
    border-radius: 20px;
    color: white;
    font-size: 24px;
    font-weight: 700;
    padding: 24.5px 257px;
    text-align: center;

    -webkit-tap-highlight-color: transparent;
  `,

  NextpageBtnNon: styled.div`
    background: ${() => DisableMain};
    border-radius: 20px;
    color: white;
    font-size: 24px;
    font-weight: 700;
    padding: 24.5px 257px;
    text-align: center;
    margin-bottom: 20px;
    -webkit-tap-highlight-color: transparent;
  `,
  ///
  ///
  MNextpageBtn: styled.div`
    background: ${() => MainColor};
    border-radius: 20px;
    color: white;
    font-size: 24px;
    font-weight: 700;
    padding-block: 16px;
    width: 90%;
    text-align: center;
    margin-top: 24px;
    -webkit-tap-highlight-color: transparent;
  `,

  MNextpageBtnNon: styled.div`
    background: ${() => DisableMain};
    border-radius: 20px;
    color: white;
    font-size: 24px;
    font-weight: 700;
    padding-block: 16px;
    margin-top: 24px;
    width: 90%;
    text-align: center;
    -webkit-tap-highlight-color: transparent;
  `,
};
