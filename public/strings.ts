// 메뉴 리스트
export const menuList: MenuList[] = [
  {
    name: "회사소개",
    path: "/info",
    sub: [
      { name: "회사연혁", path: "/info" },
      { name: "사업영역", path: "/business" },
      { name: "조직구성", path: "/part" },
      { name: "찾아오시는 길", path: "/way" },
    ],
  },
  {
    name: "헬스케어 솔루션",
    path: "/drcare",
    sub: [
      { name: "닥터케어", path: "/drcare" },
      { name: "밸런스플레이", path: "/balanceplay" },
      { name: "바디스캐너", path: "/bodyscanner" },
    ],
  },
  {
    name: "보안 솔루션",
    path: "/security",
    sub: [],
  },
];

// 솔루션 리스트
export const solutionList: Solution[] = [
  { img: "img1_thum.jpg", path: "", name: "회원관리 프로그램" },
  { img: "img2_thum.jpg", path: "", name: "모션인식 시스템" },
  { img: "img3_thum.jpg", path: "", name: "개인 맞춤형 운동 서비스" },
  { img: "img4_thum.jpg", path: "", name: "통합관제 시스템" },
  { img: "img5_thum.jpg", path: "", name: "차량 유도관제 시스템" },
  { img: "img6_thum.jpg", path: "", name: "무인결제 시스템" },
  { img: "img7_thum.jpg", path: "", name: "스마트 시티 플랫폼" },
];

// 회사연혁 리스트
export const companyStartYear = 2015;
export const companyHistory: CompanyHistory[] = [
  { date: "2015.10", content: "해비치 LIFEFIT 건강관리 앱 개발", img: "" },
  { date: "2015.01", content: "(주)리안소프트 창업(2015.01.21) ", img: "" },
  {
    date: "2015.12",
    content: "블루투스를 이용한 운동기구 자동 운동량\n계측시스템 개발",
    img: "",
  },
  { date: "2016.08", content: "건강관리 앱 개발", img: "" },
  {
    date: "2016.12",
    content: "인천공항 무인 수하물 탁송시스템용 결제\n모듈 개발",
    img: "",
  },
  { date: "2017.03", content: "블루투스형 진동센서 모듈 개발", img: "" },
  {
    date: "2017.04",
    content: "지상 감시용 레이더 운용 프로그램 개발",
    img: "",
  },
  {
    date: "2017.04",
    content: "엔진 다이나모 콘트롤러 및 모니터링\n시스템 개발(블루플래닛) ",
    img: "",
  },
  {
    date: "2017.05",
    content: "중요시설경계시스템 1차사업 레이더\n설치 / 운용 수주",
    img: "",
  },
  {
    date: "2017.06",
    content: "엔진 다이나모 모니터링 시스템 개발\n(기계연구원) ",
    img: "",
  },
  {
    date: "2017.07",
    content: "엔진 다이나모 모니터링 시스템 개발\n(자동차 부품연구원) ",
    img: "",
  },
  { date: "2017.08", content: "사전감지레이더 관제 시스템 개발", img: "" },
  {
    date: "2017.10",
    content: "엔진 다이나모 콘트롤 시스템 개발\n(STX엔진) ",
    img: "",
  },
  {
    date: "2017.10",
    content: "방위사업청 사전감지레이더 성능평가 통과",
    img: "",
  },
  {
    date: "2017.12",
    content: "자동차 ECU연동 테스트 시스템 개발\n(현대Kefico) ",
    img: "",
  },
  {
    date: "2018.02",
    content: "가공데이터 DB 시스템 개발\n(생산기술연구원) ",
    img: "",
  },
  {
    date: "2018.03",
    content: "통합관제시스템 개발 사업 수주\n(코콤) ",
    img: "",
  },
  {
    date: "2018.03",
    content: "4D게임센터 원격 모니터링 시스템 개발\n(모션디바이스) ",
    img: "",
  },
  {
    date: "2018.04",
    content: "엔진 다이나모 콘트롤 시스템 개발\n(연세대학교) ",
    img: "",
  },
  { date: "2019.02", content: "진동센서용 알고리즘 개발/상용화", img: "" },
  {
    date: "2019.06",
    content: "무인결제 키오스크 개발 및 현장운용\n(모션디바이스 VR KONG매장) ",
    img: "",
  },
  {
    date: "2019.12",
    content: "범용 통합관제 SW 개발 및 김해공항\n설치 및 운용",
    img: "",
  },
  { date: "2020.02", content: "BodyScanner 프로그램 1차 버전 완성", img: "" },
  {
    date: "2020.02",
    content:
      "옹이진이 스포츠 진흥원과 MOU 체결\n아동청소년용 건강관리 플랫폼\n공동개발 및 사업 합의",
    img: "",
  },
  { date: "2020.08", content: "전상욱 입사", img: "" },
  {
    date: "2021.04",
    content: "BodyScanner & 회원관리 프로그램 론칭",
    img: "dashboard.png",
  },
];
