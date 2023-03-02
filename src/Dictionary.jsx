import React, { useState } from 'react';
import AddWord from './AddWord';
import SearchWord from './SearchWord';

function Dictionary() {
    const [words, setWords] = useState([]);

    const handleAddWord = (newWord) => {
        setWords([...words, newWord]);
    };

    return (
        <div>
            <h1>Dictionary</h1>
            <hr />
            <h4>Add a new word:</h4>
            <AddWord onAddWord={handleAddWord} />
            <hr />
            <h4>Search for a word:</h4>
            <SearchWord words={words} />
            <hr />
            <h4>Here are your added words:</h4>
            <ul>
                {words.map((word, index) => (
                    <p key={index}>{word}</p>
                ))}
            </ul>
        </div>
    );
}

export default Dictionary;