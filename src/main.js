// In main.js, we're bringing in Vue and rendering the App to our app div in
// index.html.

import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes';

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes,
});

Vue.config.productionTip = false

new Vue({
	router,
  render: h => h(App),
}).$mount('#app')
