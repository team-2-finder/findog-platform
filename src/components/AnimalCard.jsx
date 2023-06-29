import styled from "styled-components";
import { MainColor } from "./Colors";

const AnimalCard = ({ date, kindCd, sexCd, neuterYn, imgUrl }) => {
  return (
    <>
      <S.Container>
        <S.AnimalImg style={{ width: "192px", height: "223px" }} src={imgUrl} />
        <S.TextContainer>
          <S.TextBox1>접수일</S.TextBox1>
          <S.TextBox2>{date}</S.TextBox2>
          <div style={{ height: "20px" }}></div>
          <S.TextBox1>품종</S.TextBox1>
          <S.TextBox2>{kindCd}</S.TextBox2>
          <div style={{ height: "20px" }}></div>
          <S.TextBox1>성별 / 중성화 여부</S.TextBox1>
          <S.TextBox2>
            {sexCd} / {neuterYn}
          </S.TextBox2>
        </S.TextContainer>
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.div`
    margin: 10px;
    width: 408px;
    height: 279px;
    display: grid;

    grid-template-columns: 1fr 1fr;
    background-color: white;
  `,
  AnimalImg: styled.img`
    padding: 26px;
    /* width: 192;
    height: 223;*/
  `,
  AnimalDiv: styled.div`
    background-image: url("http://www.animal.go.kr/files/shelter/2023/05/202306290706525.jpg");
    background-size: cover;
    border-radius: 4px;
  `,
  TextContainer: styled.div`
    padding: 26px 0 26px 0;
    margin-top: 5px;
  `,
  TextBox1: styled.div`
    background-color: ${MainColor};
    display: inline;
    border-radius: 4px;
    padding: 5px 15px 5px 15px;
    color: white;
    font-size: 14px;
  `,
  TextBox2: styled.div`
    display: block;
    margin-top: 10px;
    /* padding: 5px 15px 5px 15px; */
    font-size: 18px;
  `,
};
export default AnimalCard;