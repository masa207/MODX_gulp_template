// $(document).ready(function(){
// 	// トップへ戻る
// 	$(".gotop").css("opacity",0);
// 	$(window).scroll(function(){ moveGoTop(); });
// 	function moveGoTop(){
// 		var x = $(".l-footer_bottom").offset().top - $(window).scrollTop();
// 		if( x <= $(window).height() ){ $(".gotop").css( "position", "absolute" ); }
// 		else{ $(".gotop").css( "position", "fixed" ); }
// 		if( $(window).scrollTop() < 200 )
// 			$(".gotop").animate({"opacity":0}, {"duration":"fast","easing":"linear","queue":false});
// 		else
// 			$(".gotop").animate({"opacity":1}, {"duration":"fast","easing":"linear","queue":false});
// 	}
// 	//タブ
// 	$('.area:first').show();
// 	$('.tab li:first').addClass('active');
//
// 	$('.tab li').click(function () {
// 		$('.tab li').removeClass('active');
// 		$(this).addClass('active');
// 		$('.area').hide();
//
// 		$($(this).find('a').attr('href')).fadeIn();
// 		return false;
// 	});
// 	//アコーディオン
// 	$('.accordion_list').click(function () {
// 		$(this).next().slideToggle();
// 		$(this).toggleClass('accordion_list_active');
// 	});
// 	$('#slider1').owlCarousel({
// 		responsive: true,
// 		items : 4, //ブラウザの幅が1199px 以上の時 4
// 		itemsDesktop : [1199,4], // 1199px から 600px　まで 4つ
// 		itemsDesktopSmall : false, // betweem 900px and 601px
// 		itemsMobile : [640,2], // 640px　以下は 2つ
// 		autoPlay : false,
// 		stopOnHover : true,
// 		navigation : true,
// 		rewindNav : false,
// 		itemsScaleUp : true,//アイテムを自動的に大きくする
// 	});
// 	// img switch
// 	var $setElem = $('.switch'),
// 	pcName = '_pc',
// 	spName = '_sp',
// 	replaceWidth = 641;
// 
// 	$setElem.each(function(){
// 		var $this = $(this);
// 		function imgSize(){
// 			var windowWidth = parseInt($(window).width());
// 			if(windowWidth >= replaceWidth) {
// 				$this.attr('src',$this.attr('src').replace(spName,pcName)).css({visibility:'visible'});
// 			} else if(windowWidth < replaceWidth) {
// 				$this.attr('src',$this.attr('src').replace(pcName,spName)).css({visibility:'visible'});
// 			}
// 		}
// 		$(window).resize(function(){imgSize();});
// 		imgSize();
// 	});
// });
