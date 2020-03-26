<template>
	<view>
		<view v-if="false">111</view>
		<view v-show="false">111</view>
		<view>xxx</view>
		<swiper indicator-dots autoplay interval="1500">
			<swiper-item>
				<image :mode="scaleToFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image :mode="scaleToFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image :mode="scaleToFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"></image>
			</swiper-item>
			<swiper-item>
				<image :mode="scaleToFill" src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg"></image>
			</swiper-item>
		</swiper>
		<scroll-view :scroll-x="true" style="white-space: nowrap;">
			<view style="display:inline-block; height: 150px; width: 200px; background-color: green">1</view>
			<view style="display:inline-block; height: 150px; width: 200px; background-color: red">2</view>
			<view style="display:inline-block; height: 150px; width: 200px; background-color: pink">3</view>
		</scroll-view>
		
		<view class="ld">
			<view class="left">
				<view v-for="(item, index) in list" :key="index" @click="itemBtn(index)">
					{{item.title}}
				</view>
			</view>
			<view class="right">
				<scroll-view 
					:scroll-y="true" 
					style="white-space: nowrap; height: 100px; width: 200px;"
					:scroll-into-view="scrollId"
					>
					<view v-for="(item, index) in list" :key="index">
						<view class="title" :id="'op' + index">{{item.title}}</view>
						<view v-for="(item_child, idx) in item.list" :key="idx">
							<view>{{item_child}}</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{title: "水果", list: ["苹果", "橘子", "香蕉", "芒果", "西瓜", "火龙果"]},
					{title: "蔬菜", list: ["上海青", "油麦菜", "花椰菜", "西红柿", "冬瓜", "土豆"]},
					{title: "肉食", list: ["鸡肉", "猪肉", "鸭肉", "牛肉", "羊肉", "鱼肉"]},
					{title: "饮料", list: ["牛奶", "酸奶", "红茶", "绿茶", "可乐", "雪碧", "橙汁"]}
				],
				scrollId: ""
			};
		},
		methods:{
			itemBtn(index) {
				this.scrollId = 'op' + index
			}
		},
		onLoad(){
			console.log('页面初始化 加载一次 onLoad')
		},
		onReady(){
			console.log('页面加载完毕 执行一次 onReady')
		},
		onShow(){
			console.log('页面进入执行	 加载多次 onShow')
		},
		onHide(){
			console.log('页面离开执行 执行多次 onHide')
		},
		onPullDownRefresh(){
			console.log('执行下拉刷新')
		},
		onTabItemTap(e) {
			console.log(e)
		},
		onShareAppMessage() {
			console.log('用户点击了分享')
			return {
				title: '开心',
				path: "pages/news/news",
				imageUrl: "../../static/22.jpg"
			}
		}
	}
</script>

<style lang="scss">
.swiper {
	height: 300px;
	.swiper-item {
		image {
			width: 100%;
			height: 100%;
		}
	}
}
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
</style>
