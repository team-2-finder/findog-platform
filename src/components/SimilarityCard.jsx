import styled from "styled-components";
import { MainColor } from "./Colors";

const SimilarityCard = ({ date, kindCd, sexCd, neuterYn, imgUrl }) => {
  return (
    <S.Box>
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
      <S.SimilarityBox>사진과 99% 일치해요</S.SimilarityBox>
    </S.Box>
  );
};

const S = {
  Box: styled.div`
    margin: 10px;
  `,
  Container: styled.div`
    width: 408px;
    height: 279px;

    display: grid;
    /* padding: 20px; */
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
    display: inline;
    border-radius: 4px;
    border: 1px solid ${MainColor};
    padding: 5px 15px 5px 15px;
    color: ${MainColor};
    font-size: 14px;
  `,
  TextBox2: styled.div`
    display: block;
    margin-top: 10px;
    /* padding: 5px 15px 5px 15px; */
    font-size: 18px;
  `,
  SimilarityBox: styled.div`
    width: 408px;
    height: 56px;
    color: white;
    background-color: ${MainColor};
    font-size: 24px;
    text-align: center;
    display: table-cell;
    vertical-align: middle;
    border-radius: 0 0 20px 20px;
  `,
};
export default SimilarityCard;
