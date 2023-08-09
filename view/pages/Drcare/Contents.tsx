import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  centerList,
  drcareProjectList,
  drcareSnsList,
} from "../../../public/strings";
import Center from "../../common/Center";
import ProjectItem from "../../common/ProjectItem";
import SnsContainer from "../../common/SnsContainer";

export default function Contents() {
  const [list, setList] = useState<Center[]>([]);

  const sortList = useMemo<Center[]>(() => {
    return list?.sort((a, b) => {
      return a?.CENTER_NM < b?.CENTER_NM ? -1 : 1;
    });
  }, [list]);

  const getCenter = (): void => {
    let url = "//drcareunion.com/admin/flow_controller.php?task=getCenterList";
    axios
      .get(url)
      .then(({ data }) => {
        setList(JSON.parse(data));
      })
      .catch(() => setList([...centerList]));
  };

  useEffect(getCenter, []);
  return (
    <Container>
      {drcareProjectList?.map((item, i) => (
        <ProjectItem key={item?.id} idx={i} data={item} />
      ))}

      <SnsContainer
        title="가맹문의"
        companyInfo={`상호명 : (주)닥터케어컴퍼니
대표자 : 조홍래
전화 : 010-5674-8858
사업자등록번호 : 761-88-01475
주소 : 충남 천안시 서북구 불당14로 48 충남창조경제혁신센터 창업마루나비`}
        list={drcareSnsList}
      />

      <Center
        type="list"
        title={`가맹점 (${list?.length}개)`}
        list={sortList}
        fieldName="CENTER_NM"
      />
    </Container>
  );
}

const Container = styled.div`
  width: 1200px;
  z-index: 2;
  position: relative;
  background-color: #fff;
  margin: 0 auto 50px;
`;
