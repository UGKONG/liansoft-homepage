import Container from "../../common/Container";
import banner from "../../assets/images/banner/security.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 장비관리 시스템";
const title = "장비관리 시스템";
const subTitle = `-`;

export default function Feagle() {
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
