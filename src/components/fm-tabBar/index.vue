<template>
	<div>
		<div class="tabBar" :style="[{'backgroundColor':tabBar.backgroundColor}]">
			<block v-for="(item,index) of tabBar.list" :key="index">
				<view class="tabItem" @tap="switchTab(index)">
					<img :src="currentTabIndex == index?item.selectedIconPath:item.iconPath" style="width: 40upx;" mode="widthFix" />
					<view :style="[currentTabIndex == index ? {'color': tabBar.selectedColor} : {'color': tabBar.color}]">{{item.text}}</view>
				</view>
			</block>
		</div>
	</div>
</template>
<script>
	export default {
		name: "index",
		props: {
			current: {
				type: [Number, String],
				default: 0
			},
			tabBar: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				currentTabIndex: this.current
			}
		},
		created() {

		},

		methods: {
			switchTab(index) {
				this.currentTabIndex = index;
				this.$emit('click', index);
			}
		}
	}
</script>

<style scoped lang='scss'>
	.tabBar {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100upx;
		z-index: 2;
		display: flex;

		.tabItem {
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}
</style>
