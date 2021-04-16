import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('date',(value) => {
   return dayjs(value);
})