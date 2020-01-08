<template>
    <div class='swiper_wrap' :style='"height:" +swiperHeight+"upx"'>
        <swiper autoplay="true" circular="true" interval="4000" :indicator-active-color='indicator' duration="1000"
                indicator-dots='true' :style='ostyle'>
            <swiper-item class="flex-center" v-for='(item,index) of imgs' :key='index'>
                <img :src="item|imgFormat()" class='banner_img' @click='previewImage(item)'/>
            </swiper-item>
        </swiper>
    </div>
</template>

<script>
    import { HOST } from '@/config'

    export default {
        name: "index",
        props: {
            swiperHeight: {
                type: String,
                value: '400'
            },
            indicator: {
                type: String,
                value: ''
            },
            ostyle: {
                type: String,
                value: ''
            },
            imgs: {
                type: Array,
                value: [],
            }
        },
        data() {
            return {}
        },
        created() {

        },
        mounted() {

        },
        methods: {
            previewImage(item) {
                let current = item.indexOf('http') < 0 ? HOST + item : item;
                let banner = [];
                this.imgs.forEach(item => {
                    banner.push(item.indexOf('http') < 0 ? HOST + item : item);
                });
                uni.previewImage({
                    current: current,
                    urls: banner
                });
            }
        }
    }
</script>

<style scoped lang='stylus'>
    .swiper_wrap {
        overflow: hidden;
        swiper {
            height: 100%;
            overflow: hidden;
            .banner_img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>
