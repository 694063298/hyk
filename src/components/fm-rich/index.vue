<template>
	<div>
		<u-parse :content="content" />
	</div>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue'
	export default {
		name: "index",
		components: {
			uParse
		},
		props: {
			content: {
				type: String,
				value: ''
			},
		},
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

<style scoped lang='stylus'>
	@import url("../gaoyia-parse/parse.css");
</style>
