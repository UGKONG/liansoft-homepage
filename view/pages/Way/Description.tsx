import styled from "styled-components";

export default function Description() {
  return (
    <Container>
      <Title>설 명</Title>
      <Row>
        <B>우편번호</B>08517
      </Row>
      <Row>
        <B>도로명주소</B>서울특별시 금천구 디지털로10길 78
      </Row>
      <Row>
        <B>지번주소</B>서울특별시 금천구 가산동 219-5
      </Row>
      <Row>
        <B>영문주소</B>78, Digital-ro 10-gil, Geumcheon-gu, Seoul, Republic of
        Korea
      </Row>
      <Row>
        <B>건물이름</B>가산테라타워
      </Row>
      <Row>
        <B>호수</B>809호
      </Row>
    </Container>
  );
}

const Container = styled.div`
  align-self: stretch;
  flex: 1;
  margin-left: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const Row = styled.div`
  color: #777777;
  margin-bottom: 10px;
  font-size: 16px;
`;
const B = styled.b`
  margin-right: 10px;
`;
