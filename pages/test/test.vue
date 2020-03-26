<template>
	<view>
		<view class="ld">
			<view class="left">
				<view v-for="(item, index) in list" :key="index" @click="itemBtn(index)" :class="{active: currentNum === index}">
					{{item.title}}
				</view>
			</view>
			<view class="right">
				<scroll-view
					:scroll-y="true" style="white-space: nowrap; height: 100px; width: 200px;"
					:scroll-into-view="scrollId"
					scroll-with-animation
					@scroll="scroll"
					@scrolltolower="scrolltolower">
					<view v-for="(item, index) in list" :key="index">
						<view class="title" :id="'op' + index">{{item.title}}</view>
						<view v-for="(item_child, idx) in item.list" :key="idx">
							<view>{{item_child}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- <button type="primary" @click="toPath">跳转到one</button> -->
		<!-- 基本用法 -->
		<uni-rate value="2"></uni-rate>
		<view>
			<view>vuex的使用</view>
			<view>数量{{num}}</view>
			<view>总价{{count}}</view>
			<button @click="add" type="primary">num++</button>
		</view>
		<view>
			<button type="primary" @click="testAct">testActions</button>
			<view v-for="(item, index) in testActionsList" :key="index">
				<view>{{item}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from '@/components/uni-rate/uni-rate.vue'
	export default {
		components: {uniRate},
		data() {
			return {
				list: [{
						title: "水果",
						list: ["苹果", "橘子", "香蕉", "芒果", "西瓜", "火龙果"]
					},
					{
						title: "蔬菜",
						list: ["上海青", "油麦菜", "花椰菜", "西红柿", "冬瓜", "土豆"]
					},
					{
						title: "肉食",
						list: ["鸡肉", "猪肉", "鸭肉", "牛肉", "羊肉", "鱼肉"]
					},
					{
						title: "饮料",
						list: ["牛奶", "酸奶", "红茶", "绿茶", "可乐", "雪碧", "橙汁"]
					}
				],
				scrollId: "",
				currentNum: 0,
				rightTopList: []
			};
		},
		onReady() {
			this.scrollInfo()
			this.testRequest()
			// console.log(this.$store.dispatch('testActions'))
		},
		computed: {
			num() {
				return this.$store.state.num
			},
			count() {
				return this.$store.getters.count
			},
			testActionsList() {
				return this.$store.state.testActionsList
			}
		},
		methods: {
			itemBtn(index) {
				this.scrollId = 'op' + index
				this.currentNum = index
			},
			add () {
				this.$store.commit('add')
			},
			testAct() {
				this.$store.dispatch('testActions')
			},
			scroll(e) {
				for (let i = 0; i < this.rightTopList.length; i++) {
					let top1 = this.rightTopList[i]
					let top2 = this.rightTopList[i + 1]
					if (e.target.scrollTop >= top1 && e.target.scrollTop < top2) {
						this.currentNum = i
					}
				}
			},
			scrolltolower() {
				setTimeout(() => {
					this.currentNum = this.list.length - 1
				}, 180)
			},
			scrollInfo() {
				const query = uni.createSelectorQuery().in(this);
				query.selectAll('.title').boundingClientRect().exec((res) => {
					res[0].map(item => {
						this.rightTopList.push(item.top)
					})
				});
			},
			testRequest() {
				uni.request({
				    url: 'https://bird.ioliu.cn/weather', //仅为示例，并非真实接口地址。
				    data: {
				        city: '苏州'
				    },
				    header: {
				        'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
				        console.log(res.data)
				    }
				});
			},
			toPath() {
				// navigateTo只能跳转到tabbar中没有配置的页面
				uni.navigateTo({
					url: "../one/one"
				})
				/*
				switchTab跳转到tabbar配置过的页面
				uni.switchTab({
					url: "../index/index"
				})
				*/
			}
		}
	}
</script>

<style lang="scss">
	.ld {
		width: 100%;
		display: flex;

		.left {
			display: inline-block;
			width: 80px;
			height: 100px;
			border: 1px solid #4CD964;
			margin-right: 20px;
		}

		.right {
			display: inline-block;
		}
	}

	.title {
		font-size: 18px;
		font-weight: 600;
		color: deeppink;
	}

	.active {
		background-color: pink;
	}
</style>
