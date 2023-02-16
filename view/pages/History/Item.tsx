import { useCallback, useMemo } from "react";
import styled from "styled-components";

type Props = {
  idx: number;
  data: CompanyHistory;
  firstyear: number;
  prevYear: number;
};
type Dir = "left" | "right";

export default function Item({ idx, data, firstyear, prevYear }: Props) {
  const year = useMemo<number>(() => {
    return parseInt(data?.date);
  }, []);

  const isChangeYear = useMemo<boolean>(() => {
    return prevYear === year;
  }, [year]);

  const dir = useMemo<Dir>(() => {
    return idx % 2 ? "right" : "left";
  }, []);

  const img = useMemo<string>(() => {
    if (!data?.img) return "";
    const get = require("../../assets/images/history/" + data?.img);
    return get.default;
  }, []);

  const DefaultRow = useCallback(
    () => (
      <Container className="newYear">
        <Td />
        <Th>
          <div>{year + 1}</div>
        </Th>
        <Td />
      </Container>
    ),
    [year]
  );

  return (
    <>
      <Container>
        <Td className="title">{dir === "left" && data?.date}</Td>
        <Th className={`tree ${dir}`}></Th>
        <Td className="title">{dir === "right" && data?.date}</Td>
      </Container>
      <Container>
        <Td>
          {dir === "left" && (
            <>
              {data?.content}
              {img ? <Image src={img} /> : null}
            </>
          )}
        </Td>
        <Th />
        <Td>
          {dir === "right" && (
            <>
              {data?.content}
              {img ? <Image src={img} /> : null}
            </>
          )}
        </Td>
      </Container>
      {!isChangeYear && <DefaultRow />}
    </>
  );
}

const Container = styled.tr`
  &.newYear {
    height: 100px;

    & > th > div {
      width: 100%;
      height: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background-color: #1b2e5a;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 38px;
      font-weight: 400;
    }
  }
`;
const Th = styled.th`
  width: 50px;
  height: 30px;
  position: relative;

  &::before {
    content: "";
    width: 2px;
    height: 100%;
    background-color: #1b2e5a;
    margin: 0 auto;
    display: block;
  }

  &.tree {
    &::after {
      content: "";
      width: 50%;
      height: 2px;
      background-color: #1b2e5a;
      position: absolute;
      top: 50%;
    }

    &.left::after {
      left: 0;
      transform: translateY(-50%);
    }

    &.right::after {
      right: 0;
      transform: translateY(-50%);
    }
  }
`;
const Td = styled.td`
  min-width: 575px;
  max-width: 575px;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 24px;
  position: relative;
  display: flex;
  flex-direction: column;

  &:first-of-type {
    align-items: flex-end;
  }

  &:last-of-type {
    align-items: flex-start;
  }

  &.title {
    font-size: 18px;
    letter-spacing: 1px;
    font-family: "NanumSquareRound", sans-serif;
    font-weight: 900;
    color: #1b2e5a;
  }
`;
const Image = styled.img`
  /* width: 400px; */
  height: 230px;
  display: inline-block;
  margin-top: 10px;
  border: 1px solid #ccc;
`;
