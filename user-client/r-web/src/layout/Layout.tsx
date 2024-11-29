import LayoutHeader from "@/layout/LayoutHeader.tsx";

export default (props: any) => {
  return (
    <div className="layout flex">
      <LayoutHeader />
      <div className="layout-content">
        {props.children}
      </div>
    </div>
  )
}
