function showpic(picurl) {
	window.open("popup.html?"+picurl, "", "top=0,left=0,resizable=yes,HEIGHT=200,WIDTH=200");}
function Preload() {
	var arImages=new Array();
 var temp = Preload.arguments; 
 for(x=0; x < temp.length; x++) {
  arImages[x]=new Image();
  arImages[x].src=Preload.arguments[x];
 }
}
function changepic(idx,imagex,bigimagex){
var id=idx;
var image="url("+imagex+")";
var bigimage=bigimagex;
var linkid=id+"_href";
var elem=document.getElementById(id);
var hrefx=document.getElementById(linkid);
elem.style.backgroundImage=image;
hrefx.href="javascript:showpic('"+bigimage+"')";
}
function OtworzOkno(theURL, myWidth, myHeight) { 
  if(window.screen){
    var myLeft = (screen.width-myWidth)/2;
    var myTop = (screen.height-myHeight)/2;
	features='scrollbars=yes';
    features+=(features!='')?',':'';
    features+=',left='+myLeft+',top='+myTop;
  }
  var winNamex=Math.random();
  winNamex=winNamex.toString();
  winNamex=winNamex.substring(4,8); 
  var fotka=window.open(theURL,winNamex,features+((features!='')?',':'')+'width='+myWidth+',height='+myHeight+',scrollbars=no,statusbar=no');
}
function OtworzOkno2(theURL, myWidth, myHeight) { 
  if(window.screen){
    var myLeft = (screen.width-myWidth)/2;
    var myTop = (screen.height-myHeight)/2;
	features='scrollbars=yes';
    features+=(features!='')?',':'';
    features+=',left='+myLeft+',top='+myTop;
  }
  var winNamex=Math.random();
  winNamex=winNamex.toString();
  winNamex=winNamex.substring(4,8); 
  var fotka=window.open(theURL,winNamex,features+((features!='')?',':'')+'width='+myWidth+',height='+myHeight+',scrollbars=yes,statusbar=no');
}