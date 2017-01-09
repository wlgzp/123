var guideTpl = require("../templates/guide.string");

SPA.defineView("guide",{
	html:guideTpl,
	
	//引入安装插件——delegated事件代理
	plugins: ['delegated'],
	
	
	//绑定点击事件
	bindActions:{
		'goto.index': function(){
			SPA.open('index');
		}
	},
	
	/*视图生命周期时间绑定*/
	bindEvents:{
		//视图展示完成之后执行的事件
		show:function(){
			//console.log(Swiper);
			var mySwiper = new Swiper('#guide-swiper', {
				loop:false,//禁止循环
			});
		}
	}
});
