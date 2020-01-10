<template>
    <div>
			<div class="plr24 ptb20 flex">
				<img src="/static/img.png" class="face" />
				<div class="flex1 pw0 ml24 flex_sa flex_column">
					<div>
						<text class="col6">我的名称：</text>
						<text>Jerry</text>
					</div>
					<div class="mt10">
						<text class="col6">我的账号：</text>
						<text>13632347040</text>
					</div>
				</div>
			</div>
			<section class="list plr24 clearfix">
				<div class="item shadow flex_aj column">
					<div>
						<img src="/static/ico23.png" style="width: 30rpx;" mode="widthFix" />
						<text class="ml10 font26">设备数量(台)</text>
					</div>
					<div class="font34 mt10">256</div>
				</div>
				<div class="item shadow flex_aj column">
					<div class="flex_a">
						<img src="/static/ico24.png" style="width: 30rpx;" mode="widthFix" />
						<text class="ml10 font26">剩余余额(元)</text>
					</div>
					<div class="font34 mt10">￥256</div>
				</div>
				<div class="item shadow flex_aj column">
					<div class="flex_a">
						<img src="/static/ico25.png" style="width: 30rpx;" mode="widthFix" />
						<text class="ml10 font26">设备使用率(%)</text>
					</div>
					<div class="font34 mt10">25%</div>
				</div>
				<div class="item shadow flex_aj column">
					<div class="flex_a">
						<img src="/static/ico26.png" style="width: 30rpx;" mode="widthFix" />
						<text class="ml10 font26">分成比例(%)</text>
					</div>
					<div class="font34 mt10">25%</div>
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
	.face {
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
	}
	.list{
		.item{
			float: left;
			width: 49%;
			height: 168upx;
			background: #fff;
			border-radius: 10upx;
			margin-bottom: 20upx;
			&:nth-of-type(2n){
				margin-left: 2%;
			}
		}
	}
</style>
