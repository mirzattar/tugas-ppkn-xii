import './Footer.css'
import type { JSX } from 'preact';

export default function Footer(): JSX.Element {
	return (
		<footer>
			<section class='footer-text'>
				Ini footer.
				<p>Aplikasi pembelajaran PPKn full offline.</p>
			</section>
			<hr />
			<section class='footer-credits'>
				<p>Copyright 2026. Dibuat dengan keyboard, laptop, dan Bun.</p>
				<p>Untuk Bu Indah yang indah</p>
			</section>
		</footer>
	)
}
