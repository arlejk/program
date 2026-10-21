// ==========================================
// 1. 시리즈(기수) 기본 정보
// ==========================================
const teenieSeasonMeta = {
	1: {
		label: '1기', title: '캐치! 티니핑', theme: '큐브 티니핑', year: '2020', offset: 0,
		desc: '인간의 감정을 모티브로 만들어진 티니핑. 1기 2부부터는 감정 외에 다양한 소재의 티니핑도 등장한다.'
	},
	2: {
		label: '2기', title: '반짝반짝 캐치! 티니핑', theme: '보석 티니핑', year: '2021', offset: 52,
		desc: '보석을 모티브로 만들어진 티니핑. 각자 상징 보석을 지니고 있으며, 2기부터 시즌당 26부작으로 고정되었다.'
	},
	3: {
		label: '3기', title: '알쏭달쏭 캐치! 티니핑', theme: '열쇠 티니핑', year: '2022', offset: 78,
		desc: '직업을 모티브로 만들어진 티니핑(로열 티니핑은 사계절 모티브). 열쇠로 주변 물건으로 변신하며, 티니핑이 옷을 입기 시작한 첫 시즌이다.'
	},
	4: {
		label: '4기', title: '새콤달콤 캐치! 티니핑', theme: '디저트 티니핑', year: '2023', offset: 104,
		desc: '디저트를 비롯한 제과·제빵류를 모티브로 만들어진 티니핑. 슈가실드라는 보호막으로 자신을 보호한다.'
	},
	5: {
		label: '5기', title: '슈팅스타 캐치! 티니핑', theme: '스타 티니핑', year: '2024', offset: 130,
		desc: '천체를 모티브로 만들어진 티니핑. 투명화 능력을 가지고 있으며, 레전드 티니핑에게 거대한 날개가 설정되기 시작한 시즌이다.'
	},
	6: {
		label: '6기', title: '프린세스 캐치! 티니핑', theme: '프린세스&프린스 티니핑', year: '2025', offset: 156,
		desc: '공주·왕자를 모티브로 만들어진 티니핑으로, 각자 특정 나라의 공주·왕자 역할을 맡는다. 성별에 따라 프린세스/프린스로 구분한 첫 시즌이다.',
		stream: { label: 'DISNEY+', url: 'https://www.disneyplus.com/ko-kr/browse/entity-d5413ef2-3233-4bf8-8d3c-2cfa8a0653e1' }
	},
	7: {
		label: '7기', title: '쥬얼스타 캐치! 티니핑', theme: '쥬얼스타 티니핑', year: '2026', offset: 182,
		desc: '2026년 10월 기준 공개된 개체는 대부분 동물 모티프. 로열 티니핑 전원이 폼 체인지를 하며, 티니핑 본인이 직접 변신하는 시스템이다.',
		caveat: '※ 2026년 10월 기준 공개된 정보이며, 레전드 티니핑(뮤즈핑·디바핑)은 추정입니다.'
	}
};
const teenieSeasonKeys = [1, 2, 3, 4, 5, 6, 7];

const teenieGradeLabel = {
	royal: '로열 티니핑',
	legend: '레전드 티니핑',
	normal: '일반 티니핑',
	etc: '기타 티니핑 (집계 제외)'
};
const teenieGradeOrder = ['royal', 'legend', 'normal', 'etc'];

// ==========================================
// 2. 회차 데이터
//    title   : 에피소드 제목
//    date    : 방영일
//    yt      : 유튜브 ID (없으면 '')
//    note    : 비고
//    teenies : 출연 티니핑 (빈 배열이면 제목에서 이름을 자동 추출)
//    princess: 로미의 프린세스 변신 기록 (나무위키 변신 기록 기준, '프린세스 ' 생략)
//              - 변신이 없거나 불명이면 [], 한 화에 여러 번 변신하면 순서대로 모두 기재
//              - 취소선(변신 실패/미완료) 기록은 제외, 같은 화에 완료된 변신이 있으면 그것만 기재
//    - 누적 회차는 기수별 offset + 회차로 계산
// ==========================================
const teenieEpisodeSeeds = {
	1: [
		{ title: '엉망진창 쿠키 만들기', date: '2020.03.19', yt: 'pglnkdt-RSk', note: '하트로즈에 장난치는 키키핑의 등장으로 엉망진창이 된 쿠키 만들기 소동.', teenies: ['키키핑'], princess: ['하트'] },
		{ title: '아잉핑이 너무해!', date: '2020.03.26', yt: 'nFl47Dx1qco', note: '애교 마법으로 사람들을 응석받이로 만드는 아잉핑을 캐치하기 위한 대소동.', teenies: ['아잉핑'], princess: ['하트'] },
		{ title: '부끄러워하지 마~', date: '2020.04.02', yt: 'FVnAqF_GZYQ', note: '모든 것을 부끄럽게 만들어 버리는 부끄핑과 수줍은 상황들.', teenies: ['부끄핑'], princess: ['하트'] },
		{ title: '올바름의 티니핑, 바로핑', date: '2020.04.09', yt: 'CgQnJpGLN-s', note: '바른 생활 선도부장 바로핑의 등장과 로미와의 첫 만남.', teenies: ['바로핑'], princess: ['하트'] },
		{ title: '최고는 누구?', date: '2020.04.16', yt: 'v5o1XpS2hWg', note: '무엇이든 승부를 겨루게 만드는 부투핑의 등장.', teenies: ['부투핑'], princess: ['클라우디아'] },
		{ title: '용기를 내, 마야!', date: '2020.04.23', yt: 'RUHo--AxFtU', note: '용기의 티니핑 아자핑을 만나 마야에게 용기를 주는 이야기.', teenies: ['아자핑'], princess: ['하트'] },
		{ title: '깜빡할 수도 있지~', date: '2020.05.07', yt: 'AzoN6-WdLSE', note: '초기 기획 제목: ‘그럴 수도 있지~’ · 4/30 부처님오신날 특집 편성으로 결방. 건망증을 유발하는 깜빡핑.', teenies: ['깜빡핑'], princess: ['클라우디아'] },
		{ title: '배고플 땐 상상해 봐', date: '2020.05.14', yt: '_IrjI3Zm-FU', note: '헛상상을 보여주는 띠용핑의 마법에 빠진 메리루와 하트로즈.', teenies: ['띠용핑'], princess: ['하트'] },
		{ title: '희망아, 어서 와', date: '2020.05.21', yt: 'S0VM9rRIrfI', note: '희망의 티니핑 차차핑이 나타나 마야 어머니의 꽃가게를 돕는 이야기.', teenies: ['차차핑'], princess: ['하트'] },
		{ title: '눈물사탕은 어떤 맛?', date: '2020.05.28', yt: 'l-dWqcFt2aw', note: '사람들을 울려 눈물사탕을 만드는 주르핑과의 대결.', teenies: ['주르핑'], princess: ['클로버'] },
		{ title: '차나핑을 찾아라!', date: '2020.06.04', yt: 'ROqxe8V4AWg', note: '귀찮음 마법을 거는 차나핑을 캐치하기 위해 나선 로미.', teenies: ['차나핑'], princess: ['스타'] },
		{ title: '즐겁게 노래 불러 봐', date: '2020.06.11', yt: 'qc9DB9sh0vI', note: '즐거운 신나는 감정의 라라핑이 등장하여 노래 소동을 일으킴.', teenies: ['라라핑'], princess: ['하트'] },
		{ title: '날 따라 해봐요', date: '2020.06.18', yt: 'Oa05QqabEAQ', note: '초기 기획 제목: ‘따라핑의 팬심’. 헤이쥬의 동작을 남들에게 똑같이 따라하게 만드는 따라핑.', teenies: ['따라핑'], princess: ['멜로디'] },
		{ title: '거울을 보면 안 돼', date: '2020.06.25', yt: '9Yq1x-lqmF4', note: '초기 기획 제목: ‘거울을 봐서는 안 돼’. 외모에 집착하게 만드는 나르핑.', teenies: ['나르핑'], princess: ['하트', '클라우디아'] },
		{ title: '돌아와, 하츄핑', date: '2020.07.02', yt: 'WrPnyvS5LsY', note: '초기 기획 제목: ‘하츄핑의 가출’. 서운함으로 집을 나간 하츄핑과 로미의 우정.', teenies: ['하츄핑'], princess: [] },
		{ title: '무셔핑의 사진 찍기', date: '2020.07.09', yt: 'zprBK9cvhkA', note: '초기 기획 제목: ‘무셔무셔 사진 찍기 대소동’. 무서운 유령 사진을 찍어 소란을 피우는 무셔핑.', teenies: ['무셔핑'], princess: ['스타'] },
		{ title: '나만 사랑해 줘!', date: '2020.07.16', yt: '94zttO4-YcE', note: '질투심을 유발하는 투투핑이 프린세스 하트에게 한눈반해 벌어지는 사건.', teenies: ['투투핑'], princess: ['하트'] },
		{ title: '좌충우돌 생일 파티', date: '2020.07.23', yt: '6zDvlZzz9u8', note: '초기 기획 제목: ‘좌충우돌, 로미의 생일 파티!’. 깜빡핑으로 인해 생긴 소동을 극복하는 생일파티.', teenies: ['깜빡핑'], princess: [] },
		{ title: '행운을 부르는 도장', date: '2020.07.30', yt: 'nMM1Fikslyw', note: '초기 기획 제목: ‘행운의 스탬프를 찾아라!’. 착한 사람에게 칭찬 도장을 찍어주는 차캐핑.', teenies: ['차캐핑'], princess: ['클라우디아'] },
		{ title: '다 말해 버릴 거야!', date: '2020.08.06', yt: '1NXR4dVCcfE', note: '초기 기획 제목: ‘수다쟁이는 도대체 누구야?’. 비밀을 사방에 소문내고 다니는 떠벌핑.', teenies: ['떠벌핑'], princess: ['클로버'] },
		{ title: '풍선껌 대소동', date: '2020.08.13', yt: '706niqUuXjg', note: '장난으로 사람들을 풍선껌에 붙여버리는 찌질핑/아자핑과의 액션.', teenies: ['아자핑'], princess: ['하트'] },
		{ title: '욕심쟁이 다조핑', date: '2020.08.20', yt: 'JxC2fW0MDhQ', note: '초기 기획 제목: ‘다 줘요! 내 꺼야!’. 먹을 것과 과자를 모조리 독점하려는 다조핑.', teenies: ['다조핑'], princess: ['스타'] },
		{ title: '화내지 말아줘', date: '2020.08.27', yt: 'jmU5wdysSZw', note: '화를 주체하지 못하고 분노 폭발을 시키는 화나핑.', teenies: ['화나핑'], princess: ['클로버'] },
		{ title: '바로핑이 많아졌어요!', date: '2020.09.03', yt: '50aBoQlQgHQ', note: '복제 마법으로 분신들이 넘쳐나는 바로핑 대소동.', teenies: ['바로핑'], princess: ['멜로디'] },
		{ title: '싫어 싫어, 시러핑!', date: '2020.09.10', yt: 'jF3HEJENPqI', note: '초기 기획 제목: ‘시러시러, 시러핑!’. 무조건 거절하게 만드는 시러핑과 이중부정 수법.', teenies: ['시러핑'], princess: ['하트', '클로버'] },
		{ title: '바네핑의 화살', date: '2020.09.17', yt: 'eKY1k1M02X4', note: '초기 기획 제목: ‘사랑해! 대소동’. 반하게 만드는 큐피드 화살을 쏘는 바네핑.', teenies: ['바네핑'], princess: ['하트', '멜로디'] },
		{ title: '장난이 제일 좋아!', date: '2020.09.24', yt: 'G4LxgiYC5Vs', note: '정체불명의 수수께끼 장난꾸러기 악동핑의 첫 등장.', teenies: ['악동핑'], princess: ['하트'] },
		{ title: '춥다, 추워! 덜덜핑', date: '2020.10.08', yt: 'PyfBna37VjM', note: '추위 마법을 부려 주변을 동결시키는 덜덜핑.', teenies: ['덜덜핑'], princess: ['클로버'] },
		{ title: '그림이 살아있다?', date: '2020.10.15', yt: 'ROynsahTutY', note: '그림을 현실로 실체화시키는 그림핑의 등장.', teenies: ['그림핑'], princess: ['클로버'] },
		{ title: '동화 속 공주님이 되고 싶어', date: '2020.10.22', yt: 'vT-tUQ8iGec', note: '마야의 소원을 들어주기 위해 동화 속 공주님 파티를 여는 로미와 친구들.', teenies: [], princess: ['클라우디아'] },
		{ title: '아휴~ 무거워, 무거핑', date: '2020.10.29', yt: '2TVr0PXstjw', note: '모든 물건과 마음을 무겁게 만들어버리는 무거핑.', teenies: ['무거핑'], princess: ['스타'] },
		{ title: '뭐든지 거꾸로, 꺼꿀핑', date: '2020.11.05', yt: 'p5hXhz1n2mY', note: '세상의 상하좌우를 거꾸로 뒤집어놓는 꺼꿀핑.', teenies: ['꺼꿀핑'], princess: ['멜로디'] },
		{ title: '다섯 명의 로미', date: '2020.11.12', yt: 'R4GV0v2BR6U', note: '프린세스 선샤인을 제외한 5명이 모두 변신하여 악동핑의 분신들에 맞섬.', teenies: ['악동핑'], princess: ['하트', '클라우디아', '클로버', '스타', '멜로디'] },
		{ title: '씽씽핑은 빠른 게 좋아!', date: '2020.11.19', yt: 'ZxKmHqmORN4', note: '스피드광 씽씽핑과 가짜 티니하트윙을 이용한 캐치 작전.', teenies: ['씽씽핑'], princess: ['클라우디아'] },
		{ title: '아기가 좋아, 베베핑!', date: '2020.11.26', yt: 'kvFJr2OoOqU', note: '사람들을 아기로 만들어버리는 베베핑의 응애 마법.', teenies: ['베베핑'], princess: ['멜로디'] },
		{ title: '하트로즈에 외계인 등장!', date: '2020.12.03', yt: 'hSB-8RbHZhI', note: '외계인 오해 소동과 함께 벌어지는 하트로즈의 에피소드.', teenies: [], princess: [] },
		{ title: '잠자는 하트로즈의 공주', date: '2020.12.10', yt: 'OXhucuyJNFY', note: '잠자는 숲속의 공주 패러디. 깊은 잠에 빠뜨리는 코자핑.', teenies: ['코자핑'], princess: ['스타'] },
		{ title: '로미, 레나랑 딱 붙다?', date: '2020.12.17', yt: 'oL9-7eus26E', note: '접착제로 로미와 앙숙 레나를 한 몸처럼 붙여버린 딱풀핑.', teenies: ['딱풀핑'], princess: ['하트'] },
		{ title: '토끼 괴물이 나타났다!', date: '2020.12.24', yt: '35txjFsYGT8', note: '호기심이 많아 사물을 돋보기로 거대화시키는 모야핑.', teenies: ['모야핑'], princess: ['하트'] },
		{ title: '티니핑 축제', date: '2020.12.31', yt: '-nhVnbgoM7c', note: '해핑의 반가운 등장과 티니핑들이 함께 즐기는 마을 축제.', teenies: ['해핑'], princess: [] },
		{ title: '장난감이 되었어요!', date: '2021.01.07', yt: 'w-7opR3rVtI', note: '사람들을 살아있는 인형 장난감으로 만들어 버리는 토이핑.', teenies: ['토이핑'], princess: ['스타'] },
		{ title: '하트로즈의 수상한 손님', date: '2021.01.14', yt: 'Sl7gqg5rtBA', note: '변장 마법으로 하트로즈 손님으로 변신하는 또까핑.', teenies: ['또까핑'], princess: ['클라우디아'] },
		{ title: '꽃 만들기 대소동', date: '2021.01.21', yt: 'Ky1Z05p5gU4', note: '주변을 온통 꽃밭으로 가꾸고 만개시키는 플라핑.', teenies: ['플라핑'], princess: ['클로버'] },
		{ title: '사고뭉치 아기 노리핑', date: '2021.01.28', yt: 'NVf22BcQrWA', note: '하트로즈의 새 식구가 된 노라핑과 어마어마한 능력을 지닌 아기 노리핑 형제 이야기.', teenies: ['노라핑', '노리핑'], princess: ['멜로디'] },
		{ title: '악동핑의 진실', date: '2021.02.04', yt: '6Djmlq69_ag', note: '악동핑의 진짜 정체와 해핑의 마법에 숨겨진 비밀이 드러남.', teenies: ['해핑', '악동핑'], princess: ['스타', '하트'] },
		{ title: '프린세스 선샤인', date: '2021.02.18', yt: 'R9Xl7QiNnlU', note: '해핑이 본래의 모습을 찾고 로미가 프린세스 선샤인으로 변신.', teenies: ['해핑', '아휴핑'], princess: ['선샤인'] },
		{ title: '공부할 땐 조용히, 똑똑!', date: '2021.02.25', yt: 'G7cbVWRP_HM', note: '학구열과 조용히 시험 공부하기를 강요하는 똑똑핑.', teenies: ['똑똑핑'], princess: ['클라우디아'] },
		{ title: '다 얼려 버려, 꽁꽁핑', date: '2021.03.04', yt: 'EJM9t9BlK8k', note: '주변 온도를 영하로 내리고 얼음으로 만드는 꽁꽁핑.', teenies: ['꽁꽁핑'], princess: ['선샤인'] },
		{ title: '찌릿핑은 짜릿짜릿해', date: '2021.03.11', yt: 'QWxAqN4wE4c', note: '시리즈 유일 15세 이상 시청가. 감전과 전기 마법을 쏘는 위험천만 찌릿핑.', teenies: ['찌릿핑'], princess: ['클라우디아', '선샤인'] },
		{ title: '바다에서 온 티니핑', date: '2021.03.18', yt: 'qJ9laZd55fA', note: '외로움을 타며 혼자 있기를 좋아하는 홀로핑.', teenies: ['홀로핑'], princess: ['클로버'] },
		{ title: '로열핑의 이름으로!', date: '2021.03.25', yt: 'IkZLDHoFeXU', note: '흑화된 앙대핑의 부활과 위험에 빠진 하모니 마을.', teenies: ['앙대핑'], princess: ['하트', '멜로디'] },
		{ title: '프린세스 베로니카', date: '2021.04.01', yt: 'DJ998RbjqqQ', note: '모든 로열핑들의 힘을 모아 궁극의 프린세스 베로니카로 변신해 앙대핑을 정화.', teenies: ['하츄핑', '바로핑', '아자핑', '차차핑', '라라핑', '해핑', '앙대핑'], princess: ['베로니카'] }
	],
	2: [
		{ title: '반짝반짝 보석티니핑', date: '2021.09.22', yt: '_Trni5YhFUw', note: '보석숲의 보석티니핑들이 지구로 떨어지고 새로운 보석 로열핑들과 첫 만남.', teenies: ['방글핑', '조아핑', '믿어핑'], princess: ['다이아하트'] },
		{ title: '티니핑 스쿨 개교!', date: '2021.09.29', yt: 'jKAXq4IJHv8', note: '지구에 건립된 티니핑 스쿨과 보석핑 캐치 미션 개시.', teenies: ['방글핑', '조아핑', '믿어핑'], princess: ['다이아하트'] },
		{ title: '간지럼을 참아야 해!', date: '2021.10.06', yt: 'alEFGDOSu60', note: '간지럼 깃털로 웃음 폭탄을 안기는 까르핑.', teenies: ['까르핑'], princess: ['루비'] },
		{ title: '아야아야 엄살은 그만!', date: '2021.10.13', yt: '5Nf5Gt6ThUU', note: '엄살과 통증을 유발하는 아야핑의 응급 치료 소동.', teenies: ['아야핑'], princess: ['사파이어'] },
		{ title: '소원핑의 세 가지 소원', date: '2021.10.20', yt: 'WDY_SuqaN3Q', note: '램프의 요정처럼 소원을 들어주는 소원핑.', teenies: ['소원핑'], princess: ['다이아하트'] },
		{ title: '토닥토닥, 따뜻한 위로를 줄게', date: '2021.10.27', yt: 'QUUXGhWLoDc', note: '지친 마음을 따스하게 토닥여 위로해주는 토닥핑.', teenies: ['토닥핑'], princess: ['사파이어'] },
		{ title: '사라진 로미', date: '2021.11.03', yt: 'ezbVkqn_Yrs', note: '몸이 작아지는 마법에 걸린 로미와 쪼꼼핑의 도망치기.', teenies: ['쪼꼼핑'], princess: ['에메랄드'] },
		{ title: '반짝반짝하게 싹싹!', date: '2021.11.10', yt: 'TbcO8leL6eE', note: '청소와 먼지 제거에 집착하는 싹싹핑.', teenies: ['싹싹핑'], princess: ['다이아하트'] },
		{ title: '맛나핑은 최고의 요리 선생님', date: '2021.11.17', yt: 'VEKpAWIuMWY', note: '요리 실력을 발휘하며 맛있는 음식을 만드는 맛나핑.', teenies: ['맛나핑'], princess: ['루비'] },
		{ title: '쓰러진 믿어핑', date: '2021.11.24', yt: 'vQvlazM_Avg', note: '보석토마토 씨앗과 믿어핑의 수난 시대.', teenies: ['믿어핑'], princess: [] },
		{ title: '뜨개 인형이 된 하츄핑', date: '2021.12.01', yt: '1qAf2VzYjSo', note: '따뜻한 실로 몸을 묶고 뜨개질 인형으로 만드는 포근핑.', teenies: ['다이아 하츄핑', '포근핑'], princess: ['사파이어'] },
		{ title: '곰 인형이 살아있다?', date: '2021.12.08', yt: '28jVRbD1oQM', note: '장난감 인형들이 움직이는 신기한 소동.', teenies: [], princess: [] },
		{ title: '또 한 명의 프린세스', date: '2021.12.15', yt: 'lN3ehNt-7mE', note: '가면핑의 하수인 다해핑의 방해 공작과 미스터리.', teenies: ['다해핑', '가면핑'], princess: [] },
		{ title: '메모핑의 메모메모', date: '2021.12.22', yt: '4cci7UNZUU4', note: '중요한 일들을 메모지로 다 적어 붙이는 메모핑.', teenies: ['메모핑'], princess: ['다이아하트', '에메랄드'] },
		{ title: '대결! 로열핑', date: '2021.12.29', yt: 'mKfAi8jXnwI', note: '로열핑들 간의 훈련과 자존심을 건 한판 대결.', teenies: ['다이아 하츄핑'], princess: [] },
		{ title: '왕국이 된 하트로즈', date: '2022.01.05', yt: 'U405uyyJ4-s', note: '하트로즈 베이커리를 화려한 공주 왕국으로 꾸미는 공쥬핑.', teenies: ['공쥬핑'], princess: ['다이아하트'] },
		{ title: '보석핑을 도둑맞았어요!', date: '2022.01.12', yt: 'yGkzrdnjAJw', note: '가면핑이 보석티니핑을 훔쳐 달아나자追擊하는 방글핑과 로미.', teenies: ['방글핑', '가면핑'], princess: ['루비'] },
		{ title: '진짜 하츄핑은 누구?', date: '2022.01.19', yt: 'JZnlWeDYd8I', note: '짝짝이로 복제하여 가짜 하츄핑 행세를 하는 짝짝핑.', teenies: ['다이아 하츄핑', '짝짝핑'], princess: ['다이아하트'] },
		{ title: '선물 상자를 찾아라!', date: '2022.01.26', yt: 'icrTBeHtCfI', note: '선물을 나눠주길 좋아하는 주네핑의 선물상자 찾기.', teenies: ['주네핑'], princess: ['에메랄드'] },
		{ title: '조각을 할 거야, 뚝딱!', date: '2022.02.02', yt: 'IudjMP1aoL8', note: '무엇이든 조각상으로 뚝딱 만들어버리는 뚝딱핑.', teenies: ['뚝딱핑'], princess: ['사파이어'] },
		{ title: '위험한 소풍', date: '2022.02.09', yt: 'VgtBEZXvXcI', note: '가면핑과 다해핑이 함정을 파둔 위험천만한 로열핑들의 소풍.', teenies: ['가면핑', '다해핑'], princess: [] },
		{ title: '핑그르르 티니핑 발레단', date: '2022.02.16', yt: 'h4AOB0tYt6w', note: '아름다운 발레 동작을 강제로 추게 만드는 발레핑.', teenies: ['발레핑'], princess: ['루비'] },
		{ title: '히어로 티니핑, 원더핑!', date: '2022.02.23', yt: 'gND01AXNUZw', note: '시민들을 지키는 정의의 히어로 원더핑의 활약.', teenies: ['원더핑'], princess: ['루비'] },
		{ title: '티니핑 스쿨 졸업식', date: '2022.03.02', yt: 'aiqqHC84tKs', note: '스쿨 교육을 마치며 감동의 졸업식을 여는 보석핑들.', teenies: ['가면핑'], princess: [] },
		{ title: '위기의 하츄핑', date: '2022.03.09', yt: 'dWFD-Ke0UHQ', note: '가면핑의 진짜 정체가 밝혀지고 위기에 처한 하츄핑.', teenies: ['다이아 하츄핑', '다해핑', '가면핑'], princess: [] },
		{ title: '돌아온 보석숲', date: '2022.03.16', yt: '4wQH2kgzmuM', note: '구출된 보석티니핑들이 보석숲으로 평화롭게 복귀.', teenies: ['다해핑'], princess: [] }
	],
	3: [
		{ title: '알쏭달쏭 열쇠티니핑', date: '2022.09.14', yt: 'iu_BcpwA_CU', note: '미스틱마을의 열쇠티니핑들이 지구로 도망치고 새로운 로열핑들과의 시작.', teenies: ['나나핑', '솔찌핑', '꾸래핑'], princess: [] },
		{ title: '변신! 플로라하트', date: '2022.09.21', yt: 'REEFFxzbRno', note: '빨리핑의 성급함 마법을 막기 위해 로미가 프린세스 플로라하트로 변신.', teenies: ['플로라 하츄핑', '빨리핑'], princess: ['플로라하트'] },
		{ title: '과식은 위험해 얌얌', date: '2022.09.28', yt: 'gL4e1X6FOLY', note: '음식을 폭식하게 만드는 얌얌핑과 프린세스 솔라리스.', teenies: ['얌얌핑'], princess: ['솔라리스'] },
		{ title: '뜨거뜨거 캠핑 소동', date: '2022.10.05', yt: 'diJjBV2lL7M', note: '불과 열기를 내뿜어 캠핑장을 뜨겁게 달구는 뜨거핑.', teenies: ['뜨거핑'], princess: ['글로리아'] },
		{ title: '치료해줄게 삐뽀', date: '2022.10.12', yt: 'Iu8DqU3l8lc', note: '환자 치료에 집착하는 의사 삐뽀핑.', teenies: ['삐뽀핑'], princess: ['크리스탈'] },
		{ title: '티니핑 병원이 생겼어요', date: '2022.10.19', yt: 'mOzmTn5p2IU', note: '간호핑과 함께 하트로즈 옆에 개원한 티니핑 병원.', teenies: ['간호핑'], princess: ['플로라하트'] },
		{ title: '힘내힘내 응원이 필요해', date: '2022.10.26', yt: 'wAREoM6c4Bc', note: '지친 사람들에게 불타는 응원 에너지를 넣는 힘내핑.', teenies: ['힘내핑'], princess: ['글로리아'] },
		{ title: '고쳐줘요 고쳐핑', date: '2022.11.02', yt: 'TO9wnBEfZyM', note: '망가진 기계나 물건을 수리하는 엔지니어 고쳐핑.', teenies: ['고쳐핑'], princess: ['플로라하트'] },
		{ title: '로미와 하츄핑이 바뀌었어요', date: '2022.11.09', yt: '-SVXVzXmH5I', note: '아라핑의 영혼 교체 마법으로 로미와 하츄핑의 몸이 서로 바뀜.', teenies: ['플로라 하츄핑', '아라핑'], princess: ['플로라하트'] },
		{ title: '백설로미', date: '2022.11.16', yt: 'kOqF74Gcssw', note: '백설공주 동화 이야기를 패러디한 연극 소동.', teenies: [], princess: [] },
		{ title: '패션핑의 옷 만들기', date: '2022.11.23', yt: 'W7iHxQxgbY0', note: '화려하고 난해한 패션 의상을 입히는 패션핑.', teenies: ['패션핑'], princess: ['솔라리스'] },
		{ title: '꼼짝 마라 꼼딱핑', date: '2022.11.30', yt: 'tEB6k_ibCXA', note: '경찰 모자를 쓰고 엄격하게 수갑을 채우는 꼼딱핑.', teenies: ['꼼딱핑'], princess: ['크리스탈'] },
		{ title: '행운이 가득 행운과자', date: '2022.12.07', yt: 'UgahnwcQpS4', note: '행운의 포춘쿠키를 나누어 주는 신비한 이벤트.', teenies: ['행운핑'], princess: [] },
		{ title: '퐁당퐁당 퐁당핑', date: '2022.12.14', yt: 'pBWDG38n8-U', note: '물놀이와 물장구를 치며 헤엄치는 인어 퐁당핑.', teenies: ['퐁당핑'], princess: ['플로라하트'] },
		{ title: '파티핑과 파티파티', date: '2022.12.21', yt: 'GTwV4PV1iFE', note: '흥겨운 파티 분위기를 만들어 사람들을 춤추게 하는 파티핑.', teenies: ['파티핑'], princess: ['크리스탈'] },
		{ title: '멋진 머리를 꾸며 봐 꾸며핑', date: '2022.12.28', yt: '56d7kVR1vBI', note: '미용 기구로 특이한 헤어스타일을 연출하는 꾸며핑.', teenies: ['꾸며핑'], princess: ['솔라리스'] },
		{ title: '아빠의 카메라', date: '2023.01.04', yt: 'pJTgeHumFCQ', note: '장성 감독의 실제 추억 경험담을 바탕으로 제작된 감동 에피소드.', teenies: [], princess: [] },
		{ title: '삐질 거야 삐짐핑', date: '2023.01.11', yt: 'aUMy-1IMyVs', note: '작은 일에도 사사건건 삐지고 돌아서는 삐짐핑.', teenies: ['삐짐핑'], princess: ['글로리아'] },
		{ title: '로미의 목걸이를 찾아라', date: '2023.01.18', yt: 'fCj2QgH-_9k', note: '소중한 변신 목걸이를 잃어버려 찾아 헤매는 소동.', teenies: [], princess: [] },
		{ title: '노래하는 아아~핑', date: '2023.01.25', yt: 'fqSi0HHkyNs', note: '고음의 오페라 노래를 부르며 소음을 일으키는 아아핑.', teenies: ['아아핑'], princess: ['글로리아'] },
		{ title: '다 같이 놀자 티니핑 놀이공원', date: '2023.02.01', yt: 'ZgN4YSxvd10', note: '티니핑들을 위해 개장한 아기자기한 놀이공원.', teenies: ['행운핑'], princess: [] },
		{ title: '스케이트 타고 빙글빙글', date: '2023.02.08', yt: '2JNMvhG3LlU', note: '빙판 위에서 피겨 스케이팅을 타게 만드는 빙글핑.', teenies: ['빙글핑'], princess: ['크리스탈'] },
		{ title: '등장! 행운핑', date: '2023.02.15', yt: '-SsZh0Jt-Xs', note: '마침내 상자 속 봉인에서 깨어난 상징적인 레전드 행운핑.', teenies: ['행운핑'], princess: ['크리스탈', '플로라하트'] },
		{ title: '티니핑 패션쇼', date: '2023.02.22', yt: '53wEfCVr5Dc', note: '패션핑의 주도로 열린 런웨이 티니핑 패션쇼.', teenies: ['패션핑'], princess: [] },
		{ title: '위기일발 미스틱마을', date: '2023.03.01', yt: 'jcKoAllmJgQ', note: '제니에 의해 위기에 빠진 미스틱마을과 라비린스의 위협.', teenies: ['행운핑'], princess: ['트와일라잇', '라비린스'] },
		{ title: '안녕 열쇠티니핑', date: '2023.03.08', yt: 'xqE5yWIy_XE', note: '제니와의 오해를 풀고 구원하며 맞이하는 열쇠시즌 결말.', teenies: ['행운핑'], princess: ['트와일라잇', '라비린스'] }
	],
	4: [
		{ title: '새콤달콤 디저트티니핑', date: '2023.09.22', yt: '4zntlZz-KoA', note: '1~2화 동시 선행 공개. 뿌뿌핑이 매직슈가볼을 훔쳐 디저트핑들이 지구로 불시착.', teenies: ['포실핑', '샤샤핑', '말랑핑'], princess: [] },
		{ title: '변신! 프린세스 베리하트', date: '2023.09.22', yt: 'e3q_qlY9S50', note: '1~2화 동시 선행 공개. 슈가베리팩트를 얻어 프린세스 베리하트로 첫 변신.', teenies: ['베리 하츄핑', '캔디핑'], princess: ['베리하트'] },
		{ title: '예쁘게 장식할래, 머랭', date: '2023.10.05', yt: '-TgXo9flZY0', note: '머랭을 치며 화려하게 디저트를 장식하는 머랭핑.', teenies: ['머랭핑'], princess: ['스윗플로스'] },
		{ title: '샌드핑과 샌드쿠키의 비밀', date: '2023.10.12', yt: 'SceE1U1EynE', note: '바삭한 샌드쿠키 속에 마음을 담아 건네는 샌드핑.', teenies: ['샌드핑'], princess: ['샤베티나'] },
		{ title: '뿌뿌핑을 잡아라', date: '2023.10.19', yt: 'JRwIR67vIrQ', note: '풍선껌을 뱉으며 매직슈가볼을 들고 도망치는 뿌뿌핑 추격전.', teenies: ['뿌뿌핑'], princess: ['젤리스틴'] },
		{ title: '로열 티니핑이 되고 싶어', date: '2023.10.26', yt: 'KsexqM-F9aM', note: '동글동글 도넛 모양의 또너핑이 로열핑을 꿈꾸는 이야기.', teenies: ['또너핑'], princess: ['베리하트'] },
		{ title: '납작해져라! 와플핑', date: '2023.11.02', yt: 'nG_DL4vbmxI', note: '무엇이든 와플기계처럼 납작하게 누르는 와플핑.', teenies: ['와플핑'], princess: ['젤리스틴'] },
		{ title: '돌려 돌려~ 롤리핑', date: '2023.11.09', yt: 'M_7gXX-YnBY', note: '알록달록 롤리팝 사탕을 뱅글뱅글 돌리는 롤리핑.', teenies: ['롤리핑'], princess: ['스윗플로스'] },
		{ title: '포실핑과 작은 친구들', date: '2023.11.16', yt: 'NQlWe7JV65U', note: '매직슈가볼과 슈가베리팩트가 충돌해 소인화된 로미 일행을 돕는 포실핑.', teenies: ['포실핑'], princess: ['베리하트'] },
		{ title: '알록달록 색칠해요 마카핑', date: '2023.11.23', yt: 'cIWu0eKYYFI', note: '마카롱 색소로 세상을 알록달록 칠하는 마카핑.', teenies: ['마카핑'], princess: ['샤베티나'] },
		{ title: '차곡차곡 쌓아줘 핫케핑', date: '2023.11.30', yt: 'IB9pjBAMwuc', note: '핫팬케이크를 차곡차곡 위로 탑처럼 쌓는 핫케핑.', teenies: ['핫케핑'], princess: ['베리하트'] },
		{ title: '말랑핑 마음은 말랑해요', date: '2023.12.07', yt: 'UlhVKfkuKHs', note: '말랑말랑 젤리를 좋아하는 말랑핑의 여린 감성.', teenies: ['말랑핑'], princess: [] },
		{ title: '디저트 마을로 간 로미', date: '2023.12.14', yt: 'bTmHrhJCmkE', note: '위기에 빠진 디저트 마을을 재건하고 탐방하는 로미.', teenies: [], princess: [] },
		{ title: '울면 안 돼! 커핑, 머핑', date: '2024.01.04', yt: 'qi0iB_R4_Pc', note: '쌍둥이 아기 디저트핑 커핑과 머핑의 울음 보떼 소동.', teenies: ['커핑', '머핑'], princess: ['스윗플로스'] },
		{ title: '아기 돌보기는 힘들어, 또너', date: '2024.01.11', yt: 'dTDULu2kJ7U', note: '아기 커핑과 머핑을 육아하느라 고군분투하는 또너핑.', teenies: ['또너핑', '커핑', '머핑'], princess: [] },
		{ title: '샤샤핑이 낫게 해 줄게', date: '2024.01.18', yt: 'Y9Q5NJU5mF0', note: '아이스크림 상처를 치유하고 다정하게 간호하는 샤샤핑.', teenies: ['샤샤핑'], princess: [] },
		{ title: '잘 자요~를레이! 요거', date: '2024.01.25', yt: 'TXYu0pKBm2U', note: '요거트 잔에 요들송을 부르며 잠을 청하게 하는 요거핑.', teenies: ['요거핑'], princess: ['스윗플로스'] },
		{ title: '얼음 공주 눈꽃핑', date: '2024.02.01', yt: '7T3-sLjSVbQ', note: '차가운 눈꽃 디저트로 세상을 얼리는 눈꽃핑.', teenies: ['눈꽃핑'], princess: ['샤베티나'] },
		{ title: '푸딩푸딩 푸딩댄스', date: '2024.02.08', yt: 'KdEfsIikVbA', note: '탱글탱글 푸딩 춤을 함께 추게 만드는 푸딩핑.', teenies: ['푸딩핑'], princess: ['젤리스틴'] },
		{ title: '폭신폭신 마시멜로', date: '2024.02.15', yt: 'yZivvVZCzZE', note: '폭신한 마시멜로 구름을 선사하는 멜로핑.', teenies: ['멜로핑'], princess: ['베리하트'] },
		{ title: '쪼꼬모자로 모두 사이좋게', date: '2024.02.22', yt: 'xjVHQd8TVO8', note: '초콜릿 모자를 씌워 서로 다정하게 만드는 쪼꼬핑.', teenies: ['쪼꼬핑'], princess: ['샤베티나'] },
		{ title: '새콤달콤 레전드 티니핑', date: '2024.02.29', yt: 'dncyJTi25BQ', note: '전설의 디저트 레전드핑 새콤핑과 달콤핑의 깨어남.', teenies: ['새콤핑', '달콤핑'], princess: [] },
		{ title: '새콤달콤한 디저트 파티', date: '2024.03.07', yt: '1fsptR3pdOE', note: '모두가 모여 펼치는 달콤하고 화려한 디저트 파티.', teenies: ['새콤핑', '달콤핑'], princess: [] },
		{ title: '돌아와, 뿌뿌핑', date: '2024.03.14', yt: 'IBnueSF_8TY', note: '뿌뿌핑의 지난 상처와 매직슈가볼 탈환 작전.', teenies: ['뿌뿌핑'], princess: ['베리하트', '라비린스'] },
		{ title: '다시, 디저트 마을로', date: '2024.03.21', yt: 'rRTNEh9_k1o', note: '모든 디저트핑들이 힘을 합쳐 고향 디저트 마을로 귀환.', teenies: ['새콤핑', '달콤핑', '뿌뿌핑'], princess: ['베리하트'] },
		{ title: '마음을 하나로! 하모니어스', date: '2024.03.28', yt: 'Pj5C4Jrz8hc', note: '최종 변신 프린세스 하모니어스로 평화를 되찾는 결말.', teenies: ['새콤핑', '달콤핑'], princess: ['하모니어스'] }
	],
	5: [
		{ title: '별을 타고 온 소녀', date: '2024.10.10', yt: 'mAsiA_sld3A', note: '우주별 마을에 블랙홀이 덮쳐 지구로 흩어진 스타티니핑들과 새로운 변신.', teenies: ['빛나핑', '초롱핑', '빤짝핑'], princess: ['브라잇하트'] },
		{ title: '깡총깡총 깡총핑', date: '2024.10.10', yt: 'QHqtPLZbgio', note: '1~2화 동일 날짜 방영. 토끼처럼 깡총 뛰며 어려움을 극복하게 하는 깡총핑.', teenies: ['깡총핑'], princess: ['브라잇하트'] },
		{ title: '훌라후프의 여왕', date: '2024.10.24', yt: 'JFq1e86-Jtw', note: '훌라후프 돌리기를 시키는 운동파 훌라핑.', teenies: ['훌라핑'], princess: ['스타라이트'] },
		{ title: '빛을 나눠줘 나눔핑', date: '2024.10.31', yt: '_IQDYCvdDBM', note: '무엇이든 서로 나눠주는 베풂의 나눔핑.', teenies: ['나눔핑'], princess: ['글램스타'] },
		{ title: '택배 왔어요 딩동핑', date: '2024.11.07', yt: 'ssD1sxMatXo', note: '택배 배달부처럼 소식을 가져다주는 딩동핑.', teenies: ['딩동핑'], princess: ['루나샤인'] },
		{ title: '우주 미아가 된 로열핑들', date: '2024.11.14', yt: 'Zkvw-Qa5RtE', note: '우주 조종 불찰로 길을 잃은 스타 로열핑들의 탈출기.', teenies: ['빛나핑', '초롱핑', '빤짝핑'], princess: [] },
		{ title: '떠돌이 나그네핑', date: '2024.11.21', yt: 'z11QptPzMM4', note: '삿갓을 쓰고 자유롭게 유랑하는 떠돌이 나그네핑.', teenies: ['나그네핑'], princess: ['브라잇하트'] },
		{ title: '고고핑은 멈추지 않아', date: '2024.11.28', yt: 'stwMPiIO_yw', note: '멈추지 않고 계속 고고(Go! Go!)하게 달려나가는 고고핑.', teenies: ['고고핑'], princess: ['루나샤인'] },
		{ title: '스티커를 붙여 뿌쵸핑', date: '2024.12.05', yt: '0Ky38_lnuFs', note: '장난스러운 뿌쵸 스티커를 사방에 붙이는 뿌쵸핑.', teenies: ['뿌쵸핑'], princess: ['글램스타'] },
		{ title: '힘 센 티니핑 고마핑', date: '2024.12.12', yt: 'nO16PzlzPHk', note: '엄청난 괴력을 발휘하며 감사 인사를 나누는 고마핑.', teenies: ['고마핑'], princess: ['스타라이트'] },
		{ title: '만나고 싶어 아롱핑, 다롱핑', date: '2024.12.19', yt: '37OtBOn55U0', note: '서로를 애타게 찾고 만나고 싶어 하는 아롱핑과 다롱핑 쌍둥이.', teenies: ['아롱핑', '다롱핑'], princess: ['브라잇하트'] },
		{ title: '뽀송핑의 뽀송뽀송 세탁소', date: '2024.12.26', yt: 'LruDE54ANiI', note: '빨래를 뽀송뽀송 깨끗하게 세탁해 주는 뽀송핑.', teenies: ['뽀송핑'], princess: ['루나샤인'] },
		{ title: '투명해질래 유리핑', date: '2025.01.02', yt: 'eCkFvGJYGkk', note: '유리처럼 맑고 투명하게 자신을 가리거나 감추는 유리핑.', teenies: ['유리핑'], princess: ['스타라이트'] },
		{ title: '하트로즈에 온 노아', date: '2025.02.06', yt: 'xVJQcgssg_U', note: '1/9~1/30 휴방. 손님 노아가 방문하면서 벌어지는 하트로즈의 일상.', teenies: ['스타 하츄핑'], princess: [] },
		{ title: '함께하자 함께핑', date: '2025.02.13', yt: '82ryV9CzZbg', note: '혼자가 아닌 다 같이 함께하는 즐거움을 주는 함께핑.', teenies: ['함께핑'], princess: ['글램스타'] },
		{ title: '댄스핑의 댄스는 별이 다섯 개', date: '2025.02.20', yt: 'KvE8tgG50BE', note: '화려한 별 댄스 퍼포먼스를 선보이는 댄스핑.', teenies: ['댄스핑'], princess: ['스타라이트'] },
		{ title: '장난꾸러기 여우핑', date: '2025.02.27', yt: 'JODHq0WPEhM', note: '여우처럼 꾀를 내며 장난치는 여우핑.', teenies: ['여우핑'], princess: ['루나샤인'] },
		{ title: '루루핑과 노래해요', date: '2025.03.06', yt: 'WLHsOWaFQY0', note: '감미로운 목소리로 멜로디를 노래하는 루루핑.', teenies: ['루루핑'], princess: ['글램스타'] },
		{ title: '나그네핑을 찾아라', date: '2025.03.13', yt: '1QrXentSl1c', note: '숨어버린 나그네핑을 추적하는 로미와 스타핑들.', teenies: ['나그네핑'], princess: ['브라잇하트'] },
		{ title: '티니핑이 된 로미', date: '2025.03.20', yt: 'hBHTDejucuE', note: '마법의 여파로 로미 본인이 조그만 로미핑으로 변해버린 이야기.', teenies: ['스타 하츄핑', '로미핑'], princess: [] },
		{ title: '몰래 훔쳐! 몰래핑', date: '2025.03.27', yt: 'N7NIeskncMY', note: '몰래 다른 사람의 물건을 숨기는 몰래핑.', teenies: ['몰래핑'], princess: ['루나샤인'] },
		{ title: '뽀뽀핑 따라 삼만 리', date: '2025.04.03', yt: 'oTBdec5Lyms', note: '사랑의 뽀뽀를 마구 건네며 도망다니는 뽀뽀핑.', teenies: ['뽀뽀핑'], princess: ['스타라이트'] },
		{ title: '별의 기억', date: '2025.04.10', yt: 'xe60fTXg6mk', note: '우주별 마을 회상과 오로라핑의 과거 기억이 밝혀짐.', teenies: ['나그네핑'], princess: [] },
		{ title: '스타티니핑, 별의 힘을 모아', date: '2025.04.17', yt: 'xurB-2BkFJs', note: '모든 스타티니핑의 기운을 수집하여 결전을 준비.', teenies: ['오로라핑', '왕자핑'], princess: ['브라잇하트'] },
		{ title: '약속의 오로라핑', date: '2025.04.24', yt: 'U-P9yRx9sWU', note: '왕자핑과의 약속을 기억하고 깨어난 오로라핑.', teenies: ['오로라핑', '왕자핑'], princess: ['브라잇하트'] },
		{ title: '마음을 이어주는 오로라', date: '2025.05.01', yt: '7w3aS8HH6MA', note: '프린세스 오로라로 변신하여 밤하늘을 밝히고 5시즌 감동의 마무리.', teenies: ['오로라핑', '왕자핑'], princess: ['브라잇하트', '오로라'] }
	],
	6: [
		{ title: '출발! 프린세스 회담행 열차', date: '2025.10.30', yt: 'JW9xFlZZyvs', note: '프린세스 회담 열차에 오른 로미와 알 수 없는 사건으로 사라진 프린세스핑들.', teenies: ['사뿐핑', '뽀니핑', '아름핑'], princess: ['팬시하트'] },
		{ title: '거울 속 너는 누구?', date: '2025.11.06', yt: 'W5ng4esNuQo', note: '매직 미러 속 갇힌 의장 다이아나핑의 목소리와 실체.', teenies: ['깡총핑'], princess: [] },
		{ title: '뽀득핑은 뽀득뽀득 뽀드득', date: '2025.11.13', yt: '', note: '더러운 것을 깨끗하게 씻겨주는 뽀득핑과의 대결.', teenies: ['뽀득핑'], princess: ['쁠리에'] },
		{ title: '매력을 찾아줄게 차밍핑', date: '2025.11.20', yt: '', note: '가방 속 도구로 매력을 발산하게 만들어주는 차밍핑.', teenies: ['차밍핑'], princess: ['보니타'] },
		{ title: '날개를 달아줘 나비핑', date: '2025.11.27', yt: '', note: '나비 날개를 달아 유유히 하늘을 날게 하는 나비핑.', teenies: ['나비핑'], princess: ['판타나'] },
		{ title: '실크핑과 마법 양탄자', date: '2025.12.04', yt: '', note: '부드러운 실크 마법 양탄자를 타고 자유롭게 비행하는 실크핑.', teenies: ['실크핑'], princess: ['팬시하트'] },
		{ title: '삼총사 티니핑', date: '2025.12.11', yt: '', note: '샤를핑, 트롯핑, 깨굴핑 삼총사가 우정을 나누는 이야기.', teenies: ['샤를핑', '트롯핑', '깨굴핑'], princess: ['팬시하트'] },
		{ title: '차갑게 꽁꽁 스노우핑', date: '2025.12.18', yt: '', note: '차가운 눈송이로 주위를 꽁꽁 얼려버리는 스노우핑.', teenies: ['스노우핑'], princess: ['쁠리에'] },
		{ title: '바느질은 아름핑에게 맡겨줘', date: '2025.12.25', yt: '', note: '아름다운 바느질과 의상 수선을 해내는 아름핑.', teenies: ['아름핑'], princess: [] },
		{ title: '스파이 대작전', date: '2026.01.01', yt: '', note: '적 진영의 동태를 살펴보고 정보를 탐색하는 비밀 스파이 작전.', teenies: ['해핑', '포실핑'], princess: [] },
		{ title: '이슬핑의 이슬 한 방울', date: '2026.01.08', yt: '', note: '맑은 이슬 한 방울로 마음에 생기를 불어넣는 이슬핑.', teenies: ['이슬핑'], princess: ['보니타'] },
		{ title: '낮잠 진짜 좋아 쿨쿨핑', date: '2026.01.15', yt: '', note: '잠에 빠져들게 하고 낮잠을 자게 만드는 쿨쿨핑.', teenies: ['쿨쿨핑'], princess: ['팬시하트'] },
		{ title: '이클립스봇의 습격', date: '2026.01.22', yt: '', note: '이클립스핑이 보낸 이클립스봇의 거센 공격과 4명의 프린세스 동시 대적.', teenies: ['이클립스핑'], princess: ['팬시하트', '쁠리에', '판타나', '보니타'] },
		{ title: '시간을 되돌려 슈슈핑', date: '2026.02.26', yt: '', note: '1/29~2/19 휴방. 시간을 되돌리는 마법 시계를 가진 슈슈핑.', teenies: ['슈슈핑'], princess: ['판타나'] },
		{ title: '귀곡산장의 비밀', date: '2026.03.05', yt: '', note: '으스스한 산장에서 벌어지는 괴담과 티니핑 삼총사의 기겁 소동.', teenies: ['샤를핑', '트롯핑', '깨굴핑'], princess: [] },
		{ title: '긴 머리 휘날리며 롱롱핑', date: '2026.03.12', yt: '', note: '긴 머리카락을 찰랑이며 헤어 스타일을 강조하는 롱롱핑.', teenies: ['롱롱핑'], princess: ['쁠리에'] },
		{ title: '빙빙 도는 거울', date: '2026.03.19', yt: '', note: '빙글빙글 도는 마법 거울 속에서의 신비한 모험.', teenies: ['해핑', '포실핑'], princess: ['보니타'] },
		{ title: '유혹의 뽀니핑', date: '2026.03.26', yt: '', note: '달콤한 유혹으로 마음을 흔들어 놓는 뽀니핑.', teenies: ['뽀니핑'], princess: [] },
		{ title: '속마음 뿅뿅 큐핑', date: '2026.04.02', yt: '', note: '감춰둔 속마음을 솔직하게 털어놓게 만드는 큐핑.', teenies: ['큐핑', '트롯핑', '코러스핑'], princess: ['판타나'] },
		{ title: '하츄핑의 사부분핑 관찰기', date: '2026.04.09', yt: '', note: '우아한 동작의 사뿐핑을 몰래 관찰하고 따라하는 하츄핑.', teenies: ['프린세스 하츄핑', '사뿐핑'], princess: [] },
		{ title: '이클립스핑을 막아라', date: '2026.04.16', yt: '', note: '점점 거세지는 이클립스핑의 음모를 저지하기 위한 작전.', teenies: ['이클립스핑'], princess: ['보니타'] },
		{ title: '이클립스핑의 진실', date: '2026.04.23', yt: '', note: '이클립스핑의 숨겨진 과거와 젠틀핑이 밝히는 진실.', teenies: ['이클립스핑', '젠틀핑'], princess: ['팬시하트'] },
		{ title: '꼭꼭 숨어! 야옹핑', date: '2026.04.30', yt: '', note: '고양이처럼 은밀히 숨어 숨바꼭질을 하는 야옹핑.', teenies: ['야옹핑'], princess: ['판타나'] },
		{ title: '프린세스 무도회', date: '2026.05.07', yt: '', note: '모든 프린세스들과 티니핑들이 화려하게 모이는 무도회.', teenies: [], princess: [] },
		{ title: '거울 저 너머에', date: '2026.05.14', yt: '', note: '거울 저편의 세계로 들어가 이클립스핑과 마주하는 결전.', teenies: ['이클립스핑'], princess: [] },
		{ title: '하나의 마음으로', date: '2026.05.21', yt: '', note: '궁극의 프린세스 루미너스/다크니스 변신으로 마침내 우정을 회복하는 대단원.', teenies: ['이클립스핑', '다이아나핑', '젠틀핑', '집사 티니핑'], princess: ['루미너스', '다크니스'] }
	],
	// 7기는 2026년 11월 방영 예정 (제목 미공개)
	7: Array.from({ length: 26 }, (_, i) => ({
		title: '',
		date: i === 0 ? '2026.11 (예정)' : '',
		yt: '',
		note: i === 0 ? '제목 미공개 · 2026년 11월 방영 예정' : '',
		teenies: [],
		princess: []
	}))
};

// ==========================================
// 3. 티니핑 분류 데이터
//    name  : 티니핑 이름
//    form  : 표기명(폼) — 없으면 생략
//    note  : 비고
//    group : 그룹(6기 프린세스/프린스 등) — 없으면 생략
//    intro : 소개영상 (유튜브 ID 또는 주소) — 없으면 생략
//    mv    : MV영상 (유튜브 ID 또는 주소) — 없으면 생략
//    예) { name: '하츄핑', note: '...', intro: 'abcDEF12345', mv: 'https://youtu.be/abcDEF12345' }
// ==========================================
const teeniepings = [];

// 유튜브 ID 또는 주소 → ID
function extractYtId(v) {
	if (!v) return '';
	const m = String(v).match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/)([\w-]{11})/);
	return m ? m[1] : String(v).trim();
}

function addTeenie(season, grade, list) {
	list.forEach(item => {
		const t = (typeof item === 'string') ? { name: item } : item;
		teeniepings.push({
			season: season,
			grade: grade,
			name: t.name,
			form: t.form || '',
			note: t.note || '',
			group: t.group || '',
			intro: extractYtId(t.intro),
			mv: extractYtId(t.mv)
		});
	});
}

// ---------- 1기 큐브 티니핑 (45) ----------
addTeenie(1, 'royal', [
	{ name: '하츄핑', note: '프린세스 하트, 로미의 파트너 티니핑', intro: 'Acrv8EqCa4o', mv: '4LRgcGrix3s' },
	{ name: '바로핑', note: '프린세스 클라우디아', intro: '_V6o4WlY5jE' },
	{ name: '아자핑', note: '프린세스 클로버', intro: 'wfGmhORpsmk' },
	{ name: '차차핑', note: '프린세스 스타', intro: 'BMGBMX8qhZI' },
	{ name: '라라핑', note: '프린세스 멜로디', intro: 'vndue5xne2o' },
	{ name: '해핑', note: '프린세스 선샤인, 6기 10화에서 주연으로 재등장', intro: 'w_qrXVT4WU4' }
]);
addTeenie(1, 'normal', [
	{ name: '키키핑', intro: 'DRARoenoxUg' },
	{ name: '아잉핑', intro: 'dXeEDedSwGM' },
	{ name: '부끄핑', intro: 'hsIgR6gyfeQ' },
	{ name: '부투핑', note: '직업: 심판', intro: 'cgFVSnvhIyY' },
	{ name: '깜빡핑', intro: '-4P0sHvYcvI' },
	{ name: '띠용핑', note: '직업: 마술사', intro: 'K54kWfZMLps' },
	{ name: '주르핑', intro: 'MbhnysPgLHw' },
	{ name: '차나핑', note: '코자핑과 사촌 관계', intro: '939SlTM6A50' },
	{ name: '따라핑', intro: 'sBI7LXuEaKY' },
	{ name: '나르핑', intro: 'TfLAccPuqYs' },
	{ name: '무셔핑', intro: '0Mr5DPA2qSk' },
	{ name: '투투핑', intro: '11oauwomEAU' },
	{ name: '차캐핑', intro: 'ef7fjqXLwRY' },
	{ name: '떠벌핑', intro: 'iQlZtO7gdE8' },
	{ name: '다조핑', intro: 'w7pIQ6ho6QI' },
	{ name: '화나핑', intro: 'C_bTQZ3iec4' },
	{ name: '시러핑', intro: 'NlXIMumhxD4' },
	{ name: '바네핑', intro: 'zAGGhBiW_ow' },
	{ name: '악동핑', note: '해핑과 명칭·신체 변화가 함께 나타나 별도 집계', intro: 'L-FbH_FGcm0' },
	{ name: '덜덜핑', intro: 'fwowOYDe1rs' },
	{ name: '그림핑', note: '직업: 화가', intro: 'C_ZSf1FxoFM' },
	{ name: '무거핑', note: '직업: 헬스트레이너', intro: 'QD9nl3SNhWM' },
	{ name: '꺼꿀핑', intro: '9fAQyGni7-I' },
	{ name: '씽씽핑', intro: 'Pi8qp9x6BEo' },
	{ name: '베베핑', intro: '7vnIv4E3M94' },
	{ name: '코자핑', note: '차나핑과 사촌 관계', intro: 'iWg6EYqHo_Y' },
	{ name: '딱풀핑', intro: 'W9EcrGrVPIY' },
	{ name: '모야핑', intro: 'mmK4WijfQ1w' },
	{ name: '토이핑', intro: 'CyYSkZfVx00' },
	{ name: '또까핑', intro: 'BPVCPwuuNPQ' },
	{ name: '플라핑', note: '직업: 정원사', intro: 'Azo8B50vIrc' },
	{ name: '노라핑', note: '노리핑과 형제 · 큐브와 메달 공유', intro: 'pR8kXGsMSzs' },
	{ name: '노리핑', note: '노라핑과 형제 · 큐브와 메달 공유', intro: 'pR8kXGsMSzs' },
	{ name: '아휴핑', intro: 'cw1mpi0zCGQ' },
	{ name: '똑똑핑', intro: 'iyStA4IBtEg' },
	{ name: '꽁꽁핑', intro: 'v0rw-cKh5Hg' },
	{ name: '찌릿핑', intro: 'Ada1fejSh-o' },
	{ name: '홀로핑', intro: 'm1LXmYbwULo' },
	{ name: '앙대핑', note: '빌런 티니핑', intro: 'llWog7Ld5Lk' }
]);

// ---------- 2기 보석 티니핑 (20) ----------
addTeenie(2, 'royal', [
	{ name: '하츄핑', form: '다이아 하츄핑', note: '프린세스 다이아하트', intro: 'DMNhTS5RECA' },
	{ name: '방글핑', note: '프린세스 루비, 2기 초반에는 로열 티니핑 후보생(보석 문양)', intro: '0YKUhTBzFRA' },
	{ name: '조아핑', note: '프린세스 에메랄드, 2기 초반에는 로열 티니핑 후보생(보석 문양)', intro: 'osGnQPDtWTQ' },
	{ name: '믿어핑', note: '프린세스 사파이어, 2기 초반에는 로열 티니핑 후보생(보석 문양)', intro: 'KOzYFKhES8A' }
]);
addTeenie(2, 'normal', [
	{ name: '까르핑', intro: '8J1UuS3adlk' },
	{ name: '아야핑', intro: 'Oiq4Bs5Jk7o' },
	{ name: '소원핑', intro: '1GB4Xg1-IuM' },
	{ name: '토닥핑', intro: 'C2Og4mqjjdU' },
	{ name: '쪼꼼핑', intro: '5Mq-hDm3slQ' },
	{ name: '싹싹핑', intro: 'eIhm5OYopm0' },
	{ name: '맛나핑', intro: 'aJVK-tjDiOw' },
	{ name: '포근핑', intro: 'IzqRzezxJeE' },
	{ name: '메모핑', intro: 'obMDHsIh34c' },
	{ name: '다해핑', note: '프린세스 라비린스, 제니의 파트너 티니핑', intro: 'nCrwl_QVmHY' },
	{ name: '공쥬핑', intro: 'Rko8klJO9Vc' },
	{ name: '짝짝핑', intro: '-amBXlIEhoo' },
	{ name: '주네핑', intro: 'JDwkPbQgae0' },
	{ name: '뚝딱핑', intro: '10SLXtnx0zs' },
	{ name: '발레핑', intro: '5_Z2aPI0cZU' },
	{ name: '원더핑', intro: 'YTSvmpO5guM' }
]);
addTeenie(2, 'etc', [
	{ name: '가면핑', note: '다해핑이 가면을 쓴 모습(집계 제외)' }
]);

// ---------- 3기 열쇠 티니핑 (21) ----------
addTeenie(3, 'royal', [
	{ name: '하츄핑', form: '플로라 하츄핑', note: '프린세스 플로라하트, 사계절 모티브: 봄(꽃)', intro: 'Q7B496uQnzY' },
	{ name: '나나핑', note: '프린세스 솔라리스, 사계절 모티브: 여름(태양)', intro: 'TQtziDTeEyo' },
	{ name: '솔찌핑', note: '프린세스 글로리아, 사계절 모티브: 가을(구름)', intro: 'x6ao0BkS9UI' },
	{ name: '꾸래핑', note: '프린세스 크리스탈, 사계절 모티브: 겨울(눈송이)', intro: 'UPFCvEgd-P8' }
]);
addTeenie(3, 'legend', [
	{ name: '행운핑', note: '프린세스 트와일라잇, 시리즈 최초의 레전드 티니핑', intro: 'sMsqTpVfEEE' }
]);
addTeenie(3, 'normal', [
	{ name: '빨리핑', intro: 'blCIDmHjsj4' },
	{ name: '얌얌핑', intro: 'IIm1QU8frMc' },
	{ name: '뜨거핑', intro: 'bQEI61bXV_M' },
	{ name: '삐뽀핑', intro: 'RzpB2DdCg5I' },
	{ name: '간호핑', note: '경광등 색이 다른 4개체(분홍·노랑·초록·파랑)가 있으나 동일 명칭이라 1종으로 집계' },
	{ name: '힘내핑', intro: '31iSahwHmFM' },
	{ name: '고쳐핑', intro: 'gwAAtxRxYyI' },
	{ name: '아라핑', intro: '7CK1WIePIoc' },
	{ name: '패션핑', intro: '8ZNEBOmP64s' },
	{ name: '꼼딱핑', intro: 'nzJomJ3XWwQ' },
	{ name: '퐁당핑', intro: 'AdGGc9Yj_PQ', mv: 'HUMYQ-4sc6g' },
	{ name: '파티핑', intro: 'XL8H4m3fzsg' },
	{ name: '꾸며핑', intro: 'pXo-UM38WIo' },
	{ name: '삐짐핑', intro: 'ujQ7p-C7NGc' },
	{ name: '아아핑', intro: '7dmSAko2udM' },
	{ name: '빙글핑', intro: 'XS3dt1qK1sg' }
]);

// ---------- 4기 디저트 티니핑 (22) ----------
addTeenie(4, 'royal', [
	{ name: '하츄핑', form: '베리 하츄핑', note: '프린세스 베리하트', intro: 'qBkELAwIlIA' },
	{ name: '포실핑', note: '프린세스 스윗플로스, 6기 10화에서 주연으로 재등장', intro: 'eqwoFyO4lzA', mv: 'PU6iQ0B_o5Q' },
	{ name: '샤샤핑', note: '프린세스 샤베티나', intro: '6NC6hPAM8Ew', mv: 'w0NQierfW1k' },
	{ name: '말랑핑', note: '프린세스 젤리스틴', intro: 'fjnzsML3bNw', mv: 'DVWry1GW-mU' }
]);
addTeenie(4, 'legend', [
	{ name: '새콤핑', note: '프린세스 하모니어스, 디저트 마을 케이크 궁전 거주, 시리즈 최초로 레전드가 2마리 등장', intro: 'Ros3gi7DlGQ', mv: 'QrGxI5pzqso' },
	{ name: '달콤핑', note: '프린세스 하모니어스, 디저트 마을 케이크 궁전 거주, 시리즈 최초로 레전드가 2마리 등장', intro: 'Ros3gi7DlGQ', mv: 'QrGxI5pzqso' }
]);
addTeenie(4, 'normal', [
	{ name: '뿌뿌핑', intro: '-eE-r2yKB5k' },
	{ name: '캔디핑', intro: '28acd5YQ4Rc' },
	{ name: '머랭핑', intro: 'i77Ay4UqbWM' },
	{ name: '샌드핑', intro: 'cbv0_oJZ1W0' },
	{ name: '또너핑', intro: 'bYCajBUlhMc' },
	{ name: '와플핑', intro: '3Qsob2VF8BI' },
	{ name: '롤리핑', intro: 'LFqEPcYFDFk' },
	{ name: '마카핑', intro: 'cUPHpvLEGqk' },
	{ name: '핫케핑', intro: 'ItZxr-pjnNc' },
	{ name: '커핑', note: '머핑과 쌍둥이 남매 · 큐브 공유', intro: 'D7XhvPmBXlQ', mv: 'xYdDt1gzNlQ' },
	{ name: '머핑', note: '커핑과 쌍둥이 남매 · 큐브 공유', intro: 'D7XhvPmBXlQ', mv: 'xYdDt1gzNlQ' },
	{ name: '요거핑', intro: 'ujg-TEKCb0s' },
	{ name: '눈꽃핑', intro: '4hhnV8YZht8' },
	{ name: '푸딩핑', intro: 'HI_cyB_sJvQ' },
	{ name: '멜로핑', intro: 'FPa5LYxbB0w' },
	{ name: '쪼꼬핑', intro: 'd_hg9VRR3I0' }
]);

// ---------- 5기 스타 티니핑 (24) ----------
addTeenie(5, 'royal', [
	{ name: '하츄핑', form: '스타 하츄핑', note: '프린세스 브라잇하트', intro: '7qxQMod_5Ck' },
	{ name: '빛나핑', note: '프린세스 스타라이트', intro: 'alkfrg_nhik' },
	{ name: '초롱핑', note: '프린세스 글램스타', intro: 'FuPayozgiHk' },
	{ name: '빤짝핑', note: '프린세스 루나샤인', intro: 'd5jLzjBo8Us' },
	{ name: '왕자핑', note: '나그네핑과 동일 티니핑(명칭·신체 변화로 각각 집계), 노아의 파트너 티니핑', intro: 'xZYIWN9slnI' }
]);
addTeenie(5, 'legend', [
	{ name: '오로라핑', note: '프린세스 오로라, 거대한 날개 설정의 시작', intro: 'Wu7GWmZX0CY', mv: 'OMwG6HYrP3c' }
]);
addTeenie(5, 'normal', [
	{ name: '깡총핑', intro: 'cC3BCol4-vo' },
	{ name: '훌라핑', intro: 'NvgjlwZeFX4' },
	{ name: '나눔핑', intro: 'EaKkPjBFPzA' },
	{ name: '딩동핑', intro: 'Yg0tpK0o6Zo' },
	{ name: '나그네핑', note: '왕자핑과 동일 티니핑(명칭·신체 변화로 각각 집계)', intro: 'GRZooL1VqOE' },
	{ name: '고고핑', intro: 'NvEa2qf_myU' },
	{ name: '뿌쵸핑', intro: '4ToRkQyQG54' },
	{ name: '고마핑', intro: 'XhbV08fRikc' },
	{ name: '아롱핑', note: '다롱핑과 자매', intro: 'RmKxnSZlg2g' },
	{ name: '다롱핑', note: '아롱핑과 자매', intro: 'RmKxnSZlg2g' },
	{ name: '뽀송핑', intro: 'KyCglgJnUvE' },
	{ name: '유리핑', intro: 'yuQQrcWsk08' },
	{ name: '함께핑', intro: '-FEeuSEkyqI' },
	{ name: '댄스핑', intro: 'zJpw-d80F40', mv: 'q15-zkTRx1M' },
	{ name: '여우핑', intro: 'DP0UFTGoGhs' },
	{ name: '루루핑', intro: 'ZiUTEY3T8JU', mv: 'pCTUoCOrl1E' },
	{ name: '몰래핑', intro: 'NMOMyxelsS4' },
	{ name: '뽀뽀핑', intro: '_wBKAocQ3Fo' }
]);
addTeenie(5, 'etc', [
	{ name: '로미핑', note: '로미가 티니핑으로 변한 모습(인간)이라 집계 제외' }
]);

// ---------- 6기 프린세스&프린스 티니핑 (21) ----------
addTeenie(6, 'royal', [
	{ name: '하츄핑', form: '프린세스 하츄핑', note: '프린세스 팬시하트', intro: 'KOIuTepsnWQ' },
	{ name: '사뿐핑', note: '프린세스 쁠리에, 발레의 나라', intro: 'AQL1J5PiJX0' },
	{ name: '뽀니핑', note: '프린세스 보니타, 미용의 나라', intro: 'woOfkE8CKiY' },
	{ name: '아름핑', note: '프린세스 판타나, 패션의 나라', intro: 'uHUXw4OsZG4' }
]);
addTeenie(6, 'legend', [
	{ name: '이클립스핑', note: '프린세스 다크니스, 거울의 나라, 다이아나핑의 쌍둥이 자매, 메인 빌런(시리즈 최초의 악역 레전드)', intro: '05Sr_hsLSRQ' },
	{ name: '다이아나핑', note: '프린세스 루미너스, 거울의 나라, 이클립스핑의 쌍둥이 자매', intro: 'QKacp71OLcY' }
]);
addTeenie(6, 'normal', [
	{ name: '뽀득핑', note: '목욕의 나라', group: '프린세스', intro: 'X4zbTYotnH0' },
	{ name: '차밍핑', note: '이상한 나라', group: '프린세스', intro: '_lSoHZbGnqk' },
	{ name: '나비핑', note: '나비의 나라', group: '프린세스', intro: 'W3aBLHqlJzE' },
	{ name: '실크핑', note: '양탄자의 나라(보물의 나라)', group: '프린세스', intro: 'jQG6UKuopB4' },
	{ name: '스노우핑', note: '눈의 나라', group: '프린세스', intro: 'j-USFE_kSO4' },
	{ name: '이슬핑', note: '꽃의 나라', group: '프린세스', intro: 'jweDuN1b1SU' },
	{ name: '쿨쿨핑', note: '꿀잠 나라(잠의 나라)', group: '프린세스', intro: 'tUAlLXmnQiM' },
	{ name: '슈슈핑', note: '비비디 나라(진심의 나라)', group: '프린세스', intro: 'fo8uB5uwoOw' },
	{ name: '롱롱핑', note: '고운 머릿결의 나라', group: '프린세스', intro: 'Swi6Zh03Ybg' },
	{ name: '큐핑', note: '백발백중의 나라', group: '프린세스', intro: 'MAOVm_kQOTw' },
	{ name: '야옹핑', note: '야옹 나라(고양이 나라)', group: '프린세스', intro: 'ZrqAc9sK0kQ' },
	{ name: '샤를핑', note: '로맨스 나라', group: '프린스', intro: 'Tn4k9MbjLA8' },
	{ name: '트롯핑', note: '오디션의 나라', group: '프린스', intro: 'wn_NOxdXObw' },
	{ name: '깨굴핑', note: '젠틀핑의 또 다른 폼 · 매너의 나라', group: '프린스', intro: 'dHe0QdJfTEY' },
	{ name: '젠틀핑', note: '깨굴핑의 또 다른 폼으로 별도 집계 · 매너의 나라', group: '프린스', intro: 'KdzFqY9USzU' }
]);
addTeenie(6, 'etc', [
	{ name: '코러스핑', note: '집계 제외' },
	{ name: '집사 티니핑', note: '집계 제외' }
]);

// ---------- 7기 쥬얼스타 티니핑 (2026년 10월 기준 공개 개체) ----------
addTeenie(7, 'royal', [
	{ name: '하츄핑', form: '비바 하츄핑', note: '프린세스 비바하트' },
	{ name: '레몬핑', note: '프린세스 브릴란테' },
	{ name: '체리핑', note: '프린세스 칸타빌레' },
	{ name: '라임핑', note: '프린세스 폴리포니' }
]);
addTeenie(7, 'legend', [
	{ name: '뮤즈핑', note: '레전드 티니핑으로 추정(미확정)' },
	{ name: '디바핑', note: '레전드 티니핑으로 추정(미확정)' }
]);
addTeenie(7, 'normal', [
	{ name: '쏭쏭핑' },
	{ name: '아리아핑' },
	{ name: '아서핑' },
	{ name: '낭낭핑' },
	{ name: '냐냥핑' },
	{ name: '폴짝핑' },
	{ name: '시고르핑' },
	{ name: '코디핑' },
	{ name: '잉잉핑' },
	{ name: '앙앙핑' },
	{ name: '빠밤핑' },
	{ name: '팡팡핑' },
	{ name: '티키핑' },
	{ name: '타카핑' }
]);
addTeenie(7, 'etc', [
	{ name: '마린핑', note: 'PLAVE 콜라보 티니핑' },
	{ name: '비타핑', note: 'PLAVE 콜라보 티니핑' },
	{ name: '포포핑', note: 'PLAVE 콜라보 티니핑' },
	{ name: '불꽃핑', note: 'PLAVE 콜라보 티니핑' },
	{ name: '까밍핑', note: 'PLAVE 콜라보 티니핑' }
]);

// ==========================================
// 4. 극장판 데이터
//    groups[].exclusive : true면 극장판 전용 → 등급별 탭에 자동 표시
//    items[].inGrade    : true면 등급별 탭에도 표시 (폼 변형 등)
//    items[]            : '이름' | [이름, 비고] | [이름, 폼, 비고] | { name, form, note, grade, intro, mv }
//    intro / mv         : 유튜브 ID 또는 주소 (없으면 생략)
// ==========================================
const teenieMovies = [
	{
		no: 1, label: '1기', title: '사랑의 하츄핑', year: '2024',
		groups: [
			{
				label: '극장판에서만 등장하는 티니핑', exclusive: true,
				items: [
					{ name: '트러핑', note: '일반 폼 · 흑화 폼, 리암의 파트너 티니핑', intro: '', mv: '' }
				]
			},
			{
				label: '애니메이션 시리즈에도 등장 — 일반 티니핑 시절의 티니핑',
				items: [
					{ name: '하츄핑', form: '사랑의 하츄핑', note: '극장판 1기 한정으로 로열핑이 되기 전 일반 티니핑', grade: 'normal', inGrade: true, intro: '', mv: '' },
					{ name: '라라핑', form: '몬스터 라라핑', note: '극장판 1기 한정으로 로열핑이 되기 전 일반 티니핑, 몬스터 라라핑으로 변신', grade: 'normal', inGrade: false },
					{ name: '해핑', form: '몬스터 해핑', note: '극장판 1기 한정으로 로열핑이 되기 전 일반 티니핑, 몬스터 해핑으로 변신', grade: 'normal', inGrade: false }
				]
			},
			{
				label: '애니메이션 시리즈에도 등장 — 큐브 티니핑',
				items: ['딱풀핑', '꽁꽁핑', '덜덜핑', '키키핑', '모야핑', '토이핑', '플라핑', '노라핑', '나르핑', '화나핑', '바네핑', '또까핑', '무거핑', '시러핑', '부끄핑', '씽씽핑', '코자핑']
			},
			{
				label: '가칭이 사용된 티니핑',
				items: [['병사핑', '세뇌된 상태로 등장하는 원작 티니핑들']]
			}
		]
	},
	{
		no: 2, label: '2기', title: '사랑의 하츄핑: 고래보석의 전설', year: '2026',
		groups: [
			{
				label: '극장판에서만 등장하는 티니핑', exclusive: true,
				items: [
					{ name: '방울핑', note: '카이트의 파트너 티니핑, 바다핑즈', intro: 'nqiQli8eeYU', mv: '' },
					{ name: '찰랑핑', note: '카이트의 파트너 티니핑, 바다핑즈', intro: 'nqiQli8eeYU', mv: '' },
					{ name: '소라핑', note: '카이트의 파트너 티니핑, 바다핑즈', intro: 'nqiQli8eeYU', mv: '' }
				]
			},
			{
				label: '애니메이션 시리즈에도 등장',
				items: [
					{ name: '하츄핑', form: '머메이드 하츄핑', note: '고래보석 컴팩트로 스페셜 변신한 폼', grade: 'royal', inGrade: true, intro: '', mv: '' }
				]
			},
			{
				label: '애니메이션 시리즈에도 등장 — 디저트 티니핑',
				items: ['샤샤핑', '말랑핑', '포실핑', '새콤핑', '달콤핑', '캔디핑', '머랭핑', '요거핑', '눈꽃핑', '멜로핑', '뿌뿌핑']
			},
			{
				label: '애니메이션 시리즈에도 등장 — 스타 티니핑',
				items: ['빛나핑', '초롱핑', '빤짝핑', '왕자핑', '오로라핑', '깡총핑', '아롱핑', '다롱핑', '루루핑']
			}
		]
	},
	{ no: 3, label: '3기', title: '기획 중', year: '연도 미정', groups: [] }
];

// 극장판 항목을 객체로 통일
function normalizeMovieItem(it) {
	if (typeof it === 'string') return { name: it };
	if (Array.isArray(it)) {
		return it.length >= 3
			? { name: it[0], form: it[1], note: it[2] }
			: { name: it[0], note: it[1] };
	}
	return it;
}

// ==========================================
// 5. 데이터 가공 (회차 객체 생성 + 출연 티니핑 추출)
// ==========================================
const teenieNames = Array.from(new Set(teeniepings.map(t => t.name)));

// 제목에 이름이 그대로 들어간 티니핑만 추출 (예: '다해핑' 속 '해핑'은 제외)
function findTeenieInTitle(title) {
	if (!title) return [];
	title = title.replace(/아아[~～]+핑/g, '아아핑');
	// 아래 기존 코드 유지
	const found = [];
	teenieNames.forEach(name => {
		let idx = title.indexOf(name);
		while (idx !== -1) {
			const prev = idx > 0 ? title.charAt(idx - 1) : '';
			if (!/[가-힣]/.test(prev)) {
				found.push({ name: name, pos: idx });
				break;
			}
			idx = title.indexOf(name, idx + 1);
		}
	});
	return found.sort((a, b) => a.pos - b.pos).map(f => f.name);
}

const teenieEpisodes = [];
teenieSeasonKeys.forEach(no => {
	const meta = teenieSeasonMeta[no];
	teenieEpisodeSeeds[no].forEach((seed, i) => {
		const epNum = i + 1;

		const resolvedTeenies = (seed.teenies && seed.teenies.length > 0)
			? seed.teenies
			: findTeenieInTitle(seed.title);

		const resolvedPrincess = (seed.princess || []).map(n => {
			const p = teeniePrincess.find(x => x.name === '프린세스 ' + n);
			if (!p) console.warn(`프린세스 없음: ${meta.label} ${epNum}화 '${n}'`);
			return p;
		}).filter(Boolean);

		teenieEpisodes.push({
			seasonNo: no,
			season: meta.label,
			epNum: epNum,
			cumNum: meta.offset + epNum,
			title: seed.title,
			date: seed.date,
			yt: seed.yt,
			note: seed.note,
			teenies: resolvedTeenies,
			princesses: resolvedPrincess,
			rowClass: epNum === 1 ? 'season-start' : ''
		});
	});
});

// 등급별 표에 올릴 극장판 항목 (극장판 전용 티니핑 + inGrade 표시 항목)
function teenieMovieOnlyList() {
	const list = [];
	teenieMovies.forEach(m => {
		m.groups.forEach(g => {
			g.items.map(normalizeMovieItem).forEach(o => {
				if (!g.exclusive && !o.inGrade) return;
				list.push({
					movie: m,
					exclusive: !!g.exclusive,
					name: o.name,
					form: o.form || '',
					note: o.note || '',
					grade: o.grade || 'normal',
					intro: extractYtId(o.intro),
					mv: extractYtId(o.mv)
				});
			});
		});
	});
	return list;
}

// 현재 선택된 필터
let currentSeason = 'all';      // 회차 목록: 기수
let currentTeenie = 'all';      // 회차 목록: 출연 티니핑
let currentQuery = '';          // 회차 목록: 검색어
let currentClassSeason = 'all'; // 기수별 분류: 기수
let currentGrade = 'royal';     // 등급별 분류: 등급

// ==========================================
// 6. 공통 함수
// ==========================================
function escHtml(str) {
	return String(str == null ? '' : str)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

// 분류 탭용 뱃지
function renderTeenieBadge(t) {
	const label = t.form || t.name;
	return `<span class="badge teenie-badge teenie-hover grade-${t.grade} me-1 mb-1"${teenieHoverAttrs(t.name, t.form, t.note)}>${escHtml(label)}</span>`;
}

// 회차 표의 출연 티니핑 뱃지
function renderTeenieKeywordBadge(name) {
	if (!name) return '';
	return renderTeenieNameBadge(name, { keyword: true, extraClass: 'keyword-tag' });
}

function countTeenies(seasonNo, grade) {
	return teeniepings.filter(t => t.season === seasonNo && (grade ? t.grade === grade : t.grade !== 'etc')).length;
}

// 폼 이름 → 기본 이름 ('다이아 하츄핑' → '하츄핑'), 폼이 아니면 그대로 반환
let _teenieCanonMap = null;
function teenieCanonicalName(name) {
	if (!_teenieCanonMap) {
		_teenieCanonMap = {};
		teeniepings.forEach(t => { if (t.form) _teenieCanonMap[t.form] = t.name; });
	}
	return _teenieCanonMap[name] || name;
}

// 출연 티니핑 이름들 → 해당 프린세스 목록 (중복 제거)
function findPrincessByTeenies(names) {
	const out = [];
	(names || []).forEach(n => {
		teeniePrincess.forEach(p => {
			if (p.keys.includes(n) && !out.includes(p)) out.push(p);
		});
	});
	return out;
}
 
// 프린세스 뱃지 (로열/레전드 색 자동, 이미지 + 이름 + 내용 툴팁)
// 같은 이름의 항목이 여러 개면(예: 라비린스 3기·4기) 이미지를 모두 모아 보여줌
function renderPrincessBadge(p) {
	const grade = p.grade || ((p.keys && p.keys[0]) ? getTeenieInfo(p.keys[0]).grade : 'royal');
	const variants = teeniePrincess.filter(x => x.name === p.name);
	const multi = variants.length > 1;

	const noteParts = [];
	const partnerLabel = { legend: '레전드핑: ', royal: '로열핑: ' }[grade] || '파트너: ';
	if (p.partner) noteParts.push(partnerLabel + p.partner);
	const firsts = (multi ? variants : [p]).map(v => v.first).filter(Boolean);
	if (firsts.length) noteParts.push('첫 변신 ' + firsts.join(' · '));
	if (p.note) noteParts.push(p.note);

	const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
	/* const imgOf = v => {
		const nm = (typeof teeniePrincessNamu !== 'undefined')
			? teeniePrincessNamu.find(x => x.name === v.name && x.season === v.season) : null;
		const local = _teenieImgUrl(v.img);
		const namu = nm ? _teenieImgUrl(nm.img) : '';
		return {
			label: v.label || (multi ? v.season + '기' : ''),
			src: local || namu,
			fallback: (local && namu && local !== namu) ? namu : ''
		};
	}; */
	const imgOf = v => ({
		label: v.label || (multi ? v.season + '기' : ''),
		src: _teenieImgUrl(v.img)
	});
	const imgs = (multi ? variants : [p]).map(imgOf).filter(i => i.src);
	const attrs = ` data-tip-name="${esc(p.name)}" data-tip-imgs="${esc(JSON.stringify(imgs))}" data-tip-note="${esc(noteParts.join(' · '))}"`;

	return `<span class="badge teenie-badge teenie-hover grade-${grade} me-1 mb-1"${attrs}>${escHtml(p.name)}</span>`;
}

// 기수 필터 버튼 생성 (회차 목록 / 기수별 분류 공용)
function renderSeasonButtons(wrapSelector, btnClass, countFn) {
	const $wrap = $(wrapSelector);
	if (!$wrap.length) return;

	$wrap.empty();
	$wrap.append(`<button class="btn btn-secondary ${btnClass} active" data-keyword="all">기수 전체보기</button>`);

	teenieSeasonKeys.forEach(no => {
		const label = teenieSeasonMeta[no].label;
		const count = countFn(no);
		$wrap.append(`<button class="btn btn-outline-dark ${btnClass}" data-keyword="${label}">${label} <small class="text-muted">(${count})</small></button>`);
	});
}

// 필터 버튼 클릭 공통 처리
function bindFilterButtons(btnClass, onChange) {
	$(document).on('click', '.' + btnClass, function () {
		$('.' + btnClass)
			.removeClass('active btn-secondary')
			.addClass('btn-outline-dark');

		$(this)
			.addClass('active btn-secondary')
			.removeClass('btn-outline-dark');

		onChange($(this).attr('data-keyword'));
	});
}

// ---------------------------------------------------------------------
// [A] 이름 → 등급/비고 자동 조회 + 툴팁
// ---------------------------------------------------------------------
const teenieGradePriority = { legend: 3, royal: 2, normal: 1, etc: 0 };
let _teenieInfoMap = null;
 
function buildTeenieInfoMap() {
	const map = {};
	const put = (key, t) => {
		if (!key) return;
		const cur = map[key];
		if (!cur) {
			map[key] = { grade: t.grade, note: t.note || '' };
			return;
		}
		// 여러 기수에 걸쳐 있으면 높은 등급 우선 (예: 행운핑, 하츄핑)
		if (teenieGradePriority[t.grade] > teenieGradePriority[cur.grade]) cur.grade = t.grade;
		if (!cur.note && t.note) cur.note = t.note;
	};
	teeniepings.forEach(t => {
		put(t.name, t);
		if (t.form) put(t.form, t);   // '다이아 하츄핑' 같은 폼 이름으로도 조회
	});
	// 극장판 항목 (폼 이름이 있으면 폼 이름으로 등록)
	teenieMovieOnlyList().forEach(o => {
		const key = o.form || o.name;
		if (!map[key]) map[key] = { grade: o.grade, note: o.note || '' };
	});
	return map;
}
 
// 반환: { grade, note }  — 데이터에 없는 이름(예: 병사핑)은 normal
function getTeenieInfo(name) {
	if (!_teenieInfoMap) _teenieInfoMap = buildTeenieInfoMap();
	return _teenieInfoMap[name] || { grade: 'normal', note: '' };
}
 
// 이름이 들어간 모든 뱃지에 공통으로 쓰는 생성 함수
function renderTeenieNameBadge(name, opts) {
	opts = opts || {};
	const form = opts.form || '';
	const info = getTeenieInfo(form || name);
	const note = opts.note || info.note;
	const extraCls = opts.extraClass ? ' ' + opts.extraClass : '';
	const dataAttr = opts.keyword ? ` data-keyword-type="teenie" data-keyword="${escHtml(name)}"` : '';
	const cursor = opts.keyword ? ' style="cursor:pointer;"' : '';
	return `<span class="badge teenie-badge teenie-hover grade-${info.grade}${extraCls} me-1 mb-1"${dataAttr}${teenieHoverAttrs(name, form, note)}${cursor}>${escHtml(form || name)}</span>`;
}
 
// 툴팁 (이미지 + 이름 + 내용). data-tip-name / data-tip-img / data-tip-note 사용
function initTeenieTooltip() {
	if (window.__teenieTipBound) return;
	window.__teenieTipBound = true;
 
	$('<style>').text(`
		#teenieTip { position: fixed; z-index: 3000; display: none; max-width: min(360px, calc(100vw - 16px)); padding: .6rem;
			background: #fff; color: #212529; border: 1px solid #ced4da; border-radius: .5rem;
			box-shadow: 0 .4rem 1rem rgba(0,0,0,.18); text-align: center; pointer-events: none; font-size: .85rem; line-height: 1.4; }
		#teenieTip .tip-imgs { display: flex; gap: .5rem; justify-content: center; margin-bottom: .4rem; }
		#teenieTip figure { margin: 0; }
		#teenieTip figure img { display: block; max-width: 160px; max-height: 160px; object-fit: contain; }
		#teenieTip figcaption { font-size: .75rem; color: #6c757d; margin-top: .15rem; }
		#teenieTip .tip-name { font-weight: 700; margin-bottom: .15rem; }
		#teenieTip .tip-note { color: #495057; word-break: keep-all; }
	`).appendTo('head');
 
	const $tip = $('<div id="teenieTip" role="tooltip"></div>').appendTo('body');
 
	function show($el, e) {
		const name = $el.attr('data-tip-name') || '';
		const note = $el.attr('data-tip-note') || '';
		let imgs = [];
		try { imgs = JSON.parse($el.attr('data-tip-imgs') || '[]'); } catch (err) {}
		imgs = imgs.filter(i => i && i.src);
		if (!imgs.length && !note) return;

		$tip.empty();
		if (imgs.length) {
			const $row = $('<div class="tip-imgs"></div>');
			const badSrc = (window.__teenieBadImg = window.__teenieBadImg || new Set());
			imgs.forEach(i => {
				const chain = [i.src, i.fallback].filter(s => s && !badSrc.has(s));
				if (!chain.length) return;
				const $fig = $('<figure></figure>');
				let step = 0;
				const $img = $('<img>').attr({ alt: name, referrerpolicy: 'no-referrer' })
					.on('error', function () {
						badSrc.add(chain[step]);
						step++;
						if (chain[step]) $(this).attr('src', chain[step]);
						else $fig.remove();
					})
					.attr('src', chain[0]);
				$fig.append($img);
				if (i.label) $fig.append($('<figcaption></figcaption>').text(i.label));
				$row.append($fig);
			});
			$tip.append($row);
		}
		$tip.append($('<div class="tip-name"></div>').text(name));
		if (note) $tip.append($('<div class="tip-note"></div>').text(note));
		$tip.show();
		move(e);
	}
	function move(e) {
		const w = $tip.outerWidth(), h = $tip.outerHeight();
		let x = e.clientX + 14, y = e.clientY + 14;
		if (x + w > window.innerWidth - 8) x = e.clientX - w - 14;
		if (y + h > window.innerHeight - 8) y = e.clientY - h - 14;
		$tip.css({ left: Math.max(8, x), top: Math.max(8, y) });
	}
 
	$(document)
		.on('mouseenter', '.teenie-hover[data-tip-name]', function (e) { show($(this), e); })
		.on('mousemove', '.teenie-hover[data-tip-name]', move)
		.on('mouseleave', '.teenie-hover[data-tip-name]', function () { $tip.hide(); })
		// 모바일: 터치하면 표시, 다른 곳 터치하면 숨김
		.on('touchstart', '.teenie-hover[data-tip-name]', function (e) {
			const t = e.originalEvent.touches[0];
			show($(this), { clientX: t.clientX, clientY: t.clientY });
		})
		.on('touchstart', function (e) {
			if (!$(e.target).closest('.teenie-hover').length) $tip.hide();
		});
}

// ==========================================
// 7. 상단 개요 (TVA / 극장판)
// ==========================================
function renderSeriesOverview() {
	const $wrap = $('#series-overview');
	if (!$wrap.length) return;

	const tva = teenieSeasonKeys.map(no => {
		const m = teenieSeasonMeta[no];
		return `<span class="badge bg-light text-dark border me-1 mb-1">${m.label} ${escHtml(m.title)} (${m.year})</span>`;
	}).join('');

	const movie = teenieMovies.map(m => {
		return `<span class="badge bg-light text-dark border me-1 mb-1">${m.label} ${escHtml(m.title)} (${escHtml(m.year)})</span>`;
	}).join('');

	$wrap.html(`
		<div class="overview-row"><strong>TVA</strong> ${tva}</div>
		<div class="overview-row"><strong>극장판 사랑의 하츄핑 트릴로지</strong> ${movie}</div>
	`);
}

// ==========================================
// 8. 탭 1: 회차 목록
// ==========================================
function renderTeenieFilter() {
	const counts = {};
	teenieEpisodes.forEach(ep => {
		// 폼 이름은 기본 이름으로 합치고, 한 회차 안의 중복은 1회로 계산
		new Set(ep.teenies.map(teenieCanonicalName)).forEach(n => {
			counts[n] = (counts[n] || 0) + 1;
		});
	});

	const sorted = Object.keys(counts).sort((a, b) => {
		if (counts[b] !== counts[a]) {
			return counts[b] - counts[a];
		}
		return a.localeCompare(b, 'ko');
	});

	const $wrap = $('.teenie-filter-wrap');
	if (!$wrap.length) return;

	$wrap.empty();
	$wrap.append('<button class="btn btn-secondary btn-keyword-teenie active" data-keyword="all">티니핑 전체보기</button> ');

	let moreHtml = '<div id="more-keywords" style="display: none;">';
	let hasMore = false;

	sorted.forEach(name => {
		const count = counts[name];
		const btnHtml = `<button class="btn btn-outline-dark btn-keyword-teenie" data-keyword="${escHtml(name)}">#${escHtml(name)} <small class="text-muted">(${count})</small></button> `;

		if (count >= 3) {
			$wrap.append(btnHtml);
		} else {
			moreHtml += btnHtml;
			hasMore = true;
		}
	});

	moreHtml += '</div>';

	if (hasMore) {
		$wrap.append(moreHtml);
		$wrap.append('<button class="btn btn-outline-secondary btn-toggle-more-teenie ms-1"><i class="fa-solid fa-plus"></i> 더보기</button>');
	}
}

function renderEpisodeTable() {
	const $tbody = $('#tbody-episodes');
	if (!$tbody.length) return;

	$tbody.empty();

	const q = currentQuery.trim().toLowerCase();

	const filteredList = teenieEpisodes.filter(ep => {
		const matchesSeason = (currentSeason === 'all') || (ep.season === currentSeason);
		const matchesTeenie = (currentTeenie === 'all') || ep.teenies.some(n => teenieCanonicalName(n) === currentTeenie);
		const haystack = [ep.title, ep.note, ep.teenies.join(' '), ep.princesses.map(p => p.name).join(' ')].join(' ').toLowerCase();
		const matchesQuery = !q || haystack.includes(q);
		return matchesSeason && matchesTeenie && matchesQuery;
	});

	$('#episodeCount').text(`${filteredList.length}개 표시 (전체 ${teenieEpisodes.length}화)`);

	if (filteredList.length === 0) {
		$tbody.append('<tr><td colspan="7" class="center text-muted py-4">해당 조건의 회차 정보가 없습니다.</td></tr>');
		return;
	}

	filteredList.forEach(ep => {
		const meta = teenieSeasonMeta[ep.seasonNo];

		// 1) 기수 표시
		const seasonHtml = `${escHtml(ep.season)}<br><small class="text-muted">${escHtml(meta.theme)}</small>`;

		// 2) 방영일
		const dateHtml = ep.date ? escHtml(ep.date) : '-';

		// 3) 스트리밍 링크 (공식 유튜브)
		const ottHtml = ep.yt
			? `<a href="https://youtu.be/${escHtml(ep.yt)}" target="_blank" rel="noopener" class="me-1">YOUTUBE</a>`
			: (ep.title && meta.stream)
				? `<a href="${escHtml(meta.stream.url)}" target="_blank" rel="noopener" class="me-1">${escHtml(meta.stream.label)}</a>`
				: '-';

		// 4) 에피소드 + 누적 회차 + 제목
		const titleHtml = ep.title
			? escHtml(ep.title)
			: '<span class="text-muted">(제목 미공개)</span>';
		const epCombinedHtml = `<strong>EP.${ep.epNum}</strong> <small class="text-muted">(누적 ${ep.cumNum}화)</small> ${titleHtml}`;

		// 5) 출연 티니핑 뱃지
		const teeniesHtml = ep.teenies.length > 0
			? ep.teenies.map(n => renderTeenieKeywordBadge(n)).join('')
			: '-';

		// 6) 프린세스
		const princessHtml = ep.princesses.length > 0
			? ep.princesses.map(p => renderPrincessBadge(p)).join('')
			: '-';

		const trClass = ep.rowClass ? ` class="${ep.rowClass}"` : '';

		const trHtml = `
			<tr${trClass}>
				<td data-label="기수" class="center">${seasonHtml}</td>
				<td data-label="방영일" class="center">${dateHtml}</td>
				<td data-label="스트리밍" class="center link">${ottHtml}</td>
				<td data-label="에피소드">${epCombinedHtml}</td>
				<td data-label="출연 티니핑">${teeniesHtml}</td>
				<td data-label="프린세스">${princessHtml}</td>
				<td data-label="비고">${ep.note ? escHtml(ep.note) : '-'}</td>
			</tr>
		`;
		$tbody.append(trHtml);
	});
}

// ==========================================
// 9. 탭 2: 애니메이션 기수별 티니핑 분류
// ==========================================
function renderGradeCell(list) {
	const groups = [];
	list.forEach(t => {
		let found = groups.find(g => g.name === t.group);
		if (!found) {
			found = { name: t.group, items: [] };
			groups.push(found);
		}
		found.items.push(t);
	});

	return groups.map(g => {
		const head = g.name
			? `<div class="mb-1"><small class="text-muted fw-bold">${escHtml(g.name)} (${g.items.length})</small></div>`
			: '';
		return head + `<div class="mb-1">${g.items.map(renderTeenieBadge).join('')}</div>`;
	}).join('');
}

function renderSeasonClass() {
	const $wrap = $('#class-season-wrap');
	if (!$wrap.length) return;

	$wrap.empty();

	const targets = (currentClassSeason === 'all')
		? teenieSeasonKeys
		: teenieSeasonKeys.filter(no => teenieSeasonMeta[no].label === currentClassSeason);

	targets.forEach(no => {
		const meta = teenieSeasonMeta[no];
		const items = teeniepings.filter(t => t.season === no);

		const rowsHtml = teenieGradeOrder.map(g => {
			const list = items.filter(t => t.grade === g);
			if (list.length === 0) return '';
			const countText = (g === 'etc') ? '' : ` (${list.length})`;
			return `
				<tr>
					<th scope="row" class="center grade-head grade-${g}">${teenieGradeLabel[g]}${countText}</th>
					<td data-label="${teenieGradeLabel[g]}">${renderGradeCell(list)}</td>
				</tr>
			`;
		}).join('');

		const princessList = teeniePrincess.filter(p => p.season === no);
		const princessRow = princessList.length ? `
			<tr>
				<th scope="row" class="center grade-head grade-princess">프린세스 (${princessList.length})</th>
				<td data-label="프린세스"><div class="mb-1">${princessList.map(renderPrincessBadge).join('')}</div></td>
			</tr>` : '';

		const total = countTeenies(no);
		const summaryParts = ['royal', 'legend', 'normal']
			.filter(g => countTeenies(no, g) > 0)
			.map(g => `${teenieGradeLabel[g].replace(' 티니핑', '')} ${countTeenies(no, g)}`);
		const summary = `총 ${total}종 (${summaryParts.join(' · ')})` + (no === 7 ? ' · 공개 기준' : '');

		$wrap.append(`
			<div class="season-block mb-4" id="class-season-${no}">
				<h4 class="season-block-title">${meta.label} ${escHtml(meta.theme)} <small class="text-muted">${escHtml(meta.title)} (${meta.year})</small></h4>
				<p class="season-block-desc mb-1">${escHtml(meta.desc)}</p>
				<p class="season-block-summary mb-2"><span class="badge bg-secondary">${summary}</span>${meta.caveat ? ` <small class="text-muted">${escHtml(meta.caveat)}</small>` : ''}</p>
				<table class="table table-bordered table-block program teenieping-class">
					<colgroup>
						<col class="col-class-head">
						<col class="col-class-body">
					</colgroup>
					<tbody>${rowsHtml}${princessRow}</tbody>
				</table>
			</div>
		`);
	});
}

// ==========================================
// 10. 탭 3: 극장판 시즌별 등장 티니핑
// ==========================================
function renderMovies() {
	const $wrap = $('#movie-wrap');
	if (!$wrap.length) return;

	$wrap.empty();

	teenieMovies.forEach(m => {
		let bodyHtml;

		if (m.groups.length === 0) {
			bodyHtml = '<p class="text-muted mb-0">기획 중입니다. (연도 미정)</p>';
		} else {
			bodyHtml = m.groups.map(g => {
				const items = g.items.map(normalizeMovieItem);
				const badges = items.map(o =>
					renderTeenieNameBadge(o.name, { form: o.form || '', note: o.note || '' })
				).join('');
				return `
					<div class="mb-3">
						<div class="mb-1"><strong>${escHtml(g.label)}</strong> <small class="text-muted">(${items.length})</small></div>
						<div>${badges}</div>
					</div>
				`;
			}).join('');
		}

		if (m.groups.length > 0) {
			const mp = teenieMoviePrincess[m.no] || [];
			bodyHtml += `
				<div class="mb-3">
					<div class="mb-1"><strong>프린세스</strong> <small class="text-muted">(${mp.length})</small></div>
					<div>${mp.length ? mp.map(renderPrincessBadge).join('') : '<small class="text-muted">아직 정보가 없습니다.</small>'}</div>
				</div>`;
		}

		$wrap.append(`
			<div class="card mb-3">
				<div class="card-header"><strong>${m.label} ${escHtml(m.title)}</strong> <small class="text-muted">(${escHtml(m.year)})</small></div>
				<div class="card-body">${bodyHtml}</div>
			</div>
		`);
	});
}

// ==========================================
// 11. 탭 4: 등급별 티니핑 분류
// ==========================================
function getGradeRows() {
	const rows = [];

	teeniepings
		.filter(t => t.grade !== 'etc' && (currentGrade === 'all' || t.grade === currentGrade))
		.forEach(t => {
			rows.push({
				grade: t.grade,
				seasonHtml: `${teenieSeasonMeta[t.season].label} <small class="text-muted">${escHtml(teenieSeasonMeta[t.season].theme)}</small>`,
				name: t.form || t.name,
				group: t.group,
				note: t.note,
				intro: t.intro,
				mv: t.mv
			});
		});

	teenieMovieOnlyList()
	.filter(o => currentGrade === 'all' || o.grade === currentGrade)
	.forEach(o => {
		rows.push({
			grade: o.grade,
			seasonHtml: `극장판 ${o.movie.label} <small class="text-muted">${escHtml(o.movie.title)}</small>`,
			name: o.form || o.name,
			group: '',
			note: o.note,
			intro: o.intro,
			mv: o.mv
		});
	});

	return rows;
}

function renderGradeButtons() {
	const $wrap = $('.grade-filter-wrap');
	if (!$wrap.length) return;

	const prev = currentGrade;
	$wrap.empty();

	[['all', '등급 전체보기'], ['royal', '로열 티니핑'], ['legend', '레전드 티니핑'], ['normal', '일반 티니핑']].forEach(pair => {
		currentGrade = pair[0];
		const count = getGradeRows().length;
		const active = (pair[0] === prev);
		const cls = active ? 'btn-secondary active' : 'btn-outline-dark';
		$wrap.append(`<button class="btn ${cls} btn-keyword-grade" data-keyword="${pair[0]}">${pair[1]} <small class="text-muted">(${count})</small></button>`);
	});

	currentGrade = prev;
}

function renderGradeSummary() {
	const $el = $('#grade-summary');
	if (!$el.length) return;

	const GRADES = ['royal', 'legend', 'normal'];

	// 목록 → { royal, legend, normal, total }
	const countBy = list => {
		const r = { royal: 0, legend: 0, normal: 0, total: list.length };
		list.forEach(t => { if (r[t.grade] !== undefined) r[t.grade]++; });
		return r;
	};

	const valid = teeniepings.filter(t => t.grade !== 'etc');
	const tva = countBy(valid.filter(t => t.season <= 6));   // 1~6기
	const s7 = countBy(valid.filter(t => t.season === 7));   // 7기(공개 기준)

	// 극장판: 전용 티니핑 + 폼 변형(inGrade)
	const movieList = teenieMovieOnlyList();
	const movie = countBy(movieList);
	const movieExclusive = movieList.filter(o => o.exclusive).length;
	const movieForm = movieList.length - movieExclusive;

	const all = { total: tva.total + s7.total + movie.total };
	GRADES.forEach(g => { all[g] = tva[g] + s7[g] + movie[g]; });

	const fmt = c =>
		`로열 <strong>${c.royal}</strong>종 · 레전드 <strong>${c.legend}</strong>종 · 일반 <strong>${c.normal}</strong>종 ` +
		`(총 <strong>${c.total}</strong>종)`;

	$el.html(
		`<div>1~6기: ${fmt(tva)}</div>` +
		`<div>7기: ${fmt(s7)} <small class="text-muted">· 2026년 10월 기준 공개 개체, 레전드(뮤즈핑·디바핑)는 추정</small></div>` +
		`<div>극장판: ${fmt(movie)} <small class="text-muted">· 전용 ${movieExclusive}종 + 폼 변형 ${movieForm}종(사랑의 하츄핑·머메이드 하츄핑)</small></div>`
	);
}

// 유튜브 링크 셀 (ID 없으면 '-')
function renderYtLink(id) {
	return id
		? `<a href="https://youtu.be/${escHtml(id)}" target="_blank" rel="noopener">YOUTUBE</a>`
		: '-';
}

function renderGradeTable() {
	const $tbody = $('#tbody-grades');
	if (!$tbody.length) return;

	$tbody.empty();

	const rows = getGradeRows();

	if (rows.length === 0) {
		$tbody.append('<tr><td colspan="6" class="center text-muted py-4">해당 등급의 티니핑 정보가 없습니다.</td></tr>');
		return;
	}

	rows.forEach(r => {
		const noteHtml = [r.group ? `[${escHtml(r.group)}]` : '', r.note ? escHtml(r.note) : ''].filter(Boolean).join(' ') || '-';
		$tbody.append(`
			<tr>
				<td data-label="등급" class="center"><span class="badge teenie-badge grade-${r.grade}">${teenieGradeLabel[r.grade].replace(' 티니핑', '')}</span></td>
				<td data-label="기수" class="center">${r.seasonHtml}</td>
				<td data-label="티니핑"><strong class="teenie-hover"${teenieHoverAttrs(r.name, '', r.note)}>${escHtml(r.name)}</strong></td>
				<td data-label="소개영상" class="center link">${renderYtLink(r.intro)}</td>
				<td data-label="MV영상" class="center link">${renderYtLink(r.mv)}</td>
				<td data-label="비고">${noteHtml}</td>
			</tr>
		`);
	});
}

// ==========================================
// 12. 탭 해시 연동
// ==========================================
function activateTabFromHash() {
	const hash = location.hash;
	if (!hash || typeof bootstrap === 'undefined') return;

	try {
		const trigger = document.querySelector(`#teenieTabs [data-bs-target="${hash}"]`);
		if (trigger) {
			new bootstrap.Tab(trigger).show();
		}
	} catch (e) {
		// 잘못된 해시는 무시
	}
}

// ==========================================
// 13. 초기화 및 이벤트 등록
// ==========================================
$(function () {
	initTeenieTooltip();
	renderSeriesOverview();

	// 탭 1: 회차 목록
	renderSeasonButtons('.season-filter-wrap', 'btn-keyword-season', no => teenieEpisodes.filter(ep => ep.seasonNo === no).length);
	renderTeenieFilter();
	renderEpisodeTable();

	// 탭 2: 기수별 분류
	renderSeasonButtons('.class-season-filter-wrap', 'btn-class-season', no => countTeenies(no));
	renderSeasonClass();

	// 탭 3: 극장판
	renderMovies();

	// 탭 4: 등급별
	renderGradeButtons();
	renderGradeSummary();
	renderGradeTable();

	// 회차 목록: 기수 필터
	bindFilterButtons('btn-keyword-season', function (keyword) {
		currentSeason = keyword;
		renderEpisodeTable();
	});

	// 회차 목록: 티니핑 필터
	bindFilterButtons('btn-keyword-teenie', function (keyword) {
		currentTeenie = keyword;
		renderEpisodeTable();
	});

	// 기수별 분류: 기수 필터
	bindFilterButtons('btn-class-season', function (keyword) {
		currentClassSeason = keyword;
		renderSeasonClass();
	});

	// 등급별: 등급 필터
	bindFilterButtons('btn-keyword-grade', function (keyword) {
		currentGrade = keyword;
		renderGradeTable();
	});

	// 검색
	$('#episodeSearch').on('input', function () {
		currentQuery = $(this).val();
		renderEpisodeTable();
	});

	// 필터 초기화
	$('#episodeReset').on('click', function () {
		$('#episodeSearch').val('');
		currentQuery = '';
		$('.btn-keyword-season[data-keyword="all"]').trigger('click');
		$('.btn-keyword-teenie[data-keyword="all"]').trigger('click');
	});

	// 티니핑 필터 더보기 토글
	$(document).on('click', '.btn-toggle-more-teenie', function () {
		const $more = $('#more-keywords');
		const open = $more.is(':visible');
		$more.toggle(!open);
		$(this).html(open
			? '<i class="fa-solid fa-plus"></i> 더보기'
			: '<i class="fa-solid fa-minus"></i> 접기');
	});

	// 뱃지 클릭 필터 연동
	$(document).on('click', '.keyword-tag', function () {
		const keyword = teenieCanonicalName($(this).attr('data-keyword'));
		if (!keyword) return;

		const $targetBtn = $('.btn-keyword-teenie').filter(function () {
			return $(this).attr('data-keyword') === keyword;
		});
		if ($targetBtn.length) {
			if ($targetBtn.closest('#more-keywords').length && !$('#more-keywords').is(':visible')) {
				$('.btn-toggle-more-teenie').trigger('click');
			}
			$targetBtn.trigger('click');
		}
	});

	// 탭 전환 시 주소 해시 갱신
	const tabsEl = document.getElementById('teenieTabs');
	if (tabsEl) {
		tabsEl.addEventListener('shown.bs.tab', function (e) {
			const target = e.target.getAttribute('data-bs-target');
			if (target && history.replaceState) {
				history.replaceState(null, '', target);
			}
		});
	}

	window.addEventListener('hashchange', activateTabFromHash);
	activateTabFromHash();
});