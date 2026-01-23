import Tentang from 'routes/Tentang';
import Primary from 'pages/Primary';
// import NotFound from 'routes/404';
import Materi from 'routes/Materi';
import Home from 'routes/Home';

import { useSignalEffect } from '@preact/signals';
import { Route, Switch } from 'wouter-preact';
import { render } from 'preact';

import {
	currentRoute,
	currentTitle,
	isDarkMode,
	isMobile,
	isTOCAside,
	Routes
} from 'global';

console.log("Helo");

function App() {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (ev) => isDarkMode.value = ev.matches);
	isMobile.value = window.matchMedia('(max-width: 768px)').matches;

	useSignalEffect(() => {
		if (isDarkMode.value) {
			document.body.classList.add('theme-dark');
			document.body.classList.remove('theme-light');
		} else {
			document.body.classList.add('theme-light');
			document.body.classList.remove('theme-dark');
		}
	});

	useSignalEffect(() => {
		document.title = currentTitle.value;
	});

	useSignalEffect(() => {
		if (currentRoute.value !== Routes.Materi) isTOCAside.value = false
	});

	return (
		<Primary>
			<Switch>
				<Route path={Routes.Home} component={Home} />
				<Route path={Routes.Materi} component={Materi} />
				<Route path={Routes.Tentang} component={Tentang} />
				<Route>{Home}</Route>
			</Switch>
		</Primary>
	)
}

render(<App />, document.body);
