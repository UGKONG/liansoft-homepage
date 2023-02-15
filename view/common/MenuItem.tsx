import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SubMenuList from "./SubMenuList";

type Props = {
  data: MenuList;
};

export default function MenuItem({ data }: Props) {
  const navigate = useNavigate();

  return (
    <Container>
      <Name onClick={() => navigate(data?.path)}>{data?.name}</Name>
      <SubMenuList list={data?.sub} />
    </Container>
  );
}

const Container = styled.li`
  display: inline-flex;
  height: 100%;
  position: relative;
  padding: 0 20px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #332f46;
    font-weight: 500;

    & > ul {
      display: block;
    }
  }
`;
const Name = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
