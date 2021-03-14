var fs = require('fs');
function addScript(sel, path) {
    let el = document.createElement('style')
    el.setAttribute("id", sel);
    el.async = false
    el.textContent = fs.readFileSync(path)
    return el
    // <link type="text/css" rel="stylesheet" href="../dist/appStyle.css">
}
function resetTheme(){
    var vktheme = document.querySelector('#vktheme')
    var vars = vktheme.textContent;
    if (vars.includes('--base-bg: #fff;')) {
        document.querySelector('#myScript').remove()
        // console.log('theme: light');
    } else {
        var s = addScript('myScript', '%path_to_dark')
        document.head.appendChild(s)
        // console.log('theme: dark');
    }
}
resetTheme()