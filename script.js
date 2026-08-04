// 1. 데이터를 객체 배열 형태로 관리
const programData = {
    cate01: [
        {
			name: "더 지니어스: 게임의 법칙",
			link: "https://m.kinolights.com/title/89901",
			year: "2013",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000106439",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "더 지니어스: 룰 브레이커",
			link: "https://m.kinolights.com/title/87980",
			year: "2013~2014",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000125936",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "6화 스트리밍 불가",
			rowClass: ""
		},
		{
			name: "더 지니어스: 블랙가넷",
			link: "https://m.kinolights.com/title/102026",
			year: "2014",
			broadcaster: "tvN",
			ottName: "",
			ottLink: "",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "전회차 스트리밍 불가",
			rowClass: "table-danger"
		},
		{
			name: "더 지니어스: 그랜드 파이널",
			link: "https://m.kinolights.com/title/87984",
			year: "2015",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000170199",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "방시팝-더 지니어스:외전",
			link: "",
			year: "2015",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000222161",
			keywords: ["두뇌"],
			note: "3화만 보면 됨",
			rowClass: ""
		},
		{
			name: "프로젝트 지니어스",
			link: "",
			year: "미정",
			broadcaster: "유튜브 홍진호",
			ottName: "",
			ottLink: "",
			keywords: [],
			note: "",
			rowClass: "table-warning"
		},
		{
			name: "크라임씬 1",
			link: "https://m.kinolights.com/title/87643",
			year: "2014",
			broadcaster: "JTBC",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000539540",
			keywords: ["추리", "마피아 게임", "롤플레잉"],
			note: "웨이브, 왓챠, 쿠팡플레이에서도 시청 가능",
			rowClass: ""
		},
		{
			name: "크라임씬 2",
			link: "https://m.kinolights.com/title/87646",
			year: "2015",
			broadcaster: "JTBC",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000539640",
			keywords: ["추리", "마피아 게임", "롤플레잉"],
			note: "웨이브, 왓챠, 쿠팡플레이에서도 시청 가능",
			rowClass: ""
		},
		{
			name: "크라임씬 3",
			link: "https://m.kinolights.com/title/87647",
			year: "2017",
			broadcaster: "JTBC",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000539639",
			keywords: ["추리", "마피아 게임", "롤플레잉"],
			note: "웨이브, 왓챠, 쿠팡플레이에서도 시청 가능",
			rowClass: ""
		},
		{
			name: "크라임씬 리턴즈",
			link: "https://m.kinolights.com/title/125359",
			year: "2024",
			broadcaster: "TVING",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001751684",
			keywords: ["추리", "마피아 게임", "롤플레잉"],
			note: "",
			rowClass: ""
		},
		{
			name: "크라임씬 제로",
			link: "https://m.kinolights.com/title/138812",
			year: "2025",
			broadcaster: "NETFLIX",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/81950435",
			keywords: ["추리", "마피아 게임", "롤플레잉"],
			note: "",
			rowClass: ""
		},
		{
			name: "크라임씬 제로 새시즌",
			link: "",
			year: "2027 예정",
			broadcaster: "NETFLIX",
			ottName: "",
			ottLink: "",
			keywords: ["추리", "마피아 게임", "롤플레잉"],
			note: "",
			rowClass: "table-primary"
		},
		{
			name: "문제적 남자 시즌1",
			link: "",
			year: "2015~2018",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000160415",
			keywords: ["두뇌", "퍼즐", "방탈출"],
			note: "",
			rowClass: ""
		},
		{
			name: "문제적 남자 시즌2",
			link: "",
			year: "2018~2019",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000160415",
			keywords: ["두뇌", "퍼즐", "방탈출"],
			note: "",
			rowClass: ""
		},
		{
			name: "문제적 남자: 브레인 유랑단",
			link: "https://m.kinolights.com/title/87942",
			year: "2019~2020",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000160415",
			keywords: ["두뇌", "퍼즐", "방탈출"],
			note: "",
			rowClass: ""
		},
		/*
		{
			name: "문제적 남자 리부트: 수학편",
			link: "https://m.kinolights.com/title/144531",
			year: "2025",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001773171",
			keywords: ["두뇌", "퍼즐", "방탈출"],
			note: "",
			rowClass: ""
		},
		*/
		{
			name: "코드 - 비밀의 방",
			link: "https://m.kinolights.com/title/90710",
			year: "2016",
			broadcaster: "JTBC",
			ottName: "JTBC",
			ottLink: "https://tv.jtbc.co.kr/replay/pr10010396/pm10033108",
			keywords: ["서바이벌", "두뇌", "방탈출"],
			note: "U+모바일 TV에서도 시청 가능",
			rowClass: ""
		},
		{
			name: "소사이어티 게임 시즌 1",
			link: "https://m.kinolights.com/title/88036",
			year: "2016",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000328018",
			keywords: ["서바이벌", "정치", "두뇌"],
			note: "",
			rowClass: ""
		},
		{
			name: "소사이어티 게임 시즌 2",
			link: "https://m.kinolights.com/title/88037",
			year: "2017",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000395031",
			keywords: ["서바이벌", "정치", "두뇌"],
			note: "",
			rowClass: ""
		},
		{
			name: "범인은 바로 너! 시즌 1",
			link: "https://m.kinolights.com/title/87856",
			year: "2018",
			broadcaster: "NETFLIX",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/80209553",
			keywords: ["드라마", "미스터리", "게임", "추리", "롤플레잉"],
			note: "",
			rowClass: ""
		},
		{
			name: "범인은 바로 너! 시즌 2",
			link: "https://m.kinolights.com/title/87857",
			year: "2019",
			broadcaster: "NETFLIX",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/80209553",
			keywords: ["드라마", "미스터리", "게임", "추리", "롤플레잉"],
			note: "",
			rowClass: ""
		},
		{
			name: "범인은 바로 너! 시즌 3",
			link: "https://m.kinolights.com/title/87858",
			year: "2021",
			broadcaster: "NETFLIX",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/80209553",
			keywords: ["드라마", "미스터리", "게임", "추리", "롤플레잉"],
			note: "",
			rowClass: ""
		},
		{
			name: "대탈출 시즌 1",
			link: "https://m.kinolights.com/title/87639",
			year: "2018",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000587159",
			keywords: ["방탈출", "어드벤처", "옴니버스"],
			note: "",
			rowClass: ""
		},
		{
			name: "대탈출 시즌 2",
			link: "https://m.kinolights.com/title/87640",
			year: "2019",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000821660",
			keywords: ["방탈출", "어드벤처", "옴니버스"],
			note: '<a href="https://www.tving.com/contents/P000900239" target="_blank">감독판 <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
			rowClass: ""
		},
		{
			name: "대탈출 시즌 3",
			link: "https://m.kinolights.com/title/87641",
			year: "2020",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001164763",
			keywords: ["방탈출", "어드벤처", "옴니버스"],
			note: '<a href="https://www.tving.com/contents/P001254453" target="_blank">스페셜 <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
			rowClass: ""
		},
		{
			name: "대탈출 시즌 4",
			link: "https://m.kinolights.com/title/96838",
			year: "2021",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001490952",
			keywords: ["방탈출", "어드벤처", "옴니버스"],
			note: '<a href="https://www.tving.com/contents/P001516207" target="_blank">스페셜 <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
			rowClass: ""
		},
		{
			name: "대탈출: 더 스토리",
			link: "https://m.kinolights.com/title/144304",
			year: "2025",
			broadcaster: "TVING",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001772883",
			keywords: ["방탈출", "어드벤처", "옴니버스"],
			note: "",
			rowClass: ""
		},
		{
			name: "대탈출 시즌 6",
			link: "",
			year: "예정",
			broadcaster: "TVING",
			ottName: "",
			ottLink: "",
			keywords: ["방탈출", "어드벤처", "옴니버스"],
			note: "",
			rowClass: "table-primary"
		},
		{
			name: "씬의 퀴즈",
			link: "https://m.kinolights.com/title/88616",
			year: "2019",
			broadcaster: "XtvN, tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P000940242",
			keywords: [],
			note: "",
			rowClass: ""
		},
		{
			name: "송민호의 분실",
			link: "",
			year: "2021",
			broadcaster: "유튜브 채널 십오야",
			ottName: "유튜브 채널 십오야",
			ottLink: "https://www.youtube.com/playlist?list=PLr0T5CaHaPwVYthEkTB9k4lW46JVjS5LI",
			keywords: ["추리", "마피아 게임"],
			note: "",
			rowClass: ""
		},
		{
			name: "스틸 얼라이브",
			link: "",
			year: "2021",
			broadcaster: "iHQ",
			ottName: "",
			ottLink: "",
			keywords: [],
			note: "전회차 스트리밍 불가",
			rowClass: "table-danger"
		},
		{
			name: "머니게임",
			link: "https://m.kinolights.com/title/119151",
			year: "2021",
			broadcaster: "유튜브 진용진",
			ottName: "유튜브 진용진",
			ottLink: "https://www.youtube.com/playlist?list=PLkH5IoAQDW0ZRpvuLeBbDccqzXz77AGqC",
			keywords: ["정치", "서바이벌"],
			note: "",
			rowClass: ""
		},
		{
			name: "공범 시즌1",
			link: "https://m.kinolights.com/title/132153",
			year: "2021",
			broadcaster: "유튜브 장지수",
			ottName: "유튜브 장지수",
			ottLink: "https://www.youtube.com/playlist?list=PLOBfcaHQ3_2X3xpGuwPRFsiqMYKpeAxE5",
			keywords: ["마피아 게임", "서바이벌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "공범 시즌2",
			link: "https://m.kinolights.com/title/132156",
			year: "2022",
			broadcaster: "유튜브 장지수",
			ottName: "유튜브 장지수",
			ottLink: "https://www.youtube.com/playlist?list=PLOBfcaHQ3_2X3xpGuwPRFsiqMYKpeAxE5",
			keywords: ["마피아 게임", "서바이벌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "여고추리반 1",
			link: "https://m.kinolights.com/title/87867",
			year: "2021",
			broadcaster: "TVING",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001433241",
			keywords: ["어드벤처", "추리", "미스터리", "드라마"],
			note: "",
			rowClass: ""
		},
		{
			name: "여고추리반 2",
			link: "https://m.kinolights.com/title/100750",
			year: "2021~2022",
			broadcaster: "TVING",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001537909",
			keywords: ["어드벤처", "추리", "미스터리", "드라마"],
			note: '<a href="https://www.tving.com/contents/P001563040" target="_blank">코멘터리 <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
			rowClass: ""
		},
		{
			name: "여고추리반 3",
			link: "https://m.kinolights.com/title/117484",
			year: "2024",
			broadcaster: "TVING",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001754831",
			keywords: ["어드벤처", "추리", "미스터리", "드라마"],
			note: '<a href="https://www.tving.com/contents/P001757767" target="_blank">코멘터리 <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
			rowClass: ""
		},
		{
			name: "피의 게임 시즌 1",
			link: "https://m.kinolights.com/title/99167",
			year: "2021~2022",
			broadcaster: "WAVVE, MBC",
			ottName: "WAVVE",
			ottLink: "https://www.wavve.com/player/vod?programid=C9901_C99000000075",
			keywords: ["서바이벌", "정치", "두뇌"],
			note: "",
			rowClass: ""
		},
		{
			name: "피의 게임 시즌 2",
			link: "https://m.kinolights.com/title/122124",
			year: "2023",
			broadcaster: "WAVVE",
			ottName: "WAVVE",
			ottLink: "https://www.wavve.com/player/vod?programid=C9901_C99000000108",
			keywords: ["서바이벌", "정치", "두뇌"],
			note: "",
			rowClass: ""
		},
		{
			name: "피의 게임 시즌 3",
			link: "https://m.kinolights.com/title/138201",
			year: "2024~2025",
			broadcaster: "WAVVE",
			ottName: "WAVVE",
			ottLink: "https://www.wavve.com/player/vod?programid=C9901_C99000000149",
			keywords: ["서바이벌", "정치", "두뇌"],
			note: "",
			rowClass: ""
		},
		{
			name: "피의 게임 X",
			link: "https://m.kinolights.com/title/153518",
			year: "2026",
			broadcaster: "WAVVE",
			ottName: "WAVVE",
			ottLink: "https://www.wavve.com/player/vod?programid=C9901_C99000000190",
			keywords: ["서바이벌", "정치", "두뇌"],
			note: "",
			rowClass: ""
		},
		{
			name: "생존남녀: 갈라진 세상",
			link: "https://m.kinolights.com/title/104274",
			year: "2022",
			broadcaster: "카카오TV",
			ottName: "WATCHA",
			ottLink: "https://watcha.com/ko-KR/contents/share/tlYey3V",
			keywords: ["서바이벌", "정치", "생존"],
			note: "",
			rowClass: ""
		},
		{
			name: "검은 양 게임",
			link: "https://m.kinolights.com/title/105515",
			year: "2022",
			broadcaster: "SBS",
			ottName: "SBS",
			ottLink: "https://programs.sbs.co.kr/culture/genreismafia/vods/71253",
			keywords: ["서바이벌", "마피아 게임"],
			note: "SBS 홈페이지에서 무료 시청 가능",
			rowClass: ""
		},
		{
			name: "도둑잡기",
			link: "https://m.kinolights.com/title/114853",
			year: "2022",
			broadcaster: "WATCHA",
			ottName: "WATCHA",
			ottLink: "https://watcha.com/ko-KR/contents/share/tR2edNe",
			keywords: [],
			note: "",
			rowClass: ""
		},
		{
			name: "제로섬게임",
			link: "https://m.kinolights.com/title/105872",
			year: "2022",
			broadcaster: "TVING",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001616289",
			keywords: ["서바이벌", "생존", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "입주쟁탈전: 펜트하우스",
			link: "https://m.kinolights.com/title/105602",
			year: "2022",
			broadcaster: "채널A, WAVVE",
			ottName: "WAVVE",
			ottLink: "https://www.wavve.com/player/vod?programid=C9901_C99000000089&page=1",
			keywords: ["서바이벌", "정치"],
			note: '<a href="https://www.ichannela.com/program/detail/program_detail_renew.do?cateCode=0500910001" target="_blank">채널A 홈페이지에서 무료 시청 가능 <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
			rowClass: ""
		},
		{
			name: "파트너 게임",
			link: "https://m.kinolights.com/title/120053",
			year: "2022",
			broadcaster: "유튜브 tvN D",
			ottName: "유튜브 tvN D",
			ottLink: "https://www.youtube.com/playlist?list=PLTnyq-p4P5n2JQiPKNi8hIWSV3qMWTRpc",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "버튼게임",
			link: "https://m.kinolights.com/title/116370",
			year: "2022",
			broadcaster: "WAVVE",
			ottName: "WAVVE",
			ottLink: "https://www.wavve.com/player/vod?programid=C9901_C99000000102",
			keywords: ["정치", "서바이벌"],
			note: "",
			rowClass: ""
		},
		{
			name: "보물찾기",
			link: "https://m.kinolights.com/title/109680",
			year: "2022~2023",
			broadcaster: "TVING",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001623861",
			keywords: ["방탈출", "서바이벌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "우마게임",
			link: "https://m.kinolights.com/title/118436",
			year: "2023",
			broadcaster: "유투브 피지컬갤러리",
			ottName: "유투브 피지컬갤러리",
			ottLink: "https://www.youtube.com/playlist?list=PLA92lMlT0Ro_yXKFqBTbkQJVHZXFvbzUz",
			keywords: ["서바이벌", "방탈출"],
			note: "벌레 나옴 비위 조심",
			rowClass: ""
		},
		{
			name: "씬캐처",
			link: "https://m.kinolights.com/title/118292",
			year: "2023",
			broadcaster: "WAVVE",
			ottName: "WAVVE",
			ottLink: "https://www.wavve.com/player/vod?programid=F5701_F57000000001",
			keywords: ["추리", "마피아 게임", "롤플레잉"],
			note: "",
			rowClass: ""
		},
		{
			name: "더 타임 호텔",
			link: "https://m.kinolights.com/title/117320",
			year: "2023",
			broadcaster: "TVING",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001696917",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "내친나똑 (내 친구들은 나보다 똑똑하다)",
			link: "https://m.kinolights.com/title/118798",
			year: "2023",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001691160",
			keywords: ["두뇌", "퍼즐"],
			note: "",
			rowClass: ""
		},
		{
			name: "육각형게임",
			link: "",
			year: "2023",
			broadcaster: "유튜브 긱블",
			ottName: "유튜브 긱블",
			ottLink: "https://www.youtube.com/playlist?list=PL_12Raz22R-n3YPSf8EUIQD4QFnIxqPlo",
			keywords: ["서바이벌", "두뇌", "방탈출"],
			note: "",
			rowClass: ""
		},
		{
			name: "대학전쟁 시즌 1",
			link: "https://m.kinolights.com/title/128332",
			year: "2023",
			broadcaster: "쿠팡플레이",
			ottName: "쿠팡플레이",
			ottLink: "https://www.coupangplay.com/titles/2c5c8857-d6c6-40c3-9f27-eef2692d31f3",
			keywords: ["서바이벌", "두뇌"],
			note: "",
			rowClass: ""
		},
		{
			name: "대학전쟁 시즌 2",
			link: "https://m.kinolights.com/title/131499",
			year: "2024",
			broadcaster: "쿠팡플레이",
			ottName: "쿠팡플레이",
			ottLink: "https://www.coupangplay.com/titles/2c5c8857-d6c6-40c3-9f27-eef2692d31f3",
			keywords: ["서바이벌", "두뇌"],
			note: "",
			rowClass: ""
		},
		{
			name: "대학전쟁 시즌 3",
			link: "https://m.kinolights.com/title/148654",
			year: "2025~2026",
			broadcaster: "쿠팡플레이",
			ottName: "쿠팡플레이",
			ottLink: "https://www.coupangplay.com/titles/2c5c8857-d6c6-40c3-9f27-eef2692d31f3",
			keywords: ["서바이벌", "두뇌"],
			note: "",
			rowClass: ""
		},
		{
			name: "데블스 플랜",
			link: "https://m.kinolights.com/title/116630",
			year: "2023",
			broadcaster: "NETFLIX",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/81653386",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "데블스 플랜: 데스룸",
			link: "https://m.kinolights.com/title/128769",
			year: "2025",
			broadcaster: "NETFLIX",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/81653386",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "데블스 플랜 시즌 3",
			link: "https://m.kinolights.com/title/149589",
			year: "2026 예정",
			broadcaster: "NETFLIX",
			ottName: "",
			ottLink: "",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "",
			rowClass: "table-primary"
		},
		{
			name: "기억을 잊는 밤",
			link: "",
			year: "2024",
			broadcaster: "유튜브 코다리찜",
			ottName: "유튜브 코다리찜",
			ottLink: "https://www.youtube.com/watch?v=97WtB7a4-9k&list=PLwN2bndMSUj5u1xTNkPF2PTr6XVuxWpJt&index=10",
			keywords: ["방탈출", "어드벤처"],
			note: "",
			rowClass: ""
		},
		{
			name: "금수저 전쟁",
			link: "https://m.kinolights.com/title/138553",
			year: "2024",
			broadcaster: "U+모바일tv",
			ottName: "U+모바일tv",
			ottLink: "https://motvlnk.uplus.co.kr/?a_rtype=detail_page&vod_type=vod&main_run=Y&backkey_finish=N&is_splash=N&review_yn=N&contents_id=M0124AV077PPV00&category_id=&series_num=1&series_category_id=E25VM&utm_source=kinolights&utm_campaign=kinolights&utm_medium=organic&utm_content=title_provider&packageName=com.kinolights.kinolights",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "웨이브, 왓챠에서도 시청가능",
			rowClass: ""
		},
		{
			name: "사상검증구역: 더 커뮤니티",
			link: "https://m.kinolights.com/title/130496",
			year: "2024",
			broadcaster: "WAVVE",
			ottName: "WAVVE",
			ottLink: "https://www.wavve.com/player/vod?programid=C9901_C99000000124",
			keywords: ["서바이벌", "사회실험", "정치", "마피아 게임"],
			note: '<a href="https://youtu.be/NUviO_w8tVA?si=TF86YvrIJ0nDr3H3" target="_blank">다 본 후에 PD와 테드의 코멘터리 보는 것 강추 <i class="fa-solid fa-arrow-up-right-from-square"></i></a>',
			rowClass: ""
		},
		{
			name: "사상검증구역: 더 커뮤니티 시즌 2",
			link: "",
			year: "2026 예정",
			broadcaster: "WAVVE",
			ottName: "",
			ottLink: "",
			keywords: ["서바이벌", "사회실험", "정치", "마피아 게임"],
			note: "",
			rowClass: "table-primary"
		},
		{
			name: "미스터리 수사단 시즌 1",
			link: "https://m.kinolights.com/title/129009",
			year: "2024",
			broadcaster: "NETFLIX",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/81731720",
			keywords: ["방탈출", "어드벤처", "옴니버스"],
			note: "",
			rowClass: ""
		},
		{
			name: "미스터리 수사단 시즌 2",
			link: "https://m.kinolights.com/title/145976",
			year: "2026",
			broadcaster: "NETFLIX",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/81731720",
			keywords: ["방탈출", "어드벤처", "옴니버스"],
			note: "",
			rowClass: ""
		},
		{
			name: "라이프스 게임 Life's Game",
			link: "https://m.kinolights.com/title/144601",
			year: "2025",
			broadcaster: "유튜브 LG그룹",
			ottName: "유튜브 LG그룹",
			ottLink: "https://www.youtube.com/watch?v=tfy3EAFxmqY&list=PL9Pxoayn9lmALTdbtGPJdCjDPFqopxCr8",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "웨이브에서도 시청가능",
			rowClass: ""
		},
		{
			name: "노엑싯게임룸 NO EXIT GAME ROOM",
			link: "https://m.kinolights.com/title/148781",
			year: "2025",
			broadcaster: "아무거나보틀, WAVVE",
			ottName: "WAVVE",
			ottLink: "https://www.wavve.com/player/vod?programid=C9902_C99000000048",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "아무거나보틀 유튜브에서도 시청가능",
			rowClass: ""
		},
		{
			name: "뇌볼루션: 기억의 지배자",
			link: "https://m.kinolights.com/title/149102",
			year: "2025",
			broadcaster: "E채널",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001780777",
			keywords: ["퍼즐", "두뇌"],
			note: "",
			rowClass: ""
		},
		{
			name: "네가지 소원",
			link: "",
			year: "2026",
			broadcaster: "유튜브 스튜디오 마인드제로",
			ottName: "유튜브 스튜디오 마인드제로",
			ottLink: "https://www.youtube.com/@MINDZEROstudio/videos",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "싱크로 게임",
			link: "https://m.kinolights.com/title/150147",
			year: "2026",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001783211",
			keywords: ["서바이벌", "두뇌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "데스게임 시즌 1: 천만원을 걸어라",
			link: "https://m.kinolights.com/title/149730",
			year: "2026",
			broadcaster: "NETFLIX",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/82679390",
			keywords: ["서바이벌", "두뇌"],
			note: "",
			rowClass: ""
		},
		{
			name: "데스게임 시즌 2: 최후의 승자",
			link: "https://m.kinolights.com/title/152207",
			year: "2026",
			broadcaster: "NETFLIX",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/82679390",
			keywords: ["서바이벌", "두뇌"],
			note: "",
			rowClass: ""
		},
		/*
		{
			name: "베팅 온 팩트",
			link: "https://m.kinolights.com/title/151135",
			year: "2026",
			broadcaster: "tvN",
			ottName: "WAVVE",
			ottLink: "https://www.wavve.com/player/vod?programid=C9901_C99000000187",
			keywords: [],
			note: "",
			rowClass: ""
		},
		*/
		{
			name: "머더클럽",
			link: "https://m.kinolights.com/season/153749",
			year: "2026",
			broadcaster: "Disney+",
			ottName: "Disney+",
			ottLink: "https://www.disneyplus.com/ko-kr/browse/entity-02b192fc-8bd3-498e-ac64-65245666fc39",
			keywords: ["추리", "마피아 게임", "롤플레잉"],
			note: "",
			rowClass: ""
		},
		{
			name: "배신자들 게임",
			link: "",
			year: "2026 예정",
			broadcaster: "TVING",
			ottName: "",
			ottLink: "",
			keywords: [],
			note: "",
			rowClass: "table-primary"
		},
		{
			name: "장동민 제작 서바이벌 게임 (가제)",
			link: "",
			year: "2027 예정",
			broadcaster: "NETFILX",
			ottName: "",
			ottLink: "",
			keywords: [],
			note: "",
			rowClass: "table-primary"
		}
    ],
    cate02: [
        {
			name: "박스",
			link: "https://m.kinolights.com/title/95967",
			year: "2015",
			broadcaster: "JTBC",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001459427",
			keywords: ["게임", "서바이벌", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "눈치왕",
			link: "https://m.kinolights.com/title/114003",
			year: "2015",
			broadcaster: "tvN",
			ottName: "",
			ottLink: "",
			keywords: ["게임", "서바이벌"],
			note: "전회차 스트리밍 불가",
			rowClass: "table-danger"
		},
		{
			name: "미추리 8-1000 시즌1",
			link: "https://m.kinolights.com/title/91419",
			year: "2018",
			broadcaster: "SBS",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/82009029",
			keywords: ["게임", "추리"],
			note: "",
			rowClass: ""
		},
		{
			name: "미추리 8-1000 시즌2",
			link: "https://m.kinolights.com/title/91434",
			year: "2019",
			broadcaster: "SBS",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/82009029",
			keywords: ["게임", "추리"],
			note: "",
			rowClass: ""
		},
		{
			name: "식스센스 1",
			link: "https://m.kinolights.com/title/86175",
			year: "2020",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001316154",
			keywords: ["게임", "추리"],
			note: "",
			rowClass: ""
		},
		{
			name: "식스센스 2",
			link: "https://m.kinolights.com/title/97472",
			year: "2021",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001483400",
			keywords: ["게임", "추리"],
			note: "",
			rowClass: ""
		},
		{
			name: "식스센스 3",
			link: "https://m.kinolights.com/title/104228",
			year: "2022",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001574198",
			keywords: ["게임", "추리"],
			note: "",
			rowClass: ""
		},
		{
			name: "신세계로부터",
			link: "https://m.kinolights.com/title/100127",
			year: "2021",
			broadcaster: "NETFLIX",
			ottName: "NETFLIX",
			ottLink: "https://www.netflix.com/title/81436207",
			keywords: ["게임", "어드벤처", "정치"],
			note: "",
			rowClass: ""
		},
		{
			name: "아파트404",
			link: "https://m.kinolights.com/title/129573",
			year: "2024",
			broadcaster: "tvN",
			ottName: "TVING",
			ottLink: "https://www.tving.com/contents/P001752153",
			keywords: ["게임", "추리"],
			note: "",
			rowClass: ""
		}
    ]
};

// 2. 테이블 렌더링 함수
function renderTable(containerId, list) {
    const $tbody = $(containerId);
    $tbody.empty(); // 초기화

    list.forEach(item => {
        // 이름 (링크 유무 처리)
        const nameHtml = item.link 
            ? `<a href="${item.link}" target="_blank">${item.name}</a>` 
            : item.name;

        // 스트리밍 링크 (링크 유무 처리)
        let ottHtml = ' ';
        if (item.ottName && item.ottLink) {
            ottHtml = `<a href="${item.ottLink}" target="_blank">${item.ottName} <i class="fa-solid fa-arrow-up-right-from-square"></i></a>`;
        }

        // 키워드 배열 문자열 변환
        const keywordsText = item.keywords.length > 0 ? item.keywords.join(', ') : ' ';

        // <tr> 생성
        const trHtml = `
            <tr class="${item.rowClass}">
                <td data-label="이름">${nameHtml}</td>
                <td data-label="방영년도">${item.year}</td>
                <td data-label="방송사">${item.broadcaster}</td>
                <td data-label="스트리밍" class="center link">${ottHtml}</td>
                <td data-label="키워드">${keywordsText}</td>
                <td data-label="비고">${item.note || ' '}</td>
            </tr>
        `;
        $tbody.append(trHtml);
    });
}

// 3. 페이지 로드 시 실행
$(function () {
    // 1. 테이블 동적 생성 (HTML을 생성함)
    renderTable('#tbody-cate-01', programData.cate01);
    renderTable('#tbody-cate-02', programData.cate02);

    // 2. 테이블 생성이 끝난 직후 tr 개수를 카운트함
    updateTotalsByCategory();

    // 3. 탭 클릭 이벤트
    $('.tab-nav').on('click', function (e) {
        e.preventDefault();

        const tabId = $(this).data('tab');

        // 모든 탭/컨텐츠에서 current 제거
        $('.tab-nav').removeClass('current');
        $('.tab-cont').removeClass('current');

        // 선택된 요소에만 current 추가
        $(this).addClass('current');
        $('#' + tabId).addClass('current');
    });
});

// 카운트 세는 함수 (배열 개수를 직접 읽거나, DOM element 개수 읽기 둘 다 가능)
function updateTotalsByCategory() {
    // [방법 B] 배열 개수로 바로 세기 (DOM을 안 거쳐서 더 빠름)
    const countCate01 = programData.cate01 ? programData.cate01.length : 0;
    const countCate02 = programData.cate02 ? programData.cate02.length : 0;

    $('#total-cate-01').text('(' + countCate01 + ')');
    $('#total-cate-02').text('(' + countCate02 + ')');
}