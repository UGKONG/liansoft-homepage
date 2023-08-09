import Container from "../../common/Container";
import MainBanner from "./MainBanner";
import ScrollBtn from "./ScrollBtn";
import Solution from "./Solution";
import SubBanner from "./SubBanner";

const name = "리안소프트: 사람을 위한 소프트웨어";

export default function Home() {
  return (
    <>
      <title>{name}</title>
      <Container type="home">
        <MainBanner />
        <ScrollBtn />
        <Solution />
        <SubBanner />
      </Container>
    </>
  );
}
