// ==========================================
// 1. OTT 링크 매핑 정보 (프로그램 + 시즌 기준)
// ==========================================
const ottLinkMap = {
	'대탈출 시즌 1': {
		'TVING': 'https://www.tving.com/contents/P000587159',
		'YOUTUBE': 'https://youtube.com/playlist?list=PLI0zAiPmVRvy6S2oM_LhF4PmDlVjQLY-T'
	},
	'대탈출 시즌 2': {
		'TVING': 'https://www.tving.com/contents/P000821660',
		'YOUTUBE': 'https://youtube.com/playlist?list=PLI0zAiPmVRvz9z85RgseDxI1_QUROgzGP'
	},
	'대탈출 시즌 3': {
		'TVING': 'https://www.tving.com/contents/P001164763',
		'YOUTUBE': 'https://youtube.com/playlist?list=PLI0zAiPmVRvxsIJZ4WJ7hgTAEoHuzOFxP'
	},
	'대탈출 시즌 4': {
		'TVING': 'https://www.tving.com/contents/P001490952',
		'YOUTUBE': 'https://youtube.com/playlist?list=PLI0zAiPmVRvwbBGDE5_rcMVvJIVX-Ymgn'
	},
	'대탈출: 더 스토리': {
		'TVING': 'https://www.tving.com/contents/P001772883',
		'YOUTUBE': 'https://youtube.com/playlist?list=PLGmQK4hT0kOYD7KPWiXj9Sk3BruSzYp5N'
	},
	'여고추리반 시즌 1': {
		'TVING': 'https://www.tving.com/contents/P001433241',
		'YOUTUBE': 'https://youtube.com/playlist?list=PLI0zAiPmVRvy9pbN5tLWESaK2kzAsirGR'
	},
	'여고추리반 시즌 2': {
		'TVING': 'https://www.tving.com/contents/P001537909',
		'YOUTUBE': 'https://youtube.com/playlist?list=PLI0zAiPmVRvybtJXIDt8pRH7eC1PSA3hO'
	},
	'여고추리반 시즌 3': {
		'TVING': 'https://www.tving.com/contents/P001754831',
		'YOUTUBE': 'https://youtube.com/playlist?list=PLGmQK4hT0kOah-CV_Pxn3FG4LlLzyBqa1'
	}
};

// ==========================================
// 1-1. 세계관별 유튜브 재생목록 링크 매핑
// ==========================================
const worldviewLinkMap = {
	'좀비 세계관': 'https://youtube.com/playlist?list=PLI0zAiPmVRvyoV3OFzOIsq3P7EEf8fPdB',
	'귀신 세계관': 'https://youtube.com/playlist?list=PLI0zAiPmVRvz2JsXLsRjX-Vbwz8qifyGH',
	'SSA 세계관': 'https://youtube.com/playlist?list=PLI0zAiPmVRvxtcMYQXricd_yp_v0C-2Ht',
	'타임머신 세계관': 'https://youtube.com/playlist?list=PLI0zAiPmVRvxiMljffNO2ztuVmnSi6oL5'
};

// ==========================================
// 2. 고정 멤버 명단 (뱃지 강조용)
// ==========================================
const memberCasts = new Set([
	// 대탈출 멤버
	"강호동", "김종민", "김동현", "신동", "유병재", "피오", "고경표", "백현", "여진구", "승관",
	// 여고추리반 멤버
	"박지윤", "장도연", "재재", "비비", "최예나"
]);

// ==========================================
// 3. DTCU 데이터 정의
// ==========================================
const dtcuData = [
	// ------------------------------------------
	// 대탈출 시즌 1 (2018)
	// ------------------------------------------
	{
		program: "대탈출",
		season: "시즌 1",
		year: "2018",
		otts: ["TVING", "YOUTUBE"],
		epNum: "1~2",
		epTitle: "사설 도박장",
		isSuccess: true,
		worldview: "독립",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["비밀 도박", "창고", "비밀 통로"],
		note: "주장 없음 / SSA 제3공업단지 모니터링 대상 확인"
	},
	{
		program: "대탈출",
		season: "시즌 1",
		year: "2018",
		otts: ["TVING", "YOUTUBE"],
		epNum: "3~4",
		epTitle: "폐병원",
		isSuccess: true,
		worldview: "좀비 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["좀비", "이병원 원장", "환자 명단"],
		note: "주장: 신동 / 태양여고·벙커 방송/비디오 요소 등장"
	},
	{
		program: "대탈출",
		season: "시즌 1",
		year: "2018",
		otts: ["TVING", "YOUTUBE"],
		epNum: "5~6",
		epTitle: "유전자 은행",
		isSuccess: true,
		worldview: "독립",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["유전자", "보안 시스템", "금고"],
		note: "주장: 강호동 / SSA 모니터링 대상 확인"
	},
	{
		program: "대탈출",
		season: "시즌 1",
		year: "2018",
		otts: ["TVING", "YOUTUBE"],
		epNum: "7~8",
		epTitle: "악령감옥",
		isSuccess: true,
		worldview: "귀신 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["천해명", "귀사모", "왕희열"],
		note: "주장: 김동현 / 메인 빌런 천해명 첫 등장"
	},
	{
		program: "대탈출",
		season: "시즌 1",
		year: "2018",
		otts: ["TVING", "YOUTUBE"],
		epNum: "9~10",
		epTitle: "벙커",
		isSuccess: true,
		worldview: "독립",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["생존자", "지하 시설", "비밀번호"],
		note: "주장: 강호동 / 폐병원 방송 영상 등장"
	},
	{
		program: "대탈출",
		season: "시즌 1",
		year: "2018",
		otts: ["TVING", "YOUTUBE"],
		epNum: "11~12",
		epTitle: "태양여고",
		isSuccess: true,
		worldview: "귀신 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["계수상", "태양교", "구하리"],
		note: "주장: 유병재 / 폐병원 비디오(극중극) 등장"
	},

	// ------------------------------------------
	// 대탈출 시즌 2 (2019)
	// ------------------------------------------
	{
		program: "대탈출",
		season: "시즌 2",
		year: "2019",
		otts: ["TVING", "YOUTUBE"],
		epNum: "1~2",
		epTitle: "미래대학교",
		isSuccess: true,
		worldview: "SSA 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["검은 탑", "외계 물질", "SSA 요원"],
		note: "SSA 비밀 안보 조직 및 요원 첫 등장"
	},
	{
		program: "대탈출",
		season: "시즌 2",
		year: "2019",
		otts: ["TVING", "YOUTUBE"],
		epNum: "3~4",
		epTitle: "부암동 저택",
		isSuccess: true,
		worldview: "좀비 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["백백교", "백마준", "비밀 침실"],
		note: "희망연구소 전초전 / 백백교 신교단 접점"
	},
	{
		program: "대탈출",
		season: "시즌 2",
		year: "2019",
		otts: ["TVING", "YOUTUBE"],
		epNum: "5~6",
		epTitle: "무간교도소",
		isSuccess: false,
		worldview: "좀비 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["교도소", "좀비 바이러스", "폭동"],
		note: "멤버 전원 탈출 실패 / 바이러스 유출 발생"
	},
	{
		program: "대탈출",
		season: "시즌 2",
		year: "2019",
		otts: ["TVING", "YOUTUBE"],
		epNum: "7~8",
		epTitle: "희망연구소",
		isSuccess: false,
		worldview: "좀비 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["PDS 바이러스", "이병실 박사", "최희망"],
		note: "탈출러 일부 탈출 실패 / PDS 바이러스 명시"
	},
	{
		program: "대탈출",
		season: "시즌 2",
		year: "2019",
		otts: ["TVING", "YOUTUBE"],
		epNum: "9~10",
		epTitle: "조마테오 정신병원",
		isSuccess: true,
		worldview: "귀신 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["조마테오", "천해명", "PDS 환자복"],
		note: "좀비 세계관(PDS 환자복)과 세계관 교차 지점"
	},
	{
		program: "대탈출",
		season: "시즌 2",
		year: "2019",
		otts: ["TVING", "YOUTUBE"],
		epNum: "11~12",
		epTitle: "살인감옥",
		isSuccess: true,
		worldview: "독립",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오", "하석진"],
		keywords: ["박강두", "하석진", "판주시", "평행세계"],
		note: "하석진 출연 / '판주시' 가상 지명 첫 등장"
	},

	// ------------------------------------------
	// 대탈출 시즌 3 (2020)
	// ------------------------------------------
	{
		program: "대탈출",
		season: "시즌 3",
		year: "2020",
		otts: ["TVING", "YOUTUBE"],
		epNum: "1~2",
		epTitle: "타임머신 연구실",
		isSuccess: true,
		worldview: "타임머신 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["김태임 박사", "타임머신", "시간 이동"],
		note: "타임머신 유니버스 첫 에피소드"
	},
	{
		program: "대탈출",
		season: "시즌 3",
		year: "2020",
		otts: ["TVING", "YOUTUBE"],
		epNum: "3~4",
		epTitle: "좀비공장",
		isSuccess: true,
		worldview: "좀비 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["PDS 완치자", "감금", "공장 탈출"],
		note: "조마테오 정신병원 환자복 착용 완치자 등장"
	},
	{
		program: "대탈출",
		season: "시즌 3",
		year: "2020",
		otts: ["TVING", "YOUTUBE"],
		epNum: "5~6",
		epTitle: "어둠의 별장",
		isSuccess: true,
		worldview: "귀신 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["천해명 유골", "암전", "강령술"],
		note: "천해명 서사 및 조마테오 원장 교신 연계"
	},
	{
		program: "대탈출",
		season: "시즌 3",
		year: "2020",
		otts: ["TVING", "YOUTUBE"],
		epNum: "7~8",
		epTitle: "아차랜드",
		isSuccess: true,
		worldview: "독립",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["박강두", "연쇄살인", "수사 일지"],
		note: "경찰청 수사 의뢰 계기 (크레이지 하우스 연결)"
	},
	{
		program: "대탈출",
		season: "시즌 3",
		year: "2020",
		otts: ["TVING", "YOUTUBE"],
		epNum: "9~10",
		epTitle: "빵공장",
		isSuccess: true,
		worldview: "SSA 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["SSA", "슈퍼 졸리G", "불법 노역"],
		note: "SSA 비밀 요원 및 '슈퍼 졸리G' 최초 등장"
	},
	{
		program: "대탈출",
		season: "시즌 3",
		year: "2020",
		otts: ["TVING", "YOUTUBE"],
		epNum: "11~12",
		epTitle: "백 투 더 경성",
		isSuccess: true,
		worldview: "타임머신 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["독립운동", "조송화", "토끼풀"],
		note: "조마테오/하석진 조상 NPC 등장 (시간대 교차)"
	},

	// ------------------------------------------
	// 대탈출 시즌 4 (2021)
	// ------------------------------------------
	{
		program: "대탈출",
		season: "시즌 4",
		year: "2021",
		otts: ["TVING", "YOUTUBE"],
		epNum: "1~2",
		epTitle: "백 투 더 아한",
		isSuccess: true,
		worldview: "타임머신 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["김태임", "원시 고대", "왕좌"],
		note: "김태임 박사 구출 / 백 투 더 경성 직후 연결"
	},
	{
		program: "대탈출",
		season: "시즌 4",
		year: "2021",
		otts: ["TVING", "YOUTUBE"],
		epNum: "3~4",
		epTitle: "럭키랜드",
		isSuccess: true,
		worldview: "독립",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["안드로이드", "슈퍼 졸리G", "모의 테스트"],
		note: "SSA 연관 약물 재등장 / AI 안드로이드 실험실"
	},
	{
		program: "대탈출",
		season: "시즌 4",
		year: "2021",
		otts: ["TVING", "YOUTUBE"],
		epNum: "5~6",
		epTitle: "적송교도소",
		isSuccess: false,
		worldview: "좀비 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["PDS 변종", "교도소", "탈출 실패"],
		note: "전원 탈출 실패 / 무간교도소 계보 연장"
	},
	{
		program: "대탈출",
		season: "시즌 4",
		year: "2021",
		otts: ["TVING", "YOUTUBE"],
		epNum: "7~8",
		epTitle: "크레이지 하우스",
		isSuccess: true,
		worldview: "독립",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["오연두", "무의식", "판주시", "악마의 성"],
		note: "'판주시' 지명 공유 / 아차랜드 연계 경찰청 의뢰"
	},
	{
		program: "대탈출",
		season: "시즌 4",
		year: "2021",
		otts: ["TVING", "YOUTUBE"],
		epNum: "9~10",
		epTitle: "제3공업단지",
		isSuccess: true,
		worldview: "SSA 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["SSA 본부", "관찰 모니터", "폭탄 해제"],
		note: "SSA가 탈출러들의 지난 행적 전체를 관찰함 확인"
	},
	{
		program: "대탈출",
		season: "시즌 4",
		year: "2021",
		otts: ["TVING", "YOUTUBE"],
		epNum: "11~12",
		epTitle: "하늘에 쉼터",
		isSuccess: true,
		worldview: "SSA 세계관",
		members: ["강호동", "김종민", "김동현", "신동", "유병재", "피오"],
		keywords: ["신유희", "백사회", "천수호"],
		note: "부암동 저택의 백백교 신교단 및 SSA 개입 확인"
	},

	// ------------------------------------------
	// 대탈출: 더 스토리 (2025)
	// ------------------------------------------
	{
		program: "대탈출",
		season: "더 스토리",
		year: "2025",
		otts: ["TVING", "YOUTUBE"],
		epNum: "1~2",
		epTitle: "파묘",
		isSuccess: true,
		worldview: "타임머신 세계관",
		members: ["강호동", "김동현", "유병재", "고경표", "백현", "여진구"],
		keywords: ["파묘", "주술", "고서", "타임슬립"],
		note: "타임머신 세계관 확장 외전 시리즈 시작점"
	},
	{
		program: "대탈출",
		season: "더 스토리",
		year: "2025",
		otts: ["TVING", "YOUTUBE"],
		epNum: "3~4",
		epTitle: "조선의 살인귀",
		isSuccess: true,
		worldview: "타임머신 세계관",
		members: ["강호동", "김동현", "유병재", "고경표", "백현", "여진구"],
		keywords: ["조선 시대", "연쇄 살인", "단서 추리"],
		note: "과거 시간대 살인 사건 추적 연장선"
	},
	{
		program: "대탈출",
		season: "더 스토리",
		year: "2025",
		otts: ["TVING", "YOUTUBE"],
		epNum: "5~6",
		epTitle: "여기는 새땅",
		isSuccess: true,
		worldview: "타임머신 세계관",
		members: ["강호동", "김동현", "유병재", "고경표", "백현", "여진구"],
		keywords: ["백금교", "나용해", "유병룡"],
		note: "백백교 모티브 사이비 종교 / 유진정 구출"
	},
	{
		program: "대탈출",
		season: "더 스토리",
		year: "2025",
		otts: ["TVING", "YOUTUBE"],
		epNum: "7~8",
		epTitle: "폐광산의 비밀",
		isSuccess: true,
		worldview: "타임머신 세계관",
		members: ["강호동", "김동현", "유병재", "고경표", "백현", "여진구"],
		keywords: ["김우라", "소숙해", "금척"],
		note: "금척으로 만든 금광산 / 이석정 정체 복선"
	},
	{
		program: "대탈출",
		season: "더 스토리",
		year: "2025",
		otts: ["TVING", "YOUTUBE"],
		epNum: "9~10",
		epTitle: "신인류",
		isSuccess: true,
		worldview: "타임머신 세계관",
		members: ["강호동", "김동현", "유병재", "고경표", "백현", "여진구"],
		keywords: ["이석정", "경성수호단", "신인류"],
		note: "이석정 사망 / 금척으로 감염자 해독"
	},

	// ------------------------------------------
	// 여고추리반 시리즈 (2021 ~ 2024)
	// ------------------------------------------
	{
		program: "여고추리반",
		season: "시즌 1",
		year: "2021",
		otts: ["TVING", "YOUTUBE"],
		epNum: "1~16",
		epTitle: "새라여자고등학교",
		isSuccess: true,
		worldview: "SSA 세계관",
		members: ["박지윤", "장도연", "재재", "비비", "최예나"],
		keywords: ["초록약", "바이러스", "SSA", "매번일보"],
		note: "매박사/매번일보, SSA 연동 등 DTCU 공유 요소 대거 등장"
	},
	{
		program: "여고추리반",
		season: "시즌 2",
		year: "2021",
		otts: ["TVING", "YOUTUBE"],
		epNum: "1~8",
		epTitle: "태평여자고등학교",
		isSuccess: true,
		worldview: "SSA 세계관",
		members: ["박지윤", "장도연", "재재", "비비", "최예나"],
		keywords: ["급식창고", "슈퍼 졸리G", "가스라이팅", "언론"],
		note: "'슈퍼 졸리G' 언급, DTCU 기업/언론 공통 세계관 공유"
	},
	{
		program: "여고추리반",
		season: "시즌 3",
		year: "2024",
		otts: ["TVING", "YOUTUBE"],
		epNum: "1~8",
		epTitle: "송화여자고등학교",
		isSuccess: true,
		worldview: "SSA 세계관",
		members: ["박지윤", "장도연", "재재", "비비", "최예나"],
		keywords: ["문방구 ZEP", "이슬비", "바이러스", "학교 괴담"],
		note: "ZEP 메타버스 요소 및 DTCU 공통 세계관 기업/단체 연결"
	}
];

// 세계관별 컬러 매핑 (뱃지 & 필터 버튼 공용)
const worldviewColorMap = {
	'SSA 세계관': 'primary',
	'좀비 세계관': 'danger',
	'귀신 세계관': 'warning',
	'타임머신 세계관': 'info',
	'독립': 'secondary'
};

// 현재 선택된 필터 (세계관 / 멤버 각각 별도)
let currentWorldview = 'all';
let currentMember = 'all';

// ==========================================
// 4. 뱃지 HTML 생성 함수
// ==========================================
// 멤버 전용 뱃지 (항상 강조 스타일 + 클릭 시 멤버 필터로 연결)
function renderMemberBadge(name) {
	if (!name) return '';
	return `<span class="badge bg-light text-dark keyword-tag me-1 mb-1" data-keyword-type="member" data-keyword="${name}" style="cursor:pointer;">
		${name}
	</span>`;
}

// 세계관 전용 뱃지 (클릭 시 필터 기능 유지 + 링크 존재 시 아이콘 추가)
function renderWorldviewBadge(worldview) {
	if (!worldview) return '-';
	const color = worldviewColorMap[worldview] || 'dark';
	const badgeHtml = `<span class="badge bg-${color} text-white keyword-tag" data-keyword-type="worldview" data-keyword="${worldview}" style="cursor:pointer;">
		${worldview}
	</span>`;

	// worldviewLinkMap에 유튜브 URL이 존재하면 옆에 <a> 태그 아이콘 추가
	const link = worldviewLinkMap[worldview];
	if (link) {
		const iconLinkHtml = ` <a href="${link}" target="_blank" class="ms-1 align-middle text-secondary" title="${worldview} 재생목록 바로가기"><i class="fa-solid fa-arrow-up-right-from-square small"></i></a>`;
		return badgeHtml + iconLinkHtml;
	}

	return badgeHtml;
}

// 그 외 일반 키워드 뱃지 (필터 기능 없는 단순 정보 표시)
function renderKeywordBadge(text) {
	if (!text) return '';
	return `<span class="badge rounded-pill bg-light text-dark me-1 mb-1">#${text}</span>`;
}

// ==========================================
// 5. 상단 키워드 필터 버튼 생성 (세계관 / 멤버 별도 wrap)
// ==========================================
function renderWorldviewButtons() {
	const counts = {};
	dtcuData.forEach(item => {
		if (item.worldview) {
			counts[item.worldview] = (counts[item.worldview] || 0) + 1;
		}
	});

	// 정해진 세계관 순서(worldviewColorMap 순서)대로, 데이터에 실제 존재하는 것만 노출
	const orderedWorldviews = Object.keys(worldviewColorMap).filter(wv => counts[wv]);

	const $wrap = $('.worldview-filter-wrap');
	if (!$wrap.length) return;

	$wrap.empty();
	$wrap.append('<button class="btn btn-secondary btn-keyword-worldview active" data-keyword="all">세계관 전체보기</button>');

	orderedWorldviews.forEach(wv => {
		const color = worldviewColorMap[wv];
		const count = counts[wv];
		const btnHtml = `<button class="btn btn-outline-${color} btn-keyword-worldview" data-keyword="${wv}">${wv} <small class="text-muted">(${count})</small></button>`;
		$wrap.append(btnHtml);
	});
}

function renderMemberButtons() {
	const counts = {};
	dtcuData.forEach(item => {
		(item.members || []).forEach(m => {
			counts[m] = (counts[m] || 0) + 1;
		});
	});

	const sortedMembers = Object.keys(counts).sort((a, b) => {
		if (counts[b] !== counts[a]) {
			return counts[b] - counts[a];
		}
		return a.localeCompare(b, 'ko');
	});

	const $wrap = $('.member-filter-wrap');
	if (!$wrap.length) return;

	$wrap.empty();
	$wrap.append('<button class="btn btn-secondary btn-keyword-member active" data-keyword="all">출연진 전체보기</button>');

	sortedMembers.forEach(name => {
		const count = counts[name];
		const btnHtml = `<button class="btn btn-outline-dark btn-keyword-member" data-keyword="${name}">#${name} <small class="text-muted">(${count})</small></button>`;
		$wrap.append(btnHtml);
	});
}

// ==========================================
// 6. 테이블 렌더링 함수
// ==========================================
function renderTable(containerId, list) {
	const $tbody = $(containerId);
	if (!$tbody.length) return;
	
	$tbody.empty();

	// 세계관 필터 + 멤버 필터를 함께(AND) 적용
	let filteredList = list.filter(item => {
		const matchesWorldview = (currentWorldview === 'all') || (item.worldview === currentWorldview);
		const matchesMember = (currentMember === 'all') || (item.members || []).includes(currentMember);
		return matchesWorldview && matchesMember;
	});

	if (filteredList.length === 0) {
		$tbody.append('<tr><td colspan="9" class="center text-muted py-4">해당 키워드의 회차 정보가 없습니다.</td></tr>');
		return;
	}

	filteredList.forEach(item => {
		// 1) 스트리밍 링크 처리
		let ottHtml = '-';
		if (Array.isArray(item.otts) && item.otts.length > 0) {
			const seasonName = `${item.program} ${item.season}`;
			const seasonMap = ottLinkMap[seasonName] || ottLinkMap[seasonName.replace(' 1', '')] || ottLinkMap[seasonName.replace(':', '')];

			ottHtml = item.otts.map(ottName => {
				const link = (seasonMap && seasonMap[ottName]) ? seasonMap[ottName] : '#';
				return `<a href="${link}" target="_blank" class="mr-1">${ottName}</a>`;
			}).join(' ');
		}

		// 2) 시즌 = program + season 함께 출력
		const seasonHtml = `${item.program} ${item.season}`;

		// 3) 에피소드 + 회차 통합 ("EP.1~2 사설 도박장" 형태)
		const epCombinedHtml = `<strong>EP.${item.epNum}</strong> ${item.epTitle}`;

		// 4) 성공 / 실패 텍스트 컬러
		const successText = item.isSuccess
			? '<span class="text-success">성공</span>'
			: '<span class="text-danger">실패</span>';

		// 5) 세계관 뱃지
		const worldviewHtml = renderWorldviewBadge(item.worldview);

		// 6) 멤버 뱃지
		const membersHtml = (Array.isArray(item.members) && item.members.length > 0)
			? item.members.map(m => renderMemberBadge(m)).join('')
			: '-';

		// 7) 키워드 뱃지 (필터 없는 단순 표시)
		const keywordsHtml = (Array.isArray(item.keywords) && item.keywords.length > 0)
			? item.keywords.map(kw => renderKeywordBadge(kw)).join('')
			: '-';

		const trHtml = `
			<tr>
				<td data-label="시즌" class="center">${seasonHtml}</td>
				<td data-label="방영년도" class="center">${item.year}</td>
				<td data-label="스트리밍" class="center link">${ottHtml}</td>
				<td data-label="에피소드">${epCombinedHtml}</td>
				<td data-label="탈출/해결" class="center">${successText}</td>
				<td data-label="멤버">${membersHtml}</td>
				<td data-label="세계관/NPC" class="center">${worldviewHtml}</td>
				<td data-label="키워드">${keywordsHtml}</td>
				<td data-label="비고">${item.note || '-'}</td>
			</tr>
		`;
		$tbody.append(trHtml);
	});
}

// ==========================================
// 7. 초기화 및 이벤트 등록
// ==========================================
$(function () {
	// 필터 버튼 생성 및 테이블 최초 출력
	renderWorldviewButtons();
	renderMemberButtons();
	renderTable('#tbody-dtcu', dtcuData);

	// 세계관 필터 버튼 클릭 이벤트
	$(document).on('click', '.btn-keyword-worldview', function () {
		currentWorldview = $(this).data('keyword');

		$('.btn-keyword-worldview').each(function () {
			const wv = $(this).data('keyword');
			const color = wv === 'all' ? 'secondary' : (worldviewColorMap[wv] || 'dark');
			$(this).removeClass('active').removeClass(`btn-${color}`).addClass(`btn-outline-${color}`);
		});
		const activeColor = currentWorldview === 'all' ? 'secondary' : (worldviewColorMap[currentWorldview] || 'dark');
		$(this).addClass('active').removeClass(`btn-outline-${activeColor}`).addClass(`btn-${activeColor}`);

		renderTable('#tbody-dtcu', dtcuData);
	});

	// 멤버 필터 버튼 클릭 이벤트
	$(document).on('click', '.btn-keyword-member', function () {
		currentMember = $(this).data('keyword');

		// 1. 모든 버튼의 활성화/색상 클래스 초기화 (기본 상태: btn-outline-dark)
		$('.btn-keyword-member')
			.removeClass('active btn-secondary')
			.addClass('btn-outline-dark');

		// 2. 현재 클릭된 버튼만 active 및 btn-secondary 적용
		$(this)
			.addClass('active btn-secondary')
			.removeClass('btn-outline-dark');

		renderTable('#tbody-dtcu', dtcuData);
	});

	// 테이블 내부의 뱃지(멤버 / 세계관) 클릭 시 해당 필터로 연결
	$(document).on('click', '.keyword-tag', function () {
		const keyword = $(this).data('keyword');
		const type = $(this).data('keyword-type');
		if (!keyword || !type) return;

		const selector = type === 'worldview' ? '.btn-keyword-worldview' : '.btn-keyword-member';
		const $targetBtn = $(`${selector}[data-keyword="${keyword}"]`);

		if ($targetBtn.length) {
			$targetBtn.trigger('click');
		}
	});
});