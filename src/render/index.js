let rootContainer = null;
let rootComponent = null;

export function render(component, container) {
	rootComponent = component;
	rootContainer = container;
	update();
}

export function update() {
	rootContainer.innerHTML = ""; // Hapus elemen lama
	const vdom = rootComponent(); // Panggil ulang function component
	mount(vdom, rootContainer);
	// const newVDOM = rootComponent(); // Generate Virtual DOM baru
	// diff(prevVDOM, newVDOM, rootContainer); // Bandingkan dengan yang lama
	// prevVDOM = newVDOM; // Simpan Virtual DOM baru untuk update berikutnya
}

export function mount(vdom, parent) {
	if (typeof vdom === "string" || typeof vdom === "number") {
		parent.appendChild(document.createTextNode(vdom));
		return;
	}

	const dom = document.createElement(vdom.type);

	// Tambahkan atribut/props
	for (const [key, value] of Object.entries(vdom.props || {})) {
		if (key.startsWith("on")) {
			const eventType = key.toLowerCase().substring(2);
			dom.addEventListener(eventType, value);
		} else {
			dom[key] = value;
		}
	}

	// Render children
	vdom.children.forEach((child) => mount(child, dom));

	parent.appendChild(dom);
}
