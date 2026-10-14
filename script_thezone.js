// ==========================================
// 1. OTT 링크 매핑 정보 (프로그램 + 시즌 기준)
// ==========================================
const ottLinkMap = {
	'더 존: 버텨야 산다 시즌 1': {
		'Disney+': 'https://www.disneyplus.com/ko-kr/browse/entity-3ca490d9-ea73-4f61-b341-2de199692040?season=647bf11a-8cfd-4647-96b3-c1847f61b51a'
	},
	'더 존: 버텨야 산다 시즌 2': {
		'Disney+': 'https://www.disneyplus.com/ko-kr/browse/entity-3ca490d9-ea73-4f61-b341-2de199692040?season=ef8fa848-a896-4f5d-8fd4-80355bd177e7'
	},
	'더 존: 버텨야 산다 시즌 3': {
		'Disney+': 'https://www.disneyplus.com/ko-kr/browse/entity-3ca490d9-ea73-4f61-b341-2de199692040?season=8f9a763b-7a9e-4228-8b2f-3b8476be7f97'
	}
};

// ==========================================
// 2. 고정 멤버 명단 (뱃지 강조용)
// ==========================================
const memberCasts = new Set([
	// 인류대표
	"유재석", "이광수", "권유리", "김동현", "덱스",
	// AI / 고정 조력자
	"AI-U"
]);

// 현재 선택된 필터 (시즌 / 멤버 / 게스트 각각 별도)
let currentSeason = 'all';
let currentMember = 'all';

// ==========================================
// 3. 더 존: 버텨야 산다 데이터 정의
// ==========================================
const theZoneData = [
	// ------------------------------------------
	// 시즌 1 (2022)
	// ------------------------------------------
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 1",
		year: "2022",
		otts: ["Disney+"],
		epNum: "1",
		epTitle: "Eye Zone",
		isSuccess: true,
		members: ["유재석", "이광수", "권유리", "AI-U"],
		guests: [],
		keywords: ["지구냉각설", "안과병원", "눈을떠라", "개안"],
		note: "음산한 공간에서 시작된 첫 번째 시뮬레이션"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 1",
		year: "2022",
		otts: ["Disney+"],
		epNum: "2",
		epTitle: "Water Zone",
		isSuccess: false,
		members: ["유재석", "이광수", "권유리", "AI-U"],
		guests: ["유민상", "송영길", "이이경"],
		keywords: ["물부족", "찜질방", "물폭탄", "수영"],
		note: "진땀 빼는 수중 찜질방 시뮬레이션"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 1",
		year: "2022",
		otts: ["Disney+"],
		epNum: "3",
		epTitle: "Virus Zone",
		isSuccess: false,
		members: ["유재석", "이광수", "권유리", "AI-U"],
		guests: ["태항호"],
		keywords: ["좀비", "한옥마을", "악귀", "바이러스"],
		note: "초가집과 기와가 있는 옛 마을의 좀비 대란",
		rowClass: "table-primary"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 1",
		year: "2022",
		otts: ["Disney+"],
		epNum: "4",
		epTitle: "Safety Zone",
		isSuccess: false,
		members: ["유재석", "이광수", "권유리", "AI-U"],
		guests: [],
		keywords: ["공포", "가정집", "격리생활", "안전지대", "규칙"],
		note: "안락한 가정집에서 펼쳐진 슬기로운 격리 생활",
		rowClass: "table-primary"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 1",
		year: "2022",
		otts: ["Disney+"],
		epNum: "5",
		epTitle: "Brain Zone",
		isSuccess: false,
		members: ["유재석", "이광수", "권유리", "AI-U"],
		guests: ["태항호"],
		keywords: ["브레인", "만찬장", "시식", "감정변화", "두뇌"],
		note: "고생한 멤버들을 위한 만찬 및 요동치는 만찬장"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 1",
		year: "2022",
		otts: ["Disney+"],
		epNum: "6",
		epTitle: "Money Zone",
		isSuccess: true,
		members: ["유재석", "이광수", "권유리", "AI-U"],
		guests: ["태항호", "구준엽", "라치카", "HOOK"],
		keywords: ["도박중독", "1억원", "현찰", "한탕의유혹", "쇼핑"],
		note: "손에 쥐어진 현찰 1억 원과 한탕의 유혹",
		rowClass: "table-primary"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 1",
		year: "2022",
		otts: ["Disney+"],
		epNum: "7",
		epTitle: "Fire Zone",
		isSuccess: false,
		members: ["유재석", "이광수", "권유리", "AI-U"],
		guests: [],
		keywords: ["불지키기", "캠핑", "원시", "화재"],
		note: "이보다 더 간단한 룰은 없다! 불을 지켜라"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 1",
		year: "2022",
		otts: ["Disney+"],
		epNum: "8",
		epTitle: "Target Zone",
		isSuccess: true,
		members: ["유재석", "이광수", "권유리", "AI-U"],
		guests: ["진종오", "박은하", "김상욱", "황충원", "프니엘", "줄리엔 강"],
		keywords: ["전쟁", "서바이벌", "타겟", "최악의재난"],
		note: "인류 최악의 재난, 전쟁 서바이벌"
	},

	// ------------------------------------------
	// 시즌 2 (2023)
	// ------------------------------------------
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 2",
		year: "2023",
		otts: ["Disney+"],
		epNum: "1",
		epTitle: "Stress Zone",
		isSuccess: true,
		members: ["유재석", "이광수", "권유리"],
		guests: [],
		keywords: ["당진", "건강", "스트레스", "병원"],
		note: "건강하게만 버티면 되는 첫 번째 시뮬레이션",
		rowClass: "table-primary"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 2",
		year: "2023",
		otts: ["Disney+"],
		epNum: "2",
		epTitle: "Save Zone",
		isSuccess: false,
		members: ["유재석", "이광수", "권유리"],
		guests: [],
		keywords: ["인천", "풀등 모래섬", "힐링", "가상공간", "골프장"],
		note: "힐링의 가상공간에서 펼쳐진 먹고 즐기는 버티기"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 2",
		year: "2023",
		otts: ["Disney+"],
		epNum: "3",
		epTitle: "Automatic Zone",
		isSuccess: false,
		members: ["유재석", "이광수", "권유리"],
		guests: ["김종민"],
		keywords: ["대전", "인공지능침대", "침대만굴러가라", "자율주행"],
		note: "움직이는 인공지능 침대 위 환상의 모험"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 2",
		year: "2023",
		otts: ["Disney+"],
		epNum: "4",
		epTitle: "Virus Zone 2",
		isSuccess: true,
		members: ["유재석", "이광수", "권유리"],
		guests: [],
		keywords: ["고양", "라이프가드", "수영장", "바이러스"],
		note: "라이프가드가 된 멤버들 앞의 정체불명의 존재",
		rowClass: "table-primary"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 2",
		year: "2023",
		otts: ["Disney+"],
		epNum: "5",
		epTitle: "Mystery Zone",
		isSuccess: false,
		members: ["유재석", "이광수", "권유리"],
		guests: ["박준규", "김현숙", "인교진", "소이현", "엄현경", "신우", "박광재"],
		keywords: ["문경", "화양촌", "미스테리", "귀신"],
		note: "화창한 마을 화양촌에서 일어난 미스터리한 사건들",
		rowClass: "table-primary"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 2",
		year: "2023",
		otts: ["Disney+"],
		epNum: "6",
		epTitle: "Team Play Zone",
		isSuccess: true,
		members: ["유재석", "이광수", "권유리"],
		guests: [],
		keywords: ["원주", "추억의도장깨기", "팀플레이", "놀이"],
		note: "아찔한 장소에서 펼쳐지는 추억의 도장 깨기"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 2",
		year: "2023",
		otts: ["Disney+"],
		epNum: "7",
		epTitle: "Analog Zone",
		isSuccess: true,
		members: ["유재석", "이광수", "권유리"],
		guests: ["지석진"],
		keywords: ["부산", "지하벙커", "아날로그", "수신음"],
		note: "통신시스템이 마비된 지하벙커에서 홀로 버티기"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 2",
		year: "2023",
		otts: ["Disney+"],
		epNum: "8",
		epTitle: "Battle Zone",
		isSuccess: false,
		members: ["유재석", "이광수", "권유리"],
		guests: ["조나단", "우기", "박준형", "줄리엔 강", "박은하", "추성훈", "파트리샤", "황재균", "전웅태", "조준호", "조준현"],
		keywords: ["서울", "배틀", "적진파괴", "올스타게스트"],
		note: "배틀을 통해 적들의 진지를 무너뜨리는 올스타전"
	},

	// ------------------------------------------
	// 시즌 3 (2024)
	// ------------------------------------------
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 3",
		year: "2024",
		otts: ["Disney+"],
		epNum: "1",
		epTitle: "AI Zone",
		isSuccess: true,
		members: ["유재석", "권유리", "김동현", "덱스"],
		guests: [],
		keywords: ["증평", "유재석월드", "유봇", "AI"],
		note: "유재석을 쏙 빼닮은 '유봇'의 천국 유재석 월드",
		rowClass: "table-primary"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 3",
		year: "2024",
		otts: ["Disney+"],
		epNum: "2",
		epTitle: "Break Zone",
		isSuccess: false,
		members: ["유재석", "권유리", "김동현", "덱스"],
		keywords: ["김포", "종이의집", "대출금", "내집마련"],
		guests: [],
		note: "거액의 대출금을 갚으며 4시간을 버텨라!",
		rowClass: "table-primary"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 3",
		year: "2024",
		otts: ["Disney+"],
		epNum: "3",
		epTitle: "Fact Check Zone",
		isSuccess: false,
		members: ["유재석", "권유리", "김동현", "덱스"],
		guests: [],
		keywords: ["충주", "폐리조트", "팩트체크", "기이한현상"],
		note: "폐리조트 안에서 팩트 체크를 하며 4시간 버티기",
		rowClass: "table-primary"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 3",
		year: "2024",
		otts: ["Disney+"],
		epNum: "4",
		epTitle: "Bug Zone",
		isSuccess: false,
		members: ["유재석", "권유리", "김동현", "덱스"],
		guests: ["차태현", "KEY", "정다운", "에이전트 H"],
		keywords: ["남양주", "데스게임", "배신", "거짓말"],
		note: "배신과 거짓이 난무하는 데스 게임 서바이벌"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 3",
		year: "2024",
		otts: ["Disney+"],
		epNum: "5",
		epTitle: "4Minutes Zone",
		isSuccess: true,
		members: ["유재석", "권유리", "김동현", "덱스"],
		guests: ["일신여자고등학교 핸드볼부", "장은실", "마선호", "남경진", "조진형"],
		keywords: ["충주", "4분버티기", "조기퇴근", "피지컬"],
		note: "단 4분만 버티면 조기퇴근에 성공하는 시뮬레이션"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 3",
		year: "2024",
		otts: ["Disney+"],
		epNum: "6",
		epTitle: "Line Zone",
		isSuccess: false,
		members: ["유재석", "권유리", "김동현", "덱스"],
		guests: ["나상도", "프로그램 제작진", "마을주민 일부"],
		keywords: ["양평", "선을넘지마오", "선넘기금지", "마을주민"],
		note: "‘님아, 그 선을 넘지 마오!’ 선을 벗어나지 않는 버티기"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 3",
		year: "2024",
		otts: ["Disney+"],
		epNum: "7",
		epTitle: "Memorize Zone",
		isSuccess: true,
		members: ["유재석", "권유리", "김동현", "덱스"],
		guests: ["정다운", "마선호", "조진형", "남경진", "장은실"],
		keywords: ["화성", "지적능력", "돈가방", "암기"],
		note: "지적 능력으로 4시간을 버텨라! 돈가방의 정체"
	},
	{
		program: "더 존: 버텨야 산다",
		season: "시즌 3",
		year: "2024",
		otts: ["Disney+"],
		epNum: "8",
		epTitle: "Hunter Zone",
		isSuccess: false,
		members: ["유재석", "권유리", "김동현", "덱스"],
		guests: ["김수환(형사)", "송정민(세금조사관)", "전민석(경찰)", "조형곤(건축학)", "이성엽(은행원)", "손용희(청소업체)", "최원희(무속인)", "김지연(과학수사학)", "서덕기(심마니)", "전건우(추리소설가)", "정송미(호텔경영학)", "이충한(재무)"],
		keywords: ["화성", "머니헌터", "돈빼앗기", "최종회"],
		note: "돈을 노리는 머니헌터들과의 추격 버티기"
	}
];

// ==========================================
// 4. 뱃지 HTML 생성 함수
// ==========================================
// 멤버 전용 뱃지 (인류대표 / AI)
function renderMemberBadge(name) {
	if (!name) return '';
	return `<span class="badge bg-light text-dark keyword-tag me-1 mb-1" data-keyword-type="member" data-keyword="${name}" style="cursor:pointer;">
		${name}
	</span>`;
}

// 게스트 전용 뱃지
function renderGuestBadge(name) {
	if (!name) return '';
	return `<span class="badge bg-secondary text-white keyword-tag me-1 mb-1" data-keyword-type="guest" data-keyword="${name}" style="cursor:pointer;">
		${name}
	</span>`;
}

// 키워드 뱃지
function renderKeywordBadge(text) {
	if (!text) return '';
	return `<span class="badge rounded-pill bg-light text-dark me-1 mb-1">#${text}</span>`;
}

// ==========================================
// 5. 상단 키워드 필터 버튼 생성 (시즌 / 멤버)
// ==========================================
function renderSeasonButtons() {
	const seasons = ["시즌 1", "시즌 2", "시즌 3"];
	const $wrap =$('.season-filter-wrap');
	if (!$wrap.length) return;

	$wrap.empty();$wrap.append('<button class="btn btn-secondary btn-keyword-season active" data-keyword="all">시즌 전체보기</button>');

	seasons.forEach(s => {
		const count = theZoneData.filter(item => item.season === s).length;
		const btnHtml = `<button class="btn btn-outline-dark btn-keyword-season" data-keyword="${s}">${s} <small class="text-muted">(${count})</small></button>`;
		$wrap.append(btnHtml);
	});
}

function renderMemberButtons() {
	const counts = {};
	theZoneData.forEach(item => {
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

	const $wrap =$('.member-filter-wrap');
	if (!$wrap.length) return;

	$wrap.empty();$wrap.append('<button class="btn btn-secondary btn-keyword-member active" data-keyword="all">출연진 전체보기</button>');

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
	const $tbody =$(containerId);
	if (!$tbody.length) return;
	
	$tbody.empty();

	// 시즌 필터 + 멤버 필터 적용
	let filteredList = list.filter(item => {
		const matchesSeason = (currentSeason === 'all') || (item.season === currentSeason);
		const matchesMember = (currentMember === 'all') || (item.members || []).includes(currentMember) || (item.guests || []).includes(currentMember);
		return matchesSeason && matchesMember;
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
			const seasonMap = ottLinkMap[seasonName];

			ottHtml = item.otts.map(ottName => {
				const link = (seasonMap && seasonMap[ottName]) ? seasonMap[ottName] : '#';
				return `<a href="${link}" target="_blank" class="mr-1">${ottName} <i class="xi-external-link"></i></a>`;
			}).join(' ');
		}

		// 2) 시즌 표시
		const seasonHtml = `${item.season}`;

		// 3) 에피소드 + 회차
		const epCombinedHtml = `<strong>EP.${item.epNum}</strong> ${item.epTitle}`;

		// 4) 성공 / 실패 텍스트
		const successText = item.isSuccess
			? '<span class="text-success fw-bold">성공</span>'
			: '<span class="text-danger fw-bold">실패</span>';

		// 5) 멤버 뱃지
		const membersHtml = (Array.isArray(item.members) && item.members.length > 0)
			? item.members.map(m => renderMemberBadge(m)).join('')
			: '-';

		// 6) 게스트 뱃지
		const guestsHtml = (Array.isArray(item.guests) && item.guests.length > 0)
			? item.guests.map(g => renderGuestBadge(g)).join('')
			: '-';

		// 7) 키워드 뱃지
		const keywordsHtml = (Array.isArray(item.keywords) && item.keywords.length > 0)
			? item.keywords.map(kw => renderKeywordBadge(kw)).join('')
			: '-';

		const trClass = item.rowClass ? ` class="${item.rowClass}"` : '';

		const trHtml = `
			<tr${trClass}>
				<td data-label="시즌" class="center">${seasonHtml}</td>
				<td data-label="방영년도" class="center">${item.year}</td>
				<td data-label="스트리밍" class="center link">${ottHtml}</td>
				<td data-label="에피소드">${epCombinedHtml}</td>
				<td data-label="버티기" class="center">${successText}</td>
				<td data-label="멤버">${membersHtml}</td>
				<td data-label="게스트">${guestsHtml}</td>
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
	renderSeasonButtons();
	renderMemberButtons();
	renderTable('#tbody-thezone', theZoneData);

	// 시즌 필터 이벤트
	$(document).on('click', '.btn-keyword-season', function () {
		currentSeason = $(this).data('keyword');

		$('.btn-keyword-season')
			.removeClass('active btn-secondary')
			.addClass('btn-outline-dark');

		$(this)
			.addClass('active btn-secondary')
			.removeClass('btn-outline-dark');

		renderTable('#tbody-thezone', theZoneData);
	});

	// 멤버/게스트 필터 이벤트
	$(document).on('click', '.btn-keyword-member', function () {
		currentMember = $(this).data('keyword');

		$('.btn-keyword-member')
			.removeClass('active btn-secondary')
			.addClass('btn-outline-dark');

		$(this)
			.addClass('active btn-secondary')
			.removeClass('btn-outline-dark');

		renderTable('#tbody-thezone', theZoneData);
	});

	// 뱃지 클릭 필터 연동
	$(document).on('click', '.keyword-tag', function () {
		const keyword = $(this).data('keyword');
		if (!keyword) return;

		const $targetBtn =$(`.btn-keyword-member[data-keyword="${keyword}"]`);
		if ($targetBtn.length) {$targetBtn.trigger('click');
		}
	});
});