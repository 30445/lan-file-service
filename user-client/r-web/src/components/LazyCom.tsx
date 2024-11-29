import {ComponentType, Suspense} from "react";
import {Spin} from "antd"

export const LazyCom = ({WarpComponent, ...props}: {WarpComponent: ComponentType<any>, [key: string]: any}) => {
  return <Suspense fallback={
    <Spin></Spin>
  }>
    <WarpComponent {...props} />
  </Suspense>
}
