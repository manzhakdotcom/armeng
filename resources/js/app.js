require('./bootstrap');

window.Vue = require('vue');

Vue.component('all-stations', require('./components/IndexComponent.vue').default);
import swal from 'sweetalert2';
window.swal = swal;
window.Fire = new Vue();
const app = new Vue({
    el: '#app'
});