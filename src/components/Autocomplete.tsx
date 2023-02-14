import React, { useState } from 'react';

const apiUrl = 'http://localhost:8000/api';

export default function Autocomplete() {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    
    const getData = async (endpoint: string) => {
        const response = await fetch(endpoint)
        const data = await response.json()
        return data
      }

      const handleInputChange = async (event: any) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        if (!newValue) {
            setSuggestions([]);
            return
        }
        const fullUrl = `${apiUrl}/autocomplete?q=${newValue}`;
        const response = await getData(fullUrl)
        setSuggestions(response)
        return
     }

    return (
        <div>
            <h1>Autocomplete</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                list="suggestions"
                autoFocus
                placeholder='Type the word here'
            />
            <datalist id="suggestions" data-testid="suggestions-datalist">
                {suggestions.map((suggestion) => (
                    <option value={suggestion} key={suggestion} />
                ))}
            </datalist>
        </div>
    );
}