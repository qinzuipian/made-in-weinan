<!-- 以后项目的根组件 -->
<template>
	<div>	
		<mt-header class="header" fixed title="渭南市博物馆"></mt-header>
   	<router-view  id="tmpl"></router-view>
		 <!-- 底部栏 -->
		<nav class="mui-bar mui-bar-tab ">
			<router-link to="/home" class="mui-tab-item"  href="#Popover_0">首页</router-link>
			<a class="mui-tab-item" href="#Popover_1">馆内互动</a>
			<a class="mui-tab-item" href="#Popover_2">分享</a>
			<a class="mui-tab-item" href="#Popover_3">服务中心</a>
		</nav>

		<div id="Popover_0" class="mui-popover mui-bar-popover">
			<div class="mui-popover-arrow"></div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link to="/home">博物馆首页</router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link to="/instr">简介</router-link>
				</li>
			</ul>
		</div>
		<div id="Popover_1" class="mui-popover mui-bar-popover">
			<div class="mui-popover-arrow"></div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link to="/game">
						互动拼一拼
					</router-link>
				</li>	
			</ul>
		</div>
		<div id="Popover_2" class="mui-popover mui-bar-popover">
			<div class="mui-popover-arrow"></div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
				  <router-link to="/display">
            馆内展品
          </router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link to="/news">
					    馆内新闻
					</router-link>
				</li>
			</ul>
		</div>
			<div id="Popover_3" class="mui-popover mui-bar-popover">
			<div class="mui-popover-arrow"></div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<router-link v-bind="{to:'/words/word/'+id}">
					留言建议
					</router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link to="/travel">
						参观预约
					</router-link>
				</li>
				<li class="mui-table-view-cell">
					<router-link to="/own">
						个人中心
						</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
// 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
export default {
  // es6的导出对象的写法
  data() {
    //等价于 es5的 data:function(){
    return {};
  },
  mounted: function() {
    // this.init();
  },
  methods: {
    /* init() {
      var btns = document.getElementsByClassName("mui-table-view-cell");
      console.log(btns);
      for (var i = 0; i <= btns.length; i++) {
        btns[i].onclick = function() {
          var div = document.getElementsByClassName("mui-bar-popover");
						div.classList.add('mui-active');
        };
      }
    } */
  }
};
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/
.header {
  height: 40px;
  background-color: #4c6fb0;
  /* background: linear-gradient(to right, #A38B0E , #FCCE09); */
  /* background-image: url(../../../statics/imgs/bj5.jpg); */
  font-size: 18px;
  font-family: "Microsoft Yahei";
}
.mui-bar-tab {
  background-color: #4c6fb0;
  height: 36px;
  /* background: linear-gradient(to right, #A38B0E , #FCCE09); */
  /* background-image: url(../../../statics/imgs/bj5.jpg); */
}
.mint-header-button-header-title {
  flex: 1 !important;
}
.mui-plus.mui-android header.mui-bar {
  display: none;
}
.mui-plus.mui-android .mui-bar-nav ~ .mui-content {
  padding: 0;
}
.mui-bar-popover {
  width: 30%;
}
.mui-bar-tab .mui-tab-item {
  color: #fff;
  font-size: 16px;
  font-weight: normal;
}
.mui-popover {
  background-color: transparent;
}
.mui-popover .mui-popover-arrow:after {
  background-color: #4c6fb0;
  /* background-image: url(../../../statics/imgs/bj5.jpg); */
}
.mui-popover .mui-table-view {
  background-color: #4c6fb0;
  /* background-image: url(../../../statics/imgs/bj5.jpg); */
}
.mui-table-view-cell .mui-active {
  background-color: transparent;
}
.mui-table-view-cell > a:not(.mui-btn) {
  color: #fff;
}
</style>