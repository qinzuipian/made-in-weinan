// 1.0 导入vue核心包
import Vue from 'vue';
// 2.0 导入App.vue的vue对象
import App from './App.vue';
// import main from './main.vue';

import vueRouter from 'vue-router';
import MintUI from 'mint-ui';
import vueResource from 'vue-resource';
import Grid from 'vue-js-grid';
import moment from 'moment';



Vue.use(vueRouter);
Vue.use(MintUI);
Vue.use(vueResource);
Vue.use(Grid);
Vue.use(moment);





import home from './components/home/home.vue';
import word from './components/words/word.vue';
import travel from './components/travel/travel.vue';
import own from './components/own/own.vue';
import display from './components/display/display.vue';
import news from './components/news/news.vue';
import newsinfo from './components/news/newsinfo.vue';
import instr from './components/instr/instroduce.vue';
import login from './components/login/login.vue';
import main from './components/main/main.vue';
import travelinfo from './components/travel/travelinfo.vue';
import game from './components/game/game.vue';

     


var router = new vueRouter({
	routes: [
		{ path: '/', redirect: '/login' },
		{ path: '/login', component: login },
		{
			path: '/main',
			component: main,
			children: [
				{
					path: '/', redirect: '/home'
				},
				{
					path: '/home', component: home
				},
				{
					path: '/words/word/:id', component: word
				},
				{
					path: '/travel', component: travel
				}, {
					path: '/own', component: own
				}, {
					path: '/display', component: display
				}, {
					path: '/news', component: news
				}, {
					path: '/instr', component: instr
				}, {
					path: '/newsinfo/:id', component: newsinfo
				},{
					path: '/travelinfo', component: travelinfo
				}
				,{
					path: '/game', component: game
				}
			]
		}
	]
})
import 'mint-ui/lib/style.css'
import '../statics/mui/css/mui.css'
import '../statics/mui/js/mui.min.js'
import '../statics/css/site.css'


Vue.filter('datamft', function (input, mftstring) {
	return moment(input).format(mftstring);
})

// 3.0 利用Vue对象进行解析渲染
new Vue({
	el: '#app',
	router: router,
	render: c => c(App)  // es6的函数写法 =>：goes to
});