import { signal } from "@preact/signals";

import * as MateriJSON from 'content/Materi.json' with { type: 'json' }

export const MateriData = Object.freeze(MateriJSON);

export enum Routes {
	Home = "/",
	Materi = "/materi",
	Tentang = "/tentang"
}

export const isDarkMode = signal(window.matchMedia('(prefers-color-scheme: dark)').matches);
export const currentRoute = signal<Routes>(Routes.Home);
export const currentTitle = signal<`PPKn - ${string}`>(`PPKn - `);
export const isTOCAside = signal<boolean>(false);
export const isMobile = signal<boolean>(false);
