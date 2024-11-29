import {ComponentType, Suspense} from "react";
import {Spin} from "antd"
import Layout from "@/layout/Layout.tsx";

export const LazyCom = ({WarpComponent, layout, ...props}: {WarpComponent: ComponentType<any>, [key: string]: any}) => {


  return (
    layout ?
      <Layout>
        <Suspense fallback={
          <Spin></Spin>
        }>
          <WarpComponent {...props} />
        </Suspense>
      </Layout>:
      <Suspense fallback={
        <Spin></Spin>
      }>
        <WarpComponent {...props} />
      </Suspense>
  )
}
