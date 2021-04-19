import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; //Provider is a component that we get from react-redux
// This provider is a component class that we want to wrap around the entire application
// Because we want everything inside to have access to this store object that we get from redux
import store from "./redux/store";

import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
