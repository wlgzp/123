var mainTpl = require("../templates/index.string");

SPA.defineView("index",{
	html: mainTpl,
	
	plugins: ['delegated'],
	
	
	//绑定点击事件
	bindActions:{
		'exit': function(){
			this.hide();//this指index视图
		}
	},
	
	
	bindEvents: {
		show: function(){
			var mySwiper = new Swiper("#main-swiper",{
				onSlideChangeStart: function(swiper){
      					console.log(swiper.activeIndex);
      				$('#nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
    			}
			});
			//touchend点击之后触发
			$("#nav li").on("touchend",function(){
				mySwiper.slideTo($(this).index());
			})
		}
	}
	
	
	
});
