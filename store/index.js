import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
	// 全局属性变量
	state: {
		num: 0,
		price: 10,
		name: '张三',
		testActionsList: []
		
	},
	// 全局同步方法
	mutations: {
		add(state) {
			state.num++;
		}
	},
	// vuex的计算属性，在视图里边当变量使用
	getters: {
		// 这个函数的执行依赖一个可变变量
		count(state) {
			return state.num * state.price
		}
	},
	// 全局异步方法， 使用dispatch调用，用法同 commit
	// context中包含了getter里的方法， state的属性， mutations和actios需要使用commit和dispatch调用方法
	actions: {
		testActions(context) {
			setTimeout(() => {
				context.state.testActionsList = ["猪猪侠", "喜羊羊", "灰太狼", "暖洋洋"]
			}, 2000)
		}
	}
})