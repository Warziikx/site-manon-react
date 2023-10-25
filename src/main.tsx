import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement!.hasChildNodes()) {
	ReactDOM.hydrate(<App />, rootElement);
} else {
	ReactDOM.render(<App />, rootElement);
}
