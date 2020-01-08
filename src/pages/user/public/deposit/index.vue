<template>
	<div class="plr24 pt20 lists">
		<navigator url="/pages/user/public/deposit/index" class="lists_item flex_sb bw h110 plr30 tap border-r1">
			<div class="flex_a">
				<img :src="require('@/static/ico7.png')" mode="widthFix" style="width: 34rpx;" />
				<text class="ml24">充电宝押金</text>
			</div>
			<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
		</navigator>
		<navigator url="/pages/user/public/deposit/index" class="lists_item flex_sb bw h110 plr30 tap border-r1">
			<div class="flex_a">
				<img :src="require('@/static/ico8.png')" mode="widthFix" style="width: 34rpx;" />
				<text class="ml24">柜式陪护床押金</text>
			</div>
			<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
		</navigator>
		<navigator url="/pages/user/public/deposit/index" class="lists_item flex_sb bw h110 plr30 tap border-r1">
			<div class="flex_a">
				<img :src="require('@/static/ico9.png')" mode="widthFix" style="width: 34rpx;" />
				<text class="ml24">床头柜陪护床押金</text>
			</div>
			<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
		</navigator>
	</div>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {}
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {

		}
	}
</script>

<style scoped lang='scss'>

</style>
