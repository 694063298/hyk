<template>
    <div class="p20">
			<section class="bw shadow border-r1 plr30">
				<div class="lh80 bdb">2019-09-01 12:12:12</div>
				<div class="ptb24">
					<div class="flex_sb">
						<text class="col9">订单编号</text>
						<text class="ml20">464644334321</text>
					</div>
					<div class="flex_sb mt10">
						<text class="col9">设备编号</text>
						<text class="ml20">464644334321</text>
					</div>
					<div class="flex_sb mt10">
						<text class="col9">商户名称</text>
						<text class="ml20">4643</text>
					</div>
					<div class="flex_sb mt10">
						<text class="col9">用户昵称</text>
						<text class="ml20">lucky</text>
					</div>
				</div>
			</section>
			<section class="bw shadow border-r1 plr30 mt20">
				<div class="lh80 bdb">报障内容</div>
				<div class="col9 ptb20 mh100">设备出不来</div>
			</section>
			<section class="bw shadow border-r1 plr30 mt20">
				<div class="lh80 bdb">用户信息</div>
				<div class="ptb24">
					<div class="flex_sb">
						<text class="col9">联系姓名</text>
						<text class="ml20">Jerry</text>
					</div>
					<div class="flex_sb mt10">
						<text class="col9">联系电话</text>
						<text class="ml20">13632347040</text>
					</div>
					<div class="flex_sb mt10">
						<text class="col9">是否申请退款</text>
						<text class="ml20">是</text>
					</div>
				</div>
			</section>
			<div class="plr60 flex mt80">
				<fm-button class="flex1" className="cf bgc3 lh90 border-r1 font34">处理</fm-button>
				<fm-button class="flex1 ml60" className="cf bgc4 lh90 border-r1 font34">退款</fm-button>
			</div>
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

</style>
