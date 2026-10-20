// 로미의 프린세스 변신 데이터 (출처: 나무위키 '로미(캐치! 티니핑 시리즈)/프린세스')
// season : 기수 번호
// name   : 프린세스 이름
// partner: 변신 파트너 로열/레전드핑 (표시용)
// keys   : 회차 목록의 '출연 티니핑' 이름과 매칭할 키 (폼 이름 포함)
// first  : 첫 변신 회차 (모르면 생략)
// img    : 이미지 URL (아직 모르면 '')
const teeniePrincessNamu = [
	// ---------- 1기 ----------
	{ season: 1, name: '프린세스 하트', partner: '하츄핑', keys: ['하츄핑'], first: '1기 1화',
		img: 'https://i.namu.wiki/i/IqGU7CzTeOGFpRwqZLIDE09wxM98_BVGul8WNuV4qHz13hyfA9Qs-sph2T8wSOVnSP6bxqIv17oJuP5G4UfBHL0OKNN6GryutzQfRAlP-C7ow-asER5Plm5mjKd_b7Zhh1l1pfphEKm_7zHRxXVSeg.webp' },
	{ season: 1, name: '프린세스 클라우디아', partner: '바로핑', keys: ['바로핑'], first: '1기 5화',
		img: 'https://i.namu.wiki/i/ByRXTaHWdyIeqdpCboFBarb0Kdn3_RzFaeCM3WIrFv8liOwccL32NBU4xy_B3B4u8JvBTUt3n8qfwHDZap3pSbS7Pgn1mWJ39TD8ztQ_g9H_4j04ZVqOUpNB22q5L5Q6RLQQcwmFa7AK4ME4lr9yQQ.webp' },
	{ season: 1, name: '프린세스 클로버', partner: '차차핑', keys: ['차차핑'], first: '1기 10화',
		img: 'https://i.namu.wiki/i/_fYh73VVBaTS4Pua2p2Gr3WcHV-mVBPBL_FBOUvs3CypqiZUTVOu2ksfPXTOOu69TYM1VWw7D9srhdHqpV5im47iIjSbl3GQUo0fpjfWTUqjTX-KdYwFOVm1IOePZiEntjW4zvdpSubVdqEBjFp-ag.webp' },
	{ season: 1, name: '프린세스 스타', partner: '아자핑', keys: ['아자핑'], first: '1기 11화',
		img: 'https://i.namu.wiki/i/8jXrcMEsY0kuy8SEhP5ex7xETP-NnztS_SuosHFi2_jq1xU0O56Xbj78SzDGFNMPBdxb1oJu8J5Av40HI4ssMMRDwn0U-5qmjrCGR98RqxboZc9vAQRbuToWc-BLeVC4NDB7-w0N6vcW-NdUEP3vJQ.webp' },
	{ season: 1, name: '프린세스 멜로디', partner: '라라핑', keys: ['라라핑'], first: '1기 13화',
		img: 'https://i.namu.wiki/i/2cOftTXwMuoM6l8eIf-dCf7PCeqQIRIU8tWET4dWqlJYFbcwjbMo3gEIUuQy3m28T3FRChz8flOcgGUPYq2VOcP7eULxfhnr9CXJ8m_4-znzpCA_fHeYtxDLbSRer2vHm47RRFSqINhaOhQiP1vW2w.webp' },
	{ season: 1, name: '프린세스 선샤인', partner: '해핑', keys: ['해핑'], first: '1기 46화',
		img: 'https://i.namu.wiki/i/dcdM1ACxI0tdDiBA9VxH3BF6-cDEpiqUbxGBqkuZ56eDStRbNZtri3LFoDsb_zKAvF3MPm1G1Xx_ppdmbrObT7P1bfwNg-st5NqzihE9z-8qb04ZOX-gmySSYiF-oi_jcP--MwHsmqTaEZ-0L6s90A.webp' },
	{ season: 1, name: '프린세스 베로니카', partner: '1기 로열핑 전원', keys: [], first: '1기 52화', grade: 'royal',
		img: 'https://i.namu.wiki/i/oFJjvDjZXXuGZ8acjYpVwzVLQ30SioV1VDbI3eNzDgCnslWRvhr5wpZmPVEggTJpOfd2BjtC1M4oMfvzjSrpOOtfxXuBCnSSoDg04S_YvBlj44RTEj6n7XMUFRAmAmD5pxETPBlHCxSJKDRTj1s2ig.webp' },

	// ---------- 2기 ----------
	{ season: 2, name: '프린세스 다이아하트', partner: '다이아 하츄핑', keys: ['다이아 하츄핑'], first: '2기 1화',
		img: 'https://i.namu.wiki/i/Z7SNZjcvKV497cA75KkSUsGL4hs_DptWEpbXcUEryYlW3Hf33LkerD0rwY-MbsMyd2-oFGOwMQNaSqgfoC8l6M4jDh9HiE2cSq-DLkIs06IG6KpySqVyeCWcYv49XJLIPVx5rmTq9lCxugyyuMlXyg.webp' },
	{ season: 2, name: '프린세스 루비', partner: '방글핑', keys: ['방글핑'], first: '2기 3화',
		img: 'https://i.namu.wiki/i/UsrDIiwsKt-Ul6ZUaoCqeLF_UF3gjUHhUfZjslJyc9ZN4rU4RyC24fhL2kLxKQAOPxWLkPAVhYT4vxVsBN82LMmuwR92KLk1psd7Tz2W2xoFobIRCLK4ssPEneiQetxNI0Ujva1DfRo7774-9O78Pw.webp' },
	{ season: 2, name: '프린세스 사파이어', partner: '믿어핑', keys: ['믿어핑'], first: '2기 4화',
		img: 'https://i.namu.wiki/i/rvcLwz-WpAwAHIMBZ6VdnSyJfZ-IFMNtYHEM5-7FE6fPjUH7xPBPFCdnGpMdokRewn1h6M7AJLoZ1xj_ER2hyTpJF00KKqxvFylVWs98yat9j4vx1b5-4562tbbdIS81nh0w1nYSIqtjJt-Ju4xuIw.webp' },
	{ season: 2, name: '프린세스 에메랄드', partner: '조아핑', keys: ['조아핑'], first: '2기 7화',
		img: 'https://i.namu.wiki/i/BL8jvOFEqMgWU9l41z8n5dhvk_moroywxi75gJd2Y3mGfNm3ZaH4TqDECsDwsSG4rig1GRomODz7vtp_esOumlc5nFtQSvtEtR5ca-m9NDx05fFKjhJP-NgjXEae6HI2rRfPt14rEdOz2PF0VxclDw.webp' },

	// ---------- 3기 ----------
	{ season: 3, name: '프린세스 플로라하트', partner: '플로라 하츄핑', keys: ['플로라 하츄핑'], first: '3기 2화',
		img: 'https://i.namu.wiki/i/7WuWP13x09_m5qczgY_Oup5i59o3xYSDkF_4I1lDEuhxIvY6KnUOMhulJGFJaif49-igj3_P_Th9B6YEUiOqoT6wrWKj-em7dv_peuaWI-ia0x8JwMkQRgi0f-ABaL3-S_1jkZBj4ayVpR34qu3TzA.webp' },
	{ season: 3, name: '프린세스 솔라리스', partner: '나나핑', keys: ['나나핑'], first: '3기 3화',
		img: 'https://i.namu.wiki/i/tjziq8KRD6b5nShc6ByodA74dks9eS0jvIYoSm8LV8qBuTsTOQfSsNbEO2l3McXMQ7TPRCwfRVuue7a1AwFtxNG_GnMQNiehAyznQNifHy7xV674bDN7QOAZzbv5Y_sb8vW6Pj7Qn8iPaAQZ8TxAiw.webp' },
	{ season: 3, name: '프린세스 글로리아', partner: '솔찌핑', keys: ['솔찌핑'], first: '3기 4화',
		img: 'https://i.namu.wiki/i/N4vvNDi4HPgOtArUN_2AEEXYJPuec9_53-1BR6wBOO_RAN2Y82UDYTbo5kZopQ4Ttmi5XFZoi7gFIPdc8z-yYmzhcCK7eyP3oF50nIycXsfdlzDL0B6H2kGpM34Vx5UIkBD-i86btMQlR-YgMMogXg.webp' },
	{ season: 3, name: '프린세스 크리스탈', partner: '꾸래핑', keys: ['꾸래핑'], first: '3기 5화',
		img: 'https://i.namu.wiki/i/WnukbMyETo5vQbtX5MJE5_IrnL2LEVS__ZQOPlOd-c5NmEOHjc68mRwFc_dlZupzH5jc_SzRAJ2cdIOuNB60qgZGqEG63hzPtI4eSl82OKyI3JHc93mlC279RJ7Beqm9U_GLQyVZIKSZ-2aaL4I7mA.webp' },
	{ season: 3, name: '프린세스 트와일라잇', partner: '행운핑', keys: ['행운핑'], first: '3기 25화', grade: 'legend',
		img: 'https://i.namu.wiki/i/aPCzC0WmsUuN9dczUCzeOuwY3NUrqrwMucgAUMa6PHSwMvBjXJrxpXNjx3h27jgT-3vOAqKkezysFNZmarVDDvSbYELM76b_IVwP7fJ8y5dGz51h8hDq9bxG46TYATY8JSia08eM3q-Q2OQYF4XT8Q.webp' },
	{ season: 3, name: '프린세스 라비린스', partner: '다해핑', keys: ['다해핑'], first: '3기 24화', grade: 'normal',
		img: 'https://i.namu.wiki/i/JTgDyHCjmeN67KP3tWDP9bXqCIkLP18PA1a4ZX835na5lY96igwpQDx6a6o5UvGOa0vIt9GxfJfAgFb5DwG3r8KwdujNnG4dCE85iIqvCHNDQqDqdEYtIYNKgxlrjGmLJ-X6ua9yy-e0G2lnGDJhLg.webp' },

	// ---------- 4기 ----------
	{ season: 4, name: '프린세스 베리하트', partner: '베리 하츄핑', keys: ['베리 하츄핑'], first: '4기 2화',
		img: 'https://i.namu.wiki/i/8FlO0Ei41BLOq90XLdze9q_2rKyCn5dc4qEmOBRY4GNzJp6DJvz0nzKXLwWkNkPcO_qkWL56xfc6Z75o5B5NhcV-tnu33x_vX9t5r0oGTqpjqhvDOpqpK8ynvVUTlRNMln2-57H_xh033cPdBLuqVw.webp' },
	{ season: 4, name: '프린세스 스윗플로스', partner: '포실핑', keys: ['포실핑'], first: '4기 3화',
		img: 'https://i.namu.wiki/i/FZw9QsIlpYwdI0wZoKRCS4pysH_i3A0xLywOD8T0u_2DCg1m1Tfmltcd-SjzIbfJFDkY7ObjUNB8I4dNy60kal3BsT6eh7q42D0p9j-yrXmN-1EIAx18YowZv_qTB85NxA1q9OkYikRjFcv19HeIrg.webp' },
	{ season: 4, name: '프린세스 샤베티나', partner: '샤샤핑', keys: ['샤샤핑'], first: '4기 4화',
		img: 'https://i.namu.wiki/i/y475cZ6rSzHv-C5YYmAD2fKowKFxNVLpbXSuT9w_zqv5r-tvTb4yUT5zPHuV8eRVac3dVcNunRWb76LdZdEW84M_2xpaXNcp4-frZpWzpNuVXZ_bu0nVGrBMFoQCiU-tlHTeDZ_lrO0bfnwLFuPROQ.webp' },
	{ season: 4, name: '프린세스 젤리스틴', partner: '말랑핑', keys: ['말랑핑'], first: '4기 5화',
		img: 'https://i.namu.wiki/i/O4WZMq3blQwZesPfOuy-IpD3hAi1iQ-ASK2bU_2S2bceVk3h9g23oxefrfmCOWF660gFlfRftbGx6HteQg_UV61Z3mklAsKP67S-P3iZYhyzLwCxmiuP85qntIExsLWhMBsg4r1LMrZoFBtFVLKOuA.webp' },
	{ season: 4, name: '프린세스 하모니어스', partner: '새콤핑 · 달콤핑', keys: ['새콤핑', '달콤핑'], first: '4기 26화', grade: 'legend',
		img: 'https://i.namu.wiki/i/2jWeNe7Np-dJVM8zyHcaBbxTCVFrAti-7m8j1xCglC3kPI0FZqmqykVVUdmpZJSaj1kDfJxTkVS59u4GXp4PAVVlKfLJ3ZJnpGB-TTZEMDhw5xWW-0Zz1Wma_PgPFapnaj0zxDi57Qdgl5iN96dL7A.webp' },
	{ season: 4, name: '프린세스 라비린스', partner: '다해핑', keys: ['다해핑'], first: '4기 24화', grade: 'normal',
		img: 'https://i.namu.wiki/i/mzahxooXxYwqdf8EgpmDmBpYQHu7bDrID7w-VIk8f0TLDpa68PrtxjKBH-imzKpNAM7Dq1wbqO8IY9oxnui970NdenaJr4Nd96GmOKpmGXEbxuxz9h9M_A1cOsHV1Yh1Mb94K3VKHe6I2a2dNklxwQ.webp' },

	// ---------- 5기 ----------
	{ season: 5, name: '프린세스 브라잇하트', partner: '스타 하츄핑', keys: ['스타 하츄핑'], first: '5기 1화',
		img: 'https://i.namu.wiki/i/rnFKKyskrm8yIwR0kh03CCc6xx46sNKimwDKZ3KOYftRqtY84eNCFySXVGVVIoF3hHoB7wUZuSZ9_Yc0EOED_1N6sf3gRl7FYCxr3C6cQjWpkD_ycqA0yFKUrBsX-61VPdPm3ZuE3k8xcwLDQ2jT9w.webp' },
	{ season: 5, name: '프린세스 스타라이트', partner: '빛나핑', keys: ['빛나핑'], first: '5기 3화',
		img: 'https://i.namu.wiki/i/YqF1JIeO5ssUJc8phNvPLPu_WQoz2MYwb6zZgmGptckHdmC88235Zbh1qyFQGI7z2ExzTVQbrLVkz4FZJa3DZuahCMuWhR3kOQ5n1rVY8FghgWnWuXoZeeXTEK5HY4jUZI1qyQr7KCKFNsK5gKFXXg.webp' },
	{ season: 5, name: '프린세스 글램스타', partner: '초롱핑', keys: ['초롱핑'], first: '5기 4화',
		img: 'https://i.namu.wiki/i/woh8LfvbJNMjNRZpNHhRvP4FJhBGVDLzI0Q1QUV9hGsWfOuAGJaHgc0kj_deSKWxj--MpKXaDTusm7VycnYlVqoULBHKV4kiaZQj1NehV2ESC8Jgf_5gy8vdNSwnyTgVWcWzxsVGRQyPLjXeyMny6Q.webp' },
	{ season: 5, name: '프린세스 루나샤인', partner: '빤짝핑', keys: ['빤짝핑'], first: '5기 5화',
		img: 'https://i.namu.wiki/i/u_s4fOx5Z5jbeyRZTfKa3w8tI7PjWy4u4pXpowPAIGmrbRHL1-nDOQZmQAW5NPKedtKiiuy7tkEfemksMKfATH4UlqeHHKdxG5lPCBUSTPS2SG8eAakt59ErGtCWSKkUtfSTKQ-mtwDSxd7smcicOQ.webp' },
	{ season: 5, name: '프린세스 오로라', partner: '오로라핑', keys: ['오로라핑'], first: '5기 26화', grade: 'legend',
		img: 'https://i.namu.wiki/i/xivM0Vxcre_H-h4DmMMG-wtCI5jKP2TYNDIK_6gc__wOV55IBDKDMMaRag6WykqyBqMFkKMsTufERXGdOdHzOzj-H3s2wI7hEqHbW9aZmiEEpwr7jgBs6jB-pjMaqN99sNW1D5Hrra3TXsDPln7-5w.webp' },

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
const teenieMoviePrincessNamu = {
	1: [ { name: '프린세스', partner: '사랑의 하츄핑', first: '', grade: 'normal',
		img: 'https://i.namu.wiki/i/2R1WbaUXlzwaRiQjqJMaqNZLhiO2F9E9wDY0xC0kYscGW8s-xJcXdOHw64O6lWPjHIjWaMQPJvIlMNQaaRTY0vdDuJ7j6M1uEQyvvG6oMddEmuBSFGvuNIwc31rjP0Jr9Y81Df8jWmaPXhv_VIUBYw.webp' } ],
	2: [ { name: '프린세스', partner: '머메이드 하츄핑', first: '', grade: 'royal',
		img: 'https://i.namu.wiki/i/t72OYnbtzw2utZchzxssWIDvWKsU7Kraa9wUbWqS8NCSzm70Ndvy8Uml3lvn7gXBJDitAdRozt_lZ6UPwj0qJT8W_XwgLLiMYqB5WAyJ0Uf3Pzi7gZkCtl7n1tucNHXK0Jz6Cic-xVe4erBaw52qbg.webp' } ],
	3: []
};