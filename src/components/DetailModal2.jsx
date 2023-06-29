import React, { useState } from "react";
import styled from "styled-components";
import { closeBtn } from "../images";
import { Label, MainColor } from "./";

function DetailModal2({ open, close, data }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      {open ? (
        <S.Background>
          <S.Container>
            <div>
              <S.CloseButton src={closeBtn} onClick={close} />
            </div>
            <S.Row2>
              <S.Row>
                <S.InModal>
                  <S.InImg src={data.imgUrl} alt="img" />
                </S.InModal>
                <div>
                  <S.Title>{data.kindCd}</S.Title>
                  <Label text={"접수일"} data={data.date} />
                  <Label text={"품종"} data={data.kindCd} />
                  <Label text={"성별/중성화여부"} data={data.sexCd} />
                  <Label text={"나이"} data={data.neuterYn} />
                </div>
              </S.Row>
              <S.SimilarityBox
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {isHovered ? (
                  <>
                    세종유기동물보호센터
                    <br />
                    010-000-000
                  </>
                ) : (
                  <>입양 문의하기</>
                )}
              </S.SimilarityBox>
            </S.Row2>
          </S.Container>
        </S.Background>
      ) : null}
    </>
  );
}

const S = {
  Background: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Container: styled.div`
    width: 670px;
    z-index: 999;
    top: 20%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -5%);
    background-color: white;
    border-radius: 20px;
    @media screen and (max-width: 393px) {
      width: 80%;
      padding: 0;
    }
  `,
  InModal: styled.div`
    padding-right: 24px;
    @media screen and (max-width: 393px) {
      padding: 0;
    }
  `,

  /* 모달창 내부 X버튼 */
  CloseButton: styled.img`
    padding: 8px;
    float: right;
  `,

  InImg: styled.img`
    width: 300px;
    height: 350px;
    object-fit: cover;
    @media screen and (max-width: 393px) {
      margin-top: 16px;
      width: 280px;
      height: 200px;
    }
  `,
  Row2: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  `,
  Row: styled.div`
    display: flex;
    padding-inline: 16px;
    @media screen and (max-width: 393px) {
      flex-direction: column;
    }
  `,
  Title: styled.div`
    font-size: 36px;
    font-weight: bold;
    color: ${() => MainColor};
    margin-bottom: 20px;
  `,
  SimilarityBox: styled.div`
    width: 108.5%;
    color: white;
    background-color: ${MainColor};
    font-size: 24px;
    text-align: center;
    margin-top: 24px;
    padding-block: 16px;
    font-weight: 700;
    border-radius: 0 0 20px 20px;
    &:hover {
      border-top: 1px solid ${MainColor};
      font-size: 16px;
      background-color: white;
      color: ${MainColor};
    }
    @media screen and (max-width: 393px) {
      width: 120%;
    }
  `,
};

export default DetailModal2;
