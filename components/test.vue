<template>
	<view>
		<text>我是组件test{{msg11}}</text>
		<button type="primary" @click="testBtn">父组件传方法子组件监听并返回值</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props: ["msg11"],
		beforeMount() {
			console.log('在挂载之前被调用')
		},
		mounted() {
			console.log('挂在到实例上之后被调用')
			this.$nextTick(function(){
				// 渲染完毕
				console.log('OK')
			})
		},
		methods:{
			testBtn() {
				// vue的事件订阅方法
				// this.$emit("clickBtn", {title: "xiaohong"})
				// uni的事件订阅方法
				uni.$emit("testBtn", {title: "luck"})
			}
		}
	}
</script>

<style lang="scss">

</style>
