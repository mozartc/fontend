import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/test',
    component: Layout,
    name: 'test',
    meta: { title: 'test', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'Test',
        component: () => import('@/views/test/index'),
        meta: { title: 'Test', icon: 'test' }
      },
      {
        path: 'index2',
        name: 'Test2',
        component: () => import('@/views/test/index2'),
        meta: { title: 'Test2', icon: 'test' }
      },
      {
        path: 'index3',
        name: 'Test3',
        component: () => import('@/views/test/index3'),
        meta: { title: 'Test3', icon: 'test' }
      },
      {
        path: 'index4',
        name: 'Test4',
        component: () => import('@/views/test/index4'),
        meta: { title: 'Test4', icon: 'test' }
      },
      {
        path: 'index5',
        name: 'Test5',
        component: () => import('@/views/test/index5'),
        meta: { title: 'Test5', icon: 'test' }
      },
      {
        path: 'index6',
        name: 'Test6',
        component: () => import('@/views/test/index6'),
        meta: { title: 'Test6', icon: 'test' }
      },
      {
        path: 'index7',
        name: 'Test7',
        component: () => import('@/views/test/index7'),
        meta: { title: 'Test7', icon: 'play' }
      },
      {
        path: 'index8',
        name: 'Test8',
        component: () => import('@/views/test/index8'),
        meta: { title: 'Test8', icon: 'play' }
      },
      {
        path: 'index9',
        name: 'Test9',
        component: () => import('@/views/test/index9'),
        meta: { title: 'Test9', icon: 'play' }
      },
      {
        path: 'index10',
        name: 'Test10',
        component: () => import('@/views/test/index10'),
        meta: { title: 'Test10', icon: 'play' }
      },
      {
        path: 'index11',
        name: 'Test11',
        component: () => import('@/views/test/index11'),
        meta: { title: 'Test11', icon: 'play' }
      },
      {
        path: 'index12',
        name: 'Test12',
        component: () => import('@/views/test/index12'),
        meta: { title: 'Test12', icon: 'play' }
      }
    ]
  },

  {
    path: '/test33',
    component: Layout,
    name: 'test33',
    meta: { title: 'test33', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'Test',
        component: () => import('@/views/whitepage'),
        meta: { title: 'Test', icon: 'test' },
        redirect:'/test33/index/index2',
        children:[
          {
            path: 'index2',
            name: 'Test2',
            component: () => import('@/views/test/index2'),
            meta: { title: 'Test2', icon: 'test' },
            hidden:true
          }
        ]
      },
      {
        path: 'index2',
        name: 'Test2',
        component: () => import('@/views/test/index2'),
        meta: { title: 'Test2', icon: 'test' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
