import styled from "styled-components";
import bg from "../../assets/images/bg.jpg";

export default function MainBanner() {
  return (
    <>
      <Image img={bg} />
      <Text>IOT 기술을 기반으로한 디지털 헬스케어 서비스 분야의 선도 기업</Text>
    </>
  );
}

const Image = styled.div<{ img: string }>`
  height: 100vh;
  position: relative;
  background-image: url(${(x) => x?.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Text = styled.div`
  position: absolute;
  width: 60%;
  top: 50%;
  left: 10%;
  transform: translate(0, -50%);
  color: #fff;
  letter-spacing: 3px;
  word-break: keep-all;
  user-select: none;
  transition: 0.3s;
  font-size: 50px;

  @media screen and (max-width: 800px) {
    font-size: 40px;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;
