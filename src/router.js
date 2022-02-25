import Vue from 'vue'
import Router from 'vue-router'
import UserForm from './components/pages/user/Form.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: UserForm },
    { path: '/user/form', component: UserForm }
  ]
})