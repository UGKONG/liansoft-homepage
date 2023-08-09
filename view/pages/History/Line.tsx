import styled from "styled-components";
import { BsCalendarWeek } from "react-icons/bs";
import { useMemo } from "react";

type Dir = "left" | "right";

const Image = ({ src }: { src: string }) => (
  <ImgWrap>
    <Img src={src} />
  </ImgWrap>
);

const Center = ({
  dir,
  year,
  title,
}: {
  dir?: Dir;
  year?: number;
  title?: string;
}) => {
  return !year ? (
    <CenterLine className={dir} />
  ) : (
    <>
      <CenterLine>
        <YearCircle>{year}</YearCircle>
        <YearTitle>{title}</YearTitle>
      </CenterLine>
      <CenterLine />
    </>
  );
};

const Right = ({ data }: { data: CompanyHistory }) => (
  <>
    <Row>
      <Col />
      <Center dir="right" />
      <Col>
        <Date dir="right">
          <Icon dir="right" />
          {data?.date}
        </Date>
        <Contents dir="right">
          {data?.content}
          {data?.img ? <Image src={data?.img} /> : null}
        </Contents>
      </Col>
    </Row>
    <Center />
  </>
);

const Left = ({ data }: { data: CompanyHistory }) => (
  <>
    <Row>
      <Col>
        <Date dir="left">
          {data?.date}
          <Icon dir="left" />
        </Date>
        <Contents dir="left">
          {data?.content}
          {data?.img ? <Image src={data?.img} /> : null}
        </Contents>
      </Col>
      <Center dir="left" />
      <Col />
    </Row>
    <Center />
  </>
);

const Line = { Center, Right, Left };
export default Line;

// Center
const CenterLine = styled.div`
  min-width: 60px;
  max-width: 60px;
  min-height: 34px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: "";
    width: 2px;
    height: 100%;
    position: absolute;
    background-color: #1b2e5a;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    display: block;
  }
  &::after {
    content: "";
    position: absolute;
    top: 16px;
    width: 50%;
    height: 2px;
    background-color: #1b2e5a;
    display: none;
  }
  &.left::after {
    left: 0;
    display: block;
  }
  &.right::after {
    right: 0;
    display: block;
  }
`;
const YearCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #1b2e5a;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
`;
const YearTitle = styled.p`
  position: absolute;
  left: calc(100% + 10px);
  top: 50%;
  transform: translateY(-50%);
  white-space: nowrap;
  font-size: 15px;
  font-weight: 500;
  color: #1b2e5a;
  letter-spacing: 1px;
`;

// Right / Left
const Row = styled.section`
  display: flex;
`;
const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Icon = styled(BsCalendarWeek)<{ dir: Dir }>`
  ${(x) => "margin-" + x?.dir}: 10px;
  transform: translateY(1px);
`;
const Date = styled.h4<{ dir: Dir }>`
  height: 36px;
  font-size: 18px;
  letter-spacing: 1px;
  color: #1b2e5a;
  padding-bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: flex-${(x) => (x?.dir === "left" ? "end" : "start")};
`;
const Contents = styled.div<{ dir: Dir }>`
  font-size: 14px;
  line-height: 24px;
  color: #1b2e5a;
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  white-space: pre-wrap;
  align-items: flex-${(x) => (x?.dir === "left" ? "end" : "start")};
`;
const ImgWrap = styled.div`
  overflow: hidden;
  margin-top: 10px;
  border: 1px solid #ccc;
`;
const Img = styled.img`
  height: 230px;
  display: block;
  transform: scale(1);
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;
