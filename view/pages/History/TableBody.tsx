import { useMemo } from "react";
import styled from "styled-components";
import { companyHistory } from "../../../public/strings";
import Item from "./Item";

export default function TableBody() {
  const list = useMemo<CompanyHistory[]>(() => {
    return [...companyHistory]
      ?.sort((_a, _b) => {
        let a = new Date(_a?.date + ".01");
        let b = new Date(_b?.date + ".01");
        let calc = a.getTime() - b.getTime();
        return calc;
      })
      .reverse();
  }, []);

  const firstyear = useMemo<number>(() => {
    return parseInt(list[0]?.date);
  }, [list]);

  const prevYear = (i: number): number => {
    if (!i) return parseInt(list[0]?.date);
    return parseInt(list[i - 1]?.date);
  };

  return (
    <Container>
      {list?.map((item, i) => (
        <Item
          key={i}
          idx={i}
          prevYear={prevYear(i - 1)}
          data={item}
          firstyear={firstyear}
        />
      ))}
    </Container>
  );
}

const Container = styled.tbody``;
