import Container from "../../common/Container";
import MainBanner from "../../common/MainBanner";
import banner from "../../assets/images/banner/business.jpg";
import Contents from "./Contents";

const name = "리안소프트: 사업영역";
const title = "사업영역";
const subTitle = `㈜리안소프트글로벌은 건강과 안전을 책임집니다.
센서와 장비, IOT 기술을 아우르는 통합 기술을 바탕으로 하여모든
사람의 건강을 책임지는 헬스케어 솔루션 / 시스템을 만들어 갑니다.
`;

export default function Business() {
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
