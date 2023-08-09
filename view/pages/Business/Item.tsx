import styled from "styled-components";
import { AiFillCaretRight } from "react-icons/ai";

type Props = {
  data: BusinessRange;
  idx?: number;
};

export default function Item({ data, idx = 0 }: Props) {
  return (
    <Container>
      <Title>
        <RightIcon /> {data?.name}
      </Title>
      <ContentsTitle>{data?.title}</ContentsTitle>
      <Contents>
        <TextWrap>
          {data?.desc?.map((item, i) => (
            <TextRow key={i}>
              <TextTitle>{item?.title}</TextTitle>
              <TextDesc>{item?.desc}</TextDesc>
            </TextRow>
          ))}
        </TextWrap>
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
const RightIcon = styled(AiFillCaretRight)`
  margin-right: 4px;
  transform: translateY(1px);
`;
const Title = styled.h2`
  color: #243662;
  font-size: 22px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #24366220;
  display: flex;
  align-items: center;
`;
const ContentsTitle = styled.h3`
  color: #243662;
  font-size: 16px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: pre-wrap;
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
const ImageWrap = styled.div`
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
  margin-right: 20px;
  line-height: 30px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
`;
const TextRow = styled.div`
  margin-bottom: 10px;
`;
const TextTitle = styled.p`
  text-align: left;
  color: #555;
  font-weight: 500;
`;
const TextDesc = styled.p`
  text-align: left;
  margin-left: 10px;
  white-space: pre-wrap;
`;
