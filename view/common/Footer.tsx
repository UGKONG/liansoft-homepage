import styled from "styled-components";
import footerLogo from "../assets/images/footerLogo.png";

export default function Footer() {
  return (
    <Container>
      <Wrap>
        <Article>
          <Logo img={footerLogo} />
          <Address>
            COPYRIGHT(C) LianSoft co.ltd. ALLRIGHT RESERVED.2021
          </Address>
        </Article>
        <Article>
          <Row>
            <RowTitle>주소</RowTitle>서울특별시 금천구 디지털로10길 78
            (가산테라타워) 809호
          </Row>
          <Row>
            <RowTitle>이메일</RowTitle>hspark@liansoft.co.kr
          </Row>
          <Row>
            <RowTitle>대표번호</RowTitle>010-8288-2355 (AM09:00 ~ PM06:00)
          </Row>
        </Article>
      </Wrap>
    </Container>
  );
}

const Container = styled.footer`
  width: 100%;
  min-height: 190px;
  max-height: 190px;
  background-color: #262626;
  color: #808080a1;
`;
const Wrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Article = styled.article``;
const Logo = styled.h2<{ img: string }>`
  width: 160px;
  height: 50px;
  background-image: url(${(x) => x?.img});
  background-repeat: no-repeat;
  background-size: 98% auto;
  background-position: center;
`;
const Address = styled.address`
  font-size: 13px;
  font-style: normal;
  letter-spacing: 1px;
`;
const Row = styled.p`
  line-height: 30px;
  font-size: 14px;
  letter-spacing: 0.5px;
`;
const RowTitle = styled.span`
  display: inline-block;
  width: 70px;
  letter-spacing: 1px;
  font-weight: 500;
`;
