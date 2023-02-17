import styled from "styled-components";
import { balanceplayProjectList } from "../../../public/strings";
import ProjectItem from "../../common/ProjectItem";
import SnsContainer from "../../common/SnsContainer";

export default function Contents() {
  return (
    <Container>
      {balanceplayProjectList?.map((item, i) => (
        <ProjectItem key={item?.id} idx={i} data={item} />
      ))}

      <SnsContainer
        title="가맹문의"
        companyInfo={`상호명 : 밸런스플레이
대표자 : 김승호
전화 : 031-335-3244
사업자등록번호: 830-87-01885
주소 : 경기도 용인시 처인구 역북동 골든프라자 2 4층 404호`}
        list={[]}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 1200px;
  z-index: 2;
  position: relative;
  background-color: #fff;
  margin: 0 auto;
`;
