$(document).ready(function() {
	 //初期表示
	$(".tab_content").hide();//全ての.tab_contentを非表示
	$("ul.tb li:first,ul.i_i li:first").addClass("active").show();//tabs内最初のliに.activeを追加
	$(".tab_content:first").show();//最初の.tab_contentを表示
	//タブクリック時
	$("ul.tb li,ul.i_i li").click(function() {
	     $("ul.tb li,ul.i_i li").removeClass("active");//.activeを外す

	     // $(this).addClass("active");//クリックタブに.activeを追加
	     $(".tab_content").hide();//全ての.tab_contentを非表示
	     var activeTab = $(this).find("a").attr("href");//アクティブタブコンテンツ
	     $(activeTab).fadeIn();//アクティブタブコンテンツをフェードイン
	     return false;
	});

	$('#wa01').on('click',function() {
		$(this).addClass('active');
		$('.wp').find("#ta01").addClass("active");
	});
	$('#wa02').on('click',function() {
		$(this).addClass('active');
		$('.wp').find("#ta03").addClass("active");
	});
	$('#wa03').on('click',function() {
		$(this).addClass('active');
		$('.wp').find("#ta02").addClass("active");
	});
	$('#wa04').on('click',function() {
		$(this).addClass('active');
		$('.wp').find("#ta04").addClass("active");
	});
	$('#ta01').on('click',function() {
		$(this).addClass('active');
		$('.wp').find("#wa01").addClass("active");
	});
	$('#ta02').on('click',function() {
		$(this).addClass('active');
		$('.wp').find("#wa03").addClass("active");
	});
	$('#ta03').on('click',function() {
		$(this).addClass('active');
		$('.wp').find("#wa02").addClass("active");
	});
	$('#ta04').on('click',function() {
		$(this).addClass('active');
		$('.wp').find("#wa04").addClass("active");
	});


});

// 動画再生
$('.play').on('click', function(ev) {
	// $(this).next('iframe')[0].src += "&amp;autoplay=1";
	// ev.preventDefault();
	// $(this).parent().parent().find('.movie_inner').removeClass('i_a');
	$(this).fadeOut('slow');
});
// $('.i_a').on('click', function(ev) {
// 	$(this).find('iframe')[0].src += "&amp;autoplay=1";
// 	ev.preventDefault();
// 	$(this).removeClass('i_a');
// 	$(this).find('.play').fadeOut('slow');
// });

