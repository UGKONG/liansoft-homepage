import styled from "styled-components";
import {
  bodyscannerProjectList,
  deviceCenterList,
} from "../../../public/strings";
import ProjectItem from "../../common/ProjectItem";
import Center from "../../common/Center";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Contents() {
  const [list, setList] = useState<DeviceCenter[]>([]);

  const getCenter = (): void => {
    let url = "//drcareunion.com/admin/flow_controller.php?task=getDevice";
    axios
      .get(url)
      .then(({ data }) => {
        setList(data);
      })
      .catch(() => setList([...deviceCenterList]));
  };

  useEffect(getCenter, []);

  return (
    <Container>
      {bodyscannerProjectList?.map((item, i) => (
        <ProjectItem key={item?.id} idx={i} data={item} />
      ))}

      <Center type="list" title="가맹점" list={list} fieldName="CENTER_NM" />
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
