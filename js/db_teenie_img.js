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
		{ label: '데일리', src: 'teenie_04_dessert_normal_puff.webp' },
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
		{ label: '헬멧 쓴', src: 'teenie_05_star_normal_dingdong.webp' },
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
		{ label: '데일리', src: 'teenie_05_star_normal_sneaky.webp' },
		{ label: '괴도 변신', src: 'teenie_05_star_normal_sneaky_makeover.webp' }
	],
	'뽀뽀핑': 'teenie_05_star_normal_kissy.webp',
	'로미핑': 'teenie_05_star_etc_romi.webp',

	// 6기 프린세스 프린스 티니핑
	'프린세스 하츄핑': 'https://i.namu.wiki/i/5sW9ZVuKxK1p6mLG-pxBmSVfuq5OIbxWLUOwvyHC2RnSrHDugsJJcGQxNoTZBlLJtD1GdbLeZhjtvwNBwK5HxkNHYKJmlP2PYfPaUkQc-VVKopOK540kMgRlX7vnR0zTv-u1J0mEBOd4ObaMZAedzA.webp',
	'사뿐핑': 'https://i.namu.wiki/i/wkdy01ujiQ-rW6Kc7g28eKfslkBPKeEGhuOsDgWdwE0f79Myr_UcpcmLZx4qHvfXIwREuQNZxWBDnvD462wI1g-5oESa5ZESvKI-Y6PSRz-Yy1lCXgV2WuVIpeaB9PU7Sg7I1r0gIzitNN1WwTX8BQ.webp',
	'아름핑': 'https://i.namu.wiki/i/CtQYFFLiWHBoFgij9lHyeNwt3gMUziLVSdUOV5Inr29S6kKlcglXMmLmdNkidgAnp-o445VWQycsfp2fLD9a9K4mmg-6T71Z__GkPYnxEJexZUqVvrhnVl2a2JCtKd4Krx5FvyKzvQeawp9UWo63YQ.webp',
	'뽀니핑': 'https://i.namu.wiki/i/r-hx6XVaIeOgKrUO0ycW0D9-e7Sb8jR_jbDaF9QQfV-UI5Y-GqjisjVUFBboTsblKn_dRipGqKqYBsrQqtJ3Z8k3aFKT4Yc0CbNWOInU6-kRD8jMBMvZ0tYkYR_-CSGWAokVtdHo6Zcd2aVyVFYzkA.webp',
	'이클립스핑': [
		{ label: '노멀', src: 'https://i.namu.wiki/i/lyg3uVt5a-Oji2bKGghRJUf2r6UIxBYEjAzSM4RAPuOI4m-RCLBCvIGp5P8CtczD886g-CqUQ0PFPsAliavxdpDYMOW1HfHBH1RlbYus5M3cUM1VKE4UmiayfO6NEPyNorE98NeIzswKH04_Pr6eKg.webp' },
		{ label: '날개', src: 'https://i.namu.wiki/i/8HxuJCjg9OfPlM0CcMPAlsYecLXIykN4qZ51qXthXCdPxCvtM2ngm7ULo7WyNswZZp9XXfXzvZ1YcXwixt9OImcO3QNu2d3VY25sQRTIWthq6GUqWLrJb2N3ZLTAqZdMyznTtLy1W3YCH6-ZrAjtDg.webp' }
	],
	'다이아나핑': [
		{ label: '노멀', src: 'https://i.namu.wiki/i/Eg6ojnPChhHmQNpuBe-VQZ1rLPhpGVBPrgU4NgqH_JUsnzxoELrNzOiNcz6jDnOa1esQ1tgUGFDZLRqL9V5aP_ep-l-QW4KjqIQsWqTfnuENyb8GtdJKBrictJke3E33T9NQmmpvwYZMzdqqlQ7qKA.webp' },
		{ label: '거울봉인', src: 'https://i.namu.wiki/i/G_sqpo9YGpr0v5bWJwjUZnBgNkRCTF8yNVIufJegdSv2oFAzzDwmYG40bwwMMMIhTu90Mxse_t_Z8TUzCWkzOuYnQN-2tPP3y68PnIO7xwifNx5_inETRfqHpQWAMy8O8XEgtEhLKHo5acuGCZunqQ.webp' }
	],
	'뽀득핑': 'https://i.namu.wiki/i/mHTA3WIKNVNd4lckcYNVBG00xsA-mykVCQYc1JbwFMyjLoqdoITGLDpjzOegrtT7MywLt-MsQtlqD9RLXLKrxMKV5eZsYJje9UApZsx8Q3FxMYA1t1FALnAI5VdYbXYRqgwZFucHxozI6AqLPDb0gg.webp',
	'차밍핑': 'https://i.namu.wiki/i/rOhp9Afq6Or-dGh5kYXVwXpfq55MLAAh8rgoE_wQKN189M_C0luyaqVPB-oOfv8LrRy0mRceXx4z2sKwZ5LHo2_mtXIlSWAa3OJzf_MEAEac4GtbnJzABILEMe8y5qz3Z8_fj3N1VHMF5vq4DjGfwg.webp',
	'나비핑': 'https://i.namu.wiki/i/jWp4IjDFx4bqlPHw7kOysStkYM-UEUPam9zyFrOZRoiQQeTOVwDIzikWeBtu63-B54T68dUbwibhGU0bFNSdnoJJxaPu-eHjSuZBSMycKp4fnvywHoc7zxpJ6CHxtwayzopQ8QdgHaUBZQlQOODMmw.webp',
	'실크핑': 'https://i.namu.wiki/i/bBaTlVXq2-LTSI9JSvbwYx3pUiLg7vzvx36NEkXw_m0z5IlsBPjsS0gJnArMLupoZnmlCPD8CjLCb_nCYs6oFE3jTca5lrWZyGbFJux5f3oyEgCXYlyJUyGgPMZl4C8Lv5ebB4vtWM70pE8RUlUaGw.webp',
	'스노우핑': 'https://i.namu.wiki/i/UtoUCEU7yFzy5XEwTbczL0iTozwFdtFNJ1m8H7XunSXjiK0bKUuv6fEM-GEz3kC9RubrSawNJQYYYv2jPgOC78kH0d6dhOe-89z5baycIVKkvfQ6bTVyIG4DGMKptYSOpbXP0S50CCWaA7b68jIlAQ.webp',
	'이슬핑': 'https://i.namu.wiki/i/6IqwEJC0W8FbMDRnTshX7EPtsqhH2WtFjS6dnwJledEG9MGOFUVUE1QQ0gCxi5z34N6a_KUR40Nu9uP3Xh9FwojU1ZNv6KYpuRhiLJz9R5hslel3xR2JPKN4ZLCCYE7wCJn5rHw5uiUXaDNjsy7eqg.webp',
	'쿨쿨핑': 'https://i.namu.wiki/i/neKwTZALh9yFYRv-d2zsIwcENFeObSkk-oxzY3NnB75MJivojfQt3tUTu5-QWqqoHHS24QGIFbraPfg0UndpoACr9gZaG73Mojw8MWlgbqzmh7r_4uXhZfZqcgRMKPiVcqAySwmd2R1B9O1oBhp5DA.webp',
	'슈슈핑': 'https://i.namu.wiki/i/1qkS3aUwv_u9eZ-bqt_QiLgL4a07NNh5eHkX60Zy-ZGUhNLYNuh5ggei-_y-3YW6bqnzhylLuhmhuDG-M-mmhiKhvmgfAacIXBtAvyey3FoXnwEIndNyl1IL-K-1RJTK8vtfweErr7QtZmxMIoIyZQ.webp',
	'롱롱핑': 'https://i.namu.wiki/i/-guMievjtWvnDeDGkNjODeCL5THbMLPMsI_iwcazfhYYnkfQAmTo2RwiHh6nhtdVrL7JpwvMW7WyV8Iz9OWJHqu_VW5KTOq4_slllyxwLm_oKWQjHtzN5kxSXDxdM774TqoGTHhnLfrNdcSNhvnaCw.webp',
	'큐핑': 'https://i.namu.wiki/i/lGOLdt249BGYHYI2captKXuZu74AJq8_6D2bV5yntT3cA6LWkA9cLOO1qu9nCSjJUMIazeBCaeqz51qFrzp4JwpE8ewhGs867Cww_yIlP3V-fwMT8yTD_mEcTFfiB0vqpwuGAUlnoJhmCSAulosP_w.webp',
	'야옹핑': 'https://i.namu.wiki/i/Oj6M8JoPy3nDiWqQ8UsCtikYbrNcxeRUkf4dKX4dQTMMFhl-Ci8eWkyc9G3nFLpreF_1aiKgn4NszeYIz94qQu-8rOjx7xsVTfDVo7qT2yiOG0uM8AuL4wSF5l4JzEbKT3Z33iMmEwtqI6QvBOPRlQ.webp',
	'샤를핑': 'https://i.namu.wiki/i/76Kz_hetnUo1CCifqc1aDmn_Gz97HmZbBuW7BR1TUEc9lSPfkl9B8_bu06toRZjEiJNAuWjGAI2GX7qGJqozFl4Y5xFZiNp3HFoJl0Eeqx42wlvKBcRrqynK1CkeONo64_-Q0Id0d-01mR66H3rL0w.webp',
	'트롯핑': 'https://i.namu.wiki/i/mehPGi-wfUvkbmrFkwua5X8kjaWsYurimHi4sqFIWvDrq48_lDKB4RvyGxyajM66k9yHYERc-jDi7qFglDCea-4bp42Ucb1JlarEj7z6IJ60kOOYa3yQcXU5uQ18FKoT5CF7xXySs5BdgjSOMSnYUw.webp',
	'깨굴핑': 'https://i.namu.wiki/i/aue0I5qs1C4xm2afBhWq40f3P4CD1tWo5tpGGup0DcdU13Gt9RlDieWza3B8vLTqrha5FhAE8f_QKdU8ILGQDQv66T8kYkVlTlnQlwz5Xr0wknFB_dOly-et1kli98loAoVz5Z8Oi8MKJloG0-Wk7g.webp',
	'젠틀핑': 'https://i.namu.wiki/i/PNafMxVIobxzA2h6TuuRDKP2CNVZNUV2XiyhNCRac-9lXF8-5l04CbmMgAg_2FOq9gxQlwvOgLw3esTYcdyexdLR78j1F9-IUtT7FgDFBMmGk_2U-OV6w3QlenWq2zt0Hbnzxwc8A1mHcJzvnfsGYA.webp',
	
	// 7기 쥬얼스타 티니핑
	'??? 하츄핑': [
		{ label: '데일리', src: 'https://i.namu.wiki/i/nOHqI_ZkTmXPJzfljrhRXaoor53StakEo9-8hlp3Be82zGT-JUkt-TR4rdK2YwKaCc1IqyHzYyTEf-dQK-j--2axEziRm8POjdlY-nO-csf7T7GhKWOxQuqY114-CUXmn-Md3qd_Vf-Zf4FQRVfWMw.webp' },
		{ label: '스테이지', src: 'https://i.namu.wiki/i/2JAXhHqUKoWZeCZCTzldOoIQ69YXrRz9K_0IGi1n27y8bph-MPwT1J5mdUz5W4diuBtlqbkfHfz9mecpRfQ7xasgjMd8VhDasEa1uSYQVwlV2jrr_dVqx6g9YqyPblPXaTvtmUTyBCMMpZlW1SRRPw.webp' }
	],
	'레몬핑': [
		{ label: '데일리', src: '' },
		{ label: '스테이지', src: 'https://i.namu.wiki/i/oWAXvWwgBAhx9nG9nTNcxdnMCiVoKBQhMgkXTbHM88iV2ZjbYocHOq8R8DWIm_vjLLb8LfgoxUPbF3IE3tu5sUl8fs1MV1-ktYA8MYu7Z8QqkogUV5QqxdxoZvkouEebft4EdH8PTfh89zaqsuRJww.webp' }
	],
	'체리핑': [
		{ label: '데일리', src: '' },
		{ label: '스테이지', src: 'https://i.namu.wiki/i/CzRt8GWtCcrS5D-Oxvg3QSoZbgHPPautuoTaMej6nozgiXMPpImpLT7RCho-G0jGpxZQx--s6EvViYsox-gxM8WkLun1MdxvmCCPEEw2UWHp6mk7yJ61SRAtNxIc_kUN9tR4V0zaWlTEtW_pAEx8uw.webp' }
	],
	'라임핑': [
		{ label: '데일리', src: '' },
		{ label: '스테이지', src: 'https://i.namu.wiki/i/Bscv4RypkTYkK5vGFSvAlqgFoQKlO4ZCHi0FCkmukiZ-JsIfHrSQ9LbVu2smnup_yshlJ5JVJVfyIVx91qGs5rF3aFoh1oLRAkhpz3KH-8rDDaKH8Q-dSVgi-wh0kA0X-mt5VFjc8vTx6S-NfRpPtQ.webp' }
	],
	'뮤즈핑': '',
	'디바핑': '',
	'쏭쏭핑': '',
	'아리아핑': '',
	'아서핑': '',
	'낭낭핑': '',
	'냐냥핑': 'https://i.namu.wiki/i/Rt0CfWH8gvmY-GGt1ZDFD8KR-fkTjGri8o4fFWTqtIQ0KvhSvg26EhIpPt2Q0SQlFc3vdmSHN219SKqu1zLP5F5WCMLqX_sviriAarZXEPVjN77KD1xPCo0MNcgGaFEyri-iA_1LMph1GFAapfYTQg.webp',
	'폴짝핑': 'https://i.namu.wiki/i/U4_ZEnkofoojHDU63xs6fSpGtidDxIJ0ONzANmcM-OKFyF7r2N3-KLUO-snq9vGJoM1m8UIqRF6cMaJf3YOKcmrkZbOd-5njO5WeAvBtiE3-Y2N4JoRRjPvZgkP8GL8nHpCuCrFJmxb3tDN6QjRq7g.webp',
	'시고르핑': 'https://i.namu.wiki/i/Z9dduAzzC1uZ7VrSjnKvN2oOxOrib6EyU_emesqaPVVjm5UcF9Xr2La-n0L56UA7o0QnlyZQjjENBY3rKptuLMrDw9d7FUe1wCYzsaFMwsZccTIMn-pQhWUPHBKoqnIPxF0qMMDyfJ71axyeCWtcaQ.webp',
	'코디핑': '',
	'잉잉핑': '',
	'앙앙핑': '',
	'빠밤핑': '',
	'팡팡핑': '',
	'티키핑': '',
	'타카핑': '',
	
	// 극장판 티니핑
	'사랑의 하츄핑': 'https://i.namu.wiki/i/TdYsvT4Ft2d-QNcLuCnqWm4h354xVN1MFTEOxRlHawyg92PgUOK-TFiKBjLLl4X9SCpkWrFMZMvgYqWOFt5JJMKL48krb5KugsDjMg4MvSUpapVA8OlHq9u-Oxq3ShjV7t_I77Z8DHTdN9V90VCzVQ.webp',
	'트러핑': 'https://i.namu.wiki/i/eSoXOD4HiAkAja79moYqW6eSHP2E8GathnkSq7iyY147imxL43Uunxwz84HPMGwfi3_dhYHvvDrnao7d46g6-QlSiQSFRcVIVa22U9Co9AQsSD3mHerEackMhfQ7EmscygzMfQvHyv9Ob3IrKdQVrA.webp',
	'머메이드 하츄핑': 'https://i.namu.wiki/i/qceQUxFX0MsOifHMCel1-A6aCcq7CGyWjVSQw34marXKxRwdtNN6hCEzNDuMORFDXR50Ze3vmck0rW5Ha_XRie7on4A0Nv58ozp9ePUNF7C2bMwGh4OjHIEY_fdM6OmzM3oZNwkKDyLmJvce61ljOw.webp',
	'방울핑': 'https://i.namu.wiki/i/eJwiJmwAhvLrUtEWNQe3qEyFV7IMu8OS-IHT1f7qvfyah6dFPmLrMSJAHBVtymawBau1Laj2R80XXL0YwFmSpA1Q3K9-x_f6Srx10cj3-DtZZ3Hk06dETFxzwljYGlAFSw3BfoZoejhmuvKw4nx7TA.webp',
	'찰랑핑': 'https://i.namu.wiki/i/l9H6as0_k00MYG2xQz5KNAYVoQXBatInAipWpf3zpWgrIfr4nXS8uW2tefNwTt73LafQ1o1St4ipf8dSk6fd_Nx2y6LKmO8bY3nDgGxZF8xEXawvQMEtEDAj7LlU9mANCPiYeomTGQOa8ZUXJEcbiA.webp',
	'소라핑': 'https://i.namu.wiki/i/h3Af-rPqTo9gNGmvI7sUCDvf8KNb-lTWjidsn5R2xXIdxw4DMjcLE4PPRrxSW6CxeZd01o0p41bb9KwdrAuwwxVnRq5te04TyWMs1bhqbdM9cfNEp7lrSfXNuLAN_o9DYfHpxtarpFVM-R3pldFEtg.webp'
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
//  - fallback : 나무위키 주소 (src 로딩 실패 시 사용)
function getTeenieImg(...keys) {
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
}
 
// 뱃지에 붙일 공통 속성 문자열 (이미지·비고 중 하나라도 있을 때만)
function teenieHoverAttrs(name, form, note) {
	const imgs = getTeenieImg(form, name) || [];
	if (!imgs.length && !note) return '';
	const esc = s => String(s || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
	return ` data-tip-name="${esc(form || name)}" data-tip-imgs="${esc(JSON.stringify(imgs))}" data-tip-note="${esc(note)}"`;
}