import { currentRoute, currentTitle, Routes } from "global";

import './Tentang.css'

export default function Tentang() {
	currentRoute.value = Routes.Tentang;
	currentTitle.value = `PPKn - Tentang`;

	return (
		<>
			<h1>Halo</h1>
			<p>Ini adalah tugas PPKN untuk bu Indah.</p>
			<p>Dibuat menggunakan Bun sebagai build step, <code>preact</code>, <code>preact-wouter</code>, dan <code>@preact/signals</code> untuk UI</p>
			<p>Dibuat oleh:</p>
			<dl>
				<dt>Muhammad Nouval Ghalib</dt>
				<dd>Material</dd>
				<dt>Mirza Attar Fauzie</dt>
				<dd>Programming</dd>
			</dl>
		</>
	)
}
