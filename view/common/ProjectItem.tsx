import { useMemo } from "react";
import styled from "styled-components";

type Props = {
  data: Project;
  idx?: number;
};

export default function ProjectItem({ data, idx = 0 }: Props) {
  const title = useMemo<string>(() => data?.id + ". " + data?.name, []);

  const img = useMemo<null | string>(() => {
    if (!data?.img) return null;
    let get = require("../assets/images/project/" + data?.img);
    return get?.default;
  }, []);

  const onClick = (url: string): void => {
    if (url) window.open(url);
  };

  return (
    <Container>
      <Title>
        {title}
        <ButtonContainer>
          {data?.platform ? (
            data?.platform?.map((item, i) => (
              <LinkButton
                key={i}
                text={item?.url ? item?.name : item?.name + " (준비중)"}
                onClick={() => onClick(item?.url)}
              />
            ))
          ) : data?.url ? (
            <LinkButton onClick={() => onClick(data?.url as string)} />
          ) : null}
        </ButtonContainer>
      </Title>
      <Contents>
        {img ? (
          <ImageWrap device={data?.device}>
            <Image src={img} device={data?.device} />
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
const ButtonContainer = styled.div``;
const LinkButton = styled.button<{ text?: string }>`
  font-size: 14px;
  color: #fff;
  background-color: #35456e;
  padding: 0 14px;
  height: 40px;
  border-radius: 5px;
  border: none;
  outline: none;
  text-indent: 2px;
  letter-spacing: 2px;
  margin-left: 10px;
  cursor: pointer;

  &::before {
    content: "${(x) => x?.text ?? "Link"}";
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
  min-width: ${(x) => (x?.device === "pc" ? "50%" : "20%")};
  max-width: 60%;
  overflow: hidden;
  border: 1px solid #eee;

  &:hover > img {
    transform: scale(1.03);
  }
`;
const Image = styled.img<{ device: "pc" | "mobile" }>`
  ${(x) => {
    let pc = "width: 100%;";
    let mo = "height: 100%; max-height: 600px;";
    return x?.device === "pc" ? pc : mo;
  }}
  object-fit: contain;
  transition: 0.3s;
  transform: scale(1);
  display: block;
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
