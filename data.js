/* 송림3지구 홈페이지 데이터
 * 시작 기준: 2026-10-26 (월), W1.
 * 계획 일정은 '예상'이며 updates의 date는 실제 입력·공개한 날짜입니다.
 * status: planned | active | done | hold
 */
window.SONGRIM = {
  info: {
    name:"송림3지구 조합원 비상대책위원회",
    short:"송림3지구 비대위",
    slogan:"우리의 권리와 재산을 지키고,\n조합의 다음을 준비합니다.",
    mission:"투명한 의사결정과 책임 있는 집행을 통해 조합 운영을 정상화하고, 신임 집행부 구성과 신속한 등기 추진의 기반을 마련합니다.",
    founded:"2026-09-17",
    meetingDate:"2026-10-16",
    members:432,
    startDate:"2026-10-26",
    lastReviewed:"2026-10-19",
    updateLabel:"최종 계획 정리",
    meeting:{
      turnout:266,forVotes:252,againstVotes:2,
      summary:"2026.10.16 해임총회에서 조합장·이사 4명·감사 1명 해임안 가결"
    }
  },
  committee:[
    {role:"비대위원장",name:"이인섭",born:"1986년생",photo:2,description:"실행으로 신뢰를 증명하겠습니다.",education:["한서대학교 일본학과 졸업"],career:["현) 인천 해천이엔씨 재직","전) 남광정보통신 · 우광정보통신"],intro:"조합 정상화 및 차기 집행부 선출을 위한 실행과 현장 소통을 담당합니다."},
    {role:"감사",name:"최천호",born:"1962년생",photo:3,description:"데이터와 근거로 원칙을 검증하겠습니다.",education:["인하대학교 금속공학 학사","연세대학교 금속공학 석사"],career:["현) 한국화학융합시험연구원 자문역","전) 효성중공업 기획실"],intro:"기술·기획 경험을 기반으로 절차와 집행의 투명성을 살핍니다."},
    {role:"이사",name:"박형철",born:"1972년생",photo:4,description:"조합원의 눈높이에서 소통하겠습니다.",education:["대진대학교 영문교육학 석사"],career:["현) 더품공간의품격 대표이사","전) 영림주택 대표이사","전) 국군복지단 근무"],intro:"현장 운영 경험을 바탕으로 조합원 의견 수렴과 집행을 지원합니다."},
    {role:"금융·은행 자문",name:"송병일",born:"1982년생",photo:1,description:"금융기관 실무 경험을 바탕으로 필요한 검토를 지원하겠습니다.",education:["두원공과대학 산업디자인과"],career:["현) 희망새마을금고","전) 신선새마을금고"],intro:"금융기관 대출 및 금융업무 경력을 바탕으로 조합원 금융 현안을 검토합니다."}
  ],
  advisors:[
    {role:"재무·회계·운영 자문",name:"박종인",born:"1992년생",photo:0,description:"공정성과 정당성을 기준으로 재정 집행과 투명성을 자문합니다.",education:["미국 웨스턴일리노이대학교 학사·석사"],career:["현) 동아제약 전략기획실 재직","전) 미국 딜로이트 회계법인 · 회계감사","전) 삼정케이피엠지 회계법인 · 기업 인수합병·부동산·투자 자문"],intro:"회계·경영기획 경험을 바탕으로 재무·회계·운영 의사결정을 자문합니다."}
  ],
  committeeMore:{
    operations:16,
    total:20,
    note:"비대위 운영진 4명과 그 외 운영진 16명, 총 20명이 참여합니다. 박종인 재무·회계·운영 자문은 별도로 표시합니다."
  },
  scenarios:[
    {id:"s1",label:"시나리오 01",title:"잔류 이사 사퇴 시",condition:"임원 전원 공석 · 조합원 소집청구 경로",weeks:"6–8주",summary:"조합원 연명 87명 → 대의원회 소집권 확보 → 선관위 구성 → 보궐선임 → 직무대행 체계 → 조합장 선출",signature:"조합원 87명 이상",directors:5,auditors:1,
     steps:[
       {id:"s1-1",weekStart:1,weekEnd:1,title:"조합원 연명·소집요구",body:"조합원 87명 이상 연명 확보. 대의원회 소집요구와 조합장 선출총회 소집요구의 목적·안건을 각각 명시하여 제출.",owner:"소집청구인 대표",basis:["정관(안) 제20조④","정관(안) 제24조⑤"],status:"planned",updatedAt:""},
       {id:"s1-2",weekStart:1,weekEnd:3,title:"대의원회 소집권 확보",body:"소집요구 후 14일 미소집 여부 확인, 감사 부재 시 청구인 대표의 구청장 사전 승인 소집 경로 추진.",owner:"소집청구인 대표",basis:["정관(안) 제24조⑤·⑥"],status:"planned",updatedAt:""},
       {id:"s1-3",weekStart:3,weekEnd:4,title:"대의원회 공고 및 통지",body:"대의원회 안건 확정, 소집 통지 및 선관위원 후보자 3~5명 사전 확보.",owner:"소집청구인 대표",basis:["정관(안) 제24조⑦"],status:"planned",updatedAt:""},
       {id:"s1-4",weekStart:4,weekEnd:4,title:"선관위원 선임",body:"1차 대의원회에서 선관위원 3~5명 우선 선임. 위원회 자체 회의에서 위원장 1명·간사 1명 선출.",owner:"대의원회·선관위",basis:["선거관리규정 변경(안) 제2·3조"],status:"planned",updatedAt:""},
       {id:"s1-5",weekStart:4,weekEnd:5,title:"임원 후보 등록·심사",body:"조합장·이사·감사 후보 등록 공고. 후보별 추천서와 피선거권 요건 확인. 추천인 계획: 조합장 50명, 이사·감사 각 20명 이상.",owner:"선거관리위원회",basis:["선거관리규정 변경(안) 제4·6조"],status:"planned",updatedAt:""},
       {id:"s1-6",weekStart:5,weekEnd:6,title:"이사·감사 보궐선임",body:"2차 대의원회에서 후보별 의결로 이사 5명 및 감사 1명 보궐선임.",owner:"대의원회",basis:["정관(안) 제15조②·제25조①·제26조"],status:"planned",updatedAt:""},
       {id:"s1-7",weekStart:6,weekEnd:7,title:"직무대행 체계·선거 준비",body:"보궐선임 임원 중심으로 조합장 직무대행 소집 경로를 정리하고 선거인명부·공고·투표 및 개표 절차 준비.",owner:"보궐선임 임원·선관위",basis:["정관(안) 제16조⑥·제20조⑦"],status:"planned",updatedAt:""},
       {id:"s1-8",weekStart:7,weekEnd:8,title:"조합장 선출총회",body:"적법한 총회 소집·통지 절차를 거쳐 신임 조합장 1명 선출. 선관위에서 투표·개표 및 당선 결과 공고.",owner:"총회·선관위",basis:["정관(안) 제21조·선거관리규정 변경(안) 제10~12조"],status:"planned",updatedAt:""},
       {id:"s1-9",weekStart:8,weekEnd:8,title:"변경인가·등기 착수",body:"조합장 선출 이후 변경인가·임원 변경등기 및 업무 인수인계 착수. 완료 기간은 별도.",owner:"신임 집행부",basis:["정관(안) 제18조②"],status:"planned",updatedAt:""}
     ]},
    {id:"s2",label:"시나리오 02",title:"잔류 이사 존재 시",condition:"비상근이사 잔류 · 직무대행 직접 소집 계획",weeks:"4–6주",summary:"직무대행 업무 착수 → 대의원회 직접 소집 → 선관위 구성 → 후보 등록·심사 → 보궐선임 → 조합장 선출",signature:"연명 없이 착수 계획",directors:4,auditors:1,
     steps:[
       {id:"s2-1",weekStart:1,weekEnd:1,title:"직무대행 업무 착수",body:"김명숙 비상근이사 잔류를 전제로 직무대행 업무 착수 및 대의원회 선관위원 선임 안건 준비. 연명 절차 생략 계획.",owner:"김명숙 이사",basis:["직무대행 직접 소집 경로 전제"],status:"planned",updatedAt:""},
       {id:"s2-2",weekStart:1,weekEnd:2,title:"1차 대의원회 소집",body:"선관위원 선임을 위한 대의원회 일정 공지 및 정관상 사전 통지기간 확보.",owner:"직무대행자",basis:["정관(안) 제24조⑦"],status:"planned",updatedAt:""},
       {id:"s2-3",weekStart:2,weekEnd:2,title:"선관위원 선임",body:"1차 대의원회에서 선관위원 3~5명 우선 선임. 선관위원장 1명·간사 1명 선출.",owner:"대의원회·선관위",basis:["선거관리규정 변경(안) 제2·3조"],status:"planned",updatedAt:""},
       {id:"s2-4",weekStart:2,weekEnd:3,title:"후보등록·추천서 심사",body:"조합장·이사·감사 후보 등록 및 자격심사. 추천인 계획: 조합장 50명, 이사·감사 각 20명 이상.",owner:"선거관리위원회",basis:["선거관리규정 변경(안) 제4·6조"],status:"planned",updatedAt:""},
       {id:"s2-5",weekStart:3,weekEnd:4,title:"이사·감사 보궐선임",body:"2차 대의원회에서 이사 4명 및 감사 1명 보궐선임.",owner:"대의원회",basis:["정관(안) 제15조②·제25조①·제26조"],status:"planned",updatedAt:""},
       {id:"s2-6",weekStart:3,weekEnd:5,title:"조합장 총회 준비",body:"직무대행자의 총회 소집·통지 경로와 선관위의 선거인명부·투표·개표 준비.",owner:"직무대행자·선관위",basis:["정관(안) 제20조⑦"],status:"planned",updatedAt:""},
       {id:"s2-7",weekStart:4,weekEnd:6,title:"조합장 선출총회",body:"적법한 소집·통지 절차에 따라 조합장 1명 선출 및 당선 결과 공고.",owner:"총회·선관위",basis:["정관(안) 제21조·선거관리규정 변경(안) 제10~12조"],status:"planned",updatedAt:""},
       {id:"s2-8",weekStart:5,weekEnd:6,title:"변경인가·등기 착수",body:"임원 변경인가·등기 및 조합 업무 인수인계 착수. 완료 기간은 별도.",owner:"신임 집행부",basis:["정관(안) 제18조②"],status:"planned",updatedAt:""}
     ]}
  ],
  history:[
    {date:"2026-09-17",title:"비상대책위원회 설립총회",detail:"송림3지구 조합원 비상대책위원회 설립총회 개최.",status:"done",track:"common"},
    {date:"2026-10-16",title:"조합 임원 해임총회",detail:"조합장·이사 4명·감사 1명 해임안 가결. 총 참석 266명, 찬성 252명, 반대 2명.",status:"done",track:"common"},
    {date:"2026-10-19",title:"집행부 재구성 실행 로드맵 정리",detail:"시나리오 1(6~8주), 시나리오 2(4~6주) 목표기간 설정. 실제 진행은 10월 26일을 W1로 계획.",status:"done",track:"common"}
  ],
  references:[
    {category:"정관",article:"제15조 제2항",title:"궐위 임원 보궐선임",summary:"임기 중 궐위된 이사·감사는 대의원회에서 보궐선임하는 구조.",usedFor:"임원 보궐선임"},
    {category:"정관",article:"제16조 제6항",title:"조합장 직무대행",summary:"조합장이 유고 등으로 직무를 수행할 수 없을 때 상근이사 중 연장자 순으로 직무대행하도록 기재.",usedFor:"총회 소집 경로"},
    {category:"정관",article:"제18조 제2항",title:"임원 변경",summary:"사임·해임 후 임원 선출, 변경인가 및 변경등기의 대외적 효력 관련 규정.",usedFor:"변경인가·등기"},
    {category:"정관",article:"제20조 제4·5항",title:"총회 소집요구",summary:"조합원 5분의 1 소집요구, 2개월 미소집 시 감사 또는 청구인 대표의 구청장 승인 절차.",usedFor:"총회 소집 예비 경로"},
    {category:"정관",article:"제20조 제7·8항",title:"총회 통지",summary:"게시·조합원 통지 및 사전 통지 안건 의결 기준.",usedFor:"조합장 선출총회"},
    {category:"정관",article:"제21조 제8호",title:"총회 선임사항",summary:"조합임원·대의원 선임·해임의 총회 의결과 보궐선임 예외를 구분.",usedFor:"총회와 대의원회의 역할 구분"},
    {category:"정관",article:"제24조 제5~7항",title:"대의원회 소집",summary:"조합원 10분의 1 이상 또는 대의원 3분의 1 이상 소집요구, 14일 및 구청장 승인 소집 경로.",usedFor:"대의원회 소집"},
    {category:"정관",article:"제25·26조",title:"대의원회 의결",summary:"궐위 임원 보궐선임과 대의원회 의결 절차·정족수에 관한 규정.",usedFor:"이사·감사 보궐선임"},
    {category:"선거관리규정",article:"변경(안) 제2·3조",title:"선관위 구성",summary:"대의원회에서 위원 5명 이내 선임. 위원장 및 간사 선출.",usedFor:"선관위 우선 구성"},
    {category:"선거관리규정",article:"변경(안) 제4·6조",title:"후보등록·추천",summary:"선관위가 후보등록·심사를 관리하고 후보 추천서 요건을 제시. 조합장 50명, 이사·감사 각 20명.",usedFor:"후보 등록"},
    {category:"선거관리규정",article:"변경(안) 제10~12조",title:"총회 투·개표",summary:"후보자 선출, 투표 및 개표·공고 관련 규정.",usedFor:"조합장 총회"}
  ]
};