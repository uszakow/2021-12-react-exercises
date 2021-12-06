import React, { useEffect, useState } from 'react';
import './library.scss';

const Library = () => {
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [priority, setPriority] = useState();
    const [categories, setCategories] = useState([]);

    const [memoryBooks, setMemoryBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = () => {
        const booksArr = [];
        for (const [key, value] of Object.entries(localStorage)) {
            if (key.includes('book-')) {
                const book = JSON.parse(value);
                booksArr.push(book);
            }
        }
        setMemoryBooks(booksArr);
    };

    const addBook = (e) => {
        e.preventDefault();

        const book = {
            title,
            author,
            priority,
            categories,
        };

        localStorage.setItem(`book-${title}`, JSON.stringify(book));
        loadBooks();

        e.target.reset();
    };

    const removeBook = (key) => {
        localStorage.removeItem(key);
        loadBooks();
    };

    const handleCategories = (e) => {
        if (e.target.selectedOptions) {
            const res = Array.from(e.target.selectedOptions, (option) => option.value);
            setCategories(res);
        }
    };

    const row = (book) => {
        return (
            <React.Fragment key={book.title}>
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.priority}</div>
                {book.categories && <div>{book.categories.join(', ')}</div>}
                <div>
                    <button className="button" onClick={() => removeBook(`book-${book.title}`)}>
                        Usunąć
                    </button>
                </div>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <h2>II. Formularze</h2>
            <div className="description">
                <div>
                    Twoim zadaniem jest napisać własną bibliotekę książek z wykorzystaniem HTML, CSS oraz JavaScript, w
                    której znajdzie się formularz przyjmujący następujące pola:
                </div>
                <ol style={{ listStyleType: 'lower-alpha' }}>
                    <li>Tytuł książki (co najmniej 1 znak)</li>
                    <li>Autor książki (co najmniej 3 znaki)</li>
                    <li>Priorytet przeczytania (liczby od 1 do 5)</li>
                    <li>Listę z kategoriami (3 kategorie do wyboru)</li>
                    <li>Przycisk umożliwiający wysyłanie</li>
                </ol>
                <div>
                    Po wysłaniu formularza strona nie może się przeładować. Jednocześnie wyświetl nowo dodaną książkę w
                    tabeli i wyczyść formularz.
                </div>
                <div>Kryteria akceptacji:</div>
                <ul>
                    <li>
                        Walidacja dla pól formularza. W przypadku kiedy jakieś pole nie przechodzi walidacji, książka
                        nie może zostać dodana.
                    </li>
                    <li>Użytkownik ma możliwość dodania kolejnej książki do tabeli.</li>
                    <li>
                        Cała tabela zapisuje się w localstorage (przy ponownym otworzeniu przeglądarki zostaje
                        załadowana ponownie i wyświetlona z takim samym stanem jak była przy zamknięciu).
                    </li>
                </ul>
            </div>

            <form className="book-form" name="library" onSubmit={addBook}>
                <label htmlFor="bookTitle">Tytuł książki (co najmniej 1 znak)</label>
                <input
                    type="text"
                    name="bookTitle"
                    id="bookTitle"
                    minLength="1"
                    title="co najmniej 1 znak"
                    required
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />

                <label htmlFor="bookAuthor">Autor książki (co najmniej 3 znaki)</label>
                <input
                    type="text"
                    name="bookAuthor"
                    id="bookAuthor"
                    minLength="3"
                    title="co najmniej 3 znaki"
                    required
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                />

                <label htmlFor="bookPriority">Priorytet przeczytania (liczby od 1 do 5)</label>
                <input
                    type="number"
                    name="bookPriority"
                    id="bookPriority"
                    min="1"
                    max="5"
                    title="liczby od 1 do 5"
                    required
                    onChange={(e) => {
                        setPriority(e.target.value);
                    }}
                />

                <div>Wybierz kategorie:</div>
                <select size="3" multiple={true} onChange={handleCategories}>
                    <option value="textbooks">Podręczniki</option>
                    <option value="fiction">Literatura piękna</option>
                    <option value="journalism">Publicystyka</option>
                </select>

                <button type="submit" className="button">
                    Dodać książkę
                </button>
            </form>

            <div className="library-table">
                <div>Title</div>
                <div>Author</div>
                <div>Priority</div>
                <div>Categories</div>
                <div></div>
                {memoryBooks.map((item) => {
                    return row(item);
                })}
            </div>
        </React.Fragment>
    );
};

export default Library;
