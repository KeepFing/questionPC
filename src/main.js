// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import axios from 'axios';
Vue.prototype.axios = axios;

import { Loading } from 'element-ui';
import { MessageBox } from 'element-ui';
let _this = this
// 添加请求拦截器
let loading;
axios.interceptors.request.use(function(config) {
	// 在发送请求之前做些什么
	loading = Loading.service({
		lock: true,
		text: '数据加载中',
		spinner: 'el-icon-loading',
		background: 'rgba(0, 0, 0, 0.7)'
	});
	return config;
}, function(error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
	// 对响应数据做点什么
	loading.close()
	if (response.status != 200) {
		MessageBox.alert('服务器错误，请联系管理员', '', {
			confirmButtonText: '确定',
			type:"error"
		})
	}else{
		if (response.data.code != 0) {
			MessageBox.alert(response.data.msg, '', {
				confirmButtonText: '确定',
				type:"error"
			})
		}
	}
	return response;
}, function(error) {
	// 对响应错误做点什么
	MessageBox.alert('网络异常，请稍后再试', '', {
		confirmButtonText: '确定',
		type:"error"
	})
	loading.close()
	return Promise.reject(error);
});

Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})