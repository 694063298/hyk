<template>
	<div class="pb20">
		<div class="lh80 plr24">
			<text class="col9">商家名称：</text>
			<text>如意茶餐厅</text>
		</div>
		<ul class="lists plr24">
			<li class="lists_item plr20 bw ptb24 border-r1 shadow" v-for="(item,index) of list" :key="index">
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
						<div class="battery green" :class="['battery',{green:item.type==1},{orange:item.type==2},{red:item.type==3}]">
							<div class="percent" :style="'width:'+item.battery+'%'"></div>
						</div>
						<text class="ml10">100%</text>
					</div>
				</div>
				<div class="mt10">
					<text class="col9">格子位置：</text>
					<text>1</text>
				</div>
				<div class="mt10">
					<text class="col9">添加时间：</text>
					<text>2019-12-10  09:25</text>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "index",
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.list = [{
					type: 1,
					battery: 40
				},
				{
					type: 2,
					battery: 50
				},
				{
					type: 3,
					battery: 60
				}, {
					type: 1,
					battery: 70
				}
			]
		},
		onShow() {

		},
		methods: {

		}
	}
</script>

<style scoped lang='scss'>
	.lists {
		.lists_item {
			.minBtn {
				border-radius: 30upx;
			}

			.battery {
				position: relative;
				width: 50upx;
				height: 28upx;
				border: 2px solid $green;
				border-radius: 4upx;
				padding: 1px;
				box-sizing: border-box;

				&::after {
					content: '';
					position: absolute;
					width: 4px;
					height: 16upx;
					background-color: $green;
					top: 50%;
					margin-top: -8upx;
					right: -4px;
					border-radius: 0 2px 2px 0;
				}

				.percent {
					width: 0%;
					height: 100%;
				}

				&.green {
					border-color: $green;

					&::after {
						background-color: $green;
					}

					.percent {
						background-color: $green;
					}
				}

				&.orange {
					border-color: $orange;

					&::after {
						background-color: $orange;
					}

					.percent {
						background-color: $orange;
					}
				}

				&.red {
					border-color: $red;

					&::after {
						background-color: $red;
					}

					.percent {
						background-color: $red;
					}
				}
			}
		}
	}
</style>
