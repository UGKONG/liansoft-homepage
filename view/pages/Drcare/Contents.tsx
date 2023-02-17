import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { centerList, drcareProjectList } from "../../../public/strings";
import Center from "../../common/Center";
import ProjectItem from "../../common/ProjectItem";

export default function Contents() {
  const [list, setList] = useState<Center[]>([]);

  const count = useMemo<number>(() => {
    if (!list || !list?.length) return 100;
    return list?.length;
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

      <Center type="count" title="가맹점" count={count} />
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
