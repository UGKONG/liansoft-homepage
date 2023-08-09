import { useState } from "react";
import { BiLinkAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

type Props = {
  path: string;
};

export default function LinkContainer({ path }: Props) {
  const navigate = useNavigate();
  const [isLink, setIsLink] = useState<boolean>(true);

  const onClick = (): void => {
    if (!path) return setIsLink(false);
    navigate(path);
  };

  return (
    <Container>
      <LinkButton onClick={onClick}>
        <LinkIcon />
      </LinkButton>
      {!isLink && <NoneLinkText>지정된 링크가 없습니다.</NoneLinkText>}
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #00000080;
`;
const NoneLinkText = styled.p`
  color: #fff;
  font-size: 14px;
  margin-top: 20px;
`;
const LinkButton = styled.div`
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fca52e;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #f09b24;
  }
`;
const LinkIcon = styled(BiLinkAlt)`
  font-size: 24px;
  color: #fff;
`;
