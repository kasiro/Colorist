<?php

require 'path.php';
$devTools = false;
$use_Extention = true;
$main_f_path = "$path_to_vk_folder/resources/app/main.js";
$main_file_code = file_get_contents($main_f_path);
if ($devTools) {
	if (str_contains($main_file_code, '// mainWindow.webContents.openDevTools()')) {
		file_put_contents($main_f_path, str_replace(
			'// mainWindow.webContents.openDevTools()',
			'mainWindow.webContents.openDevTools()',
			$main_file_code
		));
	}
} else {
    if (!str_contains($main_file_code, '// mainWindow.webContents.openDevTools()')) {
        if (str_contains($main_file_code, 'mainWindow.webContents.openDevTools()')) {
            file_put_contents($main_f_path, str_replace(
                'mainWindow.webContents.openDevTools()',
                '// mainWindow.webContents.openDevTools()',
                $main_file_code
            ));
        }
    }
}
$bphar = __DIR__ . '/bpar.php';
system("php $bphar");
$text = '';
$text .= '/*my code start*/' . "\r\n";
$text .= file_get_contents(__DIR__.'/files/vars.css') . "\r\n";
$text .= "\r\n" . '/*my code end*/';
file_put_contents(__DIR__ . '/files/all_users_avatars.css', $text);
// Updating code in appStyle.css (re write)
$file_path = "$path_to_vk_folder/resources/app/dist/AppStyle.css";
$code = file_get_contents($file_path);
$new_css = file_get_contents(__DIR__.'/files/all_users_avatars.css');
$code = preg_replace('/\/\*my code start\*\/((?:(?(R).*|.*\n)|(?R))*)\/\*my code end\*\//m', '/*replace_this*/', $code);
$end_code = str_replace('/*replace_this*/', $new_css, $code);
file_put_contents($file_path, $end_code);