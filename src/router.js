import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("./components/Home.vue"),
      children:[
        {
          path: 'both',
          name: 'both',
          component: () => import("./views/Both.vue")
        },
        {
          path: 'rect',
          name: 'rect',
          component: () => import("./views/Rect.vue")
        },
        {
          path: 'circle',
          name: 'circle',
          component: () => import("./views/Circle.vue")
        },
        {
          path: 'dot',
          name: 'dot',
          component: () => import("./views/Dot.vue")
        },
        {
          path: 'h1',
          name: 'h1',
          component: () => import("./views/H1.vue")
        },
        {
          path: 'slash',
          name: 'slash',
          component: () => import("./views/Slash.vue")
        },
        {
          path: 'transparent',
          name: 'transparent',
          component: () => import("./views/Transparent.vue")
        },
        {
          path: 'hover',
          name: 'hover',
          component: () => import("./views/Hover.vue")
        },
        {
          path: 'echarts',
          name: 'echarts',
          component: () => import("./views/Echarts.vue")
        },
      ]
    }
  ]
})
