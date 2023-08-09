import styled from "styled-components";
import subBannerImg from "../../assets/images/subBannerImg.jpg";

export default function SubBanner() {
  return (
    <Container>
      <Wrap>
        <TextContainer>
          <MainText>리안소프트는 건강과 안전을 책임집니다.</MainText>
          <SubText>
            센서와 장비, IOT 기술을 아우르는 통합 기술을 바탕으로
            <br />
            하여 모든 사람의 건강을 책임지는 헬스케어 솔루션 &<br />
            시스템을 만들어 갑니다.
          </SubText>
        </TextContainer>
        <Image img={subBannerImg} />
      </Wrap>
    </Container>
  );
}

const Container = styled.section`
  background-color: #e0e2e6;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  margin: 0 auto;
`;
const TextContainer = styled.div`
  width: 40%;
  padding-right: 20px;
`;
const MainText = styled.h2`
  padding-bottom: 30px;
  letter-spacing: 1px;
  font-size: 26px;
`;
const SubText = styled.h3`
  line-height: 50px;
`;
const Image = styled.div<{ img: string }>`
  width: 60%;
  height: 450px;
  margin: 40px;
  margin-right: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(x) => x?.img});
`;
