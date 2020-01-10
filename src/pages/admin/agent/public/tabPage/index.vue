<template>
	<div class="pb100">
		<device-in v-if="currentTabIndex==0" />
		<order-in v-if="currentTabIndex==1" />
		<center v-if="currentTabIndex==2" />
		<fm-tabBar :current="currentTabIndex" :tabBar="tabBar" @click="tabClick" />
	</div>
</template>

<script>
	import deviceIn from '../deviceIn/index.vue';
	import orderIn from '../orderIn/index.vue';
	import center from '../center/index.vue';
	export default {
		name: "index",
		components:{
			deviceIn,
			orderIn,
			center
		},
		data() {
			return {
				tabBar: {
					color: "#a35200",
					selectedColor: "#ffffff",
					backgroundColor: "#fe8101",
					list: [{
						pagePath: "",
						iconPath: "/static/tabIco1.png",
						selectedIconPath: "/static/tabIco1_a.png",
						text: "设备"
					}, {
						pagePath: "",
						iconPath: "/static/tabIco2.png",
						selectedIconPath: "/static/tabIco2_a.png",
						text: "订单"
					}, {
						pagePath: "",
						iconPath: "/static/tabIco3.png",
						selectedIconPath: "/static/tabIco3_a.png",
						text: "我的"
					}]
				},
				currentTabIndex: 2
			}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			tabClick(index) {
				this.currentTabIndex = index;
			}
		}
	}
</script>

<style scoped lang='scss'>

</style>
