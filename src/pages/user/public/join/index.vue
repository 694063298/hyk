<template>
    <div class="p24">
			<label class="plr24 bw flex_a h110 border-r1 shadow">
				<text>姓名</text>
				<input type="text" class="flex1 pw0 tae" placeholder="请输入您姓名"  placeholder-class='col9' />
			</label>
			<label class="plr24 bw flex_a h110 border-r1 shadow mt20">
				<text>联系方式</text>
				<input type="text" class="flex1 pw0 tae" placeholder="请输入您的联系方式"  placeholder-class='col9' />
			</label>
			<label class="plr24 bw flex_a h110 border-r1 shadow mt20">
				<text>所在城市</text>
				<input type="text" class="flex1 pw0 tae" placeholder="请输入您合作的城市"  placeholder-class='col9' />
			</label>
			<div class="mt200">
				<fm-button className="lh90 ft32 cf border-r1 tac bgc1 btn_tap">提交</fm-button>
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
