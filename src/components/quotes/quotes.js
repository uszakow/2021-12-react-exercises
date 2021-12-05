import React, { useEffect, useState } from 'react';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        loadQuote();
    }, []);

    const loadQuote = async () => {
        try {
            const resp = await fetch(
                'https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json'
            );
            const data = await resp.json();

            const randomNum = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomNum];

            setQuotes((prevQuotes) => [...prevQuotes, randomQuote]);
        } catch (e) {
            console.error(e);
        }
    };

    const removeQuote = () => {
        if (quotes.length > 1) {
            const newQuotes = [...quotes];
            newQuotes.pop();
            setQuotes(newQuotes);
        }
    };

    return (
        <React.Fragment>
            <h2>III. React</h2>
            <p className="description">
                Przygotowanie aplikacji, która będzie pobierała cytaty z API, która będzie wyświetlała losowy cytat:
                <a href="https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json">
                    link
                </a>
                . Dodatkowo stwórz przycisk który umożliwi wylosowanie następnego cytatu oraz przycisk, który pozwoli na
                powrót do poprzedniego cytatu.
            </p>

            <button className="button" onClick={loadQuote}>
                Następny cytat
            </button>
            {quotes.length > 1 && (
                <button className="button" onClick={removeQuote}>
                    Poprzedni cytat
                </button>
            )}

            {quotes.length > 0 && <div>"{quotes[quotes.length - 1].quote}"</div>}
            {quotes.length > 0 && <div>{quotes[quotes.length - 1].author}</div>}
        </React.Fragment>
    );
};

export default Quotes;
