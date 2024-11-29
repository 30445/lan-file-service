import './App.scss'
import {BrowserRouter} from "react-router";
import useRoutes from "./routes";

function App() {

  return (
    <>
      <BrowserRouter>
        {useRoutes()}
      </BrowserRouter>
    </>
  )
}

export default App
