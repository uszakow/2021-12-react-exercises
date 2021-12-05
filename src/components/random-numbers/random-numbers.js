import React, { useState } from 'react';
import './random-numbers.scss';

const RandomNumbers = () => {
    const [oddNumbers, setOddNumbers] = useState();
    const [evenNumbers, setEvenNumbers] = useState();

    const sortEvenOddNumbers = () => {
        const randomNumbers = createRandomNumbers(20);

        const odd = [];
        const even = [];
        randomNumbers.forEach((num) => {
            num % 2 === 0 ? even.push(num) : odd.push(num);
        });

        odd.sort((num1, num2) => num1 - num2);
        even.sort((num1, num2) => num1 - num2);
        setOddNumbers([...odd]);
        setEvenNumbers([...even]);
    };

    const createRandomNumbers = (length, min = 1, max = 100) => {
        const res = [];
        for (let i = 0; i < length; i++) {
            const randomNumber = Math.floor(Math.random() * max) + min;
            res.push(randomNumber);
        }
        return res;
    };

    const column = (arr) =>
        arr.map((item, index) => {
            return (
                <div key={index} className="item">
                    {item}
                </div>
            );
        });

    return (
        <React.Fragment>
            <h1>Exercises</h1>
            <h2>I. Przeglądarka</h2>
            <p className="description">
                Zadanie polega na napisaniu skryptu w JavaScript, który po kliknięciu w przycisk wygeneruje 20 losowych
                liczb całkowitych z zakresu od 1 do 100 i umieści je w dwóch kolumnach. W jednej kolumnie mają znaleźć
                się tylko liczby parzyste, a w drugiej nieparzyste. Dodatkowo obie kolumny muszą być posortowane
                rosnąco.
            </p>

            <button className="button" onClick={sortEvenOddNumbers}>
                Generate numbers
            </button>

            {oddNumbers && evenNumbers && (
                <div className="random-numbers-table">
                    <div className="column">
                        <div className="header">Odd numbers</div>
                        {column(oddNumbers)}
                    </div>
                    <div className="column">
                        <div className="header">Even numbers</div>
                        {column(evenNumbers)}
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default RandomNumbers;
