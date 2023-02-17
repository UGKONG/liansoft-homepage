import { useMemo } from "react";
import styled from "styled-components";
import { companyHistory } from "../../../public/strings";
import YearRange from "./YearRange";
import Item from "./Item";
import Line from "./Line";

export default function Contents() {
  // 히스토리 리스트 (최신순)
  const list = useMemo<CompanyHistory[]>(() => {
    let copy = [...companyHistory];
    let sort = copy?.sort((_a, _b) => {
      let a = new Date(_a?.date + ".01");
      let b = new Date(_b?.date + ".01");
      let calc = a.getTime() - b.getTime();
      return calc;
    });
    sort.reverse();
    return sort;
  }, []);

  // 가장 마지막 Index
  const max = useMemo<number>(() => {
    return list?.length - 1;
  }, [list]);

  // 가장 마지막 년도
  const firstyear = useMemo<number>(() => {
    return parseInt(list[max]?.date);
  }, [list]);

  // 이전 히스토리 연도
  const prevYear = (i: number): number => {
    if (i === max) return firstyear;
    return parseInt(list[i + 1]?.date);
  };

  return (
    <Container>
      <YearRange />
      <Line.Center />
      <List>
        {list?.map((item, i) => (
          <Item key={i} idx={i} prevYear={prevYear(i)} data={item} />
        ))}
      </List>
      <Line.Center />
    </Container>
  );
}

const Container = styled.div`
  width: 1200px;
  z-index: 2;
  position: relative;
  background-color: #fff;
  margin: 0 auto;
`;
const List = styled.ul``;
