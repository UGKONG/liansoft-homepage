import styled from "styled-components";

type Props = {
  title: string;
  subTitle: string;
  bg: string;
  darkMode?: boolean;
};

export default function MainBanner({ title, subTitle, bg, darkMode }: Props) {
  return (
    <Container img={bg} darkMode={darkMode ? true : false}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}

const Container = styled.div<{ img: string; darkMode: boolean }>`
  width: 100%;
  height: 350px;
  background-image: url(${(x) => x?.img});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center 20%;
  filter: grayscale(0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-bottom: 50px;
  user-select: none;
  position: relative;
  text-align: center;
  flex-direction: column;
  color: #fff;

  &::before {
    display: ${(x) => (x?.darkMode ? "block" : "none")};
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000050;
  }
`;
const Title = styled.h1`
  width: 100%;
  padding: 20px 0;
  position: relative;
  font-size: 36px;
  letter-spacing: 3px;
  margin-bottom: 18px;
  text-shadow: 1px 2px 4px #000;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 40px;
    height: 1px;
    background-color: #fff;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
const SubTitle = styled.h2`
  max-width: 1000px;
  font-size: 18px;
  text-shadow: 0 2px 4px #00000050;
  font-weight: 400;
  margin: 0 auto;
  white-space: pre-wrap;
  position: relative;
`;
