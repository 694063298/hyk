<template>
    <div>
			<div class="lh80 plr24">
				<text class="col9">商家名称：</text>
				<text>如意茶餐厅</text>
			</div>
			<ul class="lists plr24">
				<li class="lists_item plr20 bw ptb24 border-r1 shadow">
					<div class="flex_sb">
						<div>
							<text class="col9">设备编号：</text>
							<text>1463453</text>
						</div>
						<div class="minBtn bgc1 cf font26">开柜</div>
					</div>
					<div class="mt10">
						<text class="col9">充电宝ID：</text>
						<text>1463453</text>
					</div>
					<div class="flex mt10">
						<text class="col9">电量状态：</text>
						<div class="flex_a">
							<div class="battery"></div>
							<text>100%</text>
						</div>
					</div>
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
	.lists{
		.lists_item{
			.minBtn{
				border-radius: 30upx;
			}
			.battery{}
		}
	}
</style>
