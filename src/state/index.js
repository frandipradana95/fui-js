import { update } from "../render";

let states = [];
let stateIndex = 0;

export function makeState(initialValue) {
	const localIndex = stateIndex;
	states[localIndex] = states[localIndex] ?? initialValue;

	function setState(newValue) {
		states[localIndex] = newValue;
		stateIndex = 0; // Reset index saat re-render
		update(); // Render ulang UI
	}

	stateIndex++;
	return [states[localIndex], setState]; // Kembalikan nilai langsung, bukan fungsi
}
