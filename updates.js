/* 진행 상태만 바꾸는 파일: 알려주신 실제 완료일/진행일만 입력합니다.
예시:
steps: {"s1-1": {status:"done", updatedAt:"2026-10-29", note:"연명서 접수 완료"}}
status = planned(예정) / active(진행중) / done(완료) / hold(보류)
logs: [{date:"2026-10-29", title:"...", detail:"...", status:"done", track:"s1"}]
*/
window.SONGRIM_UPDATES = {
  lastUpdated:"2026-10-19",
  steps:{},
  logs:[]
};