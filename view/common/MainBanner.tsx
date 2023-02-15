import styled from "styled-components";

type Props = {
  title: string;
  subTitle: string;
  bg: string;
};

export default function MainBanner({ title, subTitle, bg }: Props) {
  return (
    <Container img={bg}>
      <Wrap>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Wrap>
    </Container>
  );
}

const Container = styled.div<{ img: string }>`
  width: 100%;
  height: 350px;
  background-image: url(${(x) => x?.img});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center 20%;
  filter: grayscale(0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;
const Wrap = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  text-align: center;
  flex-wrap: wrap;
  color: #fff;
  padding: 46px 0;
`;
const Title = styled.h1`
  width: 100%;
  padding: 20px 0;
  position: relative;
  font-size: 36px;
  letter-spacing: 3px;
  margin-bottom: 18px;
  text-shadow: 1px 2px 4px black;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 30px;
    height: 1px;
    background-color: #fff;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
const SubTitle = styled.h2`
  font-size: 18px;
  text-shadow: 0 2px 4px #00000050;
  font-weight: 400;
`;
