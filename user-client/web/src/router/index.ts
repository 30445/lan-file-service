import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Layout from "@/layout/Layout.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Layout,
    redirect: "/public",
    children: [
      {
        path: "/public",
        component: () => import("@/pages/public/public.vue"),
        meta: {
          title: "首页"
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }

  next()
})

export default router
