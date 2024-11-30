import {Route, Routes} from "react-router";
import {LazyCom} from "../components/LazyCom.tsx";
import {lazy, LazyExoticComponent} from "react";

const createRoute = (com: LazyExoticComponent<any>) => {
  return LazyCom({WarpComponent: com, layout: true})
}

const routes = [
  {
    path: "/",
    element: createRoute(lazy(() => import("@/pages/home/Home")))
  },
  {
    path: "/file",
    element: createRoute(lazy(() => import("@/pages/file/File")))
  },
  {
    path: "/setting",
    element: createRoute(lazy(() => import("@/pages/setting/Setting")))
  }
]

const useRoutes = () => {
  return <>
    <Routes>
      {
        routes.map(route => {
          return <Route path={route.path} element={route.element} key={route.path}></Route>
        })
      }
    </Routes>
  </>
}

export default useRoutes
