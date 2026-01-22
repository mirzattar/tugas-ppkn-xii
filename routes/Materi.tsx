import { currentRoute, currentTitle, Routes } from "global";

import './Materi.css';
// @ts-expect-error
import Pancasila3 from '../public/images/Pancasila_Sila_3.svg';

import TOC from 'components/TableOfContents';
import { MateriData } from 'global';

export default function Materi() {
	currentRoute.value = Routes.Materi;
	currentTitle.value = `PPKn - Tentang`;

	return (
		<>
			<h1>Prinsip Gotong-Royong dalam Praktik Hidup Sehari-hari</h1>
			<TOC aside />
			<picture>
				<img src={Pancasila3} alt="Sila ke-3 Pancasila" class={'float-right'} width={'200px'} />
			</picture>
			<p>{MateriData.sections.intro.content}</p>
			<h2>{MateriData.sections.jenis_gotong_royong.heading}</h2>
			<p>{MateriData.sections.jenis_gotong_royong.content[0]}</p>
			<dl>
				<dt>{MateriData.sections.jenis_gotong_royong.content[1]}</dt>
				<dd>{MateriData.sections.jenis_gotong_royong.content[2]}</dd>
				<dt>{MateriData.sections.jenis_gotong_royong.content[3]}</dt>
				<dd>{MateriData.sections.jenis_gotong_royong.content[4]}</dd>
			</dl>
			<h2>{MateriData.sections.contoh_gotong_royong.heading}</h2>
			<p>{MateriData.sections.contoh_gotong_royong.content[0]}</p>
			<h3>{MateriData.sections.contoh_gotong_royong.content[1]}</h3>
			<p>{MateriData.sections.contoh_gotong_royong.content[2]}</p>
			<ol>
				<li>{MateriData.sections.contoh_gotong_royong.content[3]}</li>
				<li>{MateriData.sections.contoh_gotong_royong.content[4]}</li>
				<li>{MateriData.sections.contoh_gotong_royong.content[5]}</li>
			</ol>
			<h3>{MateriData.sections.contoh_gotong_royong.content[6]}</h3>
			<p>{MateriData.sections.contoh_gotong_royong.content[7]}</p>
			<ol>
				<li>{MateriData.sections.contoh_gotong_royong.content[8]}</li>
				<li>{MateriData.sections.contoh_gotong_royong.content[9]}</li>
				<li>{MateriData.sections.contoh_gotong_royong.content[10]}</li>
				<li>{MateriData.sections.contoh_gotong_royong.content[11]}</li>
				<li>{MateriData.sections.contoh_gotong_royong.content[12]}</li>
			</ol>
			<h3>{MateriData.sections.contoh_gotong_royong.content[13]}</h3>
			<p>{MateriData.sections.contoh_gotong_royong.content[14]}</p>
			<ol>
				<li>{MateriData.sections.contoh_gotong_royong.content[15]}</li>
				<li>{MateriData.sections.contoh_gotong_royong.content[16]}</li>
				<li>{MateriData.sections.contoh_gotong_royong.content[17]}</li>
				<li>{MateriData.sections.contoh_gotong_royong.content[18]}</li>
			</ol>
			<h2>{MateriData.sections.manfaat_gotong_royong.heading}</h2>
			<p>{MateriData.sections.manfaat_gotong_royong.content[0]}</p>
			<ol>
				<li>{MateriData.sections.manfaat_gotong_royong.content[1]}</li>
				<li>{MateriData.sections.manfaat_gotong_royong.content[2]}</li>
				<li>{MateriData.sections.manfaat_gotong_royong.content[3]}</li>
				<li>{MateriData.sections.manfaat_gotong_royong.content[4]}</li>
				<li>{MateriData.sections.manfaat_gotong_royong.content[5]}</li>
				<li>{MateriData.sections.manfaat_gotong_royong.content[6]}</li>
				<li>{MateriData.sections.manfaat_gotong_royong.content[7]}</li>
			</ol>
			<h2>{MateriData.sections.nilai_nilai_gotong_royong.heading}</h2>
			<p>{MateriData.sections.nilai_nilai_gotong_royong.content[0]}</p>
			<ol>
				<li>{MateriData.sections.nilai_nilai_gotong_royong.content[1]}</li>
				<li>{MateriData.sections.nilai_nilai_gotong_royong.content[2]}</li>
				<li>{MateriData.sections.nilai_nilai_gotong_royong.content[3]}</li>
				<li>{MateriData.sections.nilai_nilai_gotong_royong.content[4]}</li>
				<li>{MateriData.sections.nilai_nilai_gotong_royong.content[5]}</li>
				<li>{MateriData.sections.nilai_nilai_gotong_royong.content[6]}</li>
			</ol>
		</>
	)
}
