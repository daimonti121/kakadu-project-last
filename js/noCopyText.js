document.ondragstart = prohibit;
document.onselectstart = prohibit;
document.oncontextmenu = prohibit;
function prohibit() {
    return false;
}