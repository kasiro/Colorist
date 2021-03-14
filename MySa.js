var fs = require('fs');
document.querySelector('.icon_button_wrap2').onclick = () => {
	setTimeout(() => {
		// document.querySelector('.im_popover.im_popover_bg.im_main_menu > div:nth-of-type(2)').onclick = () => {
		// 	setTimeout(() => {
		// 		function addMenuSettingsItem(icon = 'tab_general', text, ItemClick) {
		// 			var left = document.querySelector('.settings_tabs')
		// 			var punct = document.createElement('div')
		// 			punct.classList.add('mdc-ripple-surface')
		// 			punct.classList.add('mdc-ripple-upgraded')
		// 			punct.classList.add('settings_tab')
		// 			punct.classList.add(icon)
		// 			punct.innerHTML = `<div class="settings_tab_icon"></div><div class="settings_tab_text --text-overflow">${text}</div>`;
		// 			global.punct = punct;
		// 			global.left = left;
		// 			global.text = text;
		// 			punct.onclick = () => {
		// 				global.punct;
		// 				global.left;
		// 				global.text = text;
		// 				var els = left.children;
		// 				var elsCount = left.childElementCount;
		// 				for (let index = 0; index < elsCount - 1; index++) {
		// 					let e = els[index];
		// 					e.classList.remove('is_selected')
		// 				}
		// 				punct.classList.add('is_selected')
		// 				ItemClick(text)
		// 			};
		// 			var els = left.children;
		// 			var elsCount = left.childElementCount;
		// 			for (let index = 0; index < elsCount; index++) {
		// 				let e = els[index];
		// 				e.onclick = () => {
		// 					global.punct;
		// 					punct.classList.remove('is_selected')
		// 				};
		// 			}
		// 			left.appendChild(punct)
		// 		}
		// 		addMenuSettingsItem('tab_interface', 'Vk Edited', (itemText) => {
		// 			document.querySelector('.settings_right_panel').innerHTML = fs.readFileSync('/home/kasiro/Документы/php/Avatars/VkMessanger/files/VkEdited.html');
		// 		})
		// 	}, 500);
		// };
		document.querySelector('.im_main_menu .mdc-ripple-surface.im_main_menu_item.-with_toggle').onclick = () => {
			function addScript(sel, path) {
				let el = document.createElement('style')
				el.setAttribute("id", sel);
				el.async = false
				el.textContent = fs.readFileSync(path)
				return el
				// <link type="text/css" rel="stylesheet" href="../dist/appStyle.css">
			}
			var vktheme = document.querySelector('#vktheme')
			var vars = vktheme.textContent;
			if (!vars.includes('--base-bg: #fff;')) {
				document.querySelector('#myScript').remove()
				// console.log('theme: light');
			} else {
				var s = addScript('myScript', '%path_to_dark')
				document.head.appendChild(s)
				// console.log('theme: dark');
			}
		};
	}, 400);
};