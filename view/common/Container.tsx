import styled from "styled-components";

type Props = {
  children?: any;
  style?: any;
  type?: "home";
};

export default function Container({ children, type }: Props) {
  return <Main type={type}>{children ?? "컴포넌트가 없습니다."}</Main>;
}

const Main = styled.main<{ type?: "home" }>`
  margin-top: ${(x) => (x?.type === "home" ? 0 : 90)}px;
  min-width: 1200px;
`;
