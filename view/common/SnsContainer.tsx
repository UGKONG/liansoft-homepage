import styled from "styled-components";
import { RiHome7Fill } from "react-icons/ri";
import { useMemo } from "react";

type Props = {
  title: string;
  companyInfo: string;
  list: Sns[];
};

export default function SnsContainer({ title, companyInfo, list }: Props) {
  const onClick = (url: string) => {
    if (url) window.open(url);
  };

  const snsList = useMemo<Sns[]>(() => {
    let result = [...list]?.map((item) => {
      if (!item?.img) return { ...item, img: "" };
      let img = require("../assets/images/sns/" + item?.img)?.default;
      return { ...item, img };
    });
    return result;
  }, []);

  return (
    <Container>
      <Title>
        <Icon />
        {title}
      </Title>
      <CompanyInfo dangerouslySetInnerHTML={{ __html: companyInfo }} />
      <List>
        {snsList
          ? snsList?.map((item, i) => (
              <Button
                key={i}
                img={item?.img}
                onClick={() => onClick(item?.url)}
              />
            ))
          : null}
      </List>
    </Container>
  );
}

const Container = styled.section`
  margin-bottom: 50px;
`;
const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: #243662;
  margin-bottom: 14px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
`;
const Icon = styled(RiHome7Fill)`
  margin-right: 4px;
  font-size: 16px;
  transform: translateY(1px);
`;
const CompanyInfo = styled.div`
  margin-bottom: 15px;
  white-space: pre-wrap;
  font-size: 14px;
  color: #555555;
`;
const List = styled.ul`
  line-height: 30px;
  overflow: auto;
  font-size: 14px;
  color: #171d69;
  display: flex;
  align-items: center;
`;
const Button = styled.div<{ img: string }>`
  width: 50px;
  min-width: 50px;
  max-width: 50px;
  height: 50px;
  min-height: 50px;
  max-height: 50px;
  border-radius: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(x) => x?.img});
  margin-right: 10px;
  opacity: 0.9;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
