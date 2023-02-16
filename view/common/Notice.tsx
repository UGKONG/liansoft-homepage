import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Store } from "../store/index.type";
import { CgMathPlus } from "react-icons/cg";
import { useEffect } from "react";

export default function Notice() {
  const dispatch = useDispatch();
  const isNotice = useSelector((x: Store) => x?.isNotice);

  const close = (): void => {
    dispatch({ type: "isNotice", payload: false });
    window.sessionStorage.setItem("isNotice", "false");
  };

  const init = (): void => {
    const session = window.sessionStorage.getItem("isNotice");
    dispatch({ type: "isNotice", payload: session ? false : true });
  };

  useEffect(init, []);

  return isNotice ? (
    <>
      <Background onClick={close} />
      <Container>
        <Wrap>
          <CloseButton onClick={close}>
            <XIcon />
          </CloseButton>
          <Text>
            해당사이트는 크롬, 엣지, 사파리 브라우저에 최적화 되어있습니다.
            <br />
            최적화된 브라우저를 이용하시면 보다 편리한 이용이 가능합니다.
          </Text>
        </Wrap>
      </Container>
    </>
  ) : null;
}

const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 99999999999;
`;
const Container = styled.section`
  position: fixed;
  width: 300px;
  z-index: 99999999999;
  top: 110px;
  left: 30px;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 3px solid #1b2e5a;
  border-radius: 10px;
  position: relative;
`;
const CloseButton = styled.div`
  width: 25px;
  height: 25px;
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #e85858;
  border: 1px solid #fff;
  box-shadow: -2px 2px #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: #f00;
  }
`;
const XIcon = styled(CgMathPlus)`
  color: #fff;
  transform: rotate(45deg) translate(-1px, 0px);
  font-size: 18px;
`;
const Text = styled.p`
  padding: 10px;
  font-size: 13px;
  color: #555555;
`;
