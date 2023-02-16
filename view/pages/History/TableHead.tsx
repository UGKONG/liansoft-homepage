import { useMemo } from "react";
import styled from "styled-components";
import { companyStartYear } from "../../../public/strings";

export default function TableHead() {
  const nowYear = useMemo<number>(() => {
    let date = new Date();
    return date.getFullYear();
  }, []);

  return (
    <Container>
      <tr>
        <th colSpan={3}>
          <Circle>
            <p>
              {companyStartYear}
              <br />
              <small>~</small>
              <br />
              <span>{nowYear}</span>
            </p>
          </Circle>
        </th>
      </tr>
    </Container>
  );
}

const Container = styled.thead``;
const Circle = styled.div`
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-weight: 500;
  background-color: #1b2e5a;
  border-radius: 50%;
  letter-spacing: 1px;
  text-indent: 1px;
  line-height: 20px;
  font-size: 20px;
  margin: 0 auto;
`;
