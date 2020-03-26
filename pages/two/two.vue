<template>
	<view>
		我是two页面
		<button type="primary" @click="toPath">跳转到one</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		// 当one页面跳转过来时， 可以在页面函数onLoad中接收
		onLoad(option) {
			console.log(option)
		},
		methods: {
			toPath() {
				// 关闭当前页面，跳转到应用内的某个页面，不存在不能跳转
				uni.redirectTo({
					url: "../one/one"
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
