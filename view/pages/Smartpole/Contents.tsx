import styled from "styled-components";
import { smartpoleProjectList } from "../../../public/strings";
import ProjectItem from "../../common/ProjectItem";

export default function Contents() {
  return (
    <Container>
      {smartpoleProjectList?.map((item, i) => (
        <ProjectItem key={item?.id} idx={i} data={item} />
      ))}
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
