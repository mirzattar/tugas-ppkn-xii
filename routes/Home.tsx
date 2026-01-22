import { Link } from "wouter-preact";
import { currentRoute, currentTitle, Routes } from "global";

export default function Home() {
	currentRoute.value = Routes.Home;
	currentTitle.value = `PPKn - Home`;

	return (
		<>
			<h1>Home</h1>
			<p>Lihat <Link to={Routes.Materi}>materi</Link>.</p>
		</>
	)
}
