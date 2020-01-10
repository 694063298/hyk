<template>
    <div class="list">
			<navigator url="/pages/admin/agent/public/faultInfo/index" class="item flex_a">
				<div class="flex1 pw0">
					<div class="font30 ellipsis">报障消息</div>
					<div class="mt10 ellipsis">2019年12月11日，有新的报障消息，点击查看</div>
				</div>
				<img src="/static/arrowRight.png" style="width:16rpx;" mode="widthFix" />
			</navigator>
			<navigator url="/pages/admin/agent/public/faultInfo/index" class="item flex_a">
				<div class="flex1 pw0">
					<div class="font30 ellipsis">报障消息</div>
					<div class="mt10 ellipsis">2019年12月11日，有新的报障消息，点击查看</div>
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
	.list{
		padding: 20upx 24upx 0;
		.item{
			position: relative;
			padding: 24upx 20upx;
			background: #fff;
			border-radius: 10upx;
			& + .item{
				margin-top: 20upx;
			}
		}
	}
</style>
