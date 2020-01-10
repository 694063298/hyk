<template>
    <div>
			<header class="fixed_top flex p20">
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
			</header>
			<section class="lists plr20">
				<div class="lists_item bw shadow border-r1 plr20">
					<div class="h90 flex_a bdb">
						<img src="/static/ico28.png" style="width:26rpx;" mode="widthFix" />
						<text class="col9 ml10">业务名称：</text>
						<text>Jerry</text>
					</div>
					<div class="ptb20">
						<div>
							<text class="col9">商家数量：</text>
							<text>99</text>
						</div>
						<div class="mt10">
							<text class="col9">设备总数：</text>
							<text>99</text>
						</div>
						<div class="mt10">
							<text class="col9">设备使用率：</text>
							<text>99%</text>
						</div>
						<div class="mt10">
							<text class="col9">代理地址：</text>
							<text>广东深动荡的机票了附近第六届</text>
						</div>
					</div>
					<div class="flex lh80 tac bdt">
						<div class="flex1 color5">设备数:30</div>
						<div class="flex1 color3">可借用:30</div>
						<div class="flex1 color2">可归还:30</div>
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
		box-sizing: border-box;
		.left{
			width: 200upx;
			height: 90upx;
			background: #fff;
			border-radius: 10upx;
			padding: 0 16upx;
			box-sizing: border-box;
		}
		.right{
			height: 90upx;
			background: #fff;
			border-radius: 10upx;
			.searchBtn{
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
	.lists{
		padding-top: 130upx;
	}
</style>
