export default {
	data(){
		return {
			page:1,
			limit:20,
			loadMoreText: '',
			totalPage:'',
			loadList:[]
		}
	},
	onShow(){
		this.loadData();
	},
	onPullDownRefresh() {
		this.page = 1;
		this.loadData();
	},
	onReachBottom() {
		if (this.page < this.totalPage) {
			this.page++;
			this.loadMoreText = 'loading';
			this.loadData();
		} else {
			this.loadMoreText = 'noMore';
		}
	}
}