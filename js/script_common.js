$(document).ready(function () {
	const $toggleBtn = $('#dbNavToggle');
	const $navGroup = $('#dbNavGroup');

	if ($toggleBtn.length && $navGroup.length) {
		$toggleBtn.on('click', function () {
			$navGroup.toggleClass('is-open');

			// 아이콘 클래스 토글 (fa-bars ↔ fa-xmark)
			const $icon = $(this).find('i');
			if ($navGroup.hasClass('is-open')) {
				$icon.removeClass('fa-bars').addClass('fa-xmark');
			} else {
				$icon.removeClass('fa-xmark').addClass('fa-bars');
			}
		});
	}
});