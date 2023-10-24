import { hydrate, render } from "react-dom";

import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement!.hasChildNodes()) {
	hydrate(<App />, rootElement);
} else {
	render(<App />, rootElement);
}