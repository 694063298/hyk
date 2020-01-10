<template>
	<button :disabled="clickState" @click="onclick" :class="[className]">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: "index",
		props: {
			url: {
				type: String,
				value: ''
			},
			clickState: {
				type: Boolean,
				default: false
			},
			className: {
				type: String,
				default: ''
			}
		},
		data() {
			return {
				buttonStatus: true,
				stopTime: null
			}
		},
		created() {

		},
		mounted() {

		},
		methods: {
			onclick() {
				if (this.buttonStatus) {
					this.buttonStatus = false;
					if (this.url) {
						return uni.navigateTo({
							url: this.url
						});
					}
					this.$emit('click');
				}
				this.setButton();
			},
			setButton() {
				clearTimeout(this.stopTime);
				this.stopTime = setTimeout(() => {
					this.buttonStatus = true
				}, 1000)
			}
		}
	}
</script>

<style scoped lang='stylus'>

</style>
