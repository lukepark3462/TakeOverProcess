/* 송림3지구 비대위 수입·지출 공개 데이터
   기준일: 2026-10-19 / 금액 단위 KRW
   원본 전체 이름은 저장하지 않고, 표시용 익명화 명칭만 수록.
   현금잔액 = 총입금 54,300,000 - 전체출금 28,870,510 = 25,429,490.
   실입금 53,100,000은 환불 1,200,000 차감 후 금액.
   실제 사용액 27,650,510은 전체출금에서 환불 1,200,000 및 청약19001(56) 20,000 제외.
   상계처리 2,400,000은 환불 1,200,000의 입금/출금 양방향 합계로 표시.
*/
window.SONGRIM_FINANCE = {
  "reportAsOf": "2026-10-19",
  "base": {
    "amount": 54300000,
    "date": "2026-10-19",
    "label": "전체 입금액(2026.09~10.19)",
    "verified": true,
    "note": "전체 입금액 54,300,000원 기준. 실입금액 53,100,000원과의 차이는 오입금 환불 1,200,000원."
  },
  "cash": {
    "reportedBalance": 25429490,
    "grossIncome": 54300000,
    "netIncome": 53100000,
    "grossWithdrawals": 28870510,
    "actualSpend": 27650510,
    "offsetDoubleSided": 2400000,
    "refund": 1200000,
    "otherAdjustment": 20000,
    "donorCount": 179
  },
  "transactions": [
    {
      "id": "tx-001",
      "date": "2026-09-14",
      "category": "대관료",
      "group": "대관료",
      "description": "대관료 0914 비대위 미팅",
      "amount": 95000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-002",
      "date": "2026-09-14",
      "category": "법무비",
      "group": "법무비",
      "description": "법무법인지산 선임료",
      "amount": 16500000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-003",
      "date": "2026-09-14",
      "category": "대관료",
      "group": "대관료",
      "description": "대관료 0914 비대위 미팅",
      "amount": 20000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-004",
      "date": "2026-09-21",
      "category": "기타",
      "group": "기타",
      "description": "강준철 오입금 환불",
      "amount": 1200000,
      "type": "expense",
      "status": "확정",
      "treatment": "refund"
    },
    {
      "id": "tx-005",
      "date": "2026-09-28",
      "category": "대관료",
      "group": "대관료",
      "description": "대관료 1016 비대위 미팅",
      "amount": 115000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-006",
      "date": "2026-09-14",
      "category": "기타",
      "group": "기타",
      "description": "청약19001(56)",
      "amount": 20000,
      "type": "expense",
      "status": "확정",
      "treatment": "adjustment"
    },
    {
      "id": "tx-007",
      "date": "2026-09-29",
      "category": "등기·우편비",
      "group": "등기·우편비",
      "description": "등기 비용 - 소명기회부여",
      "amount": 24660,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-008",
      "date": "2026-10-01",
      "category": "법무비",
      "group": "법무비",
      "description": "법무법인지산 총회개최금지가처분비",
      "amount": 2000000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-009",
      "date": "2026-10-02",
      "category": "법무비",
      "group": "법무비",
      "description": "가처분신청인지송달료",
      "amount": 148620,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-010",
      "date": "2026-10-02",
      "category": "총회비",
      "group": "총회비",
      "description": "총회 물품 구입",
      "amount": 26250,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-011",
      "date": "2026-10-02",
      "category": "총회비",
      "group": "총회비",
      "description": "총회 물품 구입",
      "amount": 373500,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-012",
      "date": "2026-10-02",
      "category": "총회비",
      "group": "총회비",
      "description": "총회 물품 구입",
      "amount": 53970,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-013",
      "date": "2026-10-03",
      "category": "총회비",
      "group": "총회비",
      "description": "총회 물품 구입",
      "amount": 46700,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-014",
      "date": "2026-10-04",
      "category": "총회비",
      "group": "총회비",
      "description": "총회 물품 구입",
      "amount": 5000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-015",
      "date": "2026-10-05",
      "category": "기타",
      "group": "기타",
      "description": "지산인천지사축하화환",
      "amount": 108900,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-016",
      "date": "2026-10-06",
      "category": "등기·우편비",
      "group": "등기·우편비",
      "description": "총회 등기 비용",
      "amount": 779400,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-017",
      "date": "2026-10-06",
      "category": "총회물품비",
      "group": "총회비",
      "description": "총회 물품 구입",
      "amount": 10000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-018",
      "date": "2026-10-10",
      "category": "등기·우편비",
      "group": "등기·우편비",
      "description": "등기 및 우편 - 퀵 발송비",
      "amount": 40000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-019",
      "date": "2026-10-13",
      "category": "총회비",
      "group": "총회비",
      "description": "속기사 비용 - 해임총회",
      "amount": 400000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-020",
      "date": "2026-10-13",
      "category": "총회비",
      "group": "총회비",
      "description": "총회 물품 구입",
      "amount": 209500,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-021",
      "date": "2026-10-13",
      "category": "총회비",
      "group": "총회비",
      "description": "조합단체문자발송비",
      "amount": 165000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-022",
      "date": "2026-10-13",
      "category": "총회비",
      "group": "총회비",
      "description": "총회 물품 구입",
      "amount": 96800,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-023",
      "date": "2026-10-14",
      "category": "법무비",
      "group": "법무비",
      "description": "공과금 해임총회가처분인지세",
      "amount": 101200,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-024",
      "date": "2026-10-15",
      "category": "등기·우편비",
      "group": "등기·우편비",
      "description": "등기 및 우편 - 퀵 발송비",
      "amount": 30000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-025",
      "date": "2026-10-15",
      "category": "대관료",
      "group": "대관료",
      "description": "대관료 1016 청소년수련관 서브",
      "amount": 280000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-026",
      "date": "2026-10-15",
      "category": "총회비",
      "group": "총회비",
      "description": "총회물품구입",
      "amount": 139150,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-027",
      "date": "2026-10-16",
      "category": "식대",
      "group": "식대",
      "description": "식대",
      "amount": 34000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-028",
      "date": "2026-10-16",
      "category": "선물·경조사",
      "group": "선물·경조사",
      "description": "구청 선물 - 복지약국",
      "amount": 6500,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-029",
      "date": "2026-10-17",
      "category": "법무비용",
      "group": "법무비",
      "description": "조합총회가처분보수",
      "amount": 2200000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-030",
      "date": "2026-10-17",
      "category": "총회비",
      "group": "총회비",
      "description": "해임총회사무용품구매",
      "amount": 10000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-031",
      "date": "2026-10-17",
      "category": "총회비",
      "group": "총회비",
      "description": "해임총회생수구입",
      "amount": 59250,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-032",
      "date": "2026-10-17",
      "category": "법무비",
      "group": "법무비",
      "description": "조합총회가처분부가세",
      "amount": 200000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-033",
      "date": "2026-10-19",
      "category": "식대",
      "group": "식대",
      "description": "변호사 식대",
      "amount": 490000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-034",
      "date": "2026-10-19",
      "category": "총회비",
      "group": "총회비",
      "description": "조합단체문자발송비",
      "amount": 110000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-035",
      "date": "2026-10-19",
      "category": "등기·우편비",
      "group": "등기·우편비",
      "description": "해임총회서면퀵비",
      "amount": 4110,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-036",
      "date": "2026-10-19",
      "category": "총회비",
      "group": "총회비",
      "description": "해임총회경호인력비",
      "amount": 2695000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    },
    {
      "id": "tx-037",
      "date": "2026-10-19",
      "category": "기타",
      "group": "기타",
      "description": "사무장선물",
      "amount": 73000,
      "type": "expense",
      "status": "확정",
      "treatment": "operating"
    }
  ],
  "donors": [
    {
      "id": "dn-001",
      "publicName": "강*구",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-002",
      "publicName": "강*미",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-003",
      "publicName": "강*정",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-004",
      "publicName": "강*화",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-005",
      "publicName": "강*철",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-006",
      "publicName": "고*영",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-007",
      "publicName": "고*관",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-008",
      "publicName": "고*섭",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-009",
      "publicName": "구*중",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-010",
      "publicName": "권*옥",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-011",
      "publicName": "권*배",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-012",
      "publicName": "권*용",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-013",
      "publicName": "최*준",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-014",
      "publicName": "김*숙",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-015",
      "publicName": "김*혜",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-016",
      "publicName": "김*호",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-017",
      "publicName": "김*화1",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-018",
      "publicName": "김*화2",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-019",
      "publicName": "김*융",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-020",
      "publicName": "김*채",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-021",
      "publicName": "김*승",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-022",
      "publicName": "김*혜",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-023",
      "publicName": "김*희",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-024",
      "publicName": "김*구",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-025",
      "publicName": "김*훈",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-026",
      "publicName": "김*철",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-027",
      "publicName": "김*기",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-028",
      "publicName": "김*용",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-029",
      "publicName": "김*은",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-030",
      "publicName": "김*진1",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-031",
      "publicName": "김*진2",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-032",
      "publicName": "김*영",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-033",
      "publicName": "김*호",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-034",
      "publicName": "김*희",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-035",
      "publicName": "김*임",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-036",
      "publicName": "김*기",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-037",
      "publicName": "김*수",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-038",
      "publicName": "김*자",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-039",
      "publicName": "김*일1",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-040",
      "publicName": "김*태",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-041",
      "publicName": "김*범",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-042",
      "publicName": "김*식",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-043",
      "publicName": "김*자",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-044",
      "publicName": "김*지",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-045",
      "publicName": "김*기",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-046",
      "publicName": "김*영",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-047",
      "publicName": "김*아",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-048",
      "publicName": "김*희",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-049",
      "publicName": "김*승",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-050",
      "publicName": "김*한",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-051",
      "publicName": "김*옥",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-052",
      "publicName": "김*욱",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-053",
      "publicName": "김*호",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-054",
      "publicName": "김*곤",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-055",
      "publicName": "김*수",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-056",
      "publicName": "김*길",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-057",
      "publicName": "김*성",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-058",
      "publicName": "김*희",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-059",
      "publicName": "김*경",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-060",
      "publicName": "김*숙",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-061",
      "publicName": "김*아",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-062",
      "publicName": "김*진",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-063",
      "publicName": "김*중",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-064",
      "publicName": "김*년",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-065",
      "publicName": "나*춘",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-066",
      "publicName": "노*길",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-067",
      "publicName": "맹*호",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-068",
      "publicName": "문*양",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-069",
      "publicName": "민*경",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-070",
      "publicName": "민*준",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-071",
      "publicName": "박*남",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-072",
      "publicName": "박*미",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-073",
      "publicName": "박*라",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-074",
      "publicName": "박*애",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-075",
      "publicName": "박*정",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-076",
      "publicName": "박*용",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-077",
      "publicName": "박*만",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-078",
      "publicName": "박*흠",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-079",
      "publicName": "박*석",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-080",
      "publicName": "박*이",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-081",
      "publicName": "박*원",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-082",
      "publicName": "박*서",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-083",
      "publicName": "박*철",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-084",
      "publicName": "방*성",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-085",
      "publicName": "배*일",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-086",
      "publicName": "백*미",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-087",
      "publicName": "백*숙",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-088",
      "publicName": "서*석",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-089",
      "publicName": "서*선",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-090",
      "publicName": "성*옥",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-091",
      "publicName": "송*난",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-092",
      "publicName": "송*일",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-093",
      "publicName": "송*영",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-094",
      "publicName": "송*민",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-095",
      "publicName": "신*란",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-096",
      "publicName": "신*식",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-097",
      "publicName": "신*균",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-098",
      "publicName": "신*국",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-099",
      "publicName": "신*자",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-100",
      "publicName": "이*휘",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-101",
      "publicName": "심*덕",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-102",
      "publicName": "안*자",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-103",
      "publicName": "오*자",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-104",
      "publicName": "오*훈",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-105",
      "publicName": "오*권",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-106",
      "publicName": "오*진",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-107",
      "publicName": "원*희",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-108",
      "publicName": "유*진",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-109",
      "publicName": "유*희",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-110",
      "publicName": "윤*봉",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-111",
      "publicName": "윤*아",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-112",
      "publicName": "이*순",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-113",
      "publicName": "이*필",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-114",
      "publicName": "이*상",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-115",
      "publicName": "이*숙",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-116",
      "publicName": "이*정",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-117",
      "publicName": "이*혁",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-118",
      "publicName": "이*열",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-119",
      "publicName": "이*주",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-120",
      "publicName": "이*원",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-121",
      "publicName": "이*영",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-122",
      "publicName": "이*애",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-123",
      "publicName": "이*옥",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-124",
      "publicName": "이*심",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-125",
      "publicName": "이*진",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-126",
      "publicName": "이*서",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-127",
      "publicName": "이*옥",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-128",
      "publicName": "이*걸",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-129",
      "publicName": "이*섭",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-130",
      "publicName": "이*주",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-131",
      "publicName": "이*호",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-132",
      "publicName": "이*분",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-133",
      "publicName": "이*훈",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-134",
      "publicName": "이*형",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-135",
      "publicName": "이*학",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-136",
      "publicName": "이*원",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-137",
      "publicName": "임*영",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-138",
      "publicName": "임*숙",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-139",
      "publicName": "임*자",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-140",
      "publicName": "임*환",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-141",
      "publicName": "임*남",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-142",
      "publicName": "장*숙",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-143",
      "publicName": "장*호",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-144",
      "publicName": "장*순",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-145",
      "publicName": "전*경",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-146",
      "publicName": "전*진",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-147",
      "publicName": "전*덕",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-148",
      "publicName": "정*민",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-149",
      "publicName": "정*기",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-150",
      "publicName": "정*진",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-151",
      "publicName": "정*숙",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-152",
      "publicName": "조*연",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-153",
      "publicName": "조*경",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-154",
      "publicName": "조*빈",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-155",
      "publicName": "주*치",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-156",
      "publicName": "주*리",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-157",
      "publicName": "주*우",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-158",
      "publicName": "진*자",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-159",
      "publicName": "진*덕",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-160",
      "publicName": "차*흥",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-161",
      "publicName": "천*덕",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-162",
      "publicName": "최*우",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-163",
      "publicName": "최*훈",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-164",
      "publicName": "최*자",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-165",
      "publicName": "최*운",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-166",
      "publicName": "최*준",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-167",
      "publicName": "최*철",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-168",
      "publicName": "최*민",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-169",
      "publicName": "최*희",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-170",
      "publicName": "최*호",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-171",
      "publicName": "최*나",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-172",
      "publicName": "최*열",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-173",
      "publicName": "추*분",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-174",
      "publicName": "한*영",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-175",
      "publicName": "현*채",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-176",
      "publicName": "홍*진",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-177",
      "publicName": "홍*기",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-178",
      "publicName": "황*연",
      "consented": true,
      "displayOnly": true
    },
    {
      "id": "dn-179",
      "publicName": "황*영",
      "consented": true,
      "displayOnly": true
    }
  ],
  "policy": {
    "disclosure": "후원자 성함은 첫 글자·끝 글자만 남겨 익명화하였으며, 별도 공개 동의 여부는 확인되지 않았습니다. 후원 금액은 개별 공개하지 않습니다.",
    "donation": "후원은 자발적·자율적으로만 진행하며, 금액 범위는 0원~300,000원. 미후원으로 인한 불이익 없음.",
    "accounting": "총출금은 반환·정산성 거래까지 포함한 현금 유출. 파이차트에는 실사용 비용만 표시하며 오입금 환불 1,200,000원과 청약19001(56) 20,000원은 제외.",
    "proof": "2026.10.19 제공된 입·출금 집계 기준. 증빙 원본·계좌 내역과 별도 대조 가능.",
    "dateScope": "2026.09.14~2026.10.19"
  },
  "updatedAt": "2026-10-19"
};
