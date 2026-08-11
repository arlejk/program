// 1. OTT 링크 매핑 정보
const ottLinkMap = {
    '크라임씬 제로': {
        'NETFLIX': 'https://www.netflix.com/kr/title/81950435#season01'
    },
	'크라임씬 리턴즈': {
        'TVING': 'https://www.tving.com/contents/P001751684'
    },
	'크라임씬 3': {
        'TVING': 'https://www.tving.com/contents/P000539639',
        'NETFLIX': 'https://www.netflix.com/kr/title/82660827#season03'
    },
	'크라임씬 2': {
        'TVING': 'https://www.tving.com/contents/P000539640',
        'NETFLIX': 'https://www.netflix.com/kr/title/82660827#season02'
    },
	'크라임씬 1': {
        'TVING': 'https://www.tving.com/contents/P000539540',
        'NETFLIX': 'https://www.netflix.com/kr/title/82660827#season01'
    }
};

// 2. 데이터 구조 (크라임씬 회차 데이터)
const programData = {
    crimeScene: [
        { season: "크라임씬 제로", broadcaster: "NETFLIX", year: "2025", otts: ["NETFLIX"], epNum: "1", epTitle: "폐병원 살인사건", victim: "장제인", detective: "장탐정 (장진)", suspects: ["박접신 (박지윤)", "장사촌 (장동민)", "김미남 (김지훈)", "안의사 (안유진)"], guests: ["박이장 (박성웅)"], rowClass: "table-primary" },
        { season: "크라임씬 제로", broadcaster: "NETFLIX", year: "2025", otts: ["NETFLIX"], epNum: "2", epTitle: "폐병원 살인사건", victim: "장제인", detective: "장탐정 (장진)", suspects: ["박접신 (박지윤)", "장사촌 (장동민)", "김미남 (김지훈)", "안의사 (안유진)"], guests: ["박이장 (박성웅)"], rowClass: "table-primary" },
        { season: "크라임씬 제로", broadcaster: "NETFLIX", year: "2025", otts: ["NETFLIX"], epNum: "3", epTitle: "장례식장 살인사건", victim: "장막둥", detective: "안탐정 (안유진)", suspects: ["박부인 (박지윤)", "장남 (장진)", "장딸 (장동민)", "김연인 (김지훈)"], guests: ["주며늘 (주현영)"], rowClass: "table-primary" },
        { season: "크라임씬 제로", broadcaster: "NETFLIX", year: "2025", otts: ["NETFLIX"], epNum: "4", epTitle: "장례식장 살인사건", victim: "장막둥", detective: "안탐정 (안유진)", suspects: ["박부인 (박지윤)", "장남 (장진)", "장딸 (장동민)", "김연인 (김지훈)"], guests: ["주며늘 (주현영)"], rowClass: "table-primary" },
        { season: "크라임씬 제로", broadcaster: "NETFLIX", year: "2025", otts: ["NETFLIX"], epNum: "5", epTitle: "한강교 살인사건", victim: "박소윤", detective: "김탐정 (김지훈)", suspects: ["박카라 (박지윤)", "장절친 (장진)", "장이웃 (장동민)", "안메리 (안유진)"], guests: ["황갑부 (황인엽)"] },
        { season: "크라임씬 제로", broadcaster: "NETFLIX", year: "2025", otts: ["NETFLIX"], epNum: "6", epTitle: "한강교 살인사건", victim: "박소윤", detective: "김탐정 (김지훈)", suspects: ["박카라 (박지윤)", "장절친 (장진)", "장이웃 (장동민)", "안메리 (안유진)"], guests: ["황갑부 (황인엽)"] },
        { season: "크라임씬 제로", broadcaster: "NETFLIX", year: "2025", otts: ["NETFLIX"], epNum: "7", epTitle: "유흥가 살인사건", victim: "이건준-이건미", detective: "장탐정 (장동민)", suspects: ["박통닭 (박지윤)", "장편돌 (장진)", "김클럽 (김지훈)", "안댄서 (안유진)"], guests: ["하금수 (하석진)"], rowClass: "table-primary" },
        { season: "크라임씬 제로", broadcaster: "NETFLIX", year: "2025", otts: ["NETFLIX"], epNum: "8", epTitle: "유흥가 살인사건", victim: "이건준-이건미", detective: "장탐정 (장동민)", suspects: ["박통닭 (박지윤)", "장편돌 (장진)", "김클럽 (김지훈)", "안댄서 (안유진)"], guests: ["하금수 (하석진)"], rowClass: "table-primary" },
        { season: "크라임씬 제로", broadcaster: "NETFLIX", year: "2025", otts: ["NETFLIX"], epNum: "9", epTitle: "카지노 대부 살인사건", victim: "김봉천", detective: "박탐정 (박지윤)", suspects: ["장셰프 (장진)", "장아귀 (장동민)", "김싱어 (김지훈)", "안금방 (안유진)"], guests: ["전시장 (전소민)"] },
        { season: "크라임씬 제로", broadcaster: "NETFLIX", year: "2025", otts: ["NETFLIX"], epNum: "10", epTitle: "카지노 대부 살인사건", victim: "김봉천", detective: "박탐정 (박지윤)", suspects: ["장셰프 (장진)", "장아귀 (장동민)", "김싱어 (김지훈)", "안금방 (안유진)"], guests: ["전시장 (전소민)"] },

		{ season: "크라임씬 리턴즈", broadcaster: "TVING", year: "2024", otts: ["TVING"], epNum: "1", epTitle: "공항 살인사건", victim: "진예원", detective: "박탐정 (박지윤)", suspects: ["장명품 (장진)", "장풍무 (장동민)", "안비행 (안유진)", "주집착 (주현영)", "키예랑 (KEY)"], guests: [] },
        { season: "크라임씬 리턴즈", broadcaster: "TVING", year: "2024", otts: ["TVING"], epNum: "2", epTitle: "공항 살인사건", victim: "진예원", detective: "박탐정 (박지윤)", suspects: ["장명품 (장진)", "장풍무 (장동민)", "안비행 (안유진)", "주집착 (주현영)", "키예랑 (KEY)"], guests: [] },
        { season: "크라임씬 리턴즈", broadcaster: "TVING", year: "2024", otts: ["TVING"], epNum: "3", epTitle: "고시원 살인사건", victim: "황슬우", detective: "키경찰 (KEY)", suspects: ["박주인 (박지윤)", "장슈퍼 (장진)", "장일용 (장동민)", "안래퍼 (안유진)", "주만년 (주현영)"], guests: [], rowClass: "table-primary" },
        { season: "크라임씬 리턴즈", broadcaster: "TVING", year: "2024", otts: ["TVING"], epNum: "4", epTitle: "고시원 살인사건", victim: "황슬우", detective: "키경찰 (KEY)", suspects: ["박주인 (박지윤)", "장슈퍼 (장진)", "장일용 (장동민)", "안래퍼 (안유진)", "주만년 (주현영)"], guests: [], rowClass: "table-primary" },
        { season: "크라임씬 리턴즈", broadcaster: "TVING", year: "2024", otts: ["TVING"], epNum: "5", epTitle: "법원 살인사건", victim: "전민교", detective: "장탐정 (장동민)", suspects: ["박증인 (박지윤)", "장아빠 (장진)", "안기자 (안유진)", "주변호 (주현영)", "키보안 (KEY)"], guests: [] },
        { season: "크라임씬 리턴즈", broadcaster: "TVING", year: "2024", otts: ["TVING"], epNum: "6", epTitle: "법원 살인사건", victim: "전민교", detective: "장탐정 (장동민)", suspects: ["박증인 (박지윤)", "장아빠 (장진)", "안기자 (안유진)", "주변호 (주현영)", "키보안 (KEY)"], guests: [] },
        { season: "크라임씬 리턴즈", broadcaster: "TVING", year: "2024", otts: ["TVING"], epNum: "7", epTitle: "교주 살인사건", victim: "신교주", detective: "안탐정 (안유진)", suspects: ["박기생 (박지윤)", "장뚝딱 (장진)", "장의사 (장동민)", "주모던 (주현영)", "키맹신 (KEY)"], guests: [], rowClass: "table-primary" },
        { season: "크라임씬 리턴즈", broadcaster: "TVING", year: "2024", otts: ["TVING"], epNum: "8", epTitle: "교주 살인사건", victim: "신교주", detective: "안탐정 (안유진)", suspects: ["박기생 (박지윤)", "장뚝딱 (장진)", "장의사 (장동민)", "주모던 (주현영)", "키맹신 (KEY)"], guests: [], rowClass: "table-primary" },
        { season: "크라임씬 리턴즈", broadcaster: "TVING", year: "2024", otts: ["TVING"], epNum: "9", epTitle: "풍무 회장 살인사건", victim: "곽곡두", detective: "박탐정 (박지윤)", suspects: ["장비서 (장진)", "장사모 (장동민)", "곽유진 (안유진)", "주연구 (주현영)", "키사장 (KEY)"], guests: [] },
        { season: "크라임씬 리턴즈", broadcaster: "TVING", year: "2024", otts: ["TVING"], epNum: "10", epTitle: "풍무 회장 살인사건", victim: "곽곡두", detective: "박탐정 (박지윤)", suspects: ["장비서 (장진)", "장사모 (장동민)", "곽유진 (안유진)", "주연구 (주현영)", "키사장 (KEY)"], guests: [] },

		{ season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "1", epTitle: "대선 후보 살인사건", victim: "정동필", detective: "김지훈", suspects: ["박보좌 (박지윤)", "장후보 (장진)", "양알바 (양세형)", "정사모 (정은지)"], guests: ["송대표 (송재림)"] },
        { season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "2", epTitle: "스타 셰프 살인사건", victim: "최우진", detective: "양세형", suspects: ["박배우 (박지윤)", "장막내 (장진)", "김오너 (김지훈)", "정서빙 (정은지)"], guests: ["송부솊 (송재림)"] },
        { season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "3", epTitle: "경찰학교 살인사건", victim: "정종찬", detective: "장진", suspects: ["박교육 (박지윤)", "김교장 (김지훈)", "양급장 (양세형)"], guests: ["하강사 (하니)", "윤교수 (NS윤지)"] },
        { season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "4", epTitle: "사기꾼 살인사건", victim: "장영창", detective: "정은지", suspects: ["박형사 (박지윤)", "장비서 (장진)", "김팀장 (김지훈)", "양형사 (양세형)"], guests: ["김동포 (김병옥)"] },
        { season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "5", epTitle: "뮤지컬 배우 살인사건", victim: "노미오", detective: "양세형", suspects: ["박리엣 (박지윤)", "장감독 (장진)", "김관객 (김지훈)", "정대표 (정은지)"], guests: ["진스타 (진영)"] },
        { season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "6", epTitle: "숙다방 살인사건", victim: "이은숙", detective: "박지윤", suspects: ["디제이장 (장진)", "김화백 (김지훈)", "정숙녀 (정은지)"], guests: ["미스소 (소진)", "장당포 (장동민)"], rowClass: "table-primary" },
        { season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "7", epTitle: "캠핑장 살인사건", victim: "박지윤", detective: "박지윤", suspects: ["장진 (장진)", "김지훈 (김지훈)", "양세형 (양세형)", "정은지 (정은지)"], guests: ["차은우 (차은우)"], rowClass: "table-primary" },
        { season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "8", epTitle: "과학고 연쇄살인사건", victim: "김다래 / 김희연 / 김지선", detective: "홍진호", suspects: ["박지윤 (박지윤)", "장진 (장진)", "김지훈 (김지훈)", "양세형 (양세형)", "정은지 (정은지)"], guests: [], rowClass: "table-primary" },
        { season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "9", epTitle: "대저택 살인사건", victim: "장세민", detective: "장진", suspects: ["박케어 (박지윤)", "홍변호 (홍진호)", "양손님 (양세형)", "정손녀 (정은지)"], guests: ["장아들 (장동민)"], rowClass: "table-primary" },
        { season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "10", epTitle: "호텔 살인사건", victim: "장성규", detective: "표창원", suspects: ["박청소 (박지윤)", "장사업 (장진)", "홍단골 (홍진호)", "김건반 (김지훈)", "정텐더 (정은지)"], guests: [], rowClass: "table-primary" },
        { season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "11", epTitle: "섬마을 살인사건", victim: "조유림", detective: "양세형", suspects: ["박해녀 (박지윤)", "장통통 (장진)", "홍구녕 (홍진호)", "정토박 (정은지)"], guests: ["소이장 (소진)"], rowClass: "table-primary" },
        { season: "크라임씬 3", broadcaster: "JTBC", year: "2017", otts: [ "TVING", "NETFLIX" ], epNum: "12", epTitle: "크라임씬 작가 살인사건", victim: "최수진", detective: "", suspects: ["박지윤 (박지윤)", "장진 (장진)", "홍진호 (홍진호)", "김지훈 (김지훈)", "양세형 (양세형)", "정은지 (정은지)"], guests: [] },

		{ season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "1", epTitle: "갤러리 살인사건", victim: "심화나", detective: "장진", suspects: ["박관장 (박지윤)", "홍화가 (홍진호)", "장딜러 (장동민)", "하고객 (하니)"], guests: ["김경비 (김지훈)"] },
        { season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "2", epTitle: "통닭집 살인사건", victim: "김재원", detective: "박지윤", suspects: ["장책방 (장진)", "홍상회 (홍진호)", "장고물 (장동민)", "하부인 (하니)"], guests: ["김일꾼 (김지훈)"], rowClass: "table-primary" },
        { season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "3", epTitle: "미인대회 살인사건", victim: "박혜리", detective: "장동민", suspects: ["박미녀 (박지윤)", "장심사 (장진)", "홍기자 (홍진호)", "하백조 (하니)"], guests: ["오원장 (오현경)"], rowClass: "table-primary" },
        { season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "4", epTitle: "재벌가 여대생 살인사건", victim: "김재희", detective: "하니", suspects: ["박사업 (박지윤)", "장교포 (장진)", "홍베프 (홍진호)", "장남친 (장동민)"], guests: ["시가수 (시우민)"] },
        { season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "5", epTitle: "연예기획사 살인사건", victim: "아이돌", detective: "홍진호", suspects: ["박코디 (박지윤)", "장멤버 (장진)", "장로드 (장동민)", "하회장 (하니)"], guests: ["시보컬 (시우민)", "윤대표 (윤성호)"] },
        { season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "6", epTitle: "크루즈 살인사건", victim: "유기환", detective: "장진", suspects: ["박재즈 (박지윤)", "홍선장 (홍진호)", "장항해 (장동민)", "하승무원 (하니)"], guests: ["시매니저 (시우민)"], rowClass: "table-primary" },
        { season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "7", epTitle: "크루즈 살인사건", victim: "홍선장 (홍진호)", detective: "장진", suspects: ["박재즈 (박지윤)", "장항해 (장동민)", "하승무원 (하니)"], guests: ["윤부인 (NS윤지)", "홍포터 (강민혁)"], rowClass: "table-primary" },
        { season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "8", epTitle: "804호 살인사건", victim: "김혜림", detective: "장동민", suspects: ["박사지 (박지윤)", "장옆집 (장진)", "장진호 (홍진호)", "전하니 (하니)"], guests: ["전남편 (전현무)"] },
        { season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "9", epTitle: "교차로 살인사건", victim: "민소영", detective: "박지윤", suspects: ["장순정 (장진)", "홍정비 (홍진호)", "장대리 (장동민)", "하선녀 (하니)"], guests: ["권동기 (권보아)"] },
        { season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "10", epTitle: "산장 살인사건", victim: "이재기", detective: "홍진호", suspects: ["박요염 (박지윤)", "장포악 (장진)", "장미숙 (장동민)", "하고독 (하니)"], guests: ["김순진 (김지훈)"], rowClass: "table-primary" },
        { season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "11", epTitle: "크라임씬 PD 살인사건", victim: "윤현준", detective: "표창원", suspects: ["박지윤 (박지윤)", "장진 (장진)", "장동민 (장동민)", "홍진호 (홍진호)", "하니 (하니)"], guests: [] },
        { season: "크라임씬 2", broadcaster: "JTBC", year: "2015", otts: [ "TVING", "NETFLIX" ], epNum: "12", epTitle: "크라임씬 PD 살인사건", victim: "윤현준", detective: "표창원", suspects: ["박지윤 (박지윤)", "장진 (장진)", "장동민 (장동민)", "홍진호 (홍진호)", "하니 (하니)"], guests: [] },
	
		{ season: "크라임씬 1", broadcaster: "JTBC", year: "2014", otts: [ "TVING", "NETFLIX" ], epNum: "1", epTitle: "이덕만 회장 살인사건", victim: "이덕만", detective: "", suspects: ["김말순 (박지윤)", "도창수 (홍진호)", "박복남 (전현무)", "최미란 (NS윤지)", "이보은 (임방글)"], guests: ["김필도 (헨리)"] },
        { season: "크라임씬 1", broadcaster: "JTBC", year: "2014", otts: [ "TVING", "NETFLIX" ], epNum: "2", epTitle: "이덕만 회장 살인사건", victim: "이덕만", detective: "", suspects: ["김말순 (박지윤)", "도창수 (홍진호)", "박복남 (전현무)", "최미란 (NS윤지)", "이보은 (임방글)"], guests: ["김필도 (헨리)"] },
        { season: "크라임씬 1", broadcaster: "JTBC", year: "2014", otts: [ "TVING", "NETFLIX" ], epNum: "3", epTitle: "미술실 살인사건", victim: "세라", detective: "", suspects: ["매기 (박지윤)", "톰 (홍진호)", "존 (전현무)", "제인 (NS윤지)", "안나 (임방글)"], guests: ["잭 (헨리)"] },
        { season: "크라임씬 1", broadcaster: "JTBC", year: "2014", otts: [ "TVING", "NETFLIX" ], epNum: "4", epTitle: "미술실 살인사건", victim: "세라", detective: "", suspects: ["매기 (박지윤)", "톰 (홍진호)", "존 (전현무)", "제인 (NS윤지)", "안나 (임방글)"], guests: ["잭 (헨리)"] },
        { season: "크라임씬 1", broadcaster: "JTBC", year: "2014", otts: [ "TVING", "NETFLIX" ], epNum: "5", epTitle: "이팀장 살인사건", victim: "이상미", detective: "임문규", suspects: ["장대행 (박지윤)", "천보안 (홍진호)", "마이사 (전현무)", "김비서 (NS윤지)", "윤사원 (임방글)"], guests: ["최과장 (강민혁)"] },
        { season: "크라임씬 1", broadcaster: "JTBC", year: "2014", otts: [ "TVING", "NETFLIX" ], epNum: "6", epTitle: "이팀장 살인사건", victim: "이상미", detective: "", suspects: ["장대행 (박지윤)", "천보안 (홍진호)", "마이사 (전현무)", "김비서 (NS윤지)", "윤사원 (임방글)"], guests: ["최과장 (강민혁)"] },
        { season: "크라임씬 1", broadcaster: "JTBC", year: "2014", otts: [ "TVING", "NETFLIX" ], epNum: "7", epTitle: "교도소 살인사건", victim: "이창우", detective: "", suspects: ["박절도 (박지윤)", "홍무기 (홍진호)", "전조폭 (전현무)", "김간수 (NS윤지)", "강소매 (강용석)"], guests: ["김횡령 (김성규)"] },
        { season: "크라임씬 1", broadcaster: "JTBC", year: "2014", otts: [ "TVING", "NETFLIX" ], epNum: "8", epTitle: "고여사 살인사건", victim: "고혜진", detective: "", suspects: ["박미인 (박지윤)", "홍원장 (홍진호)", "전시모 (전현무)", "윤가정 (NS윤지)", "강배달 (강용석)"], guests: ["소원무 (소유)"] },
        { season: "크라임씬 1", broadcaster: "JTBC", year: "2014", otts: [ "TVING", "NETFLIX" ], epNum: "9", epTitle: "축구장 살인사건", victim: "신영광", detective: "", suspects: ["박여친 (박지윤)", "홍선수 (홍진호)", "전기자 (전현무)", "윤부심 (NS윤지)", "강키퍼 (강용석)"], guests: ["키감독 (KEY)"] },
        { season: "크라임씬 1", broadcaster: "JTBC", year: "2014", otts: [ "TVING", "NETFLIX" ], epNum: "10", epTitle: "여배우 살인사건", victim: "전효진", detective: "임문규", suspects: ["박엔터 (박지윤)", "홍소품 (홍진호)", "전스타 (전현무)", "윤조연 (NS윤지)", "강제작 (강용석)"], guests: ["민감독 (강민혁)"], rowClass: "table-primary" }
    ]
};

// 강조할 역/출연진 명단 목록
const highlightedCasts = new Set([
    // 박지윤
    "박재즈", "박미녀", "박요염", "박접신", "박해녀",
	// 장진
    "장편돌", "디제이장", "장심사", "장포악", "장멤버",    
    // 장동민
    "장딸", "장항해", "장미숙", "장아들", "장아귀",
    // 홍진호
	"홍선장", "홍변호", "홍구녕", "홍단골", "장진호",
	// 김지훈
    "김건반", "김순진", "김일꾼", "김연인",    
	// 안유진
    "안댄서", "안비행", "안래퍼", "안메리",
	// 그밖에
	"정텐더", "정숙녀", "정토박",
	"하선녀", "하승무원", "하고독",
	"주만년", "주모던", "주며늘",
	"양급장", "양손님", "키맹신",
	// 게스트
	"오원장", "윤부인", "미스소", "소이장", "하금수" 
]);

// 3. 출연진 역할/이름 분리 함수
function parseCastName(rawText) {
    if (!rawText) return { role: '', actor: '' };
    const match = rawText.match(/^(.*?)\s*\((.*?)\)$/);
    if (match) {
        return { role: match[1].trim(), actor: match[2].trim() };
    }
    return { role: '', actor: rawText.trim() };
}

// 용의자 출연진 다빈도 순위 계산
function getSuspectActorCounts() {
    const actorCounts = {};
    programData.crimeScene.forEach(item => {
        if (Array.isArray(item.suspects)) {
            item.suspects.forEach(s => {
                const { actor } = parseCastName(s);
                if (actor) {
                    actorCounts[actor] = (actorCounts[actor] || 0) + 1;
                }
            });
        }
    });
    return actorCounts;
}

const suspectCounts = getSuspectActorCounts();

// 4. 용의자 출연진 다빈도 순 정렬
function sortSuspectsByFrequency(suspectList) {
    if (!Array.isArray(suspectList)) return [];
    return [...suspectList].sort((a, b) => {
        const actorA = parseCastName(a).actor;
        const actorB = parseCastName(b).actor;
        const countA = suspectCounts[actorA] || 0;
        const countB = suspectCounts[actorB] || 0;

        if (countB !== countA) {
            return countB - countA;
        }
        return actorA.localeCompare(actorB, 'ko');
    });
}

// 5. 출연진 배지 HTML 생성 함수 (epTitle 전달받아 세부 판별)
function renderCastTag(rawText, epTitle) {
    if (!rawText || rawText.trim() === '') return '-';
    const { role, actor } = parseCastName(rawText);

    // 1) 기본 역할명 체크
    let isHighlighted = role ? highlightedCasts.has(role) : highlightedCasts.has(actor);

    // 2) 캠핑장, 과학고 회차 예외 처리
    const specialEpisodes = ["캠핑장 살인사건", "과학고 연쇄살인사건"];
    const specialActors = ["김지훈", "양세형"];

    if (specialActors.includes(actor) && specialEpisodes.includes(epTitle)) {
        isHighlighted = true;
    }

    const badgeClass = isHighlighted ? "bg-primary text-white" : "bg-light text-dark";

    if (role && actor) {
        const textMutedClass = isHighlighted ? "text-white-50" : "text-muted";
        return `<span class="badge ${badgeClass} keyword-tag mr-1" data-keyword="${actor}">
                    ${role} <small class="${textMutedClass}">(${actor})</small>
                </span>`;
    } else {
        return `<span class="badge ${badgeClass} keyword-tag mr-1" data-keyword="${actor}">
                    ${actor}
                </span>`;
    }
}

// 6. 키워드 필터 버튼 생성 (10회 이상 기본 노출, 10회 미만 더보기 처리)
let currentKeyword = 'all';

function renderKeywordButtons() {
    const actorCounts = {};

    programData.crimeScene.forEach(item => {
        const victimActor = (item.victim && item.victim.includes('(')) ? parseCastName(item.victim).actor : null;

        const allCasts = [
            victimActor,
            parseCastName(item.detective).actor,
            ...(item.suspects || []).map(s => parseCastName(s).actor),
            ...(item.guests || []).map(g => parseCastName(g).actor)
        ];

        allCasts.forEach(actor => {
            if (actor) {
                actorCounts[actor] = (actorCounts[actor] || 0) + 1;
            }
        });
    });

    const sortedActors = Object.keys(actorCounts).sort((a, b) => {
        if (actorCounts[b] !== actorCounts[a]) {
            return actorCounts[b] - actorCounts[a];
        }
        return a.localeCompare(b, 'ko');
    });

    const $wrap = $('.keyword-filter-wrap');
    $wrap.empty();
    $wrap.append('<button class="btn btn-secondary btn-keyword active" data-keyword="all">전체보기</button> ');

    let moreHtml = '<span id="more-keywords" style="display: none;">';
    let hasMore = false;

    sortedActors.forEach(actor => {
        const count = actorCounts[actor];
        const btnHtml = `<button class="btn btn-outline-dark btn-keyword" data-keyword="${actor}">#${actor} <small class="text-muted">(${count})</small></button> `;

        if (count >= 10) {
            $wrap.append(btnHtml);
        } else {
            moreHtml += btnHtml;
            hasMore = true;
        }
    });

    moreHtml += '</span>';

    if (hasMore) {
        $wrap.append(moreHtml);
        $wrap.append('<button class="btn btn-outline-secondary btn-toggle-more ml-1">+ 더보기</button>');
    }
}

// 7. 테이블 렌더링 함수 (renderCastTag 호출 시 item.epTitle 인자 전달)
function renderTable(containerId, list) {
    const $tbody = $(containerId);
    $tbody.empty();

    // 1) 시즌 우선순위 정의
    const seasonOrder = {
        "크라임씬 제로": 1,
        "크라임씬 리턴즈": 2,
        "크라임씬 3": 3,
        "크라임씬 2": 4,
        "크라임씬 1": 5
    };

    // 2) 시즌 순 ➔ epNum 숫자 순 대로 데이터 정렬
    const sortedList = [...list].sort((a, b) => {
        const orderA = seasonOrder[a.season] || 99;
        const orderB = seasonOrder[b.season] || 99;

        if (orderA !== orderB) {
            return orderA - orderB; // 시즌 순서 정렬
        }
        return Number(a.epNum) - Number(b.epNum); // 동일 시즌 내 회차(EP) 순서 정렬
    });

    let filteredList = sortedList;
    if (currentKeyword !== 'all') {
        filteredList = sortedList.filter(item => {
            const victimActor = (item.victim && item.victim.includes('(')) ? parseCastName(item.victim).actor : null;

            const allCasts = [
                victimActor,
                parseCastName(item.detective).actor,
                ...(item.suspects || []).map(s => parseCastName(s).actor),
                ...(item.guests || []).map(g => parseCastName(g).actor)
            ];
            return allCasts.includes(currentKeyword);
        });
    }

    if (filteredList.length === 0) {
        $tbody.append('<tr><td colspan="7" class="center text-muted py-4">해당 출연진의 회차 정보가 없습니다.</td></tr>');
        return;
    }

    filteredList.forEach(item => {
        // 스트리밍 링크 처리
        let ottHtml = '-';
        if (Array.isArray(item.otts) && item.otts.length > 0) {
            const seasonName = item.season;
            const seasonMap = ottLinkMap[seasonName] || ottLinkMap[seasonName.replace(' 1', '')];

            ottHtml = item.otts.map(ottName => {
                const link = (seasonMap && seasonMap[ottName]) ? seasonMap[ottName] : '#';
                return `<a href="${link}" target="_blank" class="mr-1">${ottName}</a>`;
            }).join(' ');
        }

        // renderCastTag 호출 시 item.epTitle 인자 전달
        const victimHtml = (item.victim && item.victim.includes('(')) 
            ? renderCastTag(item.victim, item.epTitle) 
            : (item.victim || '-');

        const detectiveHtml = renderCastTag(item.detective, item.epTitle);
        const sortedSuspects = sortSuspectsByFrequency(item.suspects);
        const suspectsHtml = sortedSuspects.map(s => renderCastTag(s, item.epTitle)).join(' ');
        const guestsHtml = (item.guests && item.guests.length > 0)
            ? item.guests.map(g => renderCastTag(g, item.epTitle)).join(' ')
            : '-';

        const trClass = item.rowClass ? ` class="${item.rowClass}"` : '';

        const trHtml = `
            <tr${trClass}>
                <td data-label="시즌">${item.season}</td>
                <td data-label="에피소드"><strong>EP.${item.epNum}</strong> ${item.epTitle}</td>
                <td data-label="스트리밍" class="center link">${ottHtml}</td>
                <td data-label="피해자">${victimHtml}</td>
                <td data-label="탐정/형사">${detectiveHtml}</td>
                <td data-label="용의자">${suspectsHtml}</td>
                <td data-label="게스트">${guestsHtml}</td>
            </tr>
        `;
        $tbody.append(trHtml);
    });
}

// 8. 초기화 및 이벤트 등록
$(function () {
    renderKeywordButtons();
    renderTable('#tbody-cate-01', programData.crimeScene);

    // 더보기 / 접기 토글 이벤트
    $(document).on('click', '.btn-toggle-more', function () {
        const $moreBox = $('#more-keywords');
        
        if ($moreBox.is(':visible')) {
            $moreBox.hide();
            $(this).text('+ 더보기');
        } else {
            $moreBox.css('display', 'flex');
            $(this).text('- 접기');
        }
    });

    $(document).on('click', '.btn-keyword', function () {
        currentKeyword = $(this).data('keyword');
        $('.btn-keyword').removeClass('active btn-secondary btn-dark').addClass('btn-outline-dark');
        
        if (currentKeyword === 'all') {
            $(this).addClass('active btn-secondary').removeClass('btn-outline-dark');
        } else {
            $(this).addClass('active btn-dark').removeClass('btn-outline-dark');
        }

        renderTable('#tbody-cate-01', programData.crimeScene);
    });

    $(document).on('click', '.keyword-tag', function () {
        const keyword = $(this).data('keyword');
        
        const $targetBtn = $(`.btn-keyword[data-keyword="${keyword}"]`);
        if ($targetBtn.closest('#more-keywords').length > 0) {
            $('#more-keywords').css('display', 'flex');
            $('.btn-toggle-more').text('- 접기');
        }

        $targetBtn.trigger('click');
    });
});