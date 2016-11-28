/*JAVASCRIPT*/
/*輪播圖片*/
var bannerArray = new Array("images/b1.jpg", "images/b2.jpg", "images/b3.jpg");
/*輪播數量*/
var bannerNum = bannerArray.length;
/*輪播計時器*/
var bannerTimer;
/*輪播起始值*/
var bannerIndex = 0;
/*輪播變化時間(毫秒)*/
var bannerShowTimer = 4500;
var bannerHideTimer = 500;
/*輪播變化圖(序號)*/
var bannerFront = bannerIndex;
var bannerBack = bannerIndex + 1;

$(function(){
	$("#banner").append('<img src="'+bannerArray[bannerFront]+'" class="bannerFront" />');
	$("#banner").append('<img src="'+bannerArray[bannerBack]+'" class="bannerBack" />');
	$("#banner").append('<div class="Clear"></div>');

	$("#content").html('bannerNum: '+bannerNum+'   <input type="button" value="Banner Stop" onclick="bannerStop();" />');
	/*輪播啟動*/
	bannerRun();
});
/*輪播啟動*/
function bannerRun(){
	bannerTimer = setTimeout(bannerNext, bannerShowTimer);
}
/*輪播下一張*/
function bannerNext(){
	bannerIndex++;
	if (bannerIndex >= bannerNum) bannerIndex = 0;

	bannerFront = bannerIndex;
	bannerBack = bannerFront + 1;
	if (bannerBack >= bannerNum) bannerBack = 0;

	console.log('bannerIndex: '+bannerIndex+'  bannerFront: '+bannerFront+'  bannerBack: '+bannerBack);
	bannerChange();
}
/*輪播改變圖片*/
function bannerChange(){
	$(".bannerBack").attr("src", bannerArray[bannerFront]);

    $(".bannerFront").fadeTo(bannerHideTimer, 0, function(){
    	$(this).attr("src", bannerArray[bannerFront]).fadeTo(0, 1, function(){
    		$(".bannerBack").attr("src", bannerArray[bannerBack]);
    		bannerRun();
    	});
    });
}
/*輪播停止*/
function bannerStop(){
	clearTimeout(bannerTimer);
}