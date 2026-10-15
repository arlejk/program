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
		desc: '공주·왕자를 모티브로 만들어진 티니핑으로, 각자 특정 나라의 공주·왕자 역할을 맡는다. 성별에 따라 프린세스/프린스로 구분한 첫 시즌이다.'
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
// 2. 회차 데이터 [제목, 방영일, 유튜브 ID, 비고]
//    - 누적 회차는 기수별 offset + 회차로 계산
// ==========================================
const teenieEpisodeSeeds = {
	1: [
		['엉망진창 쿠키 만들기', '2020.03.19', 'pglnkdt-RSk', ''],
		['아잉핑이 너무해!', '2020.03.26', 'nFl47Dx1qco', ''],
		['부끄러워하지 마~', '2020.04.02', 'FVnAqF_GZYQ', ''],
		['올바름의 티니핑, 바로핑', '2020.04.09', 'CgQnJpGLN-s', ''],
		['최고는 누구?', '2020.04.16', 'v5o1XpS2hWg', ''],
		['용기를 내, 마야!', '2020.04.23', 'RUHo--AxFtU', ''],
		['깜빡할 수도 있지~', '2020.05.07', 'AzoN6-WdLSE', '초기 기획 제목: ‘그럴 수도 있지~’ · 4/30 부처님오신날 특집 편성으로 결방'],
		['배고플 땐 상상해 봐', '2020.05.14', '', '공식 유튜브 스트리밍 미방영(나무위키 기준)'],
		['희망아, 어서 와', '2020.05.21', 'S0VM9rRIrfI', ''],
		['눈물사탕은 어떤 맛?', '2020.05.28', 'l-dWqcFt2aw', ''],
		['차나핑을 찾아라!', '2020.06.04', 'ROqxe8V4AWg', ''],
		['즐겁게 노래 불러 봐', '2020.06.11', 'qc9DB9sh0vI', ''],
		['날 따라 해봐요', '2020.06.18', 'Oa05QqabEAQ', '초기 기획 제목: ‘따라핑의 팬심’'],
		['거울을 보면 안 돼', '2020.06.25', '9Yq1x-lqmF4', '초기 기획 제목: ‘거울을 봐서는 안 돼’'],
		['돌아와, 하츄핑', '2020.07.02', 'WrPnyvS5LsY', '초기 기획 제목: ‘하츄핑의 가출’'],
		['무셔핑의 사진 찍기', '2020.07.09', 'zprBK9cvhkA', '초기 기획 제목: ‘무셔무셔 사진 찍기 대소동’'],
		['나만 사랑해 줘!', '2020.07.16', '94zttO4-YcE', ''],
		['좌충우돌 생일 파티', '2020.07.23', '6zDvlZzz9u8', '초기 기획 제목: ‘좌충우돌, 로미의 생일 파티!’'],
		['행운을 부르는 도장', '2020.07.30', 'nMM1Fikslyw', '초기 기획 제목: ‘행운의 스탬프를 찾아라!’'],
		['다 말해 버릴 거야!', '2020.08.06', '1NXR4dVCcfE', '초기 기획 제목: ‘수다쟁이는 도대체 누구야?’'],
		['풍선껌 대소동', '2020.08.13', '', '공식 유튜브 스트리밍 미방영(나무위키 기준)'],
		['욕심쟁이 다조핑', '2020.08.20', 'JxC2fW0MDhQ', '초기 기획 제목: ‘다 줘요! 내 꺼야!’'],
		['화내지 말아줘', '2020.08.27', 'jmU5wdysSZw', ''],
		['바로핑이 많아졌어요!', '2020.09.03', '50aBoQlQgHQ', ''],
		['싫어 싫어, 시러핑!', '2020.09.10', 'jF3HEJENPqI', '초기 기획 제목: ‘시러시러, 시러핑!’'],
		['바네핑의 화살', '2020.09.17', 'eKY1k1M02X4', '초기 기획 제목: ‘사랑해! 대소동’'],
		['장난이 제일 좋아!', '2020.09.24', 'G4LxgiYC5Vs', ''],
		['춥다, 추워! 덜덜핑', '2020.10.08', 'PyfBna37VjM', '10/1 추석 연휴로 휴방'],
		['그림이 살아있다?', '2020.10.15', 'ROynsahTutY', ''],
		['동화 속 공주님이 되고 싶어', '2020.10.22', 'vT-tUQ8iGec', ''],
		['아휴~ 무거워, 무거핑', '2020.10.29', '2TVr0PXstjw', ''],
		['뭐든지 거꾸로, 꺼꿀핑', '2020.11.05', 'p5hXhz1n2mY', ''],
		['다섯 명의 로미', '2020.11.12', 'R4GV0v2BR6U', ''],
		['씽씽핑은 빠른 게 좋아!', '2020.11.19', 'ZxKmHqmORN4', ''],
		['아기가 좋아, 베베핑!', '2020.11.26', 'kvFJr2OoOqU', ''],
		['하트로즈에 외계인 등장!', '2020.12.03', 'hSB-8RbHZhI', ''],
		['잠자는 하트로즈의 공주', '2020.12.10', 'OXhucuyJNFY', '잠자는 숲속의 공주 패러디'],
		['로미, 레나랑 딱 붙다?', '2020.12.17', 'oL9-7eus26E', ''],
		['토끼 괴물이 나타났다!', '2020.12.24', '35txjFsYGT8', ''],
		['티니핑 축제', '2020.12.31', '-nhVnbgoM7c', ''],
		['장난감이 되었어요!', '2021.01.07', 'w-7opR3rVtI', ''],
		['하트로즈의 수상한 손님', '2021.01.14', 'Sl7gqg5rtBA', ''],
		['꽃 만들기 대소동', '2021.01.21', 'Ky1Z05p5gU4', ''],
		['사고뭉치 아기 노리핑', '2021.01.28', 'NVf22BcQrWA', ''],
		['악동핑의 진실', '2021.02.04', '6Djmlq69_ag', ''],
		['프린세스 선샤인', '2021.02.18', 'R9Xl7QiNnlU', '2/11 설 연휴로 휴방'],
		['공부할 땐 조용히, 똑똑!', '2021.02.25', 'G7cbVWRP_HM', ''],
		['다 얼려 버려, 꽁꽁핑', '2021.03.04', 'EJM9t9BlK8k', ''],
		['찌릿핑은 짜릿짜릿해', '2021.03.11', 'QWxAqN4wE4c', '시리즈 유일 15세 이상 시청가'],
		['바다에서 온 티니핑', '2021.03.18', 'qJ9laZd55fA', ''],
		['로열핑의 이름으로!', '2021.03.25', 'IkZLDHoFeXU', ''],
		['프린세스 베로니카', '2021.04.01', 'DJ998RbjqqQ', '']
	],
	2: [
		['반짝반짝 보석티니핑', '2021.09.22', '_Trni5YhFUw', ''],
		['티니핑 스쿨 개교!', '2021.09.29', 'jKAXq4IJHv8', ''],
		['간지럼을 참아야 해!', '2021.10.06', 'alEFGDOSu60', ''],
		['아야아야 엄살은 그만!', '2021.10.13', '5Nf5Gt6ThUU', ''],
		['소원핑의 세 가지 소원', '2021.10.20', 'WDY_SuqaN3Q', ''],
		['토닥토닥, 따뜻한 위로를 줄게', '2021.10.27', 'QUUXGhWLoDc', ''],
		['사라진 로미', '2021.11.03', 'ezbVkqn_Yrs', ''],
		['반짝반짝하게 싹싹!', '2021.11.10', 'TbcO8leL6eE', ''],
		['맛나핑은 최고의 요리 선생님', '2021.11.17', 'VEKpAWIuMWY', ''],
		['쓰러진 믿어핑', '2021.11.24', 'vQvlazM_Avg', ''],
		['뜨개 인형이 된 하츄핑', '2021.12.01', '1qAf2VzYjSo', ''],
		['곰 인형이 살아있다?', '2021.12.08', '28jVRbD1oQM', ''],
		['또 한 명의 프린세스', '2021.12.15', 'lN3ehNt-7mE', ''],
		['메모핑의 메모메모', '2021.12.22', '4cci7UNZUU4', ''],
		['대결! 로열핑', '2021.12.29', 'mKfAi8jXnwI', ''],
		['왕국이 된 하트로즈', '2022.01.05', 'U405uyyJ4-s', ''],
		['보석핑을 도둑맞았어요!', '2022.01.12', 'yGkzrdnjAJw', ''],
		['진짜 하츄핑은 누구?', '2022.01.19', 'JZnlWeDYd8I', ''],
		['선물 상자를 찾아라!', '2022.01.26', 'icrTBeHtCfI', ''],
		['조각을 할 거야, 뚝딱!', '2022.02.02', 'IudjMP1aoL8', ''],
		['위험한 소풍', '2022.02.09', 'VgtBEZXvXcI', ''],
		['핑그르르 티니핑 발레단', '2022.02.16', 'h4AOB0tYt6w', ''],
		['히어로 티니핑, 원더핑!', '2022.02.23', 'gND01AXNUZw', ''],
		['티니핑 스쿨 졸업식', '2022.03.02', 'aiqqHC84tKs', ''],
		['위기의 하츄핑', '2022.03.09', 'dWFD-Ke0UHQ', ''],
		['돌아온 보석숲', '2022.03.16', '4wQH2kgzmuM', '']
	],
	3: [
		['알쏭달쏭 열쇠티니핑', '2022.09.14', 'iu_BcpwA_CU', ''],
		['변신! 플로라하트', '2022.09.21', 'REEFFxzbRno', ''],
		['과식은 위험해 얌얌', '2022.09.28', 'gL4e1X6FOLY', ''],
		['뜨거뜨거 캠핑 소동', '2022.10.05', 'diJjBV2lL7M', ''],
		['치료해줄게 삐뽀', '2022.10.12', 'Iu8DqU3l8lc', ''],
		['티니핑 병원이 생겼어요', '2022.10.19', 'mOzmTn5p2IU', ''],
		['힘내힘내 응원이 필요해', '2022.10.26', 'wAREoM6c4Bc', ''],
		['고쳐줘요 고쳐핑', '2022.11.02', 'TO9wnBEfZyM', ''],
		['로미와 하츄핑이 바뀌었어요', '2022.11.09', '-SVXVzXmH5I', '로미와 하츄핑의 몸이 바뀌는 에피소드'],
		['백설로미', '2022.11.16', 'kOqF74Gcssw', '백설공주 패러디'],
		['패션핑의 옷 만들기', '2022.11.23', 'W7iHxQxgbY0', ''],
		['꼼짝 마라 꼼딱핑', '2022.11.30', 'tEB6k_ibCXA', ''],
		['행운이 가득 행운과자', '2022.12.07', 'UgahnwcQpS4', ''],
		['퐁당퐁당 퐁당핑', '2022.12.14', 'pBWDG38n8-U', ''],
		['파티핑과 파티파티', '2022.12.21', 'GTwV4PV1iFE', ''],
		['멋진 머리를 꾸며 봐 꾸며핑', '2022.12.28', '56d7kVR1vBI', ''],
		['아빠의 카메라', '2023.01.04', 'pJTgeHumFCQ', '감독 장성의 경험담을 담은 에피소드'],
		['삐질 거야 삐짐핑', '2023.01.11', 'aUMy-1IMyVs', ''],
		['로미의 목걸이를 찾아라', '2023.01.18', 'fCj2QgH-_9k', ''],
		['노래하는 아아~핑', '2023.01.25', 'fqSi0HHkyNs', ''],
		['다 같이 놀자 티니핑 놀이공원', '2023.02.01', 'ZgN4YSxvd10', ''],
		['스케이트 타고 빙글빙글', '2023.02.08', '2JNMvhG3LlU', ''],
		['등장! 행운핑', '2023.02.15', '-SsZh0Jt-Xs', ''],
		['티니핑 패션쇼', '2023.02.22', '53wEfCVr5Dc', ''],
		['위기일발 미스틱마을', '2023.03.01', 'jcKoAllmJgQ', ''],
		['안녕 열쇠티니핑', '2023.03.08', 'xqE5yWIy_XE', '']
	],
	4: [
		['새콤달콤 디저트티니핑', '2023.09.22', '4zntlZz-KoA', '1~2화 9/22 동시 선행 공개'],
		['변신! 프린세스 베리하트', '2023.09.22', 'e3q_qlY9S50', '1~2화 9/22 동시 선행 공개'],
		['예쁘게 장식할래, 머랭', '2023.10.05', '-TgXo9flZY0', '1주 휴방(추정)'],
		['샌드핑과 샌드쿠키의 비밀', '2023.10.12', 'SceE1U1EynE', ''],
		['뿌뿌핑을 잡아라', '2023.10.19', 'JRwIR67vIrQ', ''],
		['로열 티니핑이 되고 싶어', '2023.10.26', 'KsexqM-F9aM', ''],
		['납작해져라! 와플핑', '2023.11.02', 'nG_DL4vbmxI', ''],
		['돌려 돌려~ 롤리핑', '2023.11.09', 'M_7gXX-YnBY', ''],
		['포실핑과 작은 친구들', '2023.11.16', 'NQlWe7JV65U', ''],
		['알록달록 색칠해요 마카핑', '2023.11.23', 'cIWu0eKYYFI', ''],
		['차곡차곡 쌓아줘 핫케핑', '2023.11.30', 'IB9pjBAMwuc', ''],
		['말랑핑 마음은 말랑해요', '2023.12.07', 'UlhVKfkuKHs', ''],
		['디저트 마을로 간 로미', '2023.12.14', 'bTmHrhJCmkE', ''],
		['울면 안 돼! 커핑, 머핑', '2024.01.04', 'qi0iB_R4_Pc', '12/21·12/28 전반부 종료·연말 휴식으로 2주 휴방'],
		['아기 돌보기는 힘들어, 또너', '2024.01.11', 'dTDULu2kJ7U', ''],
		['샤샤핑이 낫게 해 줄게', '2024.01.18', 'Y9Q5NJU5mF0', ''],
		['잘 자요~를레이! 요거', '2024.01.25', 'TXYu0pKBm2U', ''],
		['얼음 공주 눈꽃핑', '2024.02.01', '7T3-sLjSVbQ', ''],
		['푸딩푸딩 푸딩댄스', '2024.02.08', 'KdEfsIikVbA', ''],
		['폭신폭신 마시멜로', '2024.02.15', 'yZivvVZCzZE', ''],
		['쪼꼬모자로 모두 사이좋게', '2024.02.22', 'xjVHQd8TVO8', ''],
		['새콤달콤 레전드 티니핑', '2024.02.29', 'dncyJTi25BQ', ''],
		['새콤달콤한 디저트 파티', '2024.03.07', '1fsptR3pdOE', ''],
		['돌아와, 뿌뿌핑', '2024.03.14', 'IBnueSF_8TY', ''],
		['다시, 디저트 마을로', '2024.03.21', 'rRTNEh9_k1o', ''],
		['마음을 하나로! 하모니어스', '2024.03.28', 'Pj5C4Jrz8hc', '']
	],
	5: [
		['별을 타고 온 소녀', '2024.10.10', 'mAsiA_sld3A', ''],
		['깡총깡총 깡총핑', '2024.10.10', 'QHqtPLZbgio', '1~2화 동일 날짜 방영'],
		['훌라후프의 여왕', '2024.10.24', 'JFq1e86-Jtw', ''],
		['빛을 나눠줘 나눔핑', '2024.10.31', '_IQDYCvdDBM', ''],
		['택배 왔어요 딩동핑', '2024.11.07', 'ssD1sxMatXo', ''],
		['우주 미아가 된 로열핑들', '2024.11.14', 'Zkvw-Qa5RtE', ''],
		['떠돌이 나그네핑', '2024.11.21', 'z11QptPzMM4', ''],
		['고고핑은 멈추지 않아', '2024.11.28', 'stwMPiIO_yw', ''],
		['스티커를 붙여 뿌쵸핑', '2024.12.05', '0Ky38_lnuFs', ''],
		['힘 센 티니핑 고마핑', '2024.12.12', 'nO16PzlzPHk', ''],
		['만나고 싶어 아롱핑, 다롱핑', '2024.12.19', '37OtBOn55U0', ''],
		['뽀송핑의 뽀송뽀송 세탁소', '2024.12.26', 'LruDE54ANiI', ''],
		['투명해질래 유리핑', '2025.01.02', 'eCkFvGJYGkk', ''],
		['하트로즈에 온 노아', '2025.02.06', 'xVJQcgssg_U', '1/9~1/30 전반기 종료 휴식(설 연휴 포함)'],
		['함께하자 함께핑', '2025.02.13', '82ryV9CzZbg', ''],
		['댄스핑의 댄스는 별이 다섯 개', '2025.02.20', 'KvE8tgG50BE', ''],
		['장난꾸러기 여우핑', '2025.02.27', 'JODHq0WPEhM', ''],
		['루루핑과 노래해요', '2025.03.06', 'WLHsOWaFQY0', ''],
		['나그네핑을 찾아라', '2025.03.13', '1QrXentSl1c', ''],
		['티니핑이 된 로미', '2025.03.20', 'hBHTDejucuE', ''],
		['몰래 훔쳐! 몰래핑', '2025.03.27', 'N7NIeskncMY', ''],
		['뽀뽀핑 따라 삼만 리', '2025.04.03', 'oTBdec5Lyms', ''],
		['별의 기억', '2025.04.10', 'xe60fTXg6mk', ''],
		['스타티니핑, 별의 힘을 모아', '2025.04.17', 'xurB-2BkFJs', ''],
		['약속의 오로라핑', '2025.04.24', 'U-P9yRx9sWU', ''],
		['마음을 이어주는 오로라', '2025.05.01', '7w3aS8HH6MA', '']
	],
	6: [
		['출발! 프린세스 회담행 열차', '2025.10.30', 'JW9xFlZZyvs', '성탄절 특집으로 종영 전 본편 업로드 · 2026.1.2부터 ‘캐치! 티니핑 스페셜’로 변경'],
		['거울 속 너는 누구?', '2025.11.06', 'W5ng4esNuQo', '성탄절 특집으로 종영 전 본편 업로드 · 2026.1.2부터 ‘캐치! 티니핑 스페셜’로 변경'],
		['뽀득핑은 뽀득뽀득 뽀드득', '2025.11.13', '', ''],
		['매력을 찾아줄게 차밍핑', '2025.11.20', '', ''],
		['날개를 달아줘 나비핑', '2025.11.27', '', ''],
		['실크핑과 마법 양탄자', '2025.12.04', '', ''],
		['삼총사 티니핑', '2025.12.11', '', ''],
		['차갑게 꽁꽁 스노우핑', '2025.12.18', '', ''],
		['바느질은 아름핑에게 맡겨줘', '2025.12.25', '', ''],
		['스파이 대작전', '2026.01.01', '', ''],
		['이슬핑의 이슬 한 방울', '2026.01.08', '', ''],
		['낮잠 진짜 좋아 쿨쿨핑', '2026.01.15', '', ''],
		['이클립스봇의 습격', '2026.01.22', '', ''],
		['시간을 되돌려 슈슈핑', '2026.02.26', '', '1/29부터 전반기 종료로 4주간 휴방'],
		['귀곡산장의 비밀', '2026.03.05', '', ''],
		['긴 머리 휘날리며 롱롱핑', '2026.03.12', '', ''],
		['빙빙 도는 거울', '2026.03.19', '', ''],
		['유혹의 뽀니핑', '2026.03.26', '', ''],
		['속마음 뿅뿅 큐핑', '2026.04.02', '', ''],
		['하츄핑의 사뿐핑 관찰기', '2026.04.09', '', ''],
		['이클립스핑을 막아라', '2026.04.16', '', ''],
		['이클립스핑의 진실', '2026.04.23', '', ''],
		['꼭꼭 숨어! 야옹핑', '2026.04.30', '', ''],
		['프린세스 무도회', '2026.05.07', '', ''],
		['거울 저 너머에', '2026.05.14', '', ''],
		['하나의 마음으로', '2026.05.21', '', '']
	],
	// 7기는 2026년 11월 방영 예정 (제목 미공개)
	7: Array.from({ length: 26 }, (_, i) => [
		'',
		i === 0 ? '2026.11 (예정)' : '',
		'',
		i === 0 ? '제목 미공개 · 2026년 11월 방영 예정(나무위키 기준)' : ''
	])
};

// ==========================================
// 3. 티니핑 분류 데이터
//    항목: '이름' 또는 [이름, 표기명(폼), 비고, 그룹]
// ==========================================
const teeniepings = [];

function addTeenie(season, grade, list) {
	list.forEach(item => {
		const arr = Array.isArray(item) ? item : [item];
		teeniepings.push({
			season: season,
			grade: grade,
			name: arr[0],
			form: arr[1] || '',
			note: arr[2] || '',
			group: arr[3] || ''
		});
	});
}

// ---------- 1기 큐브 티니핑 (45) ----------
addTeenie(1, 'royal', [
	['하츄핑', '', '로미의 파트너 티니핑'],
	'바로핑', '아자핑', '차차핑', '라라핑',
	['해핑', '', '6기 10화에서 주연으로 재등장']
]);
addTeenie(1, 'normal', [
	'키키핑', '아잉핑', '부끄핑',
	['부투핑', '', '직업: 심판'],
	'깜빡핑',
	['띠용핑', '', '직업: 마술사'],
	'주르핑', '차나핑', '따라핑', '나르핑', '무셔핑', '투투핑', '차캐핑', '떠벌핑', '다조핑', '화나핑', '시러핑', '바네핑',
	['악동핑', '', '해핑과 명칭·신체 변화가 함께 나타나 별도 집계'],
	'덜덜핑',
	['그림핑', '', '직업: 화가'],
	['무거핑', '', '직업: 헬스트레이너'],
	'꺼꿀핑', '씽씽핑', '베베핑', '코자핑', '딱풀핑', '모야핑', '토이핑', '또까핑',
	['플라핑', '', '직업: 정원사'],
	['노라핑', '', '노리핑과 형제 · 큐브와 메달 공유'],
	['노리핑', '', '노라핑과 형제 · 큐브와 메달 공유'],
	'아휴핑', '똑똑핑', '꽁꽁핑', '찌릿핑', '홀로핑',
	['앙대핑', '', '빌런 티니핑']
]);

// ---------- 2기 보석 티니핑 (20) ----------
addTeenie(2, 'royal', [
	['하츄핑', '다이아 하츄핑', '2기 초반에는 로열 티니핑 후보생(보석 문양)'],
	['조아핑', '', '2기 초반에는 로열 티니핑 후보생(보석 문양)'],
	['방글핑', '', '2기 초반에는 로열 티니핑 후보생(보석 문양)'],
	['믿어핑', '', '2기 초반에는 로열 티니핑 후보생(보석 문양)']
]);
addTeenie(2, 'normal', [
	'까르핑', '아야핑', '소원핑', '토닥핑', '쪼꼼핑', '싹싹핑', '맛나핑', '포근핑', '메모핑',
	['다해핑', '', '가면핑은 다해핑이 가면을 쓴 모습(별도 집계 제외) · 제니의 파트너 티니핑'],
	'공쥬핑', '짝짝핑', '주네핑', '뚝딱핑', '발레핑', '원더핑'
]);
addTeenie(2, 'etc', [
	['가면핑', '', '다해핑이 가면을 쓴 모습으로, 새로운 티니핑으로 보지 않아 집계 제외']
]);

// ---------- 3기 열쇠 티니핑 (21) ----------
addTeenie(3, 'royal', [
	['하츄핑', '플로라 하츄핑', '사계절 모티브: 봄(꽃)'],
	['꾸래핑', '', '사계절 모티브: 겨울(눈송이)'],
	['솔찌핑', '', '사계절 모티브: 가을(구름)'],
	['나나핑', '', '사계절 모티브: 여름(태양)']
]);
addTeenie(3, 'legend', [
	['행운핑', '', '시리즈 최초의 레전드 티니핑']
]);
addTeenie(3, 'normal', [
	'빨리핑', '얌얌핑', '뜨거핑', '삐뽀핑',
	['간호핑', '', '경광등 색이 다른 4개체(분홍·노랑·초록·파랑)가 있으나 동일 명칭이라 1종으로 집계'],
	'힘내핑', '고쳐핑', '아라핑', '패션핑', '꼼딱핑', '퐁당핑', '파티핑', '꾸며핑', '삐짐핑', '아아핑', '빙글핑'
]);

// ---------- 4기 디저트 티니핑 (22) ----------
addTeenie(4, 'royal', [
	['하츄핑', '베리 하츄핑'],
	'샤샤핑',
	['포실핑', '', '6기 10화에서 주연으로 재등장'],
	'말랑핑'
]);
addTeenie(4, 'legend', [
	['새콤핑', '', '디저트 마을 케이크 궁전 거주 · 시리즈 최초로 레전드가 두 마리 등장'],
	['달콤핑', '', '디저트 마을 케이크 궁전 거주 · 시리즈 최초로 레전드가 두 마리 등장']
]);
addTeenie(4, 'normal', [
	'뿌뿌핑', '캔디핑', '머랭핑', '샌드핑', '또너핑', '와플핑', '롤리핑', '마카핑', '핫케핑',
	['커핑', '', '머핑과 쌍둥이 남매 · 큐브 공유'],
	['머핑', '', '커핑과 쌍둥이 남매 · 큐브 공유'],
	'요거핑', '눈꽃핑', '푸딩핑', '멜로핑', '쪼꼬핑'
]);

// ---------- 5기 스타 티니핑 (24) ----------
addTeenie(5, 'royal', [
	['하츄핑', '스타 하츄핑'],
	'빛나핑', '초롱핑', '빤짝핑',
	['왕자핑', '', '나그네핑과 동일 티니핑(명칭·신체 변화로 각각 집계), 노아의 파트너 티니핑']
]);
addTeenie(5, 'legend', [
	['오로라핑', '', '거대한 날개 설정의 시작']
]);
addTeenie(5, 'normal', [
	'깡총핑', '훌라핑', '나눔핑', '딩동핑',
	['나그네핑', '', '왕자핑과 동일 티니핑(명칭·신체 변화로 각각 집계)'],
	'고고핑', '뿌쵸핑', '고마핑',
	['아롱핑', '', '다롱핑과 자매'],
	['다롱핑', '', '아롱핑과 자매'],
	'뽀송핑', '유리핑', '함께핑', '댄스핑', '여우핑', '루루핑', '몰래핑', '뽀뽀핑'
]);
addTeenie(5, 'etc', [
	['로미핑', '', '로미가 티니핑으로 변한 모습(인간)이라 집계 제외']
]);

// ---------- 6기 프린세스&프린스 티니핑 (21) ----------
addTeenie(6, 'royal', [
	['하츄핑', '프린세스 하츄핑'],
	['사뿐핑', '', '발레의 나라'],
	['아름핑', '', '패션의 나라'],
	['뽀니핑', '', '미용의 나라']
]);
addTeenie(6, 'legend', [
	['이클립스핑', '', '거울의 나라 · 메인 빌런(시리즈 최초의 악역 레전드)'],
	['다이아나핑', '', '거울의 나라 · 이클립스핑의 쌍둥이 자매']
]);
addTeenie(6, 'normal', [
	['뽀득핑', '', '목욕의 나라', '프린세스'],
	['차밍핑', '', '이상한 나라', '프린세스'],
	['나비핑', '', '나비의 나라', '프린세스'],
	['실크핑', '', '양탄자의 나라(보물의 나라)', '프린세스'],
	['스노우핑', '', '눈의 나라', '프린세스'],
	['이슬핑', '', '꽃의 나라', '프린세스'],
	['쿨쿨핑', '', '꿀잠 나라(잠의 나라)', '프린세스'],
	['슈슈핑', '', '비비디 나라(진심의 나라)', '프린세스'],
	['롱롱핑', '', '고운 머릿결의 나라', '프린세스'],
	['큐핑', '', '백발백중의 나라', '프린세스'],
	['야옹핑', '', '야옹 나라(고양이 나라)', '프린세스'],
	['샤를핑', '', '로맨스 나라', '프린스'],
	['트롯핑', '', '오디션의 나라', '프린스'],
	['깨굴핑', '', '젠틀핑의 또 다른 폼 · 매너의 나라', '프린스'],
	['젠틀핑', '', '깨굴핑과 별도 집계 · 매너의 나라', '프린스']
]);
addTeenie(6, 'etc', [
	['코러스핑', '', '집계 제외'],
	['집사 티니핑', '', '집계 제외']
]);

// ---------- 7기 쥬얼스타 티니핑 (2026년 10월 기준 공개 개체) ----------
addTeenie(7, 'royal', [
	['하츄핑', '??? 하츄핑'],
	'레몬핑', '체리핑', '라임핑'
]);
addTeenie(7, 'legend', [
	['뮤즈핑', '', '레전드 티니핑으로 추정(미확정)'],
	['디바핑', '', '레전드 티니핑으로 추정(미확정)']
]);
addTeenie(7, 'normal', [
	'쏭쏭핑', '아리아핑', '아서핑', '낭낭핑', '냐냥핑', '폴짝핑', '시고르핑', '코디핑', '잉잉핑', '앙앙핑', '빠밤핑', '팡팡핑', '티키핑', '타카핑'
]);
addTeenie(7, 'etc', [
	['마린핑', '', 'PLAVE 콜라보 티니핑'],
	['비타핑', '', 'PLAVE 콜라보 티니핑'],
	['포포핑', '', 'PLAVE 콜라보 티니핑'],
	['불꽃핑', '', 'PLAVE 콜라보 티니핑'],
	['까밍핑', '', 'PLAVE 콜라보 티니핑']
]);

// ==========================================
// 4. 극장판 데이터
// ==========================================
const teenieMovies = [
	{
		no: 1, label: '1기', title: '사랑의 하츄핑', year: '2024',
		only: [['트러핑', '일반 폼 · 흑화 폼, 리암의 파트너 티니핑']],
		groups: [
			{ label: '극장판에서만 등장하는 티니핑', items: [['트러핑', '일반 폼 · 흑화 폼, 리암의 파트너 티니핑']] },
			{ label: '애니메이션 시리즈에도 등장 — 일반 티니핑 시절의 티니핑', items: [['하츄핑', ''], ['라라핑', ''], ['해핑', '']] },
			{
				label: '애니메이션 시리즈에도 등장 — 큐브 티니핑',
				items: ['딱풀핑', '꽁꽁핑', '덜덜핑', '키키핑', '모야핑', '토이핑', '플라핑', '노라핑', '나르핑', '화나핑', '바네핑', '또까핑', '무거핑', '시러핑', '부끄핑', '씽씽핑', '코자핑'].map(n => [n, ''])
			},
			{ label: '가칭이 사용된 티니핑', items: [['병사핑', '세뇌된 상태로 등장하는 원작 티니핑들']] }
		]
	},
	{
		no: 2, label: '2기', title: '사랑의 하츄핑: 고래보석의 전설', year: '2026',
		only: [['방울핑', '카이트의 파트너 티니핑'], ['찰랑핑', '카이트의 파트너 티니핑'], ['소라핑', '카이트의 파트너 티니핑']],
		groups: [
			{ label: '극장판에서만 등장하는 티니핑', items: [['방울핑', '카이트의 파트너 티니핑'], ['찰랑핑', '카이트의 파트너 티니핑'], ['소라핑', '카이트의 파트너 티니핑']] },
			{ label: '애니메이션 시리즈에도 등장', items: [['하츄핑', '']] },
			{
				label: '애니메이션 시리즈에도 등장 — 스타 티니핑',
				items: ['빛나핑', '초롱핑', '빤짝핑', '왕자핑', '오로라핑', '깡총핑', '아롱핑', '다롱핑', '루루핑'].map(n => [n, ''])
			},
			{
				label: '애니메이션 시리즈에도 등장 — 디저트 티니핑',
				items: ['샤샤핑', '말랑핑', '포실핑', '새콤핑', '달콤핑', '캔디핑', '머랭핑', '요거핑', '눈꽃핑', '멜로핑', '뿌뿌핑'].map(n => [n, ''])
			}
		]
	},
	{ no: 3, label: '3기', title: '기획 중', year: '연도 미정', only: [], groups: [] }
];

// ==========================================
// 5. 데이터 가공 (회차 객체 생성 + 제목 속 티니핑 추출)
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
		teenieEpisodes.push({
			seasonNo: no,
			season: meta.label,
			epNum: epNum,
			cumNum: meta.offset + epNum,
			title: seed[0],
			date: seed[1],
			yt: seed[2],
			note: seed[3],
			teenies: findTeenieInTitle(seed[0]),
			rowClass: epNum === 1 ? 'season-start' : ''
		});
	});
});

// 극장판 전용 티니핑 (등급별 표에서 일반 티니핑으로 별도 표시)
function teenieMovieOnlyList() {
	const list = [];
	teenieMovies.forEach(m => {
		(m.only || []).forEach(o => {
			list.push({ movie: m, name: o[0], note: o[1] });
		});
	});
	return list;
}

// 현재 선택된 필터
let currentSeason = 'all';      // 회차 목록: 기수
let currentTeenie = 'all';      // 회차 목록: 제목 속 티니핑
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

// 회차 표의 제목 속 티니핑 뱃지
function renderTeenieKeywordBadge(name) {
	if (!name) return '';
	return `<span class="badge bg-light text-dark keyword-tag teenie-hover me-1 mb-1" data-keyword-type="teenie" data-keyword="${escHtml(name)}"${teenieHoverAttrs(name, '', '')} style="cursor:pointer;">${escHtml(name)}</span>`;
}

function countTeenies(seasonNo, grade) {
	return teeniepings.filter(t => t.season === seasonNo && (grade ? t.grade === grade : t.grade !== 'etc')).length;
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
		ep.teenies.forEach(n => {
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
	$wrap.append('<button class="btn btn-secondary btn-keyword-teenie active" data-keyword="all">티니핑 전체보기</button>');

	sorted.forEach(name => {
		const btnHtml = `<button class="btn btn-outline-dark btn-keyword-teenie" data-keyword="${escHtml(name)}">#${escHtml(name)} <small class="text-muted">(${counts[name]})</small></button>`;
		$wrap.append(btnHtml);
	});
}

function renderEpisodeTable() {
	const $tbody = $('#tbody-episodes');
	if (!$tbody.length) return;

	$tbody.empty();

	const q = currentQuery.trim().toLowerCase();

	const filteredList = teenieEpisodes.filter(ep => {
		const matchesSeason = (currentSeason === 'all') || (ep.season === currentSeason);
		const matchesTeenie = (currentTeenie === 'all') || ep.teenies.includes(currentTeenie);
		const haystack = [ep.title, ep.note, ep.teenies.join(' ')].join(' ').toLowerCase();
		const matchesQuery = !q || haystack.includes(q);
		return matchesSeason && matchesTeenie && matchesQuery;
	});

	$('#episodeCount').text(`${filteredList.length}개 표시 (전체 ${teenieEpisodes.length}화)`);

	if (filteredList.length === 0) {
		$tbody.append('<tr><td colspan="6" class="center text-muted py-4">해당 조건의 회차 정보가 없습니다.</td></tr>');
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
			? `<a href="https://youtu.be/${escHtml(ep.yt)}" target="_blank" rel="noopener" class="me-1">YouTube <i class="xi-external-link"></i></a>`
			: '-';

		// 4) 에피소드 + 누적 회차 + 제목
		const titleHtml = ep.title
			? escHtml(ep.title)
			: '<span class="text-muted">(제목 미공개)</span>';
		const epCombinedHtml = `<strong>EP.${ep.epNum}</strong> <small class="text-muted">(누적 ${ep.cumNum}화)</small> ${titleHtml}`;

		// 5) 제목 속 티니핑 뱃지
		const teeniesHtml = ep.teenies.length > 0
			? ep.teenies.map(n => renderTeenieKeywordBadge(n)).join('')
			: '-';

		const trClass = ep.rowClass ? ` class="${ep.rowClass}"` : '';

		const trHtml = `
			<tr${trClass}>
				<td data-label="기수" class="center">${seasonHtml}</td>
				<td data-label="방영일" class="center">${dateHtml}</td>
				<td data-label="스트리밍" class="center link">${ottHtml}</td>
				<td data-label="에피소드">${epCombinedHtml}</td>
				<td data-label="제목 속 티니핑">${teeniesHtml}</td>
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
					<tbody>${rowsHtml}</tbody>
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
				const badges = g.items.map(it => {
					const name = Array.isArray(it) ? it[0] : it;
					const note = Array.isArray(it) ? it[1] : '';
					return `<span class="badge teenie-badge teenie-hover grade-normal me-1 mb-1"${teenieHoverAttrs(name, '', note)}>${escHtml(name)}</span>`;
				}).join('');
				const noteLines = g.items
					.filter(it => Array.isArray(it) && it[1])
					.map(it => `<small class="text-muted me-2">${escHtml(it[0])}: ${escHtml(it[1])}</small>`)
					.join('');
				return `
					<div class="mb-3">
						<div class="mb-1"><strong>${escHtml(g.label)}</strong> <small class="text-muted">(${g.items.length})</small></div>
						<div>${badges}</div>
						${noteLines ? `<div>${noteLines}</div>` : ''}
					</div>
				`;
			}).join('');
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
				note: t.note
			});
		});

	if (currentGrade === 'all' || currentGrade === 'normal') {
		teenieMovieOnlyList().forEach(o => {
			rows.push({
				grade: 'normal',
				seasonHtml: `극장판 ${o.movie.label} <small class="text-muted">${escHtml(o.movie.title)}</small>`,
				name: o.name,
				group: '',
				note: o.note
			});
		});
	}

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

	const base = teeniepings.filter(t => t.grade !== 'etc' && t.season <= 6);
	const c = g => base.filter(t => t.grade === g).length;
	const movieOnly = teenieMovieOnlyList().length;

	$el.html(
		`1~6기 기준 로열 <strong>${c('royal')}</strong>종 · 레전드 <strong>${c('legend')}</strong>종 · 일반 <strong>${c('normal')}</strong>종 ` +
		`(총 ${base.length}종) + 극장판 전용 일반 <strong>${movieOnly}</strong>종 = <strong>${base.length + movieOnly}</strong>종. ` +
		`7기는 2026년 10월 기준 공개된 개체만 함께 표시합니다.`
	);
}

function renderGradeTable() {
	const $tbody = $('#tbody-grades');
	if (!$tbody.length) return;

	$tbody.empty();

	const rows = getGradeRows();

	if (rows.length === 0) {
		$tbody.append('<tr><td colspan="4" class="center text-muted py-4">해당 등급의 티니핑 정보가 없습니다.</td></tr>');
		return;
	}

	rows.forEach(r => {
		const noteHtml = [r.group ? `[${escHtml(r.group)}]` : '', r.note ? escHtml(r.note) : ''].filter(Boolean).join(' ') || '-';
		$tbody.append(`
			<tr>
				<td data-label="등급" class="center"><span class="badge teenie-badge grade-${r.grade}">${teenieGradeLabel[r.grade].replace(' 티니핑', '')}</span></td>
				<td data-label="기수" class="center">${r.seasonHtml}</td>
				<td data-label="티니핑"><strong class="teenie-hover"${teenieHoverAttrs(r.name, '', '')}>${escHtml(r.name)}</strong></td>
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

	// 뱃지 클릭 필터 연동
	$(document).on('click', '.keyword-tag', function () {
		const keyword = $(this).attr('data-keyword');
		if (!keyword) return;

		const $targetBtn = $('.btn-keyword-teenie').filter(function () {
			return $(this).attr('data-keyword') === keyword;
		});
		if ($targetBtn.length) {
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