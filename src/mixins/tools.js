import {HOST} from '@/config'
const tools = {
	methods: {
		formatDate(now, ff) {
		    let year = now.getFullYear();
		    let month = now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1;
		    let date = now.getDate() < 10 ? '0' + now.getDate() : now.getDate();
		    let hour = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
		    let minute = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
		    let second = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
		    if(ff == 'Y-m'){
		        return year + "-" + month;
		    }else if (ff == 'Y-m-d') {
		        return year + "-" + month + "-" + date;
		    } else if (ff == 'Y.m.d') {
		        return year + "." + month + "." + date;
		    } else if (ff == 'Y-m-d H:i:s') {
		        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
		    } else if (ff == 'Y-m-d H:i') {
		        return year + "-" + month + "-" + date + " " + hour + ":" + minute;
		    }
		},
		format(time, ff) {
		    time = time.toString();
		    if (time.length == 10) time = time * 1000;
		    let d = new Date(time * 1);
		    return this.formatDate(d, ff);
		},
		qs({
			url = '',
			...other
		} = {}) {
			let res = []
			for (let key in other) {
				let value = other[key]
				if (typeof value === 'object') {
					value = JSON.stringify(value)
				}
				res.push(`${key}=${value}`)
			}
			res = res.join('&')
			if (url) {
				res = {
					url: `${url}?${res}`
				}
			}
			return res
		},
		toast(title, keep) {
			uni.showToast({
				icon: 'none',
				title: title,
				mask: true,
				duration: keep || 2000
			});
		},
		loadingShow(title) {
			uni.showLoading({
				mask: true,
				title: title || '加载中..'
			});
		},
		toastClear() {
			uni.hideLoading();
		},
		alert(content, title) {
			uni.showModal({
				title: title || '温馨提示',
				confirmColor: '#916fe8',
				showCancel: false,
				content: content,
				success(res) {
					if (res.confirm) {}
				}
			})
		},
		async confirm({
			title = '温馨提示',
			content = '',
			confirmColor = '#916fe8',
			showCancel = true
		} = {}) {
			let [err, res] = await uni.showModal({
				title: title,
				content: content,
				confirmColor: confirmColor,
				showCancel: showCancel
			});
			return res;
		},
		getUrlParam(name, url) {
			let param = url.substr(url.indexOf('?') + 1);
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = param.match(reg);
			if (r != null) return unescape(r[2]);
			return '';
		},
		locationHref() {
			return getCurrentPages()[getCurrentPages().length - 1].route;
		},
		uploadFile(name, cb, data, params, count) {
			var that = this;
			var count = count ? count : 1;
			var chooseParams = {
				count: count,
				success: (res1) => {
					console.log(res1);
					typeof cb == "function" && cb(1, name, res1);
					var tempFilePaths = res1.tempFilePaths;
					for (var tempFileIndex in tempFilePaths) {
						uni.uploadFile({
							url: HOST + '/api/uploads',
							filePath: tempFilePaths[tempFileIndex],
							name: 'files',
							header: {
								'content-type': 'application/x-www-form-urlencoded'
							},
							formData: data || {},
							success: function(res3) {
								console.log(res3);
								res3 = res3.data;
								res3 = res3.trim();
								res3 = JSON.parse(res3);
								if (res3.code == 1) {
									typeof cb == "function" && cb(2, name, res3.data);
								} else {
									uni.showToast({
										icon: 'none',
										title: res3.msg
									});
								}
							},
							fail: (res2) => {
								typeof cb == "function" && cb(-2, name, res2);
							}
						})
					}
				},
				fail(res1) {
					typeof cb == "function" && cb(-1, name, res1);
				}
			};
			if (typeof params == 'object') {
				for (var i in params) chooseParams[i] = params[i];
			}
			uni.chooseImage(chooseParams)
		}
	}
}

export {
	tools
}
