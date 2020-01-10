<template>
	<div>
		<div class="roof plr24">
			<ul class="h100 ptb24 flex tabs mtb20">
				<li class="tabItem color1">昨日</li>
				<li class="tabItem">今日</li>
				<li class="tabItem">本月</li>
				<li class="tabItem">累计</li>
			</ul>
			<section class="flex h180 bgc1 cf border-r1">
				<div class="flex1 flex_aj column">
					<div>有效金额</div>
					<div class="font40">80.00</div>
				</div>
				<div class="flex1 flex_aj column">
					<div>分润金额</div>
					<div class="font40">80.00</div>
				</div>
				<div class="flex1 flex_aj column">
					<div>有效订单</div>
					<div class="font40">80</div>
				</div>
			</section>
			<ul class="lh80 flex font24 tac col9">
				<li class="flex1">订单编号</li>
				<li class="flex1">订单金额(元)</li>
				<li class="flex1">收益金额(元)</li>
				<li class="flex1">分润比例(%)</li>
			</ul>
		</div>
		<ul class="list plr24">
			<li class="item flex tac">
				<div class="flex1 ellipsis">416467678</div>
				<div class="flex1 ellipsis">21</div>
				<div class="flex1 ellipsis">11.5</div>
				<div class="flex1 ellipsis">50%</div>
			</li>
			<li class="item flex tac">
				<div class="flex1 ellipsis">416467678</div>
				<div class="flex1 ellipsis">21</div>
				<div class="flex1 ellipsis">11.5</div>
				<div class="flex1 ellipsis">50%</div>
			</li>
		</ul>
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
	.roof {
		position: fixed;
		background: #f0f0f0;
		width: 100%;
		left: 0;
		top: 0;
		box-sizing: border-box;

		.tabs {
			background: #fff;
			box-sizing: border-box;
			border-radius: 10upx;

			.tabItem {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;

				&+.tabItem {
					border-left: 1px solid #e5e5e5;
				}
			}
		}
	}

	.list {
		padding-top: 400upx;

		.item {
			line-height: 84upx;
			background: #fff;
			border-radius: 10upx;

			&+.item {
				margin-top: 1px;
			}
		}
	}
</style>
