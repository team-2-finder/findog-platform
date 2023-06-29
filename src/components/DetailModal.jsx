import styled from "styled-components";

function DetailModal({ open, close, data }) {
  return (
    <>
      {open ? (
        <S.Container>
          <S.CloseButton onClick={close}>X</S.CloseButton>
          <p>asdfasdf</p>
          <p>{data.date}</p>
          <p>{data.kindCd}</p>
        </S.Container>
      ) : null}
    </>
  );
}

const S = {
  Container: styled.div`
    width: 100px;
    height: 100px;

    z-index: 999;

    top: 50%;
    left: 50%;
    position: absolute;

    transform: translate(-50%, -50%);

    background-color: gray;
    border: 1px solid black;
    border-radius: 8px;
  `,

  /* 모달창 내부 X버튼 */
  CloseButton: styled.button`
    position: absolute;
    right: 10px;
    top: 10px;
  `,
};

export default DetailModal;
