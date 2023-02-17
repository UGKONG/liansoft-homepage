import Container from "../../common/Container";
import MainBanner from "../../common/MainBanner";
import banner from "../../assets/images/banner/contact.jpg";
import Contents from "./Contents";

const name = "리안소프트: 문의";
const title = "문 의";
const subTitle = "";

export default function Contact() {
  return (
    <>
      <title>{name}</title>
      <Container>
        <MainBanner title={title} subTitle={subTitle} bg={banner} darkMode />
        <Contents />
      </Container>
    </>
  );
}
