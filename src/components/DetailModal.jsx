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
                <Label
                  text={"접수일"}
                  data={
                    data.date.substr(0, 4) +
                    "/" +
                    data.date.substr(4, 2) +
                    "/" +
                    data.date.substr(6, 8)
                  }
                />
                <Label text={"품종"} data={data.kindCd} />
                <Label
                  text={"성별/중성화여부"}
                  data={data.sexCd + " / " + data.neuterYn}
                />
                <Label text={"무게"} data={data.weight} />
                <Label text={"특이사항"} data={data.notice} />
              </div>
            </S.Row>
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
    padding-left: 16px;
    padding-block: 16px;
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
  Row: styled.div`
    display: flex;
    margin-top: 40px;
    @media screen and (max-width: 393px) {
      padding-inline: 16px;
      flex-direction: column;
    }
  `,
};

export default DetailModal;
