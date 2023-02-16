import Container from "../../common/Container";
import Contents from "./Contents";
import MainBanner from "../../common/MainBanner";
import banner from "../../assets/images/banner/history.jpg";

const name = "리안소프트: 회사연혁";
const title = "회사연혁";
const subTitle =
  "리안소프트글로벌은 글로벌 디벨로퍼로의 미래 모습을 구현하기 위해 노력하고 있습니다.";

export default function Info() {
  return (
    <>
      <title>{name}</title>
      <Container>
        <MainBanner title={title} subTitle={subTitle} bg={banner} />
        <Contents />
      </Container>
    </>
  );
}
