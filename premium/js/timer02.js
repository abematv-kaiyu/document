$(function() {
	countDown();
});

function countDown() {
	var now = new Date();
	var time = new Date();
	var end = new Date("2020/02/10 23:59");
	var left = end - time;
	var a_day = 24 * 60 * 60 * 1000;
	var d = Math.floor(left / a_day)
	var h = Math.floor((left % a_day) / (60 * 60 * 1000))
	var m = Math.floor((left % a_day) / (60 * 1000)) % 60
	var s = Math.floor((left % a_day) / 1000) % 60 % 60

	$("#day").text(d);
	$("#hour").text(h);
	$("#min").text(m);
	$("#sec").text(s);
	setTimeout('countDown()', 1000);
}


$(document).ready(function() {
	var now = new Date();
	var between03 = new Date("2020/01/30 23:59");
	if (now.getTime() > between03.getTime()) {
		$('.t_box').hide();
	}
});









