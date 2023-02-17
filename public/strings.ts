// 메뉴 리스트
export const menuList: MenuList[] = [
  {
    name: "회사소개",
    path: "/info",
    sub: [
      { name: "회사소개", path: "/info" },
      { name: "사업영역", path: "/business" },
      { name: "회사연혁", path: "/history" },
      { name: "찾아오시는 길", path: "/way" },
      { name: "문의", path: "/contact" },
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

// 사업영역
export const businessRangeList: BusinessRange[] = [
  {
    id: 1,
    name: "헬스케어 솔루션",
    title: `모든 사람의  건강을 위한 One-Stop 건강관리 시스템을 만들어갑니다.
영유아기부터 노년기까지 평생건강관리를 책임지겠습니다.
`,
    desc: [
      {
        title: "영유아기/청소년용 솔루션 : 밸런스멤버쉽",
        desc: `- 밸런스플레이와 함께 습관/행동 분석 및 건강 분석을 통하여 올바른 습관을 만들어갑니다.`,
      },
      {
        title: "성인용 솔루션 : 닥터케어유니온",
        desc: `- 닥터케어컴퍼니와 함께 피트니스센터/ 필라테스 센터 등을 통해 건강관리를 할 수 있는 센터형 솔루션입니다.`,
      },
      {
        title: "장년/노년기용 솔루션",
        desc: `- 홈 피트니스, 치매예방 등의 솔루션을 탑재한 개인형 솔루션입니다. 2024년 출시 예정입니다.`,
      },
      {
        title: "체형측정 시스템 : 바디스캐너 ",
        desc: `- ROM, 가동범위 측정, 운동능력 측정 등을 통하여 현재 자신의 신체 상태를  파악할 수 있도록 도와줍니다.
- 향후 운동 처방 및 운동에 대한 실시간 측정을 통하여 개인별 운동솔루션으로 확장할 예정입니다.`,
      },
    ],
  },
  {
    id: 2,
    name: "보안 솔루션",
    title: `통합관제 시스템을 기반으로 방범 / 주차 / 출입 전반에 거쳐 모든 물리적 보안을 책임지겠습니다.`,
    desc: [
      {
        title: "통합관제 시스템",
        desc: `- GIS 기반의 관제 시스템
- CCTV관제 시스템
- 센서데이터 통합 및 각종 장치제어
- 데이터 및 상황 모니터링 대시보드`,
      },
      {
        title: "차량 유도관제 시스템",
        desc: `- 도면 기반의 유도관제 시스템
- CCTV관제 시스템
- 루프코일,초음파,CCTV를 통한 차량 출입감지
- 만공차등/전광판/경광등 제어 차량위치 안내`,
      },
    ],
  },
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
  {
    date: "2021.04",
    content: "LSBodyScanner & 닥터케어유니온 (관리자용) 론칭",
    img: "drcareadmin.png",
  },
  {
    date: "2021.09",
    content: "닥터케어유니온 (회원용) 론칭",
    img: "drcaremember.png",
  },
  {
    date: "2022.03",
    content: "밸런스멤버쉽 (관리자용 웹) 개발",
    img: "balanceplayadmin.png",
  },
  {
    date: "2022.06",
    content: "밸런스멤버쉽 (회원용 웹) 개발",
    img: "balanceplaymember.png",
  },
  {
    date: "2022.10",
    content: "닥터케어유니온 (강사용 웹) 개발",
    img: "",
  },
  {
    date: "2023.02",
    content: "플레이톡 (회원용 앱) 개발",
    img: "balanceplaytalk.jpeg",
  },
];

// 닥터케어 프로젝트
export const drcareProjectList: Project[] = [
  {
    id: 1,
    name: "닥터케어유니온 (관리자용) - PC용 웹",
    img: "drcareadmin.png",
    desc: `
회원정보 관리 및 통계 대시보드

LSBodyScanner 신체 측정정보 제공

실시간 수업정보 관리

결제 현황 및 통계 제공
`,
    url: "https://drcareunion.com/admin",
    device: "pc",
  },
  {
    id: 2,
    name: "닥터케어유니온 (강사용) - Mobile용 웹",
    img: "drcaretrainer.png",
    desc: `
본인(강사)의 개인정보 관리 및 회원 정보 확인

실시간 수업정보 관리 및 예약/출결 서비스
`,
    url: "https://drcareunion.com/trainer",
    device: "mobile",
  },
  {
    id: 3,
    name: "닥터케어유니온 (회원용) - Android/IOS용 앱",
    img: "drcaremember.png",
    desc: `
본인의 LSBodyScanner 신체 측정정보 제공

본인의 개인정보 관리

실시간 수업정보 확인 및 예약 서비스
`,
    url: "https://drcareunion.com",
    device: "mobile",
  },
];

// 밸런스플레이 프로젝트
export const balanceplayProjectList: Project[] = [
  {
    id: 1,
    name: "밸런스멤버쉽 (관리자용) - PC/Tab용 웹",
    img: "balanceplayadmin.png",
    desc: `
회원정보 관리 및 통계 대시보드

회원과의 대화 및 기록 관리

실시간 수업정보 관리

결제 현황 및 통계 제공
`,
    url: "https://balanceplay-m.com/admin",
    device: "pc",
  },
  {
    id: 2,
    name: "플레이톡 (회원용) - Android/IOS용 앱",
    img: "balanceplaytalk.jpeg",
    desc: `
선생님과의 대화를 위한 실시간 푸쉬 알림 서비스

스케줄 정보 변경 및 출/결 푸쉬 알림 서비스

결제 예정 및 결제 완료 푸쉬 알림 서비스
`,
    device: "mobile",
  },
  {
    id: 3,
    name: "밸런스멤버쉽 (회원용) - Mobile용 웹",
    img: "balanceplaymember.png",
    desc: `
본인의 개인정보 관리

실시간 수업정보 확인 및 예약 서비스
`,
    url: "https://balanceplay-m.com",
    device: "mobile",
  },
];

// 바디스캐너 프로젝트
export const bodyscannerProjectList: Project[] = [
  {
    id: 1,
    name: "바디스캐너",
    img: "bodyscannermember.png",
    desc: `
신체 측정을 통한 관전의 기울기정도 확인

ROM 측정을 통한 가동 범위 확인

주기적으로 측정을 통한 과거 데이터 비교 분석
`,
    device: "pc",
  },
];

// 보안솔루션 프로젝트
export const securityProjectList: Project[] = [
  {
    id: 1,
    name: "통합관제 시스템",
    img: "security1.jpg",
    desc: `
    GIS 기반의 관제 시스템

    CCTV관제 시스템

    센서데이터 통합 및 각종 장치제어

    데이터 및 상황 모니터링 대시보드
    `,
    device: "pc",
  },
  {
    id: 2,
    name: "차량 유도관제 시스템",
    img: "security2.jpg",
    desc: `
    도면 기반의 유도관제 시스템

    CCTV관제 시스템

    루프코일/초음파/CCTV를 통한 차량 출입감지

    만공차등/전광판/경광등 제어 차량위치 안내
    `,
    device: "pc",
  },
  {
    id: 3,
    name: "무인결제 시스템",
    img: "security3.jpg",
    desc: `
    무인결제 키오스크

    현금/카드 결제 지원

    결제 현황/통계용 웹사이트 제공

    광고 및 제품변경 실시간 업데이트
    `,
    device: "pc",
  },
];
