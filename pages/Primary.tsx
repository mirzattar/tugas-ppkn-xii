import type { ComponentChildren } from "preact";

import Topbar from 'components/Topbar';
import Footer from "components/Footer";

import "./Primary.css";
import { isTOCAside } from "global";

interface PrimaryProps {
	children: ComponentChildren
}

export default function Primary(params: PrimaryProps) {
	return (
		<>
			<Topbar />
			<main class={isTOCAside.value ? 'toc-compressed' : ''}>
				{params.children}
			</main>
			<Footer />
		</>
	)
}
