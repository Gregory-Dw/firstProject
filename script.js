
/*
window.onload = function()
{
  setTimeout(function pop(div)
  {
    document.getElementById('popin').style.display='block';
}, 2000);
}*/
function pop(div) {
	document.getElementById(div).style.display='block';
	return false;
}
function hide(div) {
	document.getElementById(div).style.display='none';
	return false;
}