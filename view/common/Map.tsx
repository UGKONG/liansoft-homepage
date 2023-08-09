import { useEffect, useRef } from "react";
import styled from "styled-components";

const { kakao: Kakao } = window as any;
const Maps = Kakao?.maps;
const x = 37.47462463923431;
const y = 126.88976927385269;
const desc = "809호 리안소프트";

export default function KakaoMap() {
  const ref = useRef<HTMLDivElement>(null);

  const mapClick = (e: any): void => {
    console.log(e);
    let url = `https://map.kakao.com/link/to/가산테라타워,${x},${y}`;
    window.open(url);
  };

  const init = () => {
    const options = { center: new Maps.LatLng(x, y), level: 3 };

    // 지도 객체 생성
    const map = new Maps.Map(ref.current, options);

    // 지도 / 스카이뷰
    const mapControl = new Maps.MapTypeControl();
    map.addControl(mapControl, Maps.ControlPosition.TOPRIGHT);

    // 확대 축소 컨트롤러
    const zoomControl = new Maps.ZoomControl();
    map.addControl(zoomControl, Maps.ControlPosition.RIGHT);

    // 마커 생성
    const markerPosition = new Maps.LatLng(x, y);
    const marker = new Maps.Marker({ position: markerPosition });

    // 지도 다시 셋팅
    marker.setMap(map);

    // 지도 클릭 이벤트 등록
    Maps.event.addListener(map, "click", mapClick);

    var iwContent =
        '<div style="padding:5px 5px 10px;font-size:13px;">' + desc + "</div>", // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new Maps.LatLng(x + 0.00035, y), //인포윈도우 표시 위치입니다
      iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

    // 인포윈도우를 생성하고 지도에 표시합니다
    var infowindow = new Maps.InfoWindow({
      map: map, // 인포윈도우가 표시될 지도
      position: iwPosition,
      content: iwContent,
      removable: iwRemoveable,
    });

    return () => {
      Maps.event.removeListener(map, "click", mapClick);
    };
  };

  useEffect(init, []);

  return <Container ref={ref}></Container>;
}

const Container = styled.div.attrs(() => ({
  id: "map",
}))`
  min-width: 70%;
  height: 600px;
`;
