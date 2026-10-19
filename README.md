# 송림3지구 조합원 비상대책위원회

넓은 여백, 절제된 타이포그래피와 차분한 색상으로 구성한 **공개형 진행 현황 홈페이지**.

## 화면 구성
1. 송림3지구 및 비대위 소개
2. 주차별 신임 집행부 구성 로드맵 (김명숙 사퇴 / 잔류)
3. 진행 경과 타임라인과 최종 업데이트일
4. 수입·지출·현재 집계 잔액
5. 후원자 명단(공개 동의 기준)
6. 비대위 임원 소개
7. 정관(안) 및 선거관리규정 변경(안)의 관련 조항

**주차 기준:** W1 = **2026.10.26(월)~11.01(일)**. 월·일은 '예상'이며 `updatedAt`은 실제 데이터를 수정한 날짜.

## 가장 쉬운 업데이트 방법

### 로드맵 현황
GitHub에서 [data.js](./data.js)를 열고 수정할 단계의 데이터를 변경.

```js
status: "planned",        // planned 예정, active 진행 중, done 완료, hold 보류
updatedAt: "2026-10-29", // 실제 업데이트 날짜
```

다음 필드를 바꿀 수 있음: `title`, `body`, `owner`, `weekStart`, `weekEnd`, `status`, `updatedAt`.

### 재정·후원자
[finance.js](./finance.js)의 `transactions`와 `donors` 배열에 기록 추가. 금액은 쉼표 없는 숫자로 입력.

```js
transactions: [
  {id:"tx-001",date:"2026-10-29",type:"expense",category:"총회 개최",description:"임차료",amount:100000,updatedAt:"2026-10-29",status:"확정",evidence:"증빙 보관"}
],
donors: [
  {id:"dn-001",date:"2026-10-29",publicName:"익명",amount:100000,consented:false,note:"",updatedAt:"2026-10-29"}
]
```

현재 집계 잔액 = **기초 집계 입금액 + 이후 확정 수입 - 이후 확정 지출**. 기초 집계 금액 53,100,000원은 `verified:false` 상태이며 계좌 대조 후 바꾸어야 함.

**이중 집계 주의:** 기초금액에 포함된 후원금을 새 거래로 또 입력하지 말 것. `donors` 명단은 공개 명단용이며 자동으로 거래 수입에 가산되지 않음. `status:"예정"`인 지출은 잔액에서 차감되지 않음.

**후원자 개인정보:** `consented:true`인 경우에만 `publicName`에 본인 동의한 공개 이름 사용. Public GitHub 저장소는 `finance.js` 원본도 공개되므로 **동의 없는 실명을 파일에 아예 입력하지 말 것.** 연락처·계좌번호도 기록 금지.

### 경과 기록
홈페이지 '진행 현황'의 [경과 기록 추가](https://github.com/lukepark3462/TakeOverProcess/issues/new?template=progress.md)에서 Issue 등록.

이슈 제목을 `[진행] 업무 제목`으로 작성하고, 본문은 다음 형식 유지:

```text
일자: 2026-10-29
대상: 공통
상태: 진행 중
담당: 선관위

내용:
진행한 사실과 주요 결과 기록

업데이트일: 2026-10-29
```

홈페이지는 GitHub의 공개 Issue 중 **`[진행]`으로 시작하는 제목**을 가져와 기록에 표시함. 입력된 이슈와 기본 이력은 공개됨.

## GitHub Pages
저장소 **Settings → Pages → Deploy from a branch → main / (root)**로 설정.
공개 URL: https://lukepark3462.github.io/TakeOverProcess/

정적 HTML 기반이라 서버·빌드 단계 없이 작동. GitHub Pages를 활성화해야 위 사이트 주소에서 열림.

## 주의
이 홈페이지는 조합원 비상대책위원회의 계획 및 집계 정보를 제공하는 자료임. **확정 법률해석, 조합 공식 인가/의결 기록, 최종 회계감사 결과를 대신하지 않음.**
참고 조항은 제공된 **정관(안)** 및 **선거관리규정 변경(안)** 기준이므로 최종 시행 규정과 대조 필요.
