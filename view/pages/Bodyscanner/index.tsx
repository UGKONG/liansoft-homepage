import Container from "../../common/Container";
import banner from "../../assets/images/banner/bodyscanner.jpg";
import MainBanner from "../../common/MainBanner";
import Contents from "./Contents";

const name = "리안소프트: 바디스캐너";
const title = "바디스캐너";
const subTitle = `척추측만증이 있는 분들은 외형뿐만아니라
움직임에도 제한이 있거나 비대칭인 경우를 볼 수 있습니다.`;

export default function Bodyscanner() {
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
