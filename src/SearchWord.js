import React, { useState } from 'react';

function SearchWord({ words }) {
    const [searchWord, setSearchWord] = useState('');
    const [searchResult, setSearchResult] = useState('');

    const handleChange = (event) => {
        const input = event.target.value;
        const lettersOnly = input.replace(/[^a-zA-Z]/g, '');
        setSearchWord(lettersOnly);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const count = words.filter((word) => word === searchWord).length;
        const searchResult =
        count > 0
            ? `The word "${searchWord}" appears ${count} time(s) in the dictionary`
            : `The word "${searchWord}" does not exist in the dictionary`;
        setSearchResult(searchResult);
        setSearchWord('');
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
                value={searchWord}
                onChange={handleChange}
                placeholder="Type the searched word..."
            />
            <button type="submit" className="btn btn-primary">
                Search Word
            </button>
        </form>
        <p>{searchResult}</p>
        </div>
    );
}

export default SearchWord;