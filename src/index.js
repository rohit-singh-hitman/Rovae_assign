import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
