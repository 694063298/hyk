<template>
	<div>
		<div class='pt200 tac'>
			<div class="ft36">柜式陪护床订单查看</div>
			<div class="btnType mt80 type1">业务订单查看</div>
			<div class="btnType mt70 type2">直营医院订单查看</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {

			}
		},
		onLoad(e) {

		},
		onShow() {

		},
		methods: {

		}
	}
</script>

<style scoped lang='scss'>
	.btnType {
		width:410upx;
		font-size: 36upx;
		line-height:110upx;
		color:#fff;
		display:inline-block;
		border-radius: 10upx;
		&.type1{
			background:rgba(251,151,49,1);
			box-shadow: 4upx 4upx 4upx 6upx rgba(251,151,49,0.2);
		}
		&.type2{
			background:rgba(99,190,243,1);
			box-shadow: 4upx 4upx 4upx 6upx rgba(99,190,243,0.2);
		}
		&.type3{
			background:rgba(240,152,131,1);
			box-shadow: 4upx 4upx 4upx 6upx rgba(240,152,131,0.2);
		}
	}
</style>
