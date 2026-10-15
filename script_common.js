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

$(function () {
	const $tip = $('<div id="teenie-tip"><img alt="" referrerpolicy="no-referrer"><div class="tip-name"></div><div class="tip-note"></div></div>').appendTo('body');

	function place(e) {
		const pad = 16, w = $tip.outerWidth(), h = $tip.outerHeight();
		let x = e.clientX + pad, y = e.clientY + pad;
		if (x + w > window.innerWidth - 8) x = e.clientX - w - pad;
		if (y + h > window.innerHeight - 8) y = e.clientY - h - pad;
		$tip.css({ left: Math.max(8, x), top: Math.max(8, y) });
	}

	$(document)
		.on('mouseenter', '.teenie-hover', function (e) {
			const img = $(this).attr('data-tip-img');
			const note = $(this).attr('data-tip-note');
			$tip.find('img').attr('src', img || '').toggle(!!img);
			$tip.find('.tip-name').text($(this).attr('data-tip-name') || '');
			$tip.find('.tip-note').text(note || '').toggle(!!note);
			$tip.show();
			place(e);
		})
		.on('mousemove', '.teenie-hover', place)
		.on('mouseleave', '.teenie-hover', function () { $tip.hide(); });
});