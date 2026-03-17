import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './common.css'
import { Base64 } from "js-base64";
import {BookDisplay} from "./components/BookDisplay.tsx";
import {PlayerQuote} from "./components/PlayerQuote.tsx";

function init() {
	const books = document.getElementsByClassName('minecraft-book');
	
	for (const element of books) {
		if (element instanceof HTMLElement)
			initBook(element);
	}
	
	const quotes = document.getElementsByClassName('player-quote');
	
	for (const element of quotes) {
		if (element instanceof HTMLElement)
			initQuote(element);
	}
}

function initBook(element: HTMLElement) {
	const author = element.dataset.author || "Unknown Author";
	const scale = Number(element.dataset.scale) || 2;
	const title = Base64.decode(element.dataset.title || "VW50aXRsZWQ="); // in base 64 because of character escapes
	const pages = Base64.decode(element.dataset.pages || "WyJObyBUZXh0IiwgIlBhZ2UgMiJd"); // in base 64 because of character escapes
	
	
	createRoot(element).render(
		<StrictMode>
			<BookDisplay title={title} author={author} pages={JSON.parse(pages)} scale={scale} />
		</StrictMode>,
	);
}

function initQuote(element: HTMLElement) {
	const uuid = element.dataset.uuid || "1f61bbf9-a919-4b91-9f36-d082f7bfbf31";
	const name = element.dataset.name || "Sek";
	const title = element.dataset.title || "Cool guy.";
	const quote = element.dataset.quote || `"He was number one."`;
	
	
	createRoot(element).render(
		<StrictMode>
			<PlayerQuote uuid={uuid} name={name} title={title} quote={quote} />
		</StrictMode>,
	);
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', init);
} else {
	init();
}
