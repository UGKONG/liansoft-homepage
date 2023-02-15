import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  data: Menu;
};

export default function SubMenuItem({ data }: Props) {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate(data?.path)}>{data?.name}</Container>
  );
}

const Container = styled.li`
  display: block;
  white-space: nowrap;
  font-size: 14px;
  padding: 12px 24px;
  transition: 0.1s;

  &:hover {
    background-color: #777;
    color: #fff;
  }
`;
