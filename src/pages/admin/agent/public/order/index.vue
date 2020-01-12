<template>
	<div>
		<header class="fixed_top">
			<div class="searchWrap flex p20">
				<div class="left flex_a mr10">
					<div class="flex1 tac">
						<img src="/static/ico27.png" style="width:24rpx;" mode="widthFix" />
						<div class="ellipsis font26 col9">东莞南城</div>
					</div>
					<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
				</div>
				<div class="right flex1 flex_a">
					<label class="flex1 pl24">
						<input type="text" placeholder="按业务名称搜索" />
					</label>
					<div class="mlr24 searchBtn">搜索</div>
				</div>
			</div>
			<ul class="h100 ptb24 flex tabs mlr20">
				<li class="tabItem color1">当日</li>
				<li class="tabItem">当月</li>
				<li class="tabItem">累计</li>
			</ul>
		</header>
		<section class="lists plr20">
			<div class="lists_item bw shadow border-r1 plr20">
				<div class="h90 flex_a bdb">
					<img src="/static/ico28.png" style="width:26rpx;" mode="widthFix" />
					<text class="col9 ml10">业务名称：</text>
					<text>Jerry</text>
				</div>
				<div class="ptb24 flex tac">
					<div class="flex1">
						<div class="col9">订单金额</div>
						<div class="color6">46464</div>
					</div>
					<div class="flex1">
						<div class="col9">分润金额</div>
						<div class="color6">46464</div>
					</div>
				</div>
				<div class="ptb24 flex tac">
					<div class="flex1">
						<div class="col9">订单数量</div>
						<div class="color6">46464</div>
					</div>
					<div class="flex1">
						<div class="col9">分成比例</div>
						<div class="color6">46464</div>
					</div>
				</div>
			</div>
		</section>
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
	.fixed_top{
		background-color: #f0f0f0;
		.searchWrap {
			box-sizing: border-box;
		
			.left {
				width: 200upx;
				height: 90upx;
				background: #fff;
				border-radius: 10upx;
				padding: 0 16upx;
				box-sizing: border-box;
			}
		
			.right {
				height: 90upx;
				background: #fff;
				border-radius: 10upx;
		
				.searchBtn {
					width: 110upx;
					line-height: 50upx;
					border-radius: 25upx;
					background: #f5f5f5;
					font-size: 28upx;
					color: #999;
					text-align: center;
				}
			}
		}
		
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
	.lists{
		padding-top: 250upx;
	}
</style>
