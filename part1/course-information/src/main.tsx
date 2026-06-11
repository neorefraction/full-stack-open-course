import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

const root = document.getElementById("root") || document.createElement("div");

ReactDOM.createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
