import { render } from '@testing-library/react';
import { Input } from './input'

describe('Input', () => {
    test('should render', () => {
        const { getByTestId } = render(<Input />);

        expect(getByTestId('input')).toBeInTheDocument();
    })
})