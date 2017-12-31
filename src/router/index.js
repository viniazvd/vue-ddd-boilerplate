import Vue from 'vue'
import VueRouter from 'vue-router'
// import beforeEach from './beforeEach'
import routes from './routes'

Vue.use(VueRouter)

// const load = (component) => {
//   return () => System.import(`components/${component}.vue`)
// }

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  mode: 'history'
})

// router.beforeEach(beforeEach)

export default router
