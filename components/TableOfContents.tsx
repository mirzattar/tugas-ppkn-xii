import { signal } from "@preact/signals";
import {
	useEffect,
	useRef,
	useState
} from "preact/hooks";

import './TableOfContents.css'
import { isMobile,
	isTOCAside } from "global";

interface TableOfContentsProps {
	aside?: boolean
}

export const activeId = signal<string>('');

export default function TableOfContents(props: TableOfContentsProps) {
	const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);

	const tocRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = tocRef.current?.parentElement;

		if (!container) return;

		const elems = container.querySelectorAll('h2, h3, h4') as NodeListOf<HTMLHeadingElement>;
		const headingData: typeof headings = [];

		elems.forEach((el, i) => {
			if (!el.id) {
				el.id = el.innerText.toLocaleLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
				if (!el.id) el.id = `h-${i}`;
			}

			headingData.push({
				id: el.id,
				text: el.innerText,
				level: Number(el.tagName.substring(1))
			});
		});

		setHeadings(headingData);

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) activeId.value = entry.target.id;
			})
		}, { rootMargin: '-10% 0px -80% 0px' });

		elems.forEach(el => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	// if (headings.length === 0) return null

	return (
		<nav ref={tocRef} id="toc" class={isTOCAside.value ? 'toc-aside' : 'toc-inline'}>
			{
				!isMobile.value
					? <button onClick={() => isTOCAside.value = !isTOCAside.value}>{isTOCAside.value ? '>' : '<'}</button>
					: false
			}
			<ul>
				{
					headings.map(heading => (
						<li key={heading.id} class={`toc-lvl-${heading.level}`}>
							<a
								href={`#${heading.id}`}
								class={activeId.value === heading.id ? 'toc-active-lvl' : ''}
								onClick={(ev) => {
									ev.preventDefault();
									document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
									window.history.pushState({},'', `#${heading.id}`)
								}}
							>
								{heading.text}
							</a>
						</li>
					))
				}
			</ul>
		</nav>
	)
}
