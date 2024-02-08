import './style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VFocus from "./components/directives/VFocus"

const app = createApp(App)
app.directive('focus', VFocus)
app.use(createPinia())

app.mount('#app')
// var x = document.querySelector('.hoverItem0');
// var y = document.querySelector('.visibleItem0');

// x.onmouseover = function () {
//     y.style.display = 'block';
// };
// x.onmouseout = function () {
//     y.style.display = 'none';
// };
// var a = document.querySelector('.hoverItem1');
// var b = document.querySelector('.visibleItem1');

// a.onmouseover = function () {
//     b.style.display = 'block';
// };
// a.onmouseout = function () {
//     b.style.display = 'none';
// };
// var c = document.querySelector('.hoverItem2');
// var d = document.querySelector('.visibleItem2');

// c.onmouseover = function () {
//     d.style.display = 'block';
// };
// c.onmouseout = function () {
//     d.style.display = 'none';
// };