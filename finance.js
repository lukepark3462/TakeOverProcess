window.SONGRIM_FINANCE = {
  base: {amount:53100000, date:"2026-10-19", label:"기존 집계 입금액", verified:false, note:"이전 집계 53,100,000원. 계좌 내역과 대조 후 확정 필요. 이 금액은 후원자 목록 합계와 별도 집계."},
  transactions: [
    // 예시: {id:"tx-001",date:"2026-10-26",type:"expense",category:"총회 개최",description:"장소 임차",amount:100000,updatedAt:"2026-10-26",status:"확정",evidence:"증빙 보관"}
    // 새 거래를 추가한 경우 base.amount에는 이미 포함된 수입인지 확인해 이중 집계를 방지할 것.
  ],
  donors: [
    // 기본값은 익명. 공개 동의가 확인된 경우만 publicName 입력.
    // {id:"dn-001",date:"2026-10-26",publicName:"익명",amount:100000,consented:false,note:"",updatedAt:"2026-10-26"}
  ],
  policy:{
    disclosure:"동의한 후원자만 이름 공개. 미동의자는 익명 처리.",
    donation:"후원은 자발적·자율적으로만 진행하며, 금액 범위는 0원~300,000원. 미후원으로 인한 불이익 없음.",
    accounting:"기초 집계액과 추가 입력한 거래를 구분. 미확정 지출은 실제 잔액 계산에 포함하지 않음.",
    proof:"모든 공개 집계는 계좌 내역과 영수증으로 대조 후 '확정' 처리."
  },
  updatedAt:"2026-10-19"
};