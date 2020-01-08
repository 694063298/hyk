<template>
	<div>
		<div class="plr24 ptb20 flex">
			<img src="/static/img.png" class="face" />
			<div class="flex1 pw0 ml24 flex_sa flex_column">
				<div>我叫小小</div>
				<div class="mt10">13632347040</div>
			</div>
		</div>
		<div>
			<navigator url="/pages/user/public/deposit/index" class="flex_sb bw h120 plr30 tap bdb">
				<div class="flex_a">
					<img :src="require('@/static/ico1.png')" mode="widthFix" style="width: 38rpx;" />
					<text class="ml24">我的押金</text>
				</div>
				<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
			</navigator>
			<navigator url="/pages/user/coupons/index" class="flex_sb bw h120 plr30 tap bdb">
				<div class="flex_a">
					<img :src="require('@/static/ico2.png')" mode="widthFix" style="width: 38rpx;" />
					<text class="ml24">我的订单</text>
				</div>
				<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
			</navigator>
			<navigator url="/pages/article/guide/index" class="flex_sb bw h120 plr30 tap bdb">
				<div class="flex_a">
					<img :src="require('@/static/ico3.png')" mode="widthFix" style="width: 38rpx;" />
					<text class="ml24">使用指南</text>
				</div>
				<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
			</navigator>
			<navigator url="/pages/article/about/index" class="flex_sb bw h120 plr30 tap bdb">
				<div class="flex_a">
					<img :src="require('@/static/ico4.png')" mode="widthFix" style="width: 38rpx;" />
					<text class="ml24">关于我们</text>
				</div>
				<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
			</navigator>
			<navigator url="/pages/user/coupons/index" class="flex_sb bw h120 plr30 tap bdb">
				<div class="flex_a">
					<img :src="require('@/static/ico5.png')" mode="widthFix" style="width: 38rpx;" />
					<text class="ml24">加盟申请</text>
				</div>
				<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
			</navigator>
			<navigator url="/pages/user/coupons/index" class="flex_sb bw h120 plr30 tap">
				<div class="flex_a">
					<img :src="require('@/static/ico6.png')" mode="widthFix" style="width: 38rpx;" />
					<text class="ml24">优惠券</text>
				</div>
				<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
			</navigator>
		</div>
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
	.face {
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
	}
</style>
