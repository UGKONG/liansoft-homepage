import styled from "styled-components";
import { menuList } from "../../public/strings";
import MenuItem from "./MenuItem";

export default function MenuList() {
  return (
    <Container>
      {menuList?.map((item, i) => (
        <MenuItem key={i} data={item} />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  height: 100%;
  margin-left: 60px;
`;
