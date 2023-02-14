import React from 'react';
import { render, fireEvent, waitFor, getByRole, getByTestId } from '@testing-library/react';
import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
    it('renders the component', () => {
        const { getByPlaceholderText } = render(<Autocomplete />);
        const input = getByPlaceholderText('Type the word here');
        expect(input).toBeInTheDocument();
    });

    it('updates the input value', async () => {
        const { getByPlaceholderText } = render(<Autocomplete />);
        const input = getByPlaceholderText('Type the word here');

        fireEvent.change(input, { target: { value: 'foo' } });
        expect((input as HTMLInputElement).value).toBe('foo');

    });

    it('shows the datalist when the user types one letter', async () => {
        const { getByPlaceholderText, queryByRole, getByTestId } = render(<Autocomplete />);
        const input = getByPlaceholderText('Type the word here');
        
        // check if the datalist is not present initially
        expect(queryByRole('listbox')).toBeNull();

        fireEvent.change(input, { target: { value: 'f' } });
        await waitFor(() => {
            const datalist = getByTestId('suggestions-datalist');
            expect(datalist).toBeTruthy();
        });
    });
});