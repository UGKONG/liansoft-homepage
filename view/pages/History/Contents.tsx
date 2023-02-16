import styled from "styled-components";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function Contents() {
  return (
    <Container>
      <Wrap>
        <Table>
          <TableHead />
          <TableBody />
        </Table>
      </Wrap>
    </Container>
  );
}

const Container = styled.section`
  background-color: #fff;
`;
const Wrap = styled.div`
  width: 1200px;
  z-index: 2;
  position: relative;
  background-color: #fff;
  margin: 0 auto;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-color: #eee;
  margin-bottom: 50px;
`;
