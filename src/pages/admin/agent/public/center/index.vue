<template>
	<div>
		<div class="plr24 ptb20 flex">
			<img src="/static/img.png" class="face" />
			<div class="flex1 pw0 ml24 flex_sa flex_column">
				<div>
					<text class="col6">名称：</text>
					<text>Jerry</text>
				</div>
				<div class="mt10">
					<text class="col6">身份：</text>
					<text>代理</text>
				</div>
			</div>
			<div class="flex_aj column font13">
				<img src="/static/ico21.png" mode="widthFix" style="width: 38rpx;" />
				<div class="color3">客服中心</div>
			</div>
		</div>
		<div>
			<navigator url="/pages/admin/agent/public/account/index" class="flex_sb bw h120 plr30 tap bdb">
				<div class="flex_a">
					<img src="/static/ico1.png" mode="widthFix" style="width: 38rpx;" />
					<text class="ml24">我的账户</text>
				</div>
				<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
			</navigator>
			<navigator url="/pages/admin/agent/public/revenue/index" class="flex_sb bw h120 plr30 tap bdb">
				<div class="flex_a">
					<img src="/static/ico2.png" mode="widthFix" style="width: 38rpx;" />
					<text class="ml24">我的数据</text>
				</div>
				<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
			</navigator>
			<navigator url="/pages/admin/agent/public/withdrawal/index" class="flex_sb bw h120 plr30 tap bdb">
				<div class="flex_a">
					<img src="/static/ico5.png" mode="widthFix" style="width: 38rpx;" />
					<text class="ml24">提现申请</text>
				</div>
				<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
			</navigator>
			<navigator url="/pages/admin/agent/public/faultList/index" class="flex_sb bw h120 plr30 tap bdb">
				<div class="flex_a">
					<img src="/static/ico22.png" mode="widthFix" style="width: 38rpx;" />
					<text class="ml24">报障审核</text>
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
