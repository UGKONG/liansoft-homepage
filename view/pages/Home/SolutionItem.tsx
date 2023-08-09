import { useMemo, useState } from "react";
import styled from "styled-components";
import LinkContainer from "./LinkContainer";

type Props = {
  data: Solution;
};

export default function SolutionItem({ data }: Props) {
  const [isClick, setIsClick] = useState<boolean>(false);

  const img = useMemo<string>(() => {
    const res = require("../../assets/images/thum/" + data?.img);
    if (!res) return null;
    return res?.default;
  }, []);

  return (
    <Container onMouseLeave={() => setIsClick(false)}>
      <Header>
        <Image img={img} />
        {isClick && <LinkContainer path={data?.path} />}
      </Header>
      <Body>
        <Name>{data?.name}</Name>
        <DetailButton onClick={() => setIsClick(true)}>
          자세히 보기
        </DetailButton>
      </Body>
    </Container>
  );
}

const Container = styled.li`
  min-width: 210px;
  max-width: 210px;
  height: 100%;
  position: relative;
  margin-right: 12px;
  user-select: none;
  box-shadow: 2px 0px 5px #00000050;
`;
const Header = styled.div`
  width: 100%;
  height: 75%;
  overflow: hidden;
  position: relative;
`;
const Image = styled.div<{ img: string }>`
  display: block;
  transform: scale(1);
  transition: 0.4s;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(x) => x?.img});
`;
const Body = styled.div`
  width: 100%;
  height: 25%;
  background-color: #fff;
  line-height: 24px;
  padding: 6px 0;
`;
const Name = styled.p`
  text-align: center;
  font-size: 13px;
  font-weight: 500;
`;
const DetailButton = styled.button`
  font-size: 10px;
  padding: 2px 10px 3px;
  border: none;
  background-color: #555;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  display: block;
  margin: 4px auto 0;

  &:hover {
    background-color: #444;
  }
`;
