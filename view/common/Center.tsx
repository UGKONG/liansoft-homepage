import styled from "styled-components";
import { RiHome7Fill } from "react-icons/ri";
import { useMemo } from "react";

type Props = {
  type: "list" | "count";
  title: string;
  list?: any[];
  fieldName?: string;
  count?: number;
};

export default function Center({
  type,
  title,
  list = [],
  fieldName = "",
  count = 0,
}: Props) {
  const itemClick = (name: string) => {
    if (!name) return;
    let url = `https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=${name}`;
    window.open(url);
  };

  const countText = (c: number) => {
    return "현재 " + c + "여개";
  };

  return (
    <Container>
      <Title>
        <Icon />
        {title}
      </Title>
      <List>
        {type === "list"
          ? list?.map((item, i) => (
              <Item key={i} onClick={() => itemClick(item[fieldName])}>
                {item[fieldName] ?? ""}
              </Item>
            ))
          : count
          ? countText(count)
          : countText(list?.length)}
      </List>
    </Container>
  );
}

const Container = styled.section``;
const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #243662;
  margin-bottom: 10px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
`;
const Icon = styled(RiHome7Fill)`
  margin-right: 4px;
  font-size: 16px;
  transform: translateY(1px);
`;
const List = styled.ul`
  line-height: 30px;
  overflow: auto;
  font-size: 14px;
  color: #171d69;
`;
const Item = styled.li`
  float: left;
  padding-right: 10px;
  margin-right: 10px;
  position: relative;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 50%;
    background-color: #ddd;
    display: block;
  }

  &:last-of-type::after {
    display: none;
  }
`;
