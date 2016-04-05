/**
 * 公共模块头
 * 参数
 * 	info       中间文字             	必填
 * 	leftBtn    左边按钮文字     		非必填
 *  rightBtn   右边按钮文字     		非必填
 *  leftBtnClick   点击触发的事件   	非必填
 *  rightBtnClick  点击触发的事件  	非必填
 */
define(['text!commonTemplate/HeaderTpl.html'], function(tpl) {
    var HomeHeaderView = PAWA.PAWAView.extend({
        id : 'headerView',
        name : 'headerView',
        events : {
			'tap .left_btn': 'toggle',
			'tap [data-fun]': 'callback'
        },
        // 初始化
        init : function(options) {
			var headerInfo = Config.getHeaderInfo();
			_.each(headerInfo, _.bind(function (obj, index) {
				this['headerIconCallback_' + index] = obj.callback;
			}, this));
        	this.$el.html(_.template(tpl)({headerInfo: headerInfo}));
        	this.$hr   = $("#head_title",this.el);
			this.render(options);
        },
        render : function(options){
        	var title = options.title;
			// 如果没有定义就不显示头部
        	if(!title){
        		this.$el.hide();
        		return false;
        	}
			this.$hr.html(options.title);
        },
		callback: function (e) {
			this[e.currentTarget.dataset['fun']]();
		},
		toggle: function (e) {
			wrapView.toggle();
			e.stopPropagation();
		}
    });

    return HomeHeaderView;
});
