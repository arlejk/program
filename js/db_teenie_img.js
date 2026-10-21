// 이름(또는 폼 표기명) → 이미지 URL
// 하츄핑처럼 기수마다 폼이 다르면 '다이아 하츄핑' 식으로 폼 이름을 키로 쓰고, 없으면 이름으로 찾습니다.
const teenieImages = {
	// 1기 큐브 티니핑
	'하츄핑': 'teenie_01_cube_royal_heart.webp',
	'바로핑': 'teenie_01_cube_royal_dada.webp',
	'아자핑': 'teenie_01_cube_royal_gogo.webp',
	'차차핑': 'teenie_01_cube_royal_chacha.webp',
	'라라핑': 'teenie_01_cube_royal_lala.webp',
	'해핑': [
		{ label: '1기 큐브', src: 'teenie_01_cube_royal_happy.webp' },
		{ label: '6기 프린세스', src: 'teenie_06_princess_royal_happy.webp' }
	],
	'키키핑': 'teenie_01_cube_normal_kiki.webp',
	'아잉핑': 'teenie_01_cube_normal_charm.webp',
	'부끄핑': 'teenie_01_cube_normal_shy.webp',
	'부투핑': 'teenie_01_cube_normal_dare.webp',
	'깜빡핑': 'teenie_01_cube_normal_blank.webp',
	'띠용핑': 'teenie_01_cube_normal_dream.webp',
	'주르핑': 'teenie_01_cube_normal_weep.webp',
	'차나핑': 'teenie_01_cube_normal_mosey.webp',
	'따라핑': 'teenie_01_cube_normal_mimic.webp',
	'나르핑': 'teenie_01_cube_normal_narr.webp',
	'무셔핑': 'teenie_01_cube_normal_spook.webp',
	'투투핑': 'teenie_01_cube_normal_tutu.webp',
	'차캐핑': 'teenie_01_cube_normal_good.webp',
	'떠벌핑': 'teenie_01_cube_normal_tweet.webp',
	'다조핑': 'teenie_01_cube_normal_allmine.webp',
	'화나핑': 'teenie_01_cube_normal_roar.webp',
	'시러핑': 'teenie_01_cube_normal_nono.webp',
	'바네핑': 'teenie_01_cube_normal_luv.webp',
	'덜덜핑': 'teenie_01_cube_normal_cool.webp',
	'그림핑': 'teenie_01_cube_normal_art.webp',
	'무거핑': 'teenie_01_cube_normal_heavy.webp',
	'꺼꿀핑': 'teenie_01_cube_normal_oppo.webp',
	'씽씽핑': 'teenie_01_cube_normal_zip.webp',
	'베베핑': 'teenie_01_cube_normal_bebe.webp',
	'코자핑': 'teenie_01_cube_normal_sleep.webp',
	'딱풀핑': 'teenie_01_cube_normal_stick.webp',
	'모야핑': 'teenie_01_cube_normal_curi.webp',
	'토이핑': 'teenie_01_cube_normal_toy.webp',
	'또까핑': 'teenie_01_cube_normal_wannabe.webp',
	'플라핑': 'teenie_01_cube_normal_flora.webp',
	'노라핑': 'teenie_01_cube_normal_nora.webp',
	'노리핑': 'teenie_01_cube_normal_nori.webp',
	'아휴핑': 'teenie_01_cube_normal_sigh.webp',
	'똑똑핑': 'teenie_01_cube_normal_shush.webp',
	'꽁꽁핑': 'teenie_01_cube_normal_freeze.webp',
	'찌릿핑': 'teenie_01_cube_normal_spark.webp',
	'홀로핑': 'teenie_01_cube_normal_alone.webp',
	'앙대핑': 'teenie_01_cube_normal_ego.webp',
	'악동핑': 'teenie_01_cube_normal_giggle.webp',
	
	// 2기 보석 티니핑
	'다이아 하츄핑': 'teenie_02_twinkle_royal_heart.webp',
	'조아핑': 'teenie_02_twinkle_royal_joah.webp',
	'방글핑': 'teenie_02_twinkle_royal_teehee.webp',
	'믿어핑': 'teenie_02_twinkle_royal_trust.webp',
	'까르핑': 'teenie_02_twinkle_normal_tickle.webp',
	'아야핑': 'teenie_02_twinkle_normal_oww.webp',
	'소원핑': 'teenie_02_twinkle_normal_wish.webp',
	'토닥핑': 'teenie_02_twinkle_normal_pat.webp',
	'쪼꼼핑': 'teenie_02_twinkle_normal_timid.webp',
	'싹싹핑': 'teenie_02_twinkle_normal_tidy.webp',
	'맛나핑': 'teenie_02_twinkle_normal_yummy.webp',
	'포근핑': 'teenie_02_twinkle_normal_cozy.webp',
	'메모핑': 'teenie_02_twinkle_normal_memo.webp',
	'공쥬핑': 'teenie_02_twinkle_normal_lady.webp',
	'짝짝핑': 'teenie_02_twinkle_normal_buddy.webp',
	'주네핑': 'teenie_02_twinkle_normal_gift.webp',
	'뚝딱핑': 'teenie_02_twinkle_normal_sculpt.webp',
	'발레핑': 'teenie_02_twinkle_normal_ballet.webp',
	'원더핑': 'teenie_02_twinkle_normal_wonder.webp',
	'가면핑': 'teenie_02_twinkle_etc_mask.webp',
	'다해핑': [
		{ label: '2기 채형 비녀', src: 'teenie_02_twinkle_normal_only.webp' },
		{ label: '3기 잠형 비녀', src: 'teenie_03_secret_normal_only.webp' }
	],

	// 3기 열쇠 티니핑
	'플로라 하츄핑': 'teenie_03_secret_royal_heart.webp',
	'꾸래핑': 'teenie_03_secret_royal_okeydokey.webp',
	'나나핑': 'teenie_03_secret_royal_nana.webp',
	'솔찌핑': 'teenie_03_secret_royal_true.webp',
	'행운핑': 'teenie_03_secret_legend_lucky.webp',
	'빨리핑': 'teenie_03_secret_normal_hurry.webp',
	'얌얌핑': 'teenie_03_secret_normal_yumyum.webp',
	'뜨거핑': 'teenie_03_secret_normal_hot.webp',
	'삐뽀핑': 'teenie_03_secret_normal_cure.webp',
	'힘내핑': 'teenie_03_secret_normal_cheerup.webp',
	'고쳐핑': 'teenie_03_secret_normal_handy.webp',
	'아라핑': 'teenie_03_secret_normal_wiz.webp',
	'패션핑': 'teenie_03_secret_normal_fashion.webp',
	'꼼딱핑': 'teenie_03_secret_normal_justice.webp',
	'퐁당핑': 'teenie_03_secret_normal_splash.webp',
	'파티핑': 'teenie_03_secret_normal_party.webp',
	'꾸며핑': 'teenie_03_secret_normal_style.webp',
	'삐짐핑': 'teenie_03_secret_normal_huffy.webp',
	'아아핑': 'teenie_03_secret_normal_aria.webp',
	'빙글핑': 'teenie_03_secret_normal_twirl.webp',
	'간호핑': 'teenie_03_secret_etc_nurse.webp',
	
	// 4기 디저트 티니핑
	'베리 하츄핑': 'teenie_04_dessert_royal_heart.webp',
	'샤샤핑': 'teenie_04_dessert_royal_shasha.webp',
	'포실핑': [
		{ label: '4기 디저트', src: 'teenie_04_dessert_royal_fluffy.webp' },
		{ label: '6기 프린세스', src: 'teenie_06_princess_royal_fluffy.webp' }
	],
	'말랑핑': 'teenie_04_dessert_royal_jelly.webp',
	'새콤핑': 'teenie_04_dessert_legend_tangy.webp',
	'달콤핑': 'teenie_04_dessert_legend_sweet.webp',
	'캔디핑': 'teenie_04_dessert_normal_candy.webp',
	'머랭핑': 'teenie_04_dessert_normal_meringue.webp',
	'샌드핑': 'teenie_04_dessert_normal_sand.webp',
	'또너핑': 'teenie_04_dessert_normal_donut.webp',
	'와플핑': 'teenie_04_dessert_normal_waffle.webp',
	'롤리핑': 'teenie_04_dessert_normal_lolli.webp',
	'마카핑': 'teenie_04_dessert_normal_macaron.webp',
	'핫케핑': 'teenie_04_dessert_normal_pancake.webp',
	'커핑': 'teenie_04_dessert_normal_cup.webp',
	'머핑': 'teenie_04_dessert_normal_muff.webp',
	'요거핑': 'teenie_04_dessert_normal_yogurt.webp',
	'눈꽃핑': 'teenie_04_dessert_normal_iceflake.webp',
	'푸딩핑': 'teenie_04_dessert_normal_pudding.webp',
	'멜로핑': 'teenie_04_dessert_normal_mallow.webp',
	'쪼꼬핑': 'teenie_04_dessert_normal_choco.webp',
	'뿌뿌핑': [
		{ label: '일반', src: 'teenie_04_dessert_normal_puff.webp' },
		{ label: '각성', src: 'teenie_04_dessert_villain_puff.webp' }
	],

	// 5기 스타 티니핑
	'스타 하츄핑': 'teenie_05_star_royal_heart.webp',
	'빛나핑': 'teenie_05_star_royal_shimmer.webp',
	'초롱핑': 'teenie_05_star_royal_sparkle.webp',
	'빤짝핑': 'teenie_05_star_royal_twinkle.webp',
	'왕자핑': 'teenie_05_star_royal_prince.webp',
	'오로라핑': 'teenie_05_star_legend_aurora.webp',
	'깡총핑': [
		{ label: '5기 스타', src: 'teenie_05_star_normal_hop.webp' },
		{ label: '6기 프린세스', src: 'teenie_06_princess_normal_hop.webp' }
	],
	'훌라핑': 'teenie_05_star_normal_hula.webp',
	'나눔핑': 'teenie_05_star_normal_giver.webp',
	'딩동핑': [
		{ label: '일반', src: 'teenie_05_star_normal_dingdong.webp' },
		{ label: '헬멧 벗은', src: 'teenie_05_star_normal_dingdong_makeover.webp' }
	],
	'나그네핑': 'teenie_05_star_normal_petit.webp',
	'고고핑': 'teenie_05_star_normal_dazzle.webp',
	'뿌쵸핑': 'teenie_05_star_normal_sticker.webp',
	'고마핑': 'teenie_05_star_normal_mighty.webp',
	'아롱핑': 'teenie_05_star_normal_ella.webp',
	'다롱핑': 'teenie_05_star_normal_bella.webp',
	'뽀송핑': 'teenie_05_star_normal_snuggy.webp',
	'유리핑': 'teenie_05_star_normal_lucid.webp',
	'함께핑': 'teenie_05_star_normal_together.webp',
	'댄스핑': 'teenie_05_star_normal_sway.webp',
	'여우핑': 'teenie_05_star_normal_allure.webp',
	'루루핑': 'teenie_05_star_normal_doremi.webp',
	'몰래핑': [
		{ label: '일반', src: 'teenie_05_star_normal_sneaky.webp' },
		{ label: '괴도 변신', src: 'teenie_05_star_normal_sneaky_makeover.webp' }
	],
	'뽀뽀핑': 'teenie_05_star_normal_kissy.webp',
	'로미핑': 'teenie_05_star_etc_romi.webp',

	// 6기 프린세스 프린스 티니핑
	'프린세스 하츄핑': 'teenie_06_princess_royal_heart.webp',
	'사뿐핑': 'teenie_06_princess_royal_grace.webp',
	'아름핑': 'teenie_06_princess_royal_claire.webp',
	'뽀니핑': 'teenie_06_princess_royal_bonny.webp',
	'이클립스핑': [
		{ label: '레전드', src: 'teenie_06_princess_legend_eclipse.webp' },
		{ label: '날개', src: 'teenie_06_princess_legend_eclipse_makeover.webp' }
	],
	'다이아나핑': [
		{ label: '레전드', src: 'teenie_06_princess_legend_diana.webp' },
		{ label: '거울 봉인', src: 'teenie_06_princess_legend_diana_makeover.webp' }
	],
	'뽀득핑': 'teenie_06_princess_normal_scrub.webp',
	'차밍핑': 'teenie_06_princess_normal_charming.webp',
	'나비핑': 'teenie_06_princess_normal_flitter.webp',
	'실크핑': 'teenie_06_princess_normal_silky.webp',
	'스노우핑': 'teenie_06_princess_normal_snow.webp',
	'이슬핑': 'teenie_06_princess_normal_dew.webp',
	'쿨쿨핑': 'teenie_06_princess_normal_dozy.webp',
	'슈슈핑': 'teenie_06_princess_normal_rella.webp',
	'롱롱핑': 'teenie_06_princess_normal_glossy.webp',
	'큐핑': 'teenie_06_princess_normal_cupid.webp',
	'야옹핑': 'teenie_06_princess_normal_kitty.webp',
	'샤를핑': 'teenie_06_prince_normal_charles.webp',
	'트롯핑': 'teenie_06_prince_normal_trot.webp',
	'깨굴핑': 'teenie_06_prince_normal_frog.webp',
	'젠틀핑': 'teenie_06_prince_normal_henry.webp',
	
	// 7기 쥬얼스타 티니핑
	'??? 하츄핑': [
		{ label: '데일리', src: 'teenie_07_jewelstar_royal_heart_daily.webp' },
		{ label: '스테이지', src: 'teenie_07_jewelstar_royal_heart_stage.webp' }
	],
	'레몬핑': [
		{ label: '데일리', src: 'teenie_07_jewelstar_royal_lemon_daily.webp' },
		{ label: '스테이지', src: 'teenie_07_jewelstar_royal_lemon_stage.webp' }
	],
	'체리핑': [
		{ label: '데일리', src: 'teenie_07_jewelstar_royal_cherry_daily.webp' },
		{ label: '스테이지', src: 'teenie_07_jewelstar_royal_cherry_stage.webp' }
	],
	'라임핑': [
		{ label: '데일리', src: 'teenie_07_jewelstar_royal_lime_daily.webp' },
		{ label: '스테이지', src: 'teenie_07_jewelstar_royal_lime_stage.webp' }
	],
	'뮤즈핑': '',
	'디바핑': '',
	'쏭쏭핑': '',
	'아리아핑': '',
	'아서핑': '',
	'낭낭핑': '',
	'냐냥핑': 'teenie_07_jewelstar_normal_meow.webp',
	'폴짝핑': 'teenie_07_jewelstar_normal_bouncy.webp',
	'시고르핑': 'teenie_07_jewelstar_normal_bowwow.webp',
	'코디핑': '',
	'잉잉핑': '',
	'앙앙핑': '',
	'빠밤핑': '',
	'팡팡핑': '',
	'티키핑': '',
	'타카핑': '',
	
	// 극장판 티니핑
	'사랑의 하츄핑': 'teenie_movie_01_normal_heart.webp',
	'몬스터 라라핑': 'teenie_movie_01_monster_lala.webp',
	'몬스터 해핑': 'teenie_movie_01_monster_happy.webp',
	'트러핑': [
		{ label: '일반', src: '' },
		{ label: '흑화', src: 'teenie_movie_01_villain_truth.webp' }
	],
	'머메이드 하츄핑': 'teenie_movie_02_royal_heart.webp',
	'방울핑': 'teenie_movie_02_sea_normal_bubble.webp',
	'찰랑핑': 'teenie_movie_02_sea_normal_wavy.webp',
	'소라핑': 'teenie_movie_02_sea_normal_shelly.webp'
};

const TEENIE_IMG_DIR = './img/';   // teenieping.html 기준 상대 경로 (js 폴더 기준이 아님)
 
function _teenieImgList(v) {
	if (!v) return [];
	return (Array.isArray(v) ? v : [v]).map(x => (typeof x === 'string') ? { src: x } : x);
}
 
// 파일명이면 img 폴더 경로를 붙이고, 이미 주소(http…, //…, /…)면 그대로 사용
function _teenieImgUrl(src) {
	if (!src) return '';
	if (/^(https?:)?\/\//.test(src) || src.charAt(0) === '/') return src;
	return TEENIE_IMG_DIR + encodeURI(src);
}
 
// 반환: [{ label, src, fallback }] 또는 ''
//  - src      : img 폴더 파일 (있으면 우선)
//  - fallback : url 주소 (src 로딩 실패 시 사용)
/* function getTeenieImg(...keys) {
	const namuAll = (typeof teenieImagesNamu !== 'undefined') ? teenieImagesNamu : {};
	for (const k of keys) {
		if (!k) continue;
		const local = _teenieImgList(teenieImages[k]);
		const namu = _teenieImgList(namuAll[k]);
		const n = Math.max(local.length, namu.length);
		const out = [];
		for (let i = 0; i < n; i++) {
			const l = local[i] || {}, m = namu[i] || {};
			const lSrc = _teenieImgUrl(l.src), mSrc = _teenieImgUrl(m.src);
			const src = lSrc || mSrc;
			if (!src) continue;
			out.push({
				label: l.label || m.label || '',
				src: src,
				fallback: (lSrc && mSrc && lSrc !== mSrc) ? mSrc : ''
			});
		}
		if (out.length) return out;
	}
	return '';
}*/
function getTeenieImg(...keys) {
	for (const k of keys) {
		if (!k) continue;
		const out = _teenieImgList(teenieImages[k])
			.map(x => ({ label: x.label || '', src: _teenieImgUrl(x.src) }))
			.filter(x => x.src);
		if (out.length) return out;
	}
	return '';
}
 
// 뱃지에 붙일 공통 속성 문자열 (이미지·비고 중 하나라도 있을 때만)
function teenieHoverAttrs(name, form, note) {
	const imgs = getTeenieImg(form, name) || [];
	if (!imgs.length && !note) return '';
	const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
	return ` data-tip-name="${esc(form || name)}" data-tip-imgs="${esc(JSON.stringify(imgs))}" data-tip-note="${esc(note)}"`;
}