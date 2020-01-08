<template>
	<div>
		<div class='ptb80 flex_aj'>
			<div class="logo bgc1 flex_aj">
				<img src='/static/logo.png' style="width:166upx" mode="widthFix" />
			</div>
		</div>
		<div class="plr50">
			<div class='border-r1 plr30 bw'>
				<label class='flex_a h110 bdb'>
					<img src='/static/ico10.png' style='width:30rpx;' mode='widthFix' />
					<input type="number" v-model="phone" placeholder="请输入您的账号" placeholder-class='col9' class="col3 plr20 flex1" />
				</label>
				<label class='flex_a h100'>
					<img src='/static/ico11.png' style='width:30rpx;' mode='widthFix' />
					<input :type="eye?'text':'password'" v-model="password" placeholder="请输入您的密码" placeholder-class='col9' class="col3 plr20 flex1" />
					<img :src='`/static/${eye?"eye":"eye_close"}.png`' style='width:34rpx;' mode='widthFix' @click="eye=!eye" />
				</label>
			</div>
			<navigator url="/pages/public/resetPas/index" hover-class="none" class="tae ptb24">
				<text class="col9">忘记密码?</text>
			</navigator>
			<div>
				<fm-button className="lh90 font32 cf border-r1 tac bgc1 btn_tap" @onclick="login">登录</fm-button>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		validatePhone
	} from "@/utils/validate";
	export default {
		name: "index",
		data() {
			return {
				eye: false,
				phone: '',
				password: ''
			}
		},
		onLoad() {
			
		},
		onShow() {

		},
		computed: {
			isValid() {
				if (!this.phone) {
					return {
						ok: false,
						msg: "请输入手机号码"
					}
				}
				if (!validatePhone(this.phone)) {
					return {
						ok: false,
						msg: "请输入正确的手机号"
					}
				}
				if (!this.password) {
					return {
						ok: false,
						msg: "请输入密码"
					}
				}
				return {
					ok: true,
					msg: "ok"
				};
			}
		},
		methods: {
			async login() {
				if (!this.isValid.ok) {
					return uni.showToast({
						icon: 'none',
						title: this.isValid.msg
					});
				} else {
					let [a, {
						code,
						errMsg
					}] = await uni.login();
					console.log(a, code, errMsg);
					if (errMsg === 'login:ok') {
						let data = await getOpenIdSmall({
							wxCode: code
						});
						console.log(data);
						uni.setStorageSync('openId', data.data.openId);
						let {
							phone,
							password
						} = this;
						let res = await login({
							phone,
							password,
							applicationType: 1
						});
						uni.hideLoading();
						console.log(res);
						uni.setStorageSync('login_message', Object.assign(res.data, {
							phone,
							password
						}));
						let type = res.data.type;
						switch (type) {
							case 1:
								uni.switchTab({
									url: '/pages/tabBar/index/index'
								});
								break;
							case 4:
								uni.redirectTo({
									url: '/pages/replenish/index/index'
								});
								break;
							case 5:
								uni.redirectTo({
									url: '/pages/ops/index/index'
								});
								break;
						}
					}
				}
			}
		}
	}
</script>

<style scoped lang='scss'>
	.logo {
		width: 200upx;
		height: 200upx;
		border-radius: 10upx;
	}
</style>
