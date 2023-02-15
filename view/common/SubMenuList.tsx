import styled from "styled-components";
import SubMenuItem from "./SubMenuItem";

type Props = {
  list: Menu[];
};

export default function SubMenuList({ list }: Props) {
  return (
    <Container>
      {list?.map((item, i) => (
        <SubMenuItem key={i} data={item} />
      ))}
    </Container>
  );
}

const Container = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffffdd;
`;
