import { useMemo } from "react";
import styled from "styled-components";

type Props = {
  data: Project;
  idx?: number;
};

export default function ProjectItem({ data, idx = 0 }: Props) {
  const title = useMemo<string>(() => idx + 1 + ". " + data?.name, []);

  const img = useMemo<null | string>(() => {
    if (!data?.img) return null;
    let get = require("../assets/images/project/" + data?.img);
    return get?.default;
  }, []);

  const onClick = (): void => {
    window.open(data?.url);
  };

  return (
    <Container>
      <Title>
        {title}
        {data?.url ? <LinkButton onClick={onClick} /> : null}
      </Title>
      <Contents>
        {img ? (
          <ImageWrap device={data?.device}>
            <Image src={img} />
          </ImageWrap>
        ) : null}
        <TextWrap dangerouslySetInnerHTML={{ __html: data?.desc ?? "" }} />
      </Contents>
    </Container>
  );
}

const Container = styled.article`
  margin-bottom: 50px;
  background-color: #eff0f4ad;
  padding: 20px;
  border-radius: 10px;
`;
const Title = styled.h2`
  color: #243662;
  font-size: 22px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #24366220;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LinkButton = styled.button`
  font-size: 14px;
  color: #fff;
  background-color: #35456e;
  padding: 0 14px;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline: none;
  text-indent: 1px;
  letter-spacing: 1px;
  cursor: pointer;

  &::before {
    content: "바로가기";
  }

  &:hover {
    background-color: #243662;
  }
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
`;
const ImageWrap = styled.div<{ device: "pc" | "mobile" }>`
  height: 400px;
  overflow: hidden;
  border: 1px solid #eee;

  &:hover > img {
    transform: scale(1.03);
  }
`;
const Image = styled.img`
  /* width: 100%; */
  height: 100%;
  transition: 0.3s;
  transform: scale(1);
`;
const TextWrap = styled.div`
  flex: 1;
  text-align: center;
  color: #777777;
  margin-left: 20px;
  line-height: 30px;
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: pre;
`;
