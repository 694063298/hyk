<template>
    <div class="plr24 pt20">
			<section class="bw shadow border-r1 plr40">
				<div class="flex_sb h100 bdb">
					<text>提现至微信</text>
					<div class="flex_a">
						<img src="/static/wxIco.png" style="width: 48upx;" mode="widthFix" />
						<text class="ml10">请绑定微信</text> 
					</div>
				</div>
				<div class="ptb20">提现金额</div>
				<label class="flex ptb24 bdb">
					<img src="/static/rmb.png" mode="widthFix" style="width: 30rpx;" />
					<input class="uni-input flex1 pw0 ml24" type="number">
				</label>
				<div class="ptb30">
					<text class="col9">可提现余额:</text>
					<text class="color1">￥0.50</text>
					<text class="ml30 color4 font26">全部提现</text>
				</div>
				<div class="pb30 pt20">
					<fm-button className="cf bgc1 lh90 border-r1 font34 btn_tap">提现</fm-button>
				</div>
			</section>
			<div :class="['lh80',{'fixed_top':fixed}]">提现记录</div>
			<ul class="list">
				<li class="item flex_sb p20">
					<div>
						<div>
							<text class="col9">订单编号:</text>
							<text class="ml10">45646464</text>
						</div>
						<div class="mt10">
							<text class="col9">提现金额:</text>
							<text class="ml10">300.00元</text>
						</div>
						<div class="col9 mt10">
							<text>提现时间:</text>
							<text class="ml10">2019-03-25 12:12:12</text>
						</div>
						<div class="col9 mt10">
							<text>打款时间:</text>
							<text class="ml10">2019-03-25 12:12:12</text>
						</div>
					</div>
					<div class="color5">已打款</div>
				</li>
				<li class="item flex_sb p20">
					<div>
						<div>
							<text class="col9">订单编号:</text>
							<text class="ml10">45646464</text>
						</div>
						<div class="mt10">
							<text class="col9">提现金额:</text>
							<text class="ml10">300.00元</text>
						</div>
						<div class="col9 mt10">
							<text>提现时间:</text>
							<text class="ml10">2019-03-25 12:12:12</text>
						</div>
					</div>
					<div class="color6 tac">
						<div>已通过</div>
						<div class="font24">等待打款</div>
					</div>
				</li>
				<li class="item flex_sb p20">
					<div>
						<div>
							<text class="col9">订单编号:</text>
							<text class="ml10">45646464</text>
						</div>
						<div class="mt10">
							<text class="col9">提现金额:</text>
							<text class="ml10">300.00元</text>
						</div>
						<div class="col9 mt10">
							<text>提现时间:</text>
							<text class="ml10">2019-03-25 12:12:12</text>
						</div>
					</div>
					<div class="color1">待审核</div>
				</li>
				<li class="item flex_sb p20" v-for="item in 10" :key="item">
					<div>
						<div>
							<text class="col9">订单编号:</text>
							<text class="ml10">45646464</text>
						</div>
						<div class="mt10">
							<text class="col9">提现金额:</text>
							<text class="ml10">300.00元</text>
						</div>
						<div class="col9 mt10">
							<text>提现时间:</text>
							<text class="ml10">2019-03-25 12:12:12</text>
						</div>
					</div>
					<div class="tae">
						<div class="color7">已拒绝</div>
						<div class="col9 font24">拒绝原因:账号有误</div>
					</div>
				</li>
			</ul>
			<div class="goTop bgc1 flex_aj" v-show="fixed" @click="goTop">
				<img src="/static/goTop.png" style="width: 60upx;" mode="widthFix" />
			</div>
	  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
							fixed:false
						}
        },
        onLoad() {

        },
        onShow() {

        },
				onPageScroll(e){
					if(e.scrollTop > 246){
						this.fixed = true;
					}else{
						this.fixed = false;
					}
				},
        methods: {
			
		    }
    }
</script>

<style scoped lang='scss'>
	.list{
		.item{
			background-color: #fff;
			border-radius: 10upx;
			& + .item{
				margin-top: 10upx;
			}
		}
	}
	.fixed_top{
		background-color: #f0f0f0;
		padding: 0 24upx;
		box-sizing: border-box;
	}
	.goTop{
		position: fixed;
		bottom: 50upx;
		right: 24upx;
		width: 90upx;
		height: 90upx;
		border-radius: 50%;
	}
</style>
