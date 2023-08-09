import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  data: Menu;
};

export default function SubMenuItem({ data }: Props) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = useMemo<boolean>(() => {
    return data?.path === location.pathname;
  }, [location]);

  return (
    <Container
      className={isActive ? "active" : ""}
      onClick={() => navigate(data?.path)}
    >
      {data?.name}
    </Container>
  );
}

const Container = styled.li`
  display: block;
  white-space: nowrap;
  font-size: 14px;
  padding: 12px 24px;
  transition: 0.1s;
  user-select: none;

  &:hover {
    background-color: #777;
    color: #fff;
  }
  &.active {
    background-color: #605f65;
    color: #fff;
  }
`;
