<template>
	<view>
		我是one页面
		<button type="primary" @click="toPath">跳转到two</button>
		<button type="primary" @click="goBack">返回test</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
			toPath() {
				// navigateTo只能跳转到tabbar中没有配置的页面
				// 这个跳转方式会保存上一次的页面，大概保存10个，之后页面就会不能跳转了
				// 一般都是和uni.navigateBack返回到原页面， 一起使用
				uni.redirectTo({
					// 可以携带参数
					url: "../two/two?name=lili"
				})
			},
			goBack() {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss">

</style>
