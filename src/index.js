import { createElement } from "./createElement";
import { makeState } from "./state";
import { render } from "./render";

const Counter = () => {
	const [count, setCount] = makeState(0);

	return createElement(
		"div",
		null,
		createElement("h1", null, "Counter App"), // Ini tidak akan berubah
		createElement("p", null, `Count: ${count}`), // Ini yang berubah
		createElement("button", { onClick: () => setCount(count + 1) }, "Increment")
	);
};

render(Counter, document.getElementById("root"));
