<template>
	<view class="content">
		<test :msg11="msg" @clickBtn="clickBtn"></test>
		<view>{{"lili"}}</view>
		<view>{{title}}</view>
		<view>{{title + "lili"}}</view>
		<view>{{title.indexOf("sa") !== -1 ? "存在" : "不存在"}}</view>
		<!-- <view class="box{{1}}">小程序认为{{}}里是可变的</view> -->
		<!-- <view :class="'box'+1">vue中会去找这个变量box</view> -->
		<view :style="{width: '100px', height: '100px', background: 'skyblue'}"></view>
		<view :style="[{width: '100px', height: '100px', background: 'deeppink'}]"></view>
		<view :class="{box1: true}"></view>
		<view :class="['box1', 'box2']"></view>
		<view>
			<view
				v-for="(item, index) in names"
				:key="index"
				:class="currentIndex === index ? 'box3' : ''"
				@click="toggleCurrentIndex(index)"
				>
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	import test from "../../components/test.vue"
	export default {
		components:{
			test
		},
		data() {
			return {
				msg: '父组件传值',
				title: 'sasa',
				names: ['张三', '李四', '王二', '麻子'],
				currentIndex: 0
			}
		},
		onLoad() {
			// uniapp的事件订阅 可以直接在周期函数中去创建
			uni.$on("testBtn", (val) => {
				console.log(val)
			})
			
			// $once只能调用一次
			// uni.$once("testBtn", (val) => {
			// 	console.log(val)
			// })
		},
		methods: {
			clickBtn(val) {
				console.log(val)
			},
			toggleCurrentIndex(index) {
				this.currentIndex = index
			}
		},
	}
</script>

<style>
.box1 {
	width: 50px;
	height: 50px;
	background: #2C405A;
}
.box2 {
	border-radius: 50%;
}
.box3 {
	background-color: #4CD964;
}
</style>
