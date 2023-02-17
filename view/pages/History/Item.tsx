import { useEffect, useMemo } from "react";
import { yearText1, yearText2 } from "../../../public/strings";
import Line from "./Line";

type Props = {
  idx: number;
  data: CompanyHistory;
  prevYear: number;
};
type Dir = "left" | "right";

export default function Item({ idx, data, prevYear }: Props) {
  const year = useMemo<number>(() => {
    return parseInt(data?.date);
  }, []);

  const isNewYear = useMemo<boolean>(() => {
    return prevYear !== year;
  }, []);

  const dir = useMemo<Dir>(() => {
    return idx % 2 ? "right" : "left";
  }, []);

  const img = useMemo<string>(() => {
    if (!data?.img) return "";
    const get = require("../../assets/images/history/" + data?.img);
    return get.default;
  }, []);

  const yearText = useMemo<string>(() => {
    return yearText1[year % 10] + yearText2[year % 12] + "년";
  }, [year]);

  return (
    <>
      {dir === "left" ? (
        <Line.Left data={{ ...data, img }} />
      ) : (
        <Line.Right data={{ ...data, img }} />
      )}
      {isNewYear && <Line.Center year={year} title={yearText} />}
    </>
  );
}
