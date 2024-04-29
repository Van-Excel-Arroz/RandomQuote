import React, { useState, useEffect } from 'react';
import './App.css';

const RANDOM_QUOTE_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random';

export default function App() {
	const [quote, setQuote] = useState({
		text: '',
		author: '',
	});

	const [isLoading, setIsLoading] = useState(true);

	const fetchQuote = async () => {
		const response = await fetch(RANDOM_QUOTE_URL);
		const data = await response.json();
		setQuote(data.quote);
		setIsLoading(false);
	};

	useEffect(() => {
		fetchQuote();
	}, []);

	return (
		<div className="RandomQuote">
			<button onClick={fetchQuote}>Get Quote Using handler</button>
			{isLoading && <p className="loading">Loading...</p>}
			<p className="content">{quote.text}</p>
			<p className="author">{quote.author}</p>
		</div>
	);
}
