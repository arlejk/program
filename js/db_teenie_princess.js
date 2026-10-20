// 로미의 프린세스 변신 데이터 (출처: 나무위키 '로미(캐치! 티니핑 시리즈)/프린세스')
// season : 기수 번호
// name   : 프린세스 이름
// partner: 변신 파트너 로열/레전드핑 (표시용)
// keys   : 회차 목록의 '출연 티니핑' 이름과 매칭할 키 (폼 이름 포함)
// first  : 첫 변신 회차 (모르면 생략)
// img    : 이미지 URL (아직 모르면 '')
const teeniePrincess = [
	// ---------- 1기 ----------
	{ season: 1, name: '프린세스 하트', partner: '하츄핑', keys: ['하츄핑'], first: '1기 1화',
		img: 'teenie_01_cube_royal_princess_heart.webp' },
	{ season: 1, name: '프린세스 클라우디아', partner: '바로핑', keys: ['바로핑'], first: '1기 5화',
		img: 'teenie_01_cube_royal_princess_claudia.webp' },
	{ season: 1, name: '프린세스 클로버', partner: '차차핑', keys: ['차차핑'], first: '1기 10화',
		img: 'teenie_01_cube_royal_princess_clover.webp' },
	{ season: 1, name: '프린세스 스타', partner: '아자핑', keys: ['아자핑'], first: '1기 11화',
		img: 'teenie_01_cube_royal_princess_star.webp' },
	{ season: 1, name: '프린세스 멜로디', partner: '라라핑', keys: ['라라핑'], first: '1기 13화',
		img: 'teenie_01_cube_royal_princess_melody.webp' },
	{ season: 1, name: '프린세스 선샤인', partner: '해핑', keys: ['해핑'], first: '1기 46화',
		img: 'teenie_01_cube_royal_princess_sunshine.webp' },
	{ season: 1, name: '프린세스 베로니카', partner: '1기 로열핑 전원', keys: [], first: '1기 52화', grade: 'royal',
		img: 'teenie_01_cube_royal_princess_veronica.webp' },

	// ---------- 2기 ----------
	{ season: 2, name: '프린세스 다이아하트', partner: '다이아 하츄핑', keys: ['다이아 하츄핑'], first: '2기 1화',
		img: 'teenie_02_twinkle_royal_princess_diaheart.webp' },
	{ season: 2, name: '프린세스 루비', partner: '방글핑', keys: ['방글핑'], first: '2기 3화',
		img: 'teenie_02_twinkle_royal_princess_ruby.webp' },
	{ season: 2, name: '프린세스 사파이어', partner: '믿어핑', keys: ['믿어핑'], first: '2기 4화',
		img: 'teenie_02_twinkle_royal_princess_sapphire.webp' },
	{ season: 2, name: '프린세스 에메랄드', partner: '조아핑', keys: ['조아핑'], first: '2기 7화',
		img: 'teenie_02_twinkle_royal_princess_emerald.webp' },

	// ---------- 3기 ----------
	{ season: 3, name: '프린세스 플로라하트', partner: '플로라 하츄핑', keys: ['플로라 하츄핑'], first: '3기 2화',
		img: 'teenie_03_secret_royal_princess_floraheart.webp' },
	{ season: 3, name: '프린세스 솔라리스', partner: '나나핑', keys: ['나나핑'], first: '3기 3화',
		img: 'teenie_03_secret_royal_princess_solaris.webp' },
	{ season: 3, name: '프린세스 글로리아', partner: '솔찌핑', keys: ['솔찌핑'], first: '3기 4화',
		img: 'teenie_03_secret_royal_princess_gloria.webp' },
	{ season: 3, name: '프린세스 크리스탈', partner: '꾸래핑', keys: ['꾸래핑'], first: '3기 5화',
		img: 'teenie_03_secret_royal_princess_crystal.webp' },
	{ season: 3, name: '프린세스 트와일라잇', partner: '행운핑', keys: ['행운핑'], first: '3기 25화', grade: 'legend',
		img: 'teenie_03_secret_legend_princess_twilight.webp' },
	{ season: 3, name: '프린세스 라비린스', partner: '다해핑', keys: ['다해핑'], first: '3기 24화', grade: 'normal',
		img: 'teenie_03_secret_normal_princess_labyrinth.webp' },

	// ---------- 4기 ----------
	{ season: 4, name: '프린세스 베리하트', partner: '베리 하츄핑', keys: ['베리 하츄핑'], first: '4기 2화',
		img: 'teenie_04_dessert_royal_princess_berryheart.webp' },
	{ season: 4, name: '프린세스 스윗플로스', partner: '포실핑', keys: ['포실핑'], first: '4기 3화',
		img: 'teenie_04_dessert_royal_princess_sweetfloss.webp' },
	{ season: 4, name: '프린세스 샤베티나', partner: '샤샤핑', keys: ['샤샤핑'], first: '4기 4화',
		img: 'teenie_04_dessert_royal_princess_shabetina.webp' },
	{ season: 4, name: '프린세스 젤리스틴', partner: '말랑핑', keys: ['말랑핑'], first: '4기 5화',
		img: 'teenie_04_dessert_royal_princess_jellystin.webp' },
	{ season: 4, name: '프린세스 하모니어스', partner: '새콤핑 · 달콤핑', keys: ['새콤핑', '달콤핑'], first: '4기 26화', grade: 'legend',
		img: 'teenie_04_dessert_legend_princess_harmonious.webp' },
	{ season: 4, name: '프린세스 라비린스', partner: '다해핑', keys: ['다해핑'], first: '4기 24화', grade: 'normal',
		img: 'teenie_04_dessert_normal_princess_labyrinth.webp' },

	// ---------- 5기 ----------
	{ season: 5, name: '프린세스 브라잇하트', partner: '스타 하츄핑', keys: ['스타 하츄핑'], first: '5기 1화',
		img: 'teenie_05_star_royal_princess_brightheart.webp' },
	{ season: 5, name: '프린세스 스타라이트', partner: '빛나핑', keys: ['빛나핑'], first: '5기 3화',
		img: 'teenie_05_star_royal_princess_starlight.webp' },
	{ season: 5, name: '프린세스 글램스타', partner: '초롱핑', keys: ['초롱핑'], first: '5기 4화',
		img: 'teenie_05_star_royal_princess_glamstar.webp' },
	{ season: 5, name: '프린세스 루나샤인', partner: '빤짝핑', keys: ['빤짝핑'], first: '5기 5화',
		img: 'teenie_05_star_royal_princess_lunashine.webp' },
	{ season: 5, name: '프린세스 오로라', partner: '오로라핑', keys: ['오로라핑'], first: '5기 26화', grade: 'legend',
		img: 'teenie_05_star_legend_princess_aurora.webp' },

	// ---------- 6기 (보니타·판타나·루미너스·다크니스 이미지는 아직 확보하지 못함) ----------
	{ season: 6, name: '프린세스 팬시하트', partner: '프린세스 하츄핑', keys: ['프린세스 하츄핑'], first: '6기 1화',
		img: 'https://i.namu.wiki/i/UyC8kmo41Rjw7H7CCrKgzfY0vDXgOv-tJpDWW8Z3O2kS4w06b2j4nZYhTHh8St7wypUKYXgr2jjK-1z-ikRKXDfmkDtW1-6Ulfy0ZK9D3bEEuXhPGiKQbT_hnd6QBM-vLC8hz-yfYCZvm7tJ4zb53w.webp' },
	{ season: 6, name: '프린세스 쁠리에', partner: '사뿐핑', keys: ['사뿐핑'], first: '6기 3화',
		img: 'https://i.namu.wiki/i/H02_1WSS17JwiKhfe7ronOFvvSWmbLXSgmwG-PwaSKrY8YP4vSqsxvlVD0beS8hufvdsOvtVs4dMm3V7FCx0B4azJ1YSwH9B94QB5gOCR3N8hyFi4-gWIpNskLyICXaSiSAvTcldPkLNc-beuHK1kA.webp' },
	{ season: 6, name: '프린세스 보니타', partner: '뽀니핑', keys: ['뽀니핑'], first: '6기 4화',
		img: 'https://i.namu.wiki/i/Y9vOH4coo2OA2PLPj4wiMdjck0V1ZVIlO5tynjsMHOe_YW3f1OjupMuKhCbxgDOSO1gJUBUo__1K8avpkNarw35WtTfnxfdZ2srwK1MExj-AQcKgAiQ0ZDlWUEUxemGK38nBfras9H2vTWznrhXhaw.webp' },
	{ season: 6, name: '프린세스 판타나', partner: '아름핑', keys: ['아름핑'], first: '6기 5화',
		img: 'https://i.namu.wiki/i/y_99qiH5uHD2OrVtOK6O2-HdJWRwtMGfgAaWzOTOu8DyG7IFEFOHlH3ARP3QeFkWyyyaeZTNyGJOFIccAQ4sNKByrJB7j_R2eugPJGc4UBCJdc8GSAMrnZG5QonOb2cindtPIOwi1DXNRhqXZ8qjqQ.webp' },
	{ season: 6, name: '프린세스 루미너스', partner: '다이아나핑', keys: ['다이아나핑'], first: '6기 26화', grade: 'legend',
		img: 'https://i.namu.wiki/i/U5Xnkysrgnff05Sgg5xpXWi8L2_Ftc5Lkn0mFLL59vqVjuja2NZujp6Tqduy_KNiRWJcoCEKqvrV1TwmpDL3TIYirkDb7k6-6h9CHzNsEUAZAc_fmAet_1FKxIdEbIl_huryi1LysbA0dHYJZfTh9Q.webp' },
	{ season: 6, name: '프린세스 다크니스', partner: '이클립스핑', keys: ['이클립스핑'], first: '6기 26화', grade: 'legend',
		img: 'https://i.namu.wiki/i/f3uU0WcFbP6DLRwFNZ4Pw00mugaIdZQUFIvGOisIP6u2XAVRmwD1lWVlzKn-AZPzVwfkIuuwKxZTy2yS9UUUdgMeSDTlc7efdhCVSZ_avvbbCOhNyx7S0DUd6D1-_Q-ZiwQvUlhQo8cnGk7d73lqcQ.webp' },

	// ---------- 7기 (이미지 미확보) ----------
	{ season: 7, name: '프린세스 비바하트', partner: '??? 하츄핑', keys: ['??? 하츄핑'],
		img: 'https://i.namu.wiki/i/Ve0k3lCm29mnuSHEXgSZsCWmYywJRU83-Rh_HJxdMV6bpdQsKQ-Url9ui1nwCweNd9MPhqcVfL_v-fECSRmxfpUaHl-IsG7Nnk4GK0cjlYTJYZly03nCh0vB0_OQvyufZxvyTIUQmhFLYGDlMFghlg.webp' },
	{ season: 7, name: '프린세스 브릴란테', partner: '레몬핑', keys: ['레몬핑'],
		img: 'https://i.namu.wiki/i/9EiiLcZUjW4muiubLMej_mJ0DLbkUQMIUPXBC1ZpPRueWCVs5o37-ctGRTaM01TdxJwCMccQHno_mulfwaU1Sbe2Rw7NWeYsJIItQQtSJZKsAoM5Dr16vkPwtEG9tPmMjl5ptlp4IetB42c2VX8DEg.webp' },
	{ season: 7, name: '프린세스 칸타빌레', partner: '체리핑', keys: ['체리핑'],
		img: 'https://i.namu.wiki/i/FZCt-C-_TNXPG8TUO7fgc4oqoFrvRHSXODPylJ7wMuPv8LUD-zjrW1T8D06JjjAWpSnPbBqfTJw0gmDslqRextA_gcL1e0kEw4OVVrmXCssiqTyiO7-lAlHkE1sOzZFsh9PY_SGLXBHJ6y8SaGEfrQ.webp' },
	{ season: 7, name: '프린세스 폴리포니', partner: '라임핑', keys: ['라임핑'],
		img: 'https://i.namu.wiki/i/wNdTTlgwQ9HjMHaGWTvGfIP9z4sm9TKV3geENrPePjvWlI5D0iIqj1Ks1wwhoqBGeTuPHyO6_0KLHhN6Im25NTSxzPnLb_GRqycTU-En3MkpHkBleRyWgdry-T8e0Ccf1Qdq4eNGekGpnAokIQhlPQ.webp' },
	{ season: 7, name: '프린세스 세레나데', partner: '', keys: [''], grade: 'legend',
		img: '' },
	{ season: 7, name: '프린세스 엘레간테', partner: '', keys: [''], grade: 'legend',
		img: '' },
];

// 극장판 프린세스 (나무위키에 아직 이름이 없어 비워 둠)
// 채우는 형식: { name: '프린세스 OOO', partner: 'OO핑', first: '', note: '', grade: 'royal', img: '' }
const teenieMoviePrincess = {
	1: [ { name: '프린세스', partner: '사랑의 하츄핑', first: '', grade: 'normal',
		img: 'https://i.namu.wiki/i/2R1WbaUXlzwaRiQjqJMaqNZLhiO2F9E9wDY0xC0kYscGW8s-xJcXdOHw64O6lWPjHIjWaMQPJvIlMNQaaRTY0vdDuJ7j6M1uEQyvvG6oMddEmuBSFGvuNIwc31rjP0Jr9Y81Df8jWmaPXhv_VIUBYw.webp' } ],
	2: [ { name: '프린세스', partner: '머메이드 하츄핑', first: '', grade: 'royal',
		img: 'https://i.namu.wiki/i/t72OYnbtzw2utZchzxssWIDvWKsU7Kraa9wUbWqS8NCSzm70Ndvy8Uml3lvn7gXBJDitAdRozt_lZ6UPwj0qJT8W_XwgLLiMYqB5WAyJ0Uf3Pzi7gZkCtl7n1tucNHXK0Jz6Cic-xVe4erBaw52qbg.webp' } ],
	3: []
};