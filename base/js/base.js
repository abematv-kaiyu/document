


$(function() {

	tog = {

		init : function() {
			this.toggleAction();
		},

		// toggle アクション
		toggleAction :function(){
			$('.m_n').hide();

			$('.m_t').click(function(){
				$(this).next('.m_n').slideToggle();

				if($(this).hasClass('active')) {
					$(this).removeClass("active");
				}
				else {
					$(this).addClass("active");
				}
			});
			$('.release').click(function(){
				if($('.m_n').css('display','block')) {
					$(".m_n").css('display','block');
				}
				else {
					$(".m_n").css('display','none');
				}
			});
		}
	}

	tog.init();
});