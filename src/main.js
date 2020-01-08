import Vue from 'vue'
import App from './App'
import { tools } from '@/mixins/tools.js'
Vue.mixin(tools);
import * as filters from "./utils/filter";
Object.keys(filters).forEach(key => { //返回filters对象中属性名组成的数组
    Vue.filter(key, filters[key])
});

import fmButton from '@/components/fm-button/index';
import fmEmpty from '@/components/fm-empty/index';
import fmRich from '@/components/fm-rich/index';
import fmTabBar from '@/components/fm-tabBar/index';
import {uniLoadMore} from '@dcloudio/uni-ui'
Vue.component('fm-button', fmButton);
Vue.component('fm-empty', fmEmpty);
Vue.component('fm-rich', fmRich);
Vue.component('fm-tabBar', fmTabBar);
Vue.component('uniLoadMore', uniLoadMore);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
