import styled from "styled-components";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return <Container img={logo} onClick={() => navigate("/")} />;
}

const Container = styled.h1<{ img: string }>`
  width: 250px;
  height: 100%;
  padding: 6px 6px 6px 0;
  background-image: url(${(x) => x?.img});
  background-repeat: no-repeat;
  background-size: 90% auto;
  background-position: center;
  cursor: pointer;
`;
