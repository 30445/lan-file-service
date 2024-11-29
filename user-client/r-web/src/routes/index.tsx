import {Route, Routes} from "react-router";
import {LazyCom} from "../components/LazyCom.tsx";
import {lazy} from "react";

const routes = [
  {
    path: "/",
    component: LazyCom({WarpComponent: lazy(() => import("@/pages/home/Home"))})
  }
]

const useRoutes = () => {
  return <>
    <Routes>
      {
        routes.map(route => {
          return <Route path={route.path} element={route.component} key={route.path}></Route>
        })
      }
    </Routes>
  </>
}

export default useRoutes
