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
		{ label: '1기 노멀', src: 'teenie_01_cube_royal_happy.webp' },
		{ label: '6기 프린세스', src: 'https://i.namu.wiki/i/LcV4YGsGM-UY84S1KYqsLMRczoEk7H8IlFtrZBTMSDGOQgasbNtdoYMXwzDHxVnZHHm8edAXFSlfhbaOcouyl_n1S5hhPEnIIaV9asLKSpL2R7_bSrS31rkuYN7e6obNMYb0F4svgoGHcffwhGqifA.webp' }
	],
	'키키핑': 'https://i.namu.wiki/i/pVWhTlOgUw5hjy4KV626fhSBhBwisvev4cNReWWMD-0KRi7FUSQcwzyTCEMmdBLTiZvqeVXtTKIa18ZKJX7Uznh_P1DCYjnSuFf4xxSTkWi3GDkEcERC2Oop5PuOoXRv1_ukhxXLbR7vR07r_cSSZQ.webp',
	'아잉핑': 'https://i.namu.wiki/i/HnAv2VN70tBE88xsICGfVHYD7sCpB9ioC7iKuNTLR9vI62G2KzdPGlybF4jX3yztp8JpqjGhMLusLrzEsiYHrLKUgNlVJSFjS2pzQgSFs_kXaViIMUhgVE9qCINpV1XZP0V_kHBW0e8JIya9MAxhFw.webp',
	'부끄핑': 'https://i.namu.wiki/i/MBEm4H4dMq_H2ClZEnEwjmNkaq_UIZFwzq-_d_DHDfVrct9SE9rnrdgpwSrGqBQYRutz-Bj5TqE87PnxnMnFSxM4ViPQt_mI0ei6R7hheAYPlk_UkZy2LJT6RpRKZtbqlag_R-MmxFpCTKxZuccixQ.webp',
	'부투핑': 'https://i.namu.wiki/i/A2sZeMaYnKp8chMvgbsOtMOtMi_j-EmKN5Rx482WqCgrqJ3up3tS2VECzCdNPKyJQez-MvbwS9HTOOhUCDY6NOJ1Z-eS-1hp2xXbK3BAOQiHcFAAAGelBEseQMw8eST8lVW5pqell2uBAy5Uas7yYQ.webp',
	'깜빡핑': 'https://i.namu.wiki/i/eC9xbhxz03wWNsMNz_OgjnxBCwRHjISIsmLGBrM6L4GdJ_fu8Z_RJJzSAz3Fxa1snSSVvvkkiqJfpSqHsgs56fP1knBa-IYgXxck8dB6AHv9-TCZeaJrRCx7mtWC8Xlzw-RJ2ALDRsMtyNsj2v_yNw.webp',
	'띠용핑': 'https://i.namu.wiki/i/2sLqkLDZMjakzneLuapK2tQlohLyc47NM8cQJqQ2kZuUQI1-xFHuXnPRHpt3EItC2el34hhnRJBv6z3mF77Ya_TC1NvlSQfoG4v7Rce0YuzViPeZUNs8hSbpSdqh7bSzIAmlqc_plKR5dOkznjt0jA.webp',
	'주르핑': 'https://i.namu.wiki/i/pfbL374ArLkTbmTqQlM0qC3WKj7PhZpOxN2GhUK73aBOS5j1JJaACCcZxXOYUeI-kJ8ZUn_-lg18ibM3MnsudcO5KxPStgFlwZNAMBUjNu46yYbVxbIwvTaEC629JM_3xeVDsetJI2GYeo_5ZxP2iQ.webp',
	'차나핑': 'https://i.namu.wiki/i/JAYdCzsbNAXWY7Ow9tDwGBiLpgX39wkCKmeStlyvym68dWR2KrsbIwfnnb4cqIRLnSKViXU4fiv0NTasj4WdBHkdZn6iXYSfk-Z5oA6wDRi4Vd9L1aGIx8qvNZC52VbqHIwFVcuJJPNT6-z54HVcbw.webp',
	'따라핑': 'https://i.namu.wiki/i/GpjbniPcDi4-XG-nVch8ebNvVjCLCNEMfIbLMX1UGckgGJoiVW1LkDEa5U2Hd_4SsUSLeUBkzQji1U8HAN9Xy3l8kfGyXE8JlqJzkZ9DM4bnPvV8X4jLdccy1ocaNbtqmrKMzEVJ4z1TtH-EFTmG3w.webp',
	'나르핑': 'https://i.namu.wiki/i/GnU4z9-05WplyNzpcSn1HWbDi6Tqm0tlXYwDHa08Ifxc7v5V6Hr7YOHkjTJlrit9DIhsHPrH8PHbA4LvzLGgVknE6aDos4t-5f-WYtrhh6KRak-MpydWM-4XsOxEOgyTG7joNaZ_lD0TzoKVIqz9RQ.webp',
	'무셔핑': 'https://i.namu.wiki/i/bjRzm0q8UI2JrWvuHKuMSNcft6jq7OAQwcmiqQTG33kG-NZ735aMuc2fftEu4hCmU7gR6GNqYhi4ptKl2MhrzPd6rPE5RIXbJ-o8KXx42CwePBpNlIGE4m2QD1LzncWeKKgOwpQaKwRaYi9c7Luj9g.webp',
	'투투핑': 'https://i.namu.wiki/i/d594wI9d1b6NRAnlxrAzUJQkfTVk1FwCsyOQm3fqBsSJTHJcIh4exPyxEFFrqLfa99ttPmFKRofp9ZcZmc2BS5mWkxoi2ewfjVSwV5usVHJYX0rOOlkZa_fV4LLyOZpvqIdaqSuprvIuMkXAM6qSjA.webp',
	'차캐핑': 'https://i.namu.wiki/i/oe-gvBnGH6KDFcBgnBieL1KLLrB44WuPZHyfIDLYk4y3_UDWWELLyqGpIbRgJnmYtfOOktk35oInW3CdFnFGsdvdwZesg8ZEUkLMNvRzYq8S3k18J-djP41VCkoXXSuokUezUQj3kl2QXJz3_lLJqw.webp',
	'떠벌핑': 'https://i.namu.wiki/i/UjlHxC2SIBJszxi1IjoZz5168aheSciBomrAumEgXiVZq60y21vQtoJN4mz8H5vuqp09dDd0QruhIfbqOsBWuQe4jEjNxfYb59ky-90cA1g9UB775yzXYB5cibtAGBzipC7krXk9qGWnNcvGZZjarQ.webp',
	'다조핑': 'https://i.namu.wiki/i/4jfjfpbqUmL3QTjC3G9mstEwJtBR6u57Ig8-9zssKuxGhH43GswEznf3VPLV2FcwsHQEfJO9wY03vueccKRycgQAKraoXx0Q0EREG7rZqzxY8cOjo2JGQpa_VTST2NZ4o-601HXCKX0ayChq1kkl_w.webp',
	'화나핑': 'https://i.namu.wiki/i/CiB5bLYrxGLS5ELNe-5tZ0QW_w3N3EbB3rjqogZ6VOH0NZrfJCMF8LcLBlBja8X3aPlxqmXRbj2ol4Zm88ugP-ph318IcTkIWHH24zm7XefH0VISoRCh68jlMeX_5vuqg4se3mK8JqOIvKyhyKBCAQ.webp',
	'시러핑': 'https://i.namu.wiki/i/5VgUntih2tvf-PpyAbdvkmPun-g43FuUB8irKfmSdXi625Qz16zRd-Snx22tvYHZSFN7Xdpny4_Vqp-pWD1QWfN7zuiOLp2tm-XlN0HgSDeoS_A1cw4Tv1bS1natswlsxmL-QxKb-EwE5Y20DUOKuQ.webp',
	'바네핑': 'https://i.namu.wiki/i/HQ5mRQ4rm9jOtN2DvVT_jaRdzJH7NH9ygfBhgxMkhVbCIQfjrRGh0BGRtf8USwVUw0MpeNCV3wsJv14UZE3fiVJX6sfN8M2xcBmDYUHqMJnzq7eYHLxE8Mx0jy0dp7iFwQgr5CLxFJ1caKL2vHH_LA.webp',
	'덜덜핑': 'https://i.namu.wiki/i/nkysaiQMYMuW7g7kUG9weZJWe8El3P6GRGnLU8JeAxt_Er29yzDRODNLfInQ0hlNOkz-E_qPCX1nNSUVF7Q7fYqzkQYn0dEJoBUqivGUDCswt3PEBYeR36gOTG5zuiccPPUx3BZlWtw0BbW2iQIH3Q.webp',
	'그림핑': 'https://i.namu.wiki/i/XdtxSmXd_6d7N-79aGNst9CZ0M85ijflDpEh9w3kSYM_i9sjpPC_8f-o5lAR8j_duVHEWxuetolDcLzq-cIKHaBljYjbj7FBWcTPLTESibl5IBb9ck5ssHIST29ilJ7njO4aYYf6xoPOhsMRIQhSiw.webp',
	'무거핑': 'https://i.namu.wiki/i/er-e52hFU68xrORsWOc9r4HzWOpAvGBExtG2d2AsBvn0rkmhzaftezt9DN8LbITm4L1TSfmszOP2aJPzpMToJmF5wwoIPP55Pf7RSNWqLce92iFddt1mKyAkaXxhVxC_ZHFCEh17gQu8wD0xBKxyVA.webp',
	'꺼꿀핑': 'https://i.namu.wiki/i/ANGMMRFznpHRu39l4A-Z6SLAGIIXWdqBsaI1X9J_XeryDjQ8wmEbfGca5Q4oy16C2KBbBXk8oHoYzVpBbDpil40qMdSNu09SPGIcydbJXSs8gsvLCEdNz5lRWLh307Z94mVkmKmvD1rOytTX4IGKxQ.webp',
	'씽씽핑': 'https://i.namu.wiki/i/iIk0sN-VAOI1JDKbLtWgIVQ0UsgFr_8FeG6uYdGs_OKT2W6m8BeJYq437L77Bzso3Y40iuULUk6tLp42q95MP-UedcxNzfv4omexNJ4erPxsLwBxB6ujShKGddRr88s75B2oJm02occBNg1naGWD4g.webp',
	'베베핑': 'https://i.namu.wiki/i/7hzFUeumLGKgHIu1BocpW8FGlKLS5nfdl1E_dD80daV8OKT3Xl1qEkV4GtciTAYPIWGK8zsaz3cQz0GyW5Y_IIW1wjon-DOMAaW9bjjEOyULZWJWaWztx8G_C8hG51UXcgQMiUDeY7t2TRpiSzxYEQ.webp',
	'코자핑': 'https://i.namu.wiki/i/WY7RdRI_4Fn_0WCfAZlabzhz6xCyqV-QCZMPVGDFCcatMn7G5f7X5fMhQYv12H_eHCIVrNcmBAIv3EpAb1ryysLnGcgO1Ng5FrjjEXRoWuLXd-yBQ_bhlCwqrdV2aLCRAhCnnHMmsM5XzJ_izeVpGA.webp',
	'딱풀핑': 'https://i.namu.wiki/i/hCAM4eWu-EgAzRtOXKmeYUDFKi5sqhueWkhO_jmJTU02i0PyPgjzJYdomQK6rFWLQ2mSJOtdGm9M05Am7m6mjOhkwF7nKahJAkQk2XI6aoHiq8K4gR_94SGNuCnPj5KnLGl_br-eVl5qW90kZiPtWg.webp',
	'모야핑': 'https://i.namu.wiki/i/Tu3KHF2uLhS6i8wnovDU-JCdlxX5Eccs9lHNLD8AXmbD0xycYRi98mHKEFtbrCkh72ejWw5IVhvDqnXYkFUEErouYJ7gwLnhlMmbskoOse2wZzukxEPeBAqxxa4xdDp2SMWv2nhhPEQD3h85JqwCVA.webp',
	'토이핑': 'https://i.namu.wiki/i/xF8PyXRLcghnPRy5rOP-_vFe56N7M59X1NvcANFQWXzUI1JDu5obPep62dPhok0Eo7ywQ2EzaQYziUoG80BZxeu14wbIQUJyH79m3PWK3tfBUIunAcGOPz_ZV4gO6udTAVY1IFn5sR8LcwOfWsFSkw.webp',
	'또까핑': 'https://i.namu.wiki/i/-HG-45uBsuXiJqdEitTZk8DZW9o8439vYTGjd95VR-qzH7GVZXDGgirZ8xb-R-OJQ3NviuFtETalDmyvzhKq6lL-UU881gRYIM1naAbRM4uz6OdtcdaWfrCgx7sC3QKoWKyFkhLT1gxn6e0J4sswOw.webp',
	'플라핑': 'https://i.namu.wiki/i/kVqftbWxsZQUFE_QV3-ruJOU43_X_CclMIsewIvypmEftC46CIV-1kV8vHGUznYNRTVEBOuW4C-NR6dADbr7daWZSZzv-e-q-yBLsC6XZpmHrpEfHNgyWOmfxKLnMSf2mp7qNVsHbujJ_hEIMnCnpg.webp',
	'노라핑': 'https://i.namu.wiki/i/TyiNyUPZqFcE86r1tY5rMi0zwNlesDiohOvWJc8R9Tl97ZhU8Klcj_ecGDTF_byMEd19yuvGkLGABdjmn8rVRl4pBhry__OKs1-lydJrqmoLwyXYuIoalaiCt7hes3wh-AGQqvRp1p0Pdwa84CRBNQ.webp',
	'노리핑': 'https://i.namu.wiki/i/7mJlgOAvqPcDarKumnZY2pm3kktofpE2Cyr2t104r0lpCB2c9jik9pvwKFgOOXwLrMjx47XH8YUE0iXU0xVLBI5hhPgD56HcObjFeeQK16c8u1NXVCnDLnB-LQnYpSLy3OLg3iet2ntDc3ABNsdqmw.webp',
	'아휴핑': 'https://i.namu.wiki/i/qmt9xIbizsBhcSsarux12hXqSI-HNEbIhRrprb8_phGm3CLwLw2QC7irj4qMCqz9nLe3lzEMsqBd-vfdTmsoIcacESWX8Tr1et__eP31iszJKDgHTNO9SpTa2R1XizebymgYirKoPQ4Tj4Mmke7b1g.webp',
	'똑똑핑': 'https://i.namu.wiki/i/YwFwlnWWIXhFSwd0OSwWI-mC8uFRpUtL63f5ut5liEsdHb3ZkidW0HbArn-EBeq-ZnvW3gKrTu3XZEFJSUK4bzyIWANkZZzk8ABiPmmCCYlEHt93OyIK4aOF_KCzhUJHwo5zUgMesd91l26akCl-gQ.webp',
	'꽁꽁핑': 'https://i.namu.wiki/i/k_sZEoF7MbLBpPNfbsJP0yeFyAxwaENsEqBLk1E2XXGzboarYnmMmifpnGV1NKUgVf1XwXNIamlcxGX2FA2H2fcp-6p8TOc7P360NQWNcs7o1c3r8Kfxpwx4ZVbbQQ8PLg4g19QELFqQwzwvieb_NA.webp',
	'찌릿핑': 'https://i.namu.wiki/i/IXwwuud3MmJ8mtSVCNHjqzv7CQeNe7RsdwL47Z-LkpVgX1vWNtBa5_YZ188--koCy6AzmBF2WOff9roVA0ottlt3Phod5vT5MUAt1En5Xgs_xPLgUl_rsxnX2SUbviLfPG-qy51PZNt_CT7lWsNnag.webp',
	'홀로핑': 'https://i.namu.wiki/i/dnl4iConP0qXIO5I__6k7NypbK1Tlq6WxYb8UW9_hFJMyTj5XZdpbfBw2KAc7VVMZtiTynNnTRLzAgpen8P_THeV68EleKDEbWJY17mwP9OY7g7m2-ef47gaFQxFYyr45h37wfslAfMtVqCAKoopYQ.webp',
	'앙대핑': 'https://i.namu.wiki/i/AYiNYlrkQdGTcu5CWwW0SbBSv3xnAUiGAWEZHE7-tsK9_DkYrecPExvjfmfRbVKSj4mLQ9wuby6cwGW6fBneW00Jmwd_2W3f-OAgQnHsApeVMNil6JnSPUsObdeYXCTWiAtT7CkINdoyNLMSmdQcZg.webp',
	'악동핑': 'https://i.namu.wiki/i/clgQoOcGpm7Jb9jNfk1zHVU4PTVetqBubU8_AezF-y6Vngd7yK7VWCRdeIb78PrzqzTGNkqcEPmOSrk0OlI8iNg9RIZq7_36IwZ5qypZTa8v6z2Wh5uRuDY_pI96E47-jluOHcoJzpGMXTTI3EplZQ.webp',
	
	// 2기 보석 티니핑
	'다이아 하츄핑': 'https://i.namu.wiki/i/Gq0Bcp-uyUSuFKamQbbs8442ic78CZsKcvtvN2mllJ_TvwN3D4idM4fgHzs-lxgBfWP0GcvExJp3WMKuRI8nXo52fH1nsL0VMng_r64d6zVBqVXCHsjTmsUUCY73y7bm2OLiwPiQFxWk_foiPHxcTA.webp',
	'조아핑': 'https://i.namu.wiki/i/KXJUDyDKWMs-47h9uqfgn7-xwnc23vews5fPMnNwy9qL6EgGqGHMJ3Ff0t5n-yVCneb4xCcSlXlZuIxej-8MUTWTziIyQgLJGbaL20ytLarIkeqpz8eSnaHjdmrMCzs0fuNYMXIRiDkp9KzWtQcLSw.webp',
	'방글핑': 'https://i.namu.wiki/i/FxhP7oYiuUPzKkgIW2SZtZeimHVbcokhSZ4gnwFrgNoAajvAzep9pQO_LKYa6tiZG7a-Jd1I4BPYH10qoGt3-Q5HpNv41-as8kLaZ5M9dm78CqTxDFXhlpFtMS3IBRCpMlINmIZRTa9pTcAH2bojfw.webp',
	'믿어핑': 'https://i.namu.wiki/i/ABkxi9YOIUwrSfavzT1nz2qipsgviWQuTBTEgAaogqkA9CjygYpiCZHvsYLrZ04kXvLbJX5i0LidJ6HgZzxUVpxWzslr_2LEOMRdD0gAwo0REMizXiqix0fJ8KQgl4AQ2wLyKyPajzN7vPdQUsCjsw.webp',
	'까르핑': 'https://i.namu.wiki/i/DktIrCuWGTgruI_RNO77guibXsSCzohOi3ynTmCbOWMpqG4C51wb3UUBi_UgSzwLG7t7fu0cW-wSHgyciPe8yQkQcc87AHAKrLYb0qYCwmq3tWiqGdET5kEwXXISY4hG67T-1ok-pqbr-scB2qXLng.webp',
	'아야핑': 'https://i.namu.wiki/i/o4M0bV2gkUfDcfUJXNEGaNQ8BJPiiilnyE66hhnOweYepLhNkxr7RUZmil-Ozs8vBjLs1yC5NLuY9YJRLm3pfQXcDMj0Qx9Gnhe_8JAwvb7Az0HFkAGjHWzMCmk_iSUWAookoRfokEGhHaY_QF-svg.webp',
	'소원핑': 'https://i.namu.wiki/i/86tOko1NcP1DUGv2IfjGxw07IbjIol08HwpPVAsP7xo9ju4o4KPeNHOc9tPZHfpPQ-Het3wxAd2M9DJ8IvZ2BrshSAJJK9WY4Px6owC2uzsMzrBiSjTqZRiwsnxpoZ4HhHq6TBOAkJLBI_2JJK2BlQ.webp',
	'토닥핑': 'https://i.namu.wiki/i/8QRPbQ2IObTFGKwnJR7MGGpmZOwYIWbxxj1JbeGd3HRn7Deu77KpYfS_5CjV7aAvgy0ePufdRIORuSDlaEePKSTXyjK3PEXCbTH-Ie16gi99ibx2oCkNOrD-f9m59MKjxgE9i2aGb41x_qbbBFe_SQ.webp',
	'쪼꼼핑': 'https://i.namu.wiki/i/a5WEs__5Ex1546C3xtXrEv-6NxcWvzDnGon4Z8dLl7xmnXQmAN0A6VIkfg3O8a3K2kC5pwud4n1SVRXXKhWvXR8K6hRhgplNcApqYCZ5BVsfLirCx04ApswFIm7q_xX2QMI_EiNtaf0ERdlWLcStaA.webp',
	'싹싹핑': 'https://i.namu.wiki/i/hSXIuWbVpgWS7M0JZyNMkt2yiRi3VZ8HI1q4ob_RSTKHpB4UGHUO5elFdVZD_8GkjfJPqA9OK3zaXb7Yt_b9RCXn1aTG1RA8y9a9YCQKFhQlcD1SvsJ-aoSW--I6ZhXS8-TIHr3oWsYbV--388q9Kg.webp',
	'맛나핑': 'https://i.namu.wiki/i/7uYzsS9-_imn0T4wEVIEbFZgYNZvp78002zv_kjDTiIRR-ZaT9w1Bwmykq4af_AMf7Pvni_8V0tEtsmNB5tkN520e1Ti2njdKvhfOqu_ODRPw6rXWtJu6fb87pnGiD3FBqaUEgAxrCugF78JMggktw.webp',
	'포근핑': 'https://i.namu.wiki/i/Ur7qEJuKps811w4DnbsHKM8mX53_wUIsIkra4GS8WTvni0K98jJuSV_LfOASa9X6U_AVKSAjMnzFen0S15MyXf55oXmei66aZpem_2u1YGd7DMCAzZkZjwTwm7X3FIpbV2IkhOQKcmbxZFoqSolbRg.webp',
	'메모핑': 'https://i.namu.wiki/i/ribnryGTcSfB5o_huAsynWuxhx1W-MR9gWPYO9sRFoQtrmos-uLjDyrhjAXYwRnie3ouKpMesED8EIJ62kWI9mP4HGm0AMPA-pIWQjIWQCGWuRbsGFwBIDdJdCBFB8oLO9Xv4oppkPq5sOItDW2Vkg.webp',
	'공쥬핑': 'https://i.namu.wiki/i/HCGwpW25tDBsrLgeZ2LMQU9wnLgt7pcAdFWHjIW8V2sWeqUKVNgWRrZn7zIXwEYLAtWl9PxtycxurLY27d7YDyDGoaIlOrBUw0Q6-FzSWOlu1TeBYeW0EZrvsn43Y0tpXuLwLYQlYBdNLZCo1Gu2DQ.webp',
	'짝짝핑': 'https://i.namu.wiki/i/lw_OImX2YhnxO5wE15io8I_HNa8UtlqiW9UK0ZDRFZMdvr-xgsU6yjPoHahHyJmJZw5lz9GCpaATfQFhf1JNsQo1NNCVD25edQHvkoIoLGkpmaHmL9slRRAumKlINQEuzEV-H28rANQSIa4bOkBq3w.webp',
	'주네핑': 'https://i.namu.wiki/i/REegDF7N8Lwo4MyY5sYCxh5JEr2oE23bpUArEGHpnmuExTvPsfmGo1nGU3KXU34kDjNFsTCA--9YRLpOqMZl4onQ8c3MrTXJHVLYU_lnURxkr1WoyIZhNinC1lWo8QJhEKbQEQUkR_ZFeKIKspuD9w.webp',
	'뚝딱핑': 'https://i.namu.wiki/i/MSB7sm1FRyPFP1es0jN_qBxJtkNI2Kgt32UQ9GewrpFZqHTGn7v--DzR6nIHBzfxPkP5P_hS864zKXB8BCYUaKP0oQ2FskJu_bkbAvOZed2ApJhkXzuIZt4Mwa3hUGaKjQgBDQ8Ucn4_l-4Ovo6akQ.webp',
	'발레핑': 'https://i.namu.wiki/i/gDE4SNac1c3cCLCghTtyzNuntflZ2X_9ykSqIPcKfnHaeNGELwz13zyu2evlOzyFUeNEP68kam2mxUgCM_Ci4cNKmJIgJwaiHHUTVdd0RSvywoay6cM6LL6yt5vzK2W1Ugy5RmE9TQih0vUnqRgWqw.webp',
	'원더핑': 'https://i.namu.wiki/i/ldESuA7LOY8EjnZhjYdNdHzzQ9_rMp227LSnnnjezKfG2sHu-qlw0eNHMY4j2RfryGxaM9NDhnYz3ITMZ6BiYAllR0NoI0vHnVNWPMEgu09Y_lhosxx_SDtxATAW5DlkL8brmFJjvhVHy4xOvWHu4g.webp',
	'가면핑': 'https://i.namu.wiki/i/n2bFUo3wlC_03E8sPU-IEcZK3P4DA_c9cBISjP5m-3ejAWqt-J0wU-mVNR82RdV9IH0K0L9XmU054Cvj2xRlqyg-GTMkVta7P9QjWhV3bgHNBIO638oWZ2J7T5JcyiKrlWfsx1hYsf0eVHj3gTNZeA.webp',
	'다해핑': [
		{ label: '2기 채형 비녀', src: 'https://i.namu.wiki/i/kAzTAER7FlMaJAIsPXpnv1f-yNdkjECIiftUmmyKJZBGiESQ7hcw968yzLfwVR-MJqFkGZDySFNCdkkHx60wOB5tDn1YiCsX7wIDXjoh3h1ATrM9bnh3JVet_qbAuEui0gbXZbaghL0rgzoF13iWBg.webp' },
		{ label: '3기 잠형 비녀', src: 'https://i.namu.wiki/i/Kagpgigy_Ur95MWVfV02lddqIuNQgn04skm3xoHT7sxYwJ1IudW5vAWIFQfJL0Xa6ryiggBvdIWFAeg9veOp15dinyt6XdJMsMJXD8BEeW1Z4dRRkNFl7-BlANLEGD2uqy4ojf1jjFZYoVLO9HrgyA.webp' }
	],

	// 3기 열쇠 티니핑
	'플로라 하츄핑': 'https://i.namu.wiki/i/kG8RvCCei3JoR9h_JJ_8klBGKIEgfBg1HnK0UPZUSwSTGFVbB_3qcb640ZafDrs4xmN2JtTv-KcHHg8aBKsm-rLhZuCjBLLgyxV8gPS1oAshi7HMQVw2DxJWfdD-JA7vWQ0c4KvaiaT9krw003ruvg.webp',
	'꾸래핑': 'https://i.namu.wiki/i/aiDzY-bchv_4zNdP5CD-P0v8DdqH6TihztHPq4HaD19P4pkuFMj6dMYkYtkjQuaJxTjc3yztxTRlM8x13Oom_0ym_1h8nptpyECXGxjz3tvkfKL_CKWzs_Wa4WyxVaO-l1_pVAMojYL_LEAw6CYb0w.webp',
	'나나핑': 'https://i.namu.wiki/i/NVDQcFX89bSpy8r_68x9fxlWDcOCqzFJBJokI9ERMIq5W-djn_i79etOlnkiQtu8gsYNzAT59g5YK9a4Ndi6Pc-Zui5p0Toh_JU5WE_xmbxpIZiCk3E_ylo9UeaRbIAjiBQhXRUgJuaY-2XJWyLaAw.webp',
	'솔찌핑': 'https://i.namu.wiki/i/pD99iCOI5x4gEauTPTZhEDIYMoNaVIzbdhEtA7XfAGtw3mltFXytXi_pAIRPupjukXGGq28VIjHBaI9SbjCZdiC4_QnfWMQBLL90UaSQ4UIxZKFGT7yxfXv2bYW6CCDrghb1KnfHLYjIxdNEhjT6qQ.webp',
	'행운핑': 'https://i.namu.wiki/i/X_jlKJjfbdB-_64GbMtdDnFwE2d75IUhRZMRkhZq9aMiDY-ZgpuGAnLTegR0zx_LOg8eb9ESp0jC9tWM-5DJ6jGwDLVTCUKxjXv-rkwTRkh6RPGyCK0uZ_A3DtT_RApiQmyJoYB7pdSlj9SLwB9I2A.webp',
	'빨리핑': 'https://i.namu.wiki/i/ith8eD6JNs1nVXatI_6YfhVEbpPeFVLqTOJZFUwLw2fn87XFGDHZkbNpYfxbwW8kCQfi6Mi20Fr2XZ0ZJSgOg4eBCskBNi7E_wVkwPSI3h36iP_eZz4WrWiI5gDicB2iHvOVWpT8qudTKkJbXtjjFA.webp',
	'얌얌핑': 'https://i.namu.wiki/i/i1I9sUVWQmHqc_Zmv5dYWs6_bVFX_fegCpZitqI5OPjmQP7dGm0EJMIdB_dczKmVMKW8WiUiCa83vBIGI0YWt7k6BSOeZHDUbInEvWMTMSj26GRxjNDS14lZMco5lcpaF_itMdtzMLQcQLQIkQd9AA.webp',
	'뜨거핑': 'https://i.namu.wiki/i/GiIEfYWecHlLgIR-9snSqzH_-eVKhETVr16CoYJUR552EQQmEkdQbtX-b1ZrPjJ41H9DHllDhpw2CfRMfUxuLRZX5_FzaIh-B2j20u4rzqDDe2S2HcVu6rEKUuQpjQRqIc8jlKmZT4K9-UnttVXTOQ.webp',
	'삐뽀핑': 'https://i.namu.wiki/i/RyjTgaStoTiUYfCDXOduus85RWDrLOQOSuTaJt8FNvJTyzDBF2280Ry97xnW8bDlhkscaSG7eeO1Kj0kusgiJ_uwjOfsCXSEmlhWxCMtJTiVqJ4AH1CqEcmi93yklGjCDd0T709mS4n1yNenuYVa5w.webp',
	'힘내핑': 'https://i.namu.wiki/i/K496K3fgTmpB4WQue7sP4-OFaLViuNp4cuGBrNzL0QiS1M4amg-tmXpd8NIEZLpQWHRYz1hKgfeSAfc5sA93m-xtiUd7aPNtj2Mwnd5446w7XDM00PvlBC3FQ4PI_p_i6xVHNfG-8Z56YuTeSfOZzg.webp',
	'고쳐핑': 'https://i.namu.wiki/i/DlKVxInkxrO4pznagrNtlnE0OAGBbgiGQGzBdam-J3cf-6bbCFI0AXw-q2yd_qW2TKs6JK25HoSkJPmPF2cw0zFSd2jR_1HgsKzbPrhXzKcaGHxKuTX4LwjGQF4UngaSxYfRRBY47dcXOFUdpeXv0Q.webp',
	'아라핑': 'https://i.namu.wiki/i/QlnlgRELaY-xrTVuywq_ZVNqxDOM35CCInnqHo-zwstEd0McmXRcHwIYGVQwPNQtYmoUS4MFBq8bzVpC2HR7wvGusL-Y5RVAmh0n8_RdShDJLjoybInLSWhq2X_ykDVQFb9iC0kL1vJFA_QV9cbD1w.webp',
	'패션핑': 'https://i.namu.wiki/i/AZXOofxfnUcB-0mT8Lq_JbruWTg1PSTpoBkKuEZ4N8wP1q8kcSV2IYQVvUwrOc7RV-Mcf5NHjKGZSF7hiK7F-ykAqSa1i7E6Ucwie3Zu4swunr3OuexhBCb1a5XzxzHkC2pFM5igACVDI-bXM6ilBw.webp',
	'꼼딱핑': 'https://i.namu.wiki/i/fNdR-3zaxdl9aBvOFhl061OOYqqMB52-xfKWxuSuvgkM4dxzqU_h9lgwgfDPhQSi8epFI_zdtpXKI2NArMRtfBEFW8rkpv6A-fw2H7tpACKZx-85DnrEkxlKGXwpfrAeeA2vb0ZaIHkb_cP7H6jRMw.webp',
	'퐁당핑': 'https://i.namu.wiki/i/GPbOByi5hzKm5jokiP2nT8_F2UbErUivbZaJXZlcyAoiYqorhCl_GVKLhUO33NUbAdg6d0YFUqihmiVD_odVlc7VhJ28iblxkhdJz-RWjVfxwqNCTV3d08LcUaszHAoFVCrrrMQAW4d5w7DuxLFevA.webp',
	'파티핑': 'https://i.namu.wiki/i/FHYL9T25614fm6YassBipnBGZukliu_jIPzWcGc8Le6GMOIxmpa4wcxFoMnEsMT_iXo-nxKaJI-bEmh6fP3L897IlM_wvglaoqt-tOBTaayBQKNaka2SsYUGvhS0fO-ig9RdQlEZEw3YNfrejCT4cg.webp',
	'꾸며핑': 'https://i.namu.wiki/i/IoPzgWOark-Yv52OAUF7_x4UVCxZBn90KZH66NeI6W2bhWajEQrmLtDzFPKTSnjAuIcRU8wjbnpvj5wfyBnxuOJ7ccxhUvEi1HsnxPi3_sBFrxIz9F14xgoLOMKtdHkcYWwt_Jj-xZWvNT9k-kEA_g.webp',
	'삐짐핑': 'https://i.namu.wiki/i/3I43hg-kLJ78thgWjlOCJI5Wc4I7huQM9OThC5FumeEAh-ln2z1q5zj2AJ4A94EP6J-IZyKRoWWByaoa-bqyh4TA-9ylXwEKgiuv7Cqw9aBtgx4i21hO7NocB6361CqLT0ZR1l_1Kw51mWE0vX2j4Q.webp',
	'아아핑': 'https://i.namu.wiki/i/O9ZaKPScYzpn9YyGXeW-4HgiPVLyq-5x9nVJWJe7Yqt30nD_6Awt6i3Kec4SuKig2OjrFhLPvJekZWVZQWGsEGKFtXTYwyRtSlE5--asnMY0A6FkGGIli2DtFCVnrTegfhv9bZp_0u2ivIgP2HXJkw.webp',
	'빙글핑': 'https://i.namu.wiki/i/TJ9Fg5Bph0kGV9CngU8Wl0CC0ENvizlz-Ph2-v16ZSEeT9hwIgqPeZ541zg6p6fGXKoOXBfYVPtM2F_KzY6evo1g3gcXXWr93CD8L6HFM5kCNSJnylOFqqHsYqh1DLxWUylVlBXwdu6_NfBpz_QnVA.webp',
	'간호핑': 'https://i.namu.wiki/i/_J7-ax0vtPMd3xXJcDVUcDtF82xA6z2H6RG2Gd-GqxtcrtaAVsLMzVgZZwxXNGp0uhbAHzvZawtoaXDYrpUTuaiZwFcO-k_QsS8IcBN9gH2A0i733duHe0S-xFjC49R5s-ulRh6pYYXlzcCMZ6uElg.webp',
	
	// 4기 디저트 티니핑
	'베리 하츄핑': 'https://i.namu.wiki/i/tFBa4fV0mq-HCxXMuVJXPMpMHiYVRA-eZd7CLXYZJwh74guPp1D2zRx3XNVVOL4aWgu77HpTdqPT2aUSIaJlZb7A4ZI9Lz3EdGHyucpsVBzpB7U0Z_SfiJiHIx2ZALWlDMTXvcqM-b0k9nDkwrc6Tw.webp',
	'샤샤핑': 'https://i.namu.wiki/i/o8CWm_cfJxJHvLbx6VsolaJVZLfxK_R9ZOMsiP8ILe4CIrGZfMEfvlYv_XD4y3Bp4bvlgtUsS8WZNZNUMkAXHb53EAjC1inVD7QVtbA_2a5NUhggZQeDXZQo4GR_RuQOnK1iglDwLHLSwht2u834mA.webp',
	'포실핑': [
		{ label: '4기 노멀', src: 'https://i.namu.wiki/i/91yYDnNPGO8gSR4GU2H7wytYCqvR-r5Yu5c6Tvr4fzMP0zUgXoAIezKBDjVbbpE6LbaH193jEh1YDpM496X6duJdoe3jb-BygIxBRQyKch7OHfwjGCn11rkA5H5_ihnATXWyb-gY3QinvX4XEQP9QA.webp' },
		{ label: '6기 프린세스', src: 'https://i.namu.wiki/i/dI4xTb6fk_-LM9Uq3ChQzKxL_TZ-Z5Phh66ysqzf0hi-fQoJ5bCvA-HTST2QSYKhd-s5DDlUqPbN7l_Z2NFP1PI5GutuwDZmwNlGqR2dgepPUjPXcBvVH-9YIPXpdCfTOifcmD-kM7xmrMSV6sI7ag.webp' }
	],
	'말랑핑': 'https://i.namu.wiki/i/6VQMUDP5qzoLTmhczZaESQ2A2y_jpR5Tg-SwmixFzfNfdetmwFtDLcSHLL_ghyFIuApxZY28g5Y-d0fIOONcCHYvt3VnLVF1NWfmhHCEyKf9p-yhTGfZJ3yBz7MCfp9ZqJI9ERzLpGcwJPF8dHvqsQ.webp',
	'새콤핑': 'https://i.namu.wiki/i/DxigyxK7P4HNJ4ZY9Dr8v1Wd0KshI48xH-05yAK0T3M8gRlNh0lEDReggdSE2oQ43G6IQtjinc7H0ezjNbKa_D6aocjwEgYeyE4n2NB3aT1FIbfbi_EnCth_txZfPS5DzQSfDi-wme7QAitX0tfxJA.webp',
	'달콤핑': 'https://i.namu.wiki/i/ez4cENw8P_3x6MXGjcgLPcZWBaK-ib68Azbdsg-itRgLcA7qf7T5CtsAs2HN8-x_OXoXd23ZfvzasQoOGx-KyKC2HkWLPi7LaehF7wpgGroGfNDKZIZsjM5F2vWr7ubIOZ-MGppYQI0A-tpHqTxVAA.webp',
	'캔디핑': 'https://i.namu.wiki/i/6Tx-I-eR0OtGbEiX9XGb2a5oQfn32Z7D3ZusWXi5u8aaxuR9PzPMksNNVSF9cax3prxmsht-QZkCTotl6pyCXmQ69ja6l9oqEuzN7Mbt7U-nVwMCGioVogE3NmV-kxTAsCB0WRpIAlvCR3sAElWDow.webp',
	'머랭핑': 'https://i.namu.wiki/i/tgTA4J4sv6Q8EWvfedOHjtZQQ79IlFeZXWlrPcl-jwa6rsCymhQfQPWGarPHcJYUbfTxxCkH8zcfFBTucSXjmbFkOkYi2iqBTGHB92euU5eGLyUeRum8UoUqeeX8F1FyxqkHP0QXQS0RCnpVjMEHpg.webp',
	'샌드핑': 'https://i.namu.wiki/i/t4xkHsX3G7fkzlqY6FvggVEEUrSAM4B8IkiOs28sgghipud3idLBN9gSHXDYY1WCPz9iDH4ap2_1rOQHX8BoYTiSS_z9ZZ5rFykLkl3hmklmCr5qGK7uJoa498dvPYXXNuHBrFELXv1WviIQBrQD6Q.webp',
	'또너핑': 'https://i.namu.wiki/i/1h5UZtfRWi0JvQMgbfTjC9o6lIqg4bHKFC0ElAG40QD10kYPQLwdxXuxwbhZmYDA6Fa411cyFQ7j3-vqwui1sVRXvoL4VGrdH99CrqCgIH049Kn_DRfZlkfQjTEJRYX3IbLhROPHR2nbwg5x2MBPKA.webp',
	'와플핑': 'https://i.namu.wiki/i/F2DB37K4g4DFOizNHegaGJD-jkaOMkuZlOrbGF_SQwNGxS1EpeZJzQ7tFebcSAvLmexxcxs7Wl_LOyD_yrLUeaTFDfCxQMYgavnMeK-WG5q9uiuj8KretP7E_laexagtSrtka_bG2qq1xN4TeMsNJQ.webp',
	'롤리핑': 'https://i.namu.wiki/i/C6W2n0YERaiPjbDGbUGBjSc2LgsSo1xlmYqve05LegTZqfCdpKzka_M236jkoPL2C5Wf5q3N8G7_iJ7uSSc7gMXqsj1hrB2E87c1xGtagLSRqg1FNkXCPqb41rX2KcrtSinTD-PRKKhms1ju4wzerw.webp',
	'마카핑': 'https://i.namu.wiki/i/KzDKLjPKXvNRc6dWKUCZaqjHFHkBrvKv-0dtrTtQ7LhC1S3YqubRTtkxxfF3AkvREmnPoabU33IXOII_7GWsjGE4RgOOaO4P92UfGtKBXpH3HzvBhOLb1L1Vv2joAWa304dXJzDTmHanJjV5gMMwAA.webp',
	'핫케핑': 'https://i.namu.wiki/i/FcgUsQkQ5K4NhVo4JLJ-ToYsHj4TzkxxD19ryxzZ0vhbg9TICX3yYr7dhP7B35orFsvGVkTuiFAQiwavjNITXIiMD_DqrF61it_CZiSmiGHZ9gYfg9WuwK-2p1rw-Q-NRm_0GHYavxk06YQll6wQTg.webp',
	'커핑': 'https://i.namu.wiki/i/QyeDT2q9_ZHYHNdxjBrfhVqviqA53052AJg09Y9xT0fh98qw65n9faUBgVOGfEN-0IlU5GYCd61ZdYcx8XXQJRHzD0nB575oB_QSL07E-TjpPTwTSgN9ozSnj0qiu2OcRyY3mztMIinj9OzlzoueNA.webp',
	'머핑': 'https://i.namu.wiki/i/c0RBi_DlpSTVVMONgYhoOyZULj3j8rpe4nlNwvvCz0BOtfVOY-pko4q-CXBemsjOrKEeqj6bm6obe8SmObDulSxW5hzEYzXl4JI2tV0Q4hZmGlhVaPqv0ziXdYJsZByxthgfo6N0p9nXXpWIZwECWw.webp',
	'요거핑': 'https://i.namu.wiki/i/ymIDwrTF7Omr6-qxctZu7uO3YLvk5qnqjCYGA3dmzcvUdm9zZC9nT--icYyyXwIxZhaD_V2NrHVomwz_FrCOJaL6eVK2oGMego3J4zauOAAIgUeYp6zsTQz9xy6h0efBbESo6GgWhQve_ClQSNTC2w.webp',
	'눈꽃핑': 'https://i.namu.wiki/i/Ya9o8AkDJ6wGnzyVeCcWBZzZ8ckLTFECVHZB2qmHOHDNO0Jg6U2ZD4AAN5g3lFQhQKD3uaW2VFKCymroHT4YNGFx2L79BPQ6XoyewyBLZzd5VP5-c9nwPsgadXYaftnJqhKqiVbSxlyBTSPZYc2rZA.webp',
	'푸딩핑': 'https://i.namu.wiki/i/SluXVNsmwipM3esk5T1vP8ZbTOrxb6TuCIB9c2I4dVuzFUph5_5qbIXO3Qsc9nxSPSv-rP9j_RSQUytqpfiEJGtrTB9qNIqVEDUQFcqO1fxduGN2e8BCLJOOjxlS7Oy2xjySw80q-1Eqg-51FR6kBw.webp',
	'멜로핑': 'https://i.namu.wiki/i/QcDd10kj5lkBz19msQdDWMwsDyAnlTtnY8_s8Bl64R4GxO2VZgjfWY2dtoIfIuslXeSES6iPT5zcYzsCjKUn6plrDo6LjbzhkJBdJmuHaM1mwitdPX-6tIONKgNFp1RO7_999Hj4kMWcCKgiqUAjhg.webp',
	'쪼꼬핑': 'https://i.namu.wiki/i/54ZaAhVMyWq7q-inTbShIg5OCJKhoO6QE3yUczBoNWfcyNIJi0vNSLeiHoAYIlWkO9Luz49KPCGsKOud97fgzvEmX6O5CP6WmxrfegrrPzDSfoHPF4F3uTEPLw85-fdMtErFrn-OegKyPG-THhr5Pg.webp',
	'뿌뿌핑': [
		{ label: '데일리', src: 'https://i.namu.wiki/i/mfPaeKOtEUdfnfH71gm9pfyMT_eW1jr-gqdHAaN6lgH8SFGpmAW_BFB9hEhJ8gAP9Q7EcxdIB0lsqhT84xrmsrmH6jA11RoSyBUZKrLwwS4XZIu4KfcSawxUAE5rm2qyw_qHLHv1vfTWDEr4B8Im7w.webp' },
		{ label: '각성', src: 'https://i.namu.wiki/i/BcUSWUpvsF-RL_CojhO4vGEnjfumuQGeyVBeQpdwf-flFE0hT_D6AohC_OdB1V4A9xLHDZtmu8I27E8wtV4L8Q8h_d8kJnV0jiReYlNBmVP1Nrtgd3heHKkbOMZqoVoUm5Cbo3Pdcc8wJZDO-UOsFg.webp' }
	],

	// 5기 스타 티니핑
	'스타 하츄핑': 'https://i.namu.wiki/i/Na2w87fCY-RBCSaMqNF0WeKO_gHgvamlUnIK6C0ZX20AY3098_3UOOiyU1DNhxgobEESeqD_HxNADgqwG5ZxcCSBTWC-lxHzbIYX6lO5lSpMIGIT6_eWePXwZfKMumYCaeSUKQ5TkqT2z7ZvsvCkOA.webp',
	'빛나핑': 'https://i.namu.wiki/i/L2AYtS3GwgD_8_3nGfmOJbs3_C6R9kEUGr1j34k3t5OhGiQRSlWJiBAICgrH7ypmtI3x78j8SMVDNRsIgvvgrGWXdTSLuvdfW-J8WZU2GG_neFOG5nsp3cKlo4RVAmaS-sgei0SF8HuivD-iHSEViA.webp',
	'초롱핑': 'https://i.namu.wiki/i/tnBUC-dyamp4Ge4sH3_13Ie98vTrvbm68hexH-F7TqNr7lPEJfiSMddHkbjN3B96A4x6parRooPX7Lgj1vAOHg_H3IzCOFJZC5jrJh0xCf2HMgmde26VZYLwWn718BbQuzdn8zZMOmAoh-BsD9vz0A.webp',
	'빤짝핑': 'https://i.namu.wiki/i/qQY78DaDyjQ1V8Iq_6xBPTGJRzWfpCwGOy1-tA1dZTV6DGtIKjKoK8YX_m1_2K_OR93v3mSwzv9nd9FA_jV8huxdWzpkQg_fA9-F67wvQx6DqYQ_xMGOfN59MElX7e0i35FyW25fnHm8ls6L9HJGIQ.webp',
	'왕자핑': 'https://i.namu.wiki/i/SQ29tWYtjADmTlfKZb69-Kd3t4eshMR3FLuR9svJlxivqsB_nlRHIn8CbSvif4DT7HIckVB_F6pLTt_bLC1yxwqnhQ-BbSRX_-vO-WtQUjgAooXQ2NdwPQy-aTavgbGxbkdKntv-xgH2GF_OCBvBOw.webp',
	'오로라핑': 'https://i.namu.wiki/i/70Uxe8oE000dipBQOcs0efyVOwqX2paMvwVh3aE70fxHEs7ISM6C1A0HVW13S5ZPMzTeBw_zArnAlAzcDU1CijUBhgCAeG7TvS8yn77jTrl5_ORtpY6R0jOkzSEjfpDLoStpNV9nBdpySbih_hcVlw.webp',
	'깡총핑': 'https://i.namu.wiki/i/iXIaYfwyhfTCA1uOepJ_GKD0ksEKfG2Dx-qM1OD8qazABsHtkmQQSH3CUrQxWG3lSQ-OgsuEOuJEt_z4CrU61cOs19ESUgL3QsIlYk0u1K0vAS6I4c05OnO4HmY_AC6oLk7MJ1Z2N3MJN7_OLkZe_A.webp',
	'훌라핑': 'https://i.namu.wiki/i/rLkKn3SEAi-axrCMFd-8sXBwcbwrlDWlmCkL9lTu62JhkOraCAu___EPR3XMUyxpr3eb2ws08JZw1CUG9vbDFbmrmD4kLf3aG2SS20894mTHbJ_4fL0h3lOxPiXQ3DWXpt2W1Gt12LenxksUPtb51Q.webp',
	'나눔핑': 'https://i.namu.wiki/i/35DDQ7EavsiSUvtj0EA60l1QfjKWoefNCsY3dWyZHhfTQ64ww-7c4IuRyMwU8QrTszn65fOUgW1M0O7Pg6nTJMCcIbOpltZ0YcWGsB2FSwKqbz0P7VhBBsMU8Lyb4SJFlofQYTU1jF9RpNBiSQgsjw.webp',
	'딩동핑': 'https://i.namu.wiki/i/ZY6_7pPcOn-fj9kNryh5J02KnLAIjMckdLt2CltPKSwoPF1BADw5EnxP5F-7L8mTas5BE7QfzeSRexiY4LJ2BcLUg_nbCSrEpvgsvyQeUF0rrjIZXSPRuXan4Sc2tqHm2V6b_nGav5ikpOERhD9juA.webp',
	'나그네핑': 'https://i.namu.wiki/i/eGNIgB87LyrXLipPlxrttpfND5K7Rne2CGgDD6HzQ5NqwGCRXRXjtlHzWsSFI-X9C6HHKhoWrjt2_V26JaWanULrmr6T2hkY6TFeUfuwNiXmzX4BAfclJ2lC2JinvUjyeDV0jTHTyDeZj4Hx0CSXoQ.webp',
	'고고핑': 'https://i.namu.wiki/i/dMQi5WGIVP8n5PV4NJw2PMXVw6JrftoC8Q6JVb38uQHDz_-1fZONfiHeIWL0G5Oq6k2WOwLuoZmB3DEOeNpvap5UAXCtkjIB1Wv_bC_cRolsw_nu2duKHgju_tiulIlloRyBayC26Dqu2dx8FIA_vg.webp',
	'뿌쵸핑': 'https://i.namu.wiki/i/a5XSJIfHqKjFZe50BSsC7PR4tQrS3aMLFZtBH5BanZCBv0OZra3WgeL7ecHwdQuUlU9azEOm0zhauXhaDJafzk-2p9368GIEE60ivtHRCUVNhWxupcjRpZDAZvhXdS5TE2KGgnLyRlz1HQV8QHKZ8A.webp',
	'고마핑': 'https://i.namu.wiki/i/Jvb8Pw727JJJepYwnDEpEVgRYciRYiUjxnfklqs2WDCGCr_-R8tpR73vsTjKm27Qa56Ca_RlMBsEQL4qd9MbiheHEmVT4MXvn0ivuA7E1v3sAcZtYvUQN8Vs_Cc6Uf0hcZltEFUmmv1auo093WZdWQ.webp',
	'아롱핑': 'https://i.namu.wiki/i/DqDi4DpxKXApBaAo6Cv2dr1UH5qmNLweaKpz-pk9TLomqJjQioqwDJbuIUwSO2N3J01P8vJFnGdGRm72SmfYJVOx_V6L3czyF8GmCF4sZO1NmJeQ4m6S8SLHfNkoNLyMebfT6120LJi2XA-rHZ6Kyw.webp',
	'다롱핑': 'https://i.namu.wiki/i/j5xfZ_-n5mnXRUBedid_2oIMbA5XHMfoaDM3323diuApGZ0J2XdeJMRhHXMc0N6a5d_3OlrsVUBCz2xtryYtcJ3CMXchubPjezxNbo-WTgzZZkjPr3wMSyyUhCjSU8ECR0Vo1lXSatR2U-3U507iiA.webp',
	'뽀송핑': 'https://i.namu.wiki/i/bdHePiGi98B0csz7aExMYjkovKnA1DkRNSSSw9bMmDYg0UHmfqcFEa-IZoeMWV0McCrEDuBruK7_1ERiLIsx_l6kuVsluU8D1GRXSkxlCt9bOL64Gl3VGjHsm9snw_F6jA5jgy83c4t-rMspl6hpgQ.webp',
	'유리핑': 'https://i.namu.wiki/i/TF1DWGFg-IEtcWCF9h4H5y9Bz9cC83AAkbB04x4_eF09PDCy96pkeJ2YrUFLiK3dzOCODS5Nsac_El0FZt2lotHa0-8rcZnFz_w12evOgd9TWHkUHmehO5LERekWH1Bjm7qHKJdd3aiqYdEXDbrEBw.webp',
	'함께핑': 'https://i.namu.wiki/i/wX_acGV9VUxm3hWQI7HuJ-oUyy0KPaHjjExe7ceA1639FVye0jRydsQyJQE8H_mWsYL7Iq6qBEUanuwBR7LFvhskBN8no7Y_9H1lddHEguFgw6bQvkawLZC0bNVv3q1EWnAwd36jN28JSdO9pPmnKA.webp',
	'댄스핑': 'https://i.namu.wiki/i/_Vjct4q3TNyvRovWHC9NQpRL44lHOdQQu86BnvSJmbxyRBx-B1Bt46fY0dfUFOgdF_OHrVmTpwxhHOoPO5oofOx_TRB39-kPqULJZzWTysiZ86mVBoMEAcwgiFTCnfJvcEjIz5RgldGc1c2qg9iA5g.webp',
	'여우핑': 'https://i.namu.wiki/i/jGM8tFkLEY-thUei33FzAHJ0fNabPxAkPVbMadsuh-6hyKtU3KaciR5y_s2z7M2UxXBFBC--6n0bdUY3sIkzxONoE-mfvnWshKf8mEOY0m4ArEz5fQtpDCxCpykobhNTrQkB7CRzR6YpMFt-4W38Cw.webp',
	'루루핑': 'https://i.namu.wiki/i/QMcOojS_3J1-5oZ1uOA9FZivtm2ek-3dIc6czRN02F_tlfQol8Vy66y4KJLafgbSO3WG0OYhFzBXjPi32HPR-OvObiFy0qR0DVmhIeMFHu6d77BoyieKuqcnZbjuNC6fuMJgmf0x7SYzadbbIrKy3w.webp',
	'몰래핑': 'https://i.namu.wiki/i/TKUZJFLUsj95rySDjKq49Q-4_2xKvWf3wb__UzlNgS780b_SF3XBn0ep5xC7fcBCNIV7yAyvlTtWKFkTFE3mdmLbwaOuE4vQeOYHeXhsTT_jm-hUPIrGcJpaoY_11dWTLyS1BYVSjJTFg4kG37XwpA.webp',
	'뽀뽀핑': 'https://i.namu.wiki/i/9bvC9YnjKZSRzW37wwh4y3edSwOz_fA2HHNsjXSGpt6JESNpO4anmbfVDSrtjm1_Dx0o8VgxZu42qnIXk6ibpOlPMy-ZfIRRnYzKDyWL6aYdMe3Z0TFMsrlXdsIKjuD1o3f4hPqILFbWFyBUinnVkA.webp',
	'로미핑': 'https://i.namu.wiki/i/IrqrgFj73QhhXChida7sTkb9Tt6y1yGtDCOfqKVVk1S1GCdD9MKz8PXf2EiPf2akgko2pmCIlgrVsMNVTVvQL7NVOW2SOvyxvLN1y2JwlKwF21H79VFhpBTu9WqdpGFSI4vKr4RKbnTqLvFaX85X5g.webp',

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