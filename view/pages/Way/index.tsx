import Container from "../../common/Container";
import banner from "../../assets/images/banner/way.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 찾아오시는 길";
const title = "찾아오시는 길";
const subTitle = "";

export default function Way() {
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
