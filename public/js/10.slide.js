//즉시실행함수 IIFE -Immediately Invoked Function Ewpression
(function (){
	console.log("즉시실행");
})();

//시험장1
(function(){
	var n = 0;
	function ani(){
		if(n == 3) n = 0;
		else n++;
$(".wrapper1 .slide-wrap").stop().animate({"left":-n*100+"%"}, 500);
	}
	setInterval(ani, 3000);
})();


//무한루프
(function(){
	var n = 1;
	function ani() {
		$(".wrapper2 .slide-wrap").stop().animate({"left": -n*100 + "%"}, 500, function(){
			if(n == 4) {
				n = 1;
				$(this).css("left", 0);
			}
			else n++;
		});
	}
	
	setInterval(ani, 3000);
})();



// 시험장 perv, next
(function(){
var $slideWrap =$(".wrapper3 .slide-wrap");
var $pagerSpan =$(".wrapper3 .pager-wrap span");
var $btnPrev=$("wrapper3 .btn-prev")
var $btnNext=$("wrapper3 .btn-next")
	
var n = 0;
	
	$btnPrev.click(onPrev);
	$btnNext.click(onNext);
	
	function onPrev(){
	if(n>0) n--;
	
	ani();
	}
	function onNext(){
if(n<3)n++;
		ani();
	}
	function ani(){
$slideWrap.stop().animate({"left": -n*100+"%"}, 500, pegerToggle);

	}
	function pegerToggle(){
		$pagerSpan.show();

if(n == 0){
	$pagerSpan.eq(0).hide();
	$pagerSpan.eq(1).hide();
}
if(n == 3){
	$pagerSpan.eq(1).hide();
	$pagerSpan.eq(2).hide();
}
	}
	pegerToggle();
})();

