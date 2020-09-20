import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header/Header';

describe('Header', () => {
    it('renders default launch text', () => {
        render(<Header />)
        const launchText = screen.getByText('SpaceX Launch Programs');
        expect(launchText).toBeInTheDocument();
    })
});