import styled from "styled-components";
import { businessRangeList } from "../../../public/strings";
import Item from "./Item";

export default function Contents() {
  return (
    <Container>
      {businessRangeList?.map((item, i) => (
        <Item key={item?.id} idx={i} data={item} />
      ))}
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
