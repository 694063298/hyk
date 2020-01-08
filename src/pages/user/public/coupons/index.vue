<template>
	<ul class='plr20 lists'>
		<li class='flex bw lists_item'>
			<div class='left'>
				<img src='/static/couponBg1.png' class='icoBg' />
				<div class='icoBg_text flex_aj ft36 cf'>优惠券</div>
			</div>
			<div class='right flex1'>
				<img src='/static/ico18.png' class='statusBg' />
				<div class='pl60'>
					<div class='fw color2'>
						<text class='ft40'>￥</text>
						<text class='ft100 money'>88</text>
					</div>
					<div class='font13 color1'>有效期：2020-01-03</div>
				</div>
			</div>
		</li>
		<li class='flex bw lists_item'>
			<div class='left'>
				<img src='/static/couponBg2.png' class='icoBg' />
				<div class='icoBg_text flex_aj ft36 cf'>优惠券</div>
			</div>
			<div class='right flex1 col9'>
				<img src='/static/ico19.png' class='statusBg' />
				<div class='pl60'>
					<div class='fw'>
						<text class='ft40'>￥</text>
						<text class='ft100 money'>88</text>
					</div>
					<div class='font13'>有效期：2020-01-03</div>
				</div>
			</div>
		</li>
	</ul>
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
	.lists {
		padding-top: 20upx;
		.lists_item {
			border-radius: 10upx;
			overflow: hidden;
			position: relative;

			&+.lists_item {
				margin-top: 20upx;
			}

			.left {
				position: relative;
				width: 198upx;
				height: 208upx;
			}

			.right {
				position: relative;
				.statusBg {
					position: absolute;
					right: 0;
					top: 0;
					width: 150upx;
					height: 128upx;
				}

				.money {
					line-height: 150upx;
				}
			}

			.icoBg,
			.icoBg_text {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
