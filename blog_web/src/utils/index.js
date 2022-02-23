import Vue from 'vue'
import { isPC } from './isPC'
import { randomColor } from './randomColor'
import { markdown } from './markdown'
Vue.prototype.isPC = isPC

export { randomColor, markdown }
