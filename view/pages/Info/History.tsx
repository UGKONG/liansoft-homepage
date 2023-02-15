import styled from "styled-components";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function History() {
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
  margin: 0px auto 0;
`;
const Title = styled.h2`
  font-size: 36px;
  letter-spacing: 3px;
  text-align: center;
  padding: 50px 0;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-color: #eee;
`;
