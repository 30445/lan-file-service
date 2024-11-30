import './App.scss'
import {BrowserRouter} from "react-router";
import useRoutes from "./routes";
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';

dayjs.locale('zh-cn');

function App() {
  return (
    <ConfigProvider locale={zhCN} theme={{cssVar: true}}>
      <BrowserRouter>
        {useRoutes()}
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
