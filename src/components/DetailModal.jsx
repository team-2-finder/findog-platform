import React from "react";
import styled from "styled-components";
import { closeBtn } from "../images";
import { Label } from "./";

function DetailModal({ open, close, data }) {
  return (
    <>
      {open ? (
        <S.Background>
          <S.Container>
            <div>
              <S.CloseButton src={closeBtn} onClick={close} />
            </div>
            <S.Row>
              <S.InModal>
                <S.InImg src={data.imgUrl} alt="img" />
              </S.InModal>
              <div>
                <Label text={"접수일"} data={data.date} />
                <Label text={"품종"} data={data.kindCd} />
                <Label text={"성별/중성화여부"} data={data.sexCd} />
                <Label text={"나이"} data={data.neuterYn} />
              </div>
            </S.Row>

            {/* <p>{data.date}</p>
            <p>{data.kindCd}</p>
            <p>{data.sexCd}</p>
            <p>{data.neuterYn}</p> */}
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
    padding-inline: 30px;
    padding-block: 16px;
  `,
  InModal: styled.div`
    padding-right: 24px;
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
  `,
  Row: styled.div`
    display: flex;
    margin-top: 40px;
  `,
};

export default DetailModal;
