import {Layout, Menu, MenuProps, GetProp} from "antd";
import {FileOutlined, HomeOutlined, SettingOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useLocation, useNavigate} from "react-router";

const {Sider, Content} = Layout

type MenuItem = GetProp<MenuProps, 'items'>[number];
const menuList: MenuItem[] = [
  {
    key: "/",
    label: "首页",
    icon: <HomeOutlined />
  },
  {
    key: "/file",
    label: "文件",
    icon: <FileOutlined />
  },
  {
    key: "/setting",
    label: "设置",
    icon: <SettingOutlined />
  }
]
export default (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    navigate(e.key)
  };

  return (
    <Layout className="h-full">
      <Sider collapsed={true}>
        <Menu
          items={menuList}
          theme={"dark"}
          selectedKeys={[current]}
          onClick={onClick}
        ></Menu>
      </Sider>
      <Layout>
        {/*<Header></Header>*/}
        <Content>
          {props.children}
        </Content>
      </Layout>
    </Layout>

  )
}
