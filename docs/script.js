const purposeItems = [
  {
    title: "AI 기반 트레이딩 실험실",
    subtitle: "프로덕트 비전",
    body:
      "금융 데이터를 활용해 자동 매매 전략을 실험하고 검증하는 플랫폼을 구축합니다. 비즈니스 인사이트를 빠르게 반복하고, 팀 전체가 동일한 전략 로드맵을 공유하는 것이 목표입니다.",
    tags: ["Strategy Sandbox", "Backtesting", "Collaboration"],
  },
  {
    title: "투명한 의사소통",
    subtitle: "협업 원칙",
    body:
      "투자 전략을 쉽게 설명할 수 있는 문서화와 시각화를 우선합니다. 비개발자도 핵심 지표를 이해하고, 전략 변경 사항을 추적할 수 있도록 정보를 구조화합니다.",
    tags: ["Documentation", "Stakeholder Friendly"],
  },
  {
    title: "안정적인 운영 기반",
    subtitle: "인프라 방향성",
    body:
      "데이터 수집, 모델 학습, 포트폴리오 모니터링을 위한 자동화 파이프라인을 단계적으로 구축해 운영 리스크를 줄입니다.",
    tags: ["Automation", "Scalability"],
  },
];

const architectureFlow = [
  {
    title: "데이터 수집 레이어",
    content:
      "외부 시세 API와 사내 데이터웨어하우스에서 시계열 데이터를 확보합니다. 초기 단계에서는 샘플 데이터를 기반으로 전략을 실험합니다.",
  },
  {
    title: "전략 연구 & 백테스트",
    content:
      "백테스트 엔진을 통해 전략 가설을 검증합니다. 성능 지표, 리스크 지표를 자동으로 시각화하여 팀 리뷰를 용이하게 합니다.",
  },
  {
    title: "실거래 시뮬레이션",
    content:
      "소규모 자본으로 모의 투자 환경을 구성해 전략을 검증하고, 실거래 전 리스크를 최소화합니다.",
  },
  {
    title: "모니터링 & 리포팅",
    content:
      "성과 알림, 위험 한도 경고, 일간 리포트를 자동화하여 의사결정을 지원합니다.",
  },
];

const codeCards = [
  {
    title: "README.md",
    subtitle: "리포지토리 첫 인사",
    body:
      "현재 저장소에 유일하게 포함된 파일로, 프로젝트 이름과 기본 정보를 제공하는 간단한 진입점입니다. 이후 모든 팀원이 공통된 출발점을 확인할 수 있도록 지속적으로 업데이트합니다.",
    tags: ["문서", "온보딩"],
    status: "current",
  },
  {
    title: "/docs/overview.html",
    subtitle: "시각화 온보딩 허브",
    body:
      "비개발자를 위한 설명 페이지입니다. 프로젝트 목적, 구조, 예정된 모듈을 인터랙티브한 카드로 정리하여 한 화면에서 파악할 수 있습니다.",
    tags: ["온보딩", "UX"],
    status: "current",
  },
  {
    title: "/docs/styles.css",
    subtitle: "브랜드 톤 앤 매너",
    body:
      "다크 테마와 하이라이트 컬러를 활용해 금융 도메인의 신뢰감을 주도록 디자인했습니다. 모바일에서도 보기 쉽도록 반응형 레이아웃을 적용했습니다.",
    tags: ["디자인", "반응형"],
    status: "current",
  },
  {
    title: "/docs/script.js",
    subtitle: "데이터 기반 UI",
    body:
      "각 섹션에 표시할 콘텐츠를 자바스크립트 객체로 정의하고, DOM에 동적으로 추가합니다. 실제 코드가 확장되면 자동으로 모듈 설명을 업데이트하도록 확장할 수 있습니다.",
    tags: ["JavaScript", "데이터 주도"],
    status: "current",
  },
  {
    title: "src/data-pipeline/",
    subtitle: "데이터 파이프라인 (예정)",
    body:
      "시세·뉴스·온체인 데이터 수집기를 담당할 예정입니다. 추후 Airflow 또는 Prefect 기반 스케줄러와 연동해 안정적인 데이터 공급을 보장합니다.",
    tags: ["데이터", "수집"],
    status: "planned",
  },
  {
    title: "src/strategy-engine/",
    subtitle: "전략 엔진 (예정)",
    body:
      "백테스트, 파라미터 최적화, 리스크 관리 로직을 포함할 모듈입니다. 전략별 성능 리포트를 API 형태로 제공해 대시보드와 연계할 계획입니다.",
    tags: ["전략", "리스크 관리"],
    status: "planned",
  },
  {
    title: "apps/dashboard/",
    subtitle: "운영 대시보드 (예정)",
    body:
      "실시간 포트폴리오 현황과 경보를 제공하는 내부용 웹 애플리케이션입니다. 시각화 구성 요소와 협업 툴 연동을 포함합니다.",
    tags: ["대시보드", "모니터링"],
    status: "planned",
  },
];

const checklist = [
  {
    title: "프로젝트 비전 이해",
    desc: "overview.html의 첫 섹션을 읽고, AI Trader가 해결하고자 하는 문제와 기대 효과를 정리해 봅니다.",
  },
  {
    title: "예정된 모듈 파악",
    desc: "각 planned 카드의 역할을 살펴보고, 본인이 담당할 영역이 어디에 속하는지 메모합니다.",
  },
  {
    title: "팀 커뮤니케이션 채널 가입",
    desc: "Slack #ai-trader, Notion 프로젝트 페이지에 가입해 업데이트 알림을 받을 준비를 합니다.",
  },
  {
    title: "질문 리스트 작성",
    desc: "이해가 되지 않는 용어나 프로세스를 리스트업하고, 온보딩 미팅에서 공유합니다.",
  },
];

function createCard({ title, subtitle, body, tags, status }) {
  const card = document.createElement("article");
  card.className = `card ${status === "planned" ? "card--planned" : ""}`;

  const heading = document.createElement("h3");
  heading.className = "card__title";
  heading.textContent = title;

  const sub = document.createElement("p");
  sub.className = "card__subtitle";
  sub.textContent = subtitle;

  const content = document.createElement("p");
  content.className = "card__body";
  content.textContent = body;

  const tagList = document.createElement("div");
  tagList.className = "card__tags";
  tags.forEach((tag) => {
    const badge = document.createElement("span");
    badge.className = "tag";
    badge.textContent = tag;
    tagList.appendChild(badge);
  });

  card.append(heading, sub, content, tagList);
  return card;
}

function renderPurpose() {
  const container = document.getElementById("purpose-grid");
  purposeItems.forEach((item) => {
    container.appendChild(createCard({ ...item, status: "current" }));
  });
}

function renderArchitecture() {
  const container = document.getElementById("architecture-flow");
  architectureFlow.forEach((step, index) => {
    const wrapper = document.createElement("div");
    wrapper.className = "flow__step";
    wrapper.dataset.order = index + 1;

    const title = document.createElement("h3");
    title.className = "flow__title";
    title.textContent = step.title;

    const content = document.createElement("p");
    content.className = "flow__content";
    content.textContent = step.content;

    wrapper.append(title, content);
    container.appendChild(wrapper);
  });
}

function renderCodeCards() {
  const container = document.getElementById("code-grid");
  codeCards.forEach((card) => container.appendChild(createCard(card)));
}

function renderChecklist() {
  const list = document.getElementById("checklist");
  checklist.forEach((item) => {
    const entry = document.createElement("li");
    entry.className = "checklist__item";

    const title = document.createElement("h3");
    title.className = "checklist__title";
    title.textContent = item.title;

    const desc = document.createElement("p");
    desc.className = "checklist__desc";
    desc.textContent = item.desc;

    entry.append(title, desc);
    list.appendChild(entry);
  });
}

function updateTimestamp() {
  const target = document.getElementById("last-updated");
  const now = new Date();
  target.textContent = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(
    now.getDate()
  ).padStart(2, "0")}`;
}

renderPurpose();
renderArchitecture();
renderCodeCards();
renderChecklist();
updateTimestamp();
