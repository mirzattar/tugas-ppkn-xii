import { signal } from '@preact/signals';
import { Link } from 'wouter-preact';

import './Topbar.css'
import { currentRoute, Routes } from 'global';

export const isScrollingUp = signal(true);

export default function Navbar() {
	let lastScrollY = window.scrollY;
	let ticking = false;

	const updateNav = () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY <= 0) {
			isScrollingUp.value = true;
			lastScrollY = currentScrollY;
			ticking = false;
			return;
		}

		if (currentScrollY > lastScrollY) {
			// console.log('scroll down');
			isScrollingUp.value = false;
		} else {
			// console.log('scroll up');
			isScrollingUp.value = true;
		}

		lastScrollY = currentScrollY;
		ticking = false;
	};

	window.addEventListener('scroll', () => {
		if (!ticking) {
			window.requestAnimationFrame(updateNav);
			ticking = true;
		}
	}, { passive: true })

	return (
		<nav class={isScrollingUp.value ? 'scroll-shown' : 'scroll-hidden'}>
			<div className="nav-logo">Tugas PPKn</div>

			<ul>
				<li>
					<Link
						class={(currentRoute.value === Routes.Home) ? 'current-route' : ''}
						to={Routes.Home}>Home</Link>
				</li>
				<li>
					<Link
						class={(currentRoute.value === Routes.Materi) ? 'current-route' : ''}
						to={Routes.Materi}>Materi</Link>
				</li>
				<li>
					<Link
						class={(currentRoute.value === Routes.Tentang) ? 'current-route' : ''}
						to={Routes.Tentang}>Tentang</Link>
				</li>
			</ul>
		</nav>
	)
}
