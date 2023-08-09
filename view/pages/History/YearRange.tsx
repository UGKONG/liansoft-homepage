import styled from "styled-components";
import { useMemo } from "react";
import { companyStartYear } from "../../../public/strings";

export default function YearRange() {
  const nowYear = useMemo<number>(() => {
    let date = new Date();
    return date.getFullYear();
  }, []);

  return (
    <Container>
      <span>{companyStartYear}</span>
      <small>~</small>
      <span>{nowYear}</span>
    </Container>
  );
}
const Container = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  color: #fff;
  font-weight: 500;
  background-color: #1b2e5a;
  border-radius: 50%;
  letter-spacing: 1px;
  text-indent: 1px;
  line-height: 20px;
  font-size: 20px;
  margin: 0 auto;
  white-space: pre-wrap;
`;
