import React, { useState } from 'react';

function AddWord({ onAddWord }) {
    const [word, setWord] = useState('');

    const handleChange = (event) => {
        const input = event.target.value;
        const lettersOnly = input.replace(/[^a-zA-Z]/g, '');
        setWord(lettersOnly);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddWord(word);
        setWord('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    value={word}
                    onChange={handleChange}
                    placeholder="Type the added word..."
                />
                <button type="submit" className="btn btn-success">
                    Add Word
                </button>
            </form>
        </div>
    );
}

export default AddWord;