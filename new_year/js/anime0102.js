$(document).ready(function() {
	var now = new Date();
	// 01 遷移先 放送前
	var bf01 = new Date("2018/11/11");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('視聴予約する');
		$('#a_01').attr("href","https://abema.tv/channels/abema-anime-2/slots/AYGmZQdwxY4FWo");
	}
	// 遷移先 放送後 ビデオ
	var bf01 = new Date("2019/01/03 06:00");
	if (now.getTime() > bf01.getTime()) {
		$('#a_01').text('ビデオを見る');
		$('#a_01').attr("href","https://abema.tv/video/title/25-1nzan-whrxe");
	}
	 // 02 前
	 var bf02 = new Date("2018/11/06");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('視聴予約する');
		$('#a_02').attr("href","https://abema.tv/channels/abema-anime/slots/CEfYkFBqqn8N1d");
	 }
	 // 後
	 var bf02 = new Date("2019/01/02 22:55");
	 if (now.getTime() > bf02.getTime()) {
		$('#a_02').text('ビデオを見る');
		$('#a_02').attr("href","https://abema.tv/video/title/26-11");
	 }

	 // 03 前
	 var bf03 = new Date("2018/11/06");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('視聴予約する');
		$('#a_03').attr("href","https://abema.tv/channels/anime-live/slots/CgGCPRgBsKZni3");
	 }
	 // 後
	 var bf03 = new Date("2019/01/03 01:00");
	 if (now.getTime() > bf03.getTime()) {
		$('#a_03').text('ビデオを見る');
		$('#a_03').attr("href","https://abema.tv/video/title/25-106");
	 }

	 // 04 前
	 var bf04 = new Date("2018/11/06");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('視聴予約する');
		$('#a_04').attr("href","https://abema.tv/channels/everybody-anime/slots/B734Gu2S8YBucb");
	 }
	 // 後
	 var bf04 = new Date("2019/01/02 22:15");
	 if (now.getTime() > bf04.getTime()) {
		$('#a_04').text('ビデオを見る');
		$('#a_04').attr("href","https://abema.tv/video/title/12-17");
	 }

	 // 05 前
	 var bf05 = new Date("2018/11/06");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('視聴予約する');
		$('#a_05').attr("href","https://abema.tv/channels/abema-anime-2/slots/CWxXQUTUF3viiB");
	 }
	 // 後
	 var bf05 = new Date("2019/01/02 18:00");
	 if (now.getTime() > bf05.getTime()) {
		$('#a_05').text('ビデオを見る');
		$('#a_05').attr("href","https://abema.tv/video/title/54-26");
	 }

	  // 06 前
	 var bf06 = new Date("2018/11/06");
	 if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('視聴予約する');
		$('#a_06').attr("href","https://abema.tv/channels/abema-anime/slots/9pGVbx9w5zYKEX");
	 }
	 // 後
	 var bf06 = new Date("2019/01/03 00:00");
	 if (now.getTime() > bf06.getTime()) {
		$('#a_06').text('ビデオを見る');
		$('#a_06').attr("href","https://abema.tv/video/title/171-15");
	 }

	  // 07 前
	 var bf07 = new Date("2018/11/06");
	 if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('視聴予約する');
		$('#a_07').attr("href","https://abema.tv/channels/abema-anime/slots/B734Fz2x64WnRd");
	 }
	 // 後
	 var bf07 = new Date("2019/01/02 18:55");
	 if (now.getTime() > bf07.getTime()) {
		$('#a_07').text('ビデオを見る');
		$('#a_07').attr("href","https://abema.tv/video/title/26-53");
	 }

});
