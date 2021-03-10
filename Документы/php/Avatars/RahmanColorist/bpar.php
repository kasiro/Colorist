<?php

$pref = 'data:image/svg+xml;base64,';
$css_code = file_get_contents('./files/my_vars.css');
$GLOBALS['cvars'] = [];
// @require 'file';
$code = preg_replace_callback("/@require '(.*?)';/m", function ($match) {
    $file_name = $match[1];
    $text = file_get_contents('./files/'.$file_name);
	return $text;
}, $css_code);
preg_replace_callback('/(--.*): (.*);/m', function ($match) {
	$GLOBALS['cvars'][$match[1]] = $match[2];
	return $match[0];
}, $code);
$code = preg_replace_callback('/replace\(((?:(?(R).*|[^)]*+)|(?R))*)\)/m', function ($match) {
	list($base64, $sarr) = explode(', ', $match[1]);
	foreach ($GLOBALS['cvars'] as $name => $val){
		$sarr = str_replace("v{{$name}}", "'$val'", $sarr);
	}
	eval('$rep'." = $sarr;");
	$d64 = base64_decode($base64);
	foreach ($rep as $what => $to){
		$d64 = str_replace($what, $to, $d64);
	}
	$e64 = base64_encode($d64);
	return "url(data:image/svg+xml;base64,$e64)";
}, $code);
file_put_contents('./files/vars.css', $code);