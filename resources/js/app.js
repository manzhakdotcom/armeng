require('./bootstrap');

window.Vue = require('vue');

Vue.component('station-list', require('./components/StationList.vue').default);

const app = new Vue({
    el: '#app',
});